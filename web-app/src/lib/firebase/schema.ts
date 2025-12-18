import { Timestamp } from "firebase/firestore";

// -- Top Level Organizations -- //
export interface Organization {
    id: string;
    name: string;
    settings: {
        currency: string; // "USD"
        taxRate: number; // 0.0825
        timezone: string; // "America/Chicago"
    };
    createdAt: Timestamp;
}

// -- Events -- //
export interface Event {
    id: string; // "orgId_eventId" or auto-id
    name: string;
    date: Timestamp;
    status: "active" | "settled" | "planned";
    venueId: string;
    artistId: string;
    metrics: {
        totalRevenue: number;
        totalTransactions: number;
        attendance: number;
    };
}

// -- Inventory (Product Catalog) -- //
export interface Product {
    id: string;
    name: string;
    sku: string;
    price: number;
    cost: number;
    category: "Apparel" | "Music" | "Media" | "Misc";
    imageUrl?: string;
    stockByLocation: {
        [locationId: string]: number; // e.g. "trailer-1": 150
    };
    lowStockThreshold: number;
}

// -- Transactions (POS Sales) -- //
export interface TransactionItem {
    productId: string;
    name: string;
    quantity: number;
    price: number; // Unit price at time of sale
}

export interface Transaction {
    id: string;
    organizationId: string;
    eventId: string;
    locationId: string;
    userId: string; // Seller ID
    timestamp: Timestamp;
    items: TransactionItem[];
    subtotal: number;
    tax: number;
    total: number;
    paymentMethod: "card" | "cash" | "rfid";
    status: "completed" | "refunded" | "void";
}

// -- Users & Roles -- //
export interface UserProfile {
    uid: string;
    email: string;
    displayName: string;
    role: "admin" | "manager" | "seller";
    organizationId: string; // Tenant association
    assignedLocations?: string[]; // ["trailer-1"]
}

// -- Leads & Prospects -- //
export interface Lead {
    id: string;
    type: "Merch" | "F&B" | "Register" | "Touring Acts" | "General";
    email: string;
    companyName?: string;
    message?: string;
    source: string; // URL or page name
    status: "new" | "contacted" | "qualified" | "closed";
    createdAt: Timestamp;
}
