import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { Lead } from "../firebase/schema";

export const submitLead = async (leadData: Omit<Lead, "id" | "createdAt" | "status">) => {
    try {
        const leadsRef = collection(db, "leads");
        const docRef = await addDoc(leadsRef, {
            ...leadData,
            status: "new",
            createdAt: serverTimestamp(),
        });
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error("Error submitting lead:", error);
        return { success: false, error };
    }
};
