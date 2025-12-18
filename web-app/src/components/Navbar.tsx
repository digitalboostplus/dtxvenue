"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Events", href: "/events" },
        { name: "Merch", href: "/merch" },
        { name: "F&B", href: "/food-beverage" },
        { name: "Register", href: "/register" },
        { name: "Touring Acts", href: "/touring-acts" },
        { name: "AI Concierge", href: "/concierge" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 glass border-none rounded-none py-4 px-8 flex justify-between items-center bg-black/40 backdrop-blur-md border-b !border-white/10">
            <Link href="/" className="text-2xl font-bold gradient-text tracking-tighter">
                DTX VENUE
            </Link>

            <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`transition-colors hover:text-primary ${pathname === link.href ? "text-primary font-bold" : ""
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <Link
                href="/dashboard"
                className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 neon-text"
            >
                Get Started
            </Link>
        </nav>
    );
}
