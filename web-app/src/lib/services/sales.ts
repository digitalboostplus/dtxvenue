import {
    collection,
    doc,
    writeBatch,
    Timestamp,
    increment
} from "firebase/firestore";
import { db } from "../firebase/config";
import { Transaction, TransactionItem } from "../firebase/schema";

const ORG_ID = "default_org"; // TODO: get from auth context

/**
 * Process a complete POS transaction atomically.
 * 1. Creates a Transaction record.
 * 2. Decrements inventory for each item.
 * 3. Updates Event revenue metrics.
 */
export async function processTransaction(
    eventId: string,
    locationId: string,
    userId: string,
    items: TransactionItem[],
    paymentMethod: "card" | "cash" | "rfid",
    orgId: string = ORG_ID
) {
    const batch = writeBatch(db);
    const now = Timestamp.now();

    // Calculate totals
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.0825; // 8.25% fixed for now
    const total = subtotal + tax;

    // 1. Create Transaction Doc Reference
    const txCollectionRef = collection(db, `organizations/${orgId}/events/${eventId}/transactions`);
    const newTxRef = doc(txCollectionRef); // Auto-ID

    const transactionData: Transaction = {
        id: newTxRef.id,
        organizationId: orgId,
        eventId,
        locationId,
        userId,
        timestamp: now,
        items,
        subtotal,
        tax,
        total,
        paymentMethod,
        status: "completed"
    };

    batch.set(newTxRef, transactionData);

    // 2. Decrement Inventory for each item
    for (const item of items) {
        const productRef = doc(db, `organizations/${orgId}/inventory/${item.productId}`);
        batch.update(productRef, {
            [`stockByLocation.${locationId}`]: increment(-item.quantity)
        });
    }

    // 3. Update Event Metrics
    const eventRef = doc(db, `organizations/${orgId}/events/${eventId}`);
    batch.update(eventRef, {
        "metrics.totalRevenue": increment(total),
        "metrics.totalTransactions": increment(1),
        // metrics.attendance handled by scan-ins, not POS
    });

    // Commit all changes
    await batch.commit();
    return newTxRef.id;
}
