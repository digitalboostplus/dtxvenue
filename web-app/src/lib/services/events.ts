import {
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
    orderBy,
    Timestamp
} from "firebase/firestore";
import { db } from "../firebase/config";
import { Event } from "../firebase/schema";

const ORG_ID = "default_org";

const getEventsCollection = (orgId: string = ORG_ID) =>
    collection(db, `organizations/${orgId}/events`);

/**
 * Fetch active upcoming events
 */
export async function fetchUpcomingEvents(orgId: string = ORG_ID): Promise<Event[]> {
    const q = query(
        getEventsCollection(orgId),
        where("date", ">=", Timestamp.now()),
        orderBy("date", "asc")
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    } as Event));
}

/**
 * Fetch specific event details
 */
export async function fetchEventById(eventId: string, orgId: string = ORG_ID): Promise<Event | null> {
    const docRef = doc(db, `organizations/${orgId}/events/${eventId}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as Event;
    }
    return null;
}

/**
 * Get event revenue stats (real-time listener could be used here instead)
 */
export async function getEventStats(eventId: string, orgId: string = ORG_ID) {
    const event = await fetchEventById(eventId, orgId);
    return event?.metrics || { totalRevenue: 0, totalTransactions: 0 };
}
