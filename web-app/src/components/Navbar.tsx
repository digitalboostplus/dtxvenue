"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Events", href: "/events" },
        { name: "Merch", href: "/merch" },
        { name: "F&B", href: "/food-beverage" },
        { name: "Register", href: "/register" },
        { name: "Touring Acts", href: "/touring-acts" },
        { name: "AI Concierge", href: "/concierge" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="fixed top-0 w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/10">
            <Link href="/" className="text-2xl font-bold gradient-text tracking-tighter z-50">
                DTX VENUE
            </Link>

            {/* Desktop Navigation */}
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

            <div className="hidden md:block">
                <Link
                    href="/dashboard"
                    className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 neon-text"
                >
                    Get Started
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden text-white z-50 p-2"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Navigation Overlay */}
            <div
                className={`fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`text-2xl font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary font-bold" : "text-white/70"
                            }`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="/dashboard"
                    className="mt-4 bg-primary hover:bg-primary/80 text-white px-10 py-3 rounded-full text-lg font-bold transition-all hover:scale-105 neon-text"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Get Started
                </Link>
            </div>
        </nav>
    );
}
