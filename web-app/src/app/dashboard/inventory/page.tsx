import React from "react";
import {
    Search,
    Filter,
    Plus,
    ArrowUpDown,
    AlertTriangle,
    History
} from "lucide-react";

export default function InventoryPage() {
    const inventory = [
        { name: "Classic Tour Tee", sku: "TSH-001", size: "L", trailer: 142, lobby: 45, concourse: 20, status: "Healthy" },
        { name: "Neon Nights Hoodie", sku: "HDD-024", size: "M", trailer: 32, lobby: 5, concourse: 12, status: "Low Stock" },
        { name: "Signed Vinyl LP", sku: "MED-009", size: "OS", trailer: 8, lobby: 2, concourse: 4, status: "Critical" },
        { name: "Logo Sticker Pack", sku: "ACC-012", size: "OS", trailer: 450, lobby: 120, concourse: 85, status: "Healthy" },
        { name: "Premium Snapback", sku: "HAT-005", size: "OS", trailer: 88, lobby: 14, concourse: 25, status: "Healthy" },
        { name: "Poster (Holographic)", sku: "PRT-015", size: "OS", trailer: 24, lobby: 8, concourse: 2, status: "Low Stock" },
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Inventory Control</h1>
                    <p className="text-white/40 text-sm mt-1">Manage stock across all stands and transport trailers.</p>
                </div>
                <div className="flex gap-4">
                    <button className="glass flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold border-white/10 hover:border-white/30 transition-all">
                        <History size={16} />
                        Transfer History
                    </button>
                    <button className="bg-primary hover:bg-primary/80 text-white flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all">
                        <Plus size={16} />
                        Add Product
                    </button>
                </div>
            </div>

            {/* Inventory Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96 group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search by product, SKU, or stand..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    <select className="bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-xs font-bold focus:outline-none">
                        <option>All Categories</option>
                        <option>Apparel</option>
                        <option>Music</option>
                        <option>Accessories</option>
                    </select>
                    <select className="bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-xs font-bold focus:outline-none">
                        <option>Stock Status: All</option>
                        <option className="text-red-500">Critical</option>
                        <option className="text-yellow-500">Low Stock</option>
                        <option className="text-green-500">Healthy</option>
                    </select>
                    <button className="glass px-4 py-2 border-white/10 text-xs font-bold">
                        <Filter size={16} />
                    </button>
                </div>
            </div>

            {/* Data Table */}
            <div className="glass overflow-hidden border-white/10 rounded-2xl">
                <div className="overflow-x-auto overflow-y-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white/5 text-[10px] uppercase tracking-[0.2em] font-black text-white/60">
                                <th className="px-6 py-4">Product Details <ArrowUpDown size={12} className="inline ml-1" /></th>
                                <th className="px-6 py-4">SKU</th>
                                <th className="px-6 py-4 text-center">Trailer</th>
                                <th className="px-6 py-4 text-center">Main Lobby</th>
                                <th className="px-6 py-4 text-center">Concourse</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            {inventory.map((item, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-xl">
                                                {item.name.includes("Tee") ? "👕" : item.name.includes("Hoodie") ? "🧥" : item.name.includes("Vinyl") ? "💿" : "📦"}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold">{item.name}</div>
                                                <div className="text-[10px] text-white/40">Size: {item.size}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <code className="text-[10px] bg-white/5 px-2 py-1 rounded text-white/60 uppercase">{item.sku}</code>
                                    </td>
                                    <td className="px-6 py-4 text-center font-mono text-sm">{item.trailer}</td>
                                    <td className="px-6 py-4 text-center font-mono text-sm">{item.lobby}</td>
                                    <td className="px-6 py-4 text-center font-mono text-sm">{item.concourse}</td>
                                    <td className="px-6 py-4">
                                        <span className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider ${item.status === "Critical" ? "text-red-500" : item.status === "Low Stock" ? "text-yellow-500" : "text-green-500"
                                            }`}>
                                            {item.status !== "Healthy" && <AlertTriangle size={12} />}
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-xs font-bold text-accent hover:underline decoration-accent/30 underline-offset-4 decoration-2">
                                            Transfer Stock
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Low Stock Alerts Banner */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
                <div className="bg-red-500/20 p-2 rounded-lg text-red-500">
                    <AlertTriangle size={20} />
                </div>
                <div className="flex-1">
                    <div className="text-sm font-bold text-red-500">Low Stock Alert: Signed Vinyl LP</div>
                    <div className="text-[11px] text-red-500/70">Total inventory across all location is below the 10-unit threshold. Immediate restock advised.</div>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-colors">
                    Order Restock
                </button>
            </div>
        </div>
    );
}
