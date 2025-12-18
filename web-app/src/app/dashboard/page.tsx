import React from "react";
import {
    TrendingUp,
    Users,
    Package,
    DollarSign,
    ArrowUpRight,
    ArrowDownRight,
    Activity
} from "lucide-react";

export default function DashboardOverview() {
    const stats = [
        { name: "Total Revenue", value: "$124,592", change: "+12.5%", trendingUp: true, icon: DollarSign },
        { name: "Total Transactions", value: "3,142", change: "+8.2%", trendingUp: true, icon: Activity },
        { name: "Inventory Units", value: "12,403", change: "-2.4%", trendingUp: false, icon: Package },
        { name: "Staff Online", value: "24", change: "Active Now", icon: Users },
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Command Center</h1>
                    <p className="text-white/40 text-sm mt-1">Live overview of your venue operations.</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-xs font-bold border-none bg-white/5">
                        <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
                        LIVE SYNC ACTIVE
                    </div>
                    <button className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all">
                        Export Report
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="glass p-6 group hover:!border-primary/30 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                                <stat.icon size={20} className="text-white/60 group-hover:text-primary" />
                            </div>
                            {stat.change && (
                                <div className={`flex items-center text-[10px] font-bold px-2 py-1 rounded-full ${stat.trendingUp ? "bg-green-500/10 text-green-500" : stat.trendingUp === false ? "bg-red-500/10 text-red-500" : "bg-white/10 text-white"
                                    }`}>
                                    {stat.trendingUp ? <ArrowUpRight size={10} className="mr-1" /> : stat.trendingUp === false ? <ArrowDownRight size={10} className="mr-1" /> : null}
                                    {stat.change}
                                </div>
                            )}
                        </div>
                        <div className="text-2xl font-black">{stat.value}</div>
                        <div className="text-xs text-white/40 font-medium uppercase tracking-widest mt-1">{stat.name}</div>
                    </div>
                ))}
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sales Chart Placeholder */}
                <div className="lg:col-span-2 glass p-8 min-h-[400px] flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-lg font-bold">Sales Performance</h3>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-bold">24H</button>
                            <button className="px-3 py-1 bg-primary rounded-md text-[10px] font-bold">7D</button>
                            <button className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-bold">1M</button>
                        </div>
                    </div>
                    <div className="flex-1 border-b border-l border-white/10 relative flex items-end gap-2 pb-2">
                        {/* Mock chart bars */}
                        {[40, 60, 45, 90, 65, 80, 50, 70, 85, 45, 60, 75].map((h, i) => (
                            <div
                                key={i}
                                className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm hover:opacity-80 transition-opacity cursor-pointer relative group"
                                style={{ height: `${h}%` }}
                            >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-[8px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    ${(h * 120).toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Live Activity Feed */}
                <div className="glass p-8 flex flex-col">
                    <h3 className="text-lg font-bold mb-6">Recent Sales</h3>
                    <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        {[
                            { item: "Black Logo Hoodie", price: "$65", time: "2m ago", method: "Apple Pay" },
                            { item: "Vinyl LP - Live Set", price: "$45", time: "5m ago", method: "Visa" },
                            { item: "VIP Pass Upgrade", price: "$120", time: "8m ago", method: "Amex" },
                            { item: "Sponsor Tee Bundle", price: "$80", time: "12m ago", method: "Cash" },
                            { item: "Tour Poster (Signed)", price: "$35", time: "15m ago", method: "Visa" },
                        ].map((sale, i) => (
                            <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                <div>
                                    <div className="text-sm font-bold">{sale.item}</div>
                                    <div className="text-[10px] text-white/40">{sale.time} • {sale.method}</div>
                                </div>
                                <div className="text-sm font-black text-primary">{sale.price}</div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full py-3 mt-6 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/5 transition-all">
                        View All Activity
                    </button>
                </div>
            </div>
        </div>
    );
}
