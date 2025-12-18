import {
    collection,
    doc,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    increment,
    writeBatch
} from "firebase/firestore";
import { db } from "../firebase/config";
import { Product } from "../firebase/schema";

const ORG_ID = "default_org"; // TODO: enhanced context or auth for multi-tenant

// Collection References
const getInventoryCollection = (orgId: string = ORG_ID) =>
    collection(db, `organizations/${orgId}/inventory`);

/**
 * Fetch all inventory items for the organization
 */
export async function fetchInventory(orgId: string = ORG_ID): Promise<Product[]> {
    const querySnapshot = await getDocs(getInventoryCollection(orgId));
    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    } as Product));
}

/**
 * Add a new product to the catalog
 */
export async function addProduct(productData: Omit<Product, "id">, orgId: string = ORG_ID) {
    const docRef = await addDoc(getInventoryCollection(orgId), productData);
    return docRef.id;
}

/**
 * Transfer stock between locations
 * e.g., Warehouse -> Trailer
 */
export async function transferStock(
    productId: string,
    fromLocation: string,
    toLocation: string,
    quantity: number,
    orgId: string = ORG_ID
) {
    const productRef = doc(db, `organizations/${orgId}/inventory/${productId}`);

    // We use dot notation for nested field updates in Firestore
    await updateDoc(productRef, {
        [`stockByLocation.${fromLocation}`]: increment(-quantity),
        [`stockByLocation.${toLocation}`]: increment(quantity)
    });
}

/**
 * Update global product details (price, name, etc)
 */
export async function updateProductDetails(
    productId: string,
    updates: Partial<Product>,
    orgId: string = ORG_ID
) {
    const productRef = doc(db, `organizations/${orgId}/inventory/${productId}`);
    await updateDoc(productRef, updates);
}
