"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Package,
    CreditCard,
    ShoppingCart,
    Settings,
    Menu,
    X,
    LogOut,
    Bell
} from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const pathname = usePathname();

    const navItems = [
        { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
        { name: "Inventory", href: "/dashboard/inventory", icon: Package },
        { name: "Settlements", href: "/dashboard/settlement", icon: CreditCard },
        { name: "Register (POS)", href: "/dashboard/pos", icon: ShoppingCart },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white flex">
            {/* Sidebar */}
            <aside
                className={`${isSidebarOpen ? "w-64" : "w-20"
                    } transition-all duration-300 glass border-y-0 border-l-0 rounded-none z-50 flex flex-col`}
            >
                <div className="p-6 flex items-center justify-between">
                    {isSidebarOpen && (
                        <span className="text-xl font-bold gradient-text tracking-tighter">DTX COMMAND</span>
                    )}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                        ? "bg-primary text-white shadow-[0_0_15px_rgba(255,0,122,0.3)]"
                                        : "hover:bg-white/5 text-white/60 hover:text-white"
                                    }`}
                            >
                                <item.icon size={20} className={isActive ? "text-white" : "group-hover:text-primary transition-colors"} />
                                {isSidebarOpen && <span className="font-medium">{item.name}</span>}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <Link
                        href="/"
                        className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 text-white/40 hover:text-white transition-all"
                    >
                        <LogOut size={20} />
                        {isSidebarOpen && <span className="font-medium">Exit Console</span>}
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col relative overflow-hidden">
                {/* Header */}
                <header className="h-16 glass border-x-0 border-t-0 rounded-none flex items-center justify-between px-8 bg-black/20">
                    <div className="text-sm text-white/40 font-medium">
                        Project: <span className="text-white">Texas Tour 2025</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="relative p-2 hover:bg-white/5 rounded-full transition-colors">
                            <Bell size={18} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full ring-2 ring-[#050505]"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-6 border-l border-white/10">
                            <div className="text-right hidden sm:block">
                                <div className="text-xs font-bold">Brian Admin</div>
                                <div className="text-[10px] text-white/40 uppercase tracking-widest leading-none">Tour Manager</div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary p-[1px]">
                                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-xs font-bold">BA</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto p-8 relative">
                    {children}
                </div>
            </main>
        </div>
    );
}
