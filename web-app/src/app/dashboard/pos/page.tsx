"use client";

import React, { useState } from "react";
import {
    Search,
    ShoppingCart,
    User,
    CreditCard,
    DollarSign,
    X,
    Plus,
    Minus,
    Zap
} from "lucide-react";

export default function POSPage() {
    const [cart, setCart] = useState<{ name: string, price: number, qty: number }[]>([]);

    const products = [
        { name: "Tour Tee", price: 35, category: "Apparel", emoji: "👕", color: "from-blue-500/20" },
        { name: "Hoodie", price: 65, category: "Apparel", emoji: "🧥", color: "from-purple-500/20" },
        { name: "Vinyl LP", price: 45, category: "Music", emoji: "💿", color: "from-pink-500/20" },
        { name: "Snapback", price: 30, category: "Apparel", emoji: "🧢", color: "from-cyan-500/20" },
        { name: "Poster", price: 20, category: "Media", emoji: "🖼️", color: "from-green-500/20" },
        { name: "Stickers", price: 10, category: "Misc", emoji: "✨", color: "from-orange-500/20" },
        { name: "Tote Bag", price: 15, category: "Misc", emoji: "👜", color: "from-yellow-500/20" },
        { name: "Signed CD", price: 25, category: "Music", emoji: "📀", color: "from-red-500/20" },
    ];

    const addToCart = (product: typeof products[0]) => {
        setCart(prev => {
            const existing = prev.find(item => item.name === product.name);
            if (existing) {
                return prev.map(item => item.name === product.name ? { ...item, qty: item.qty + 1 } : item);
            }
            return [...prev, { name: product.name, price: product.price, qty: 1 }];
        });
    };

    const removeFromCart = (name: string) => {
        setCart(prev => prev.filter(item => item.name !== name));
    };

    const updateQty = (name: string, delta: number) => {
        setCart(prev => prev.map(item => {
            if (item.name === name) {
                const newQty = Math.max(1, item.qty + delta);
                return { ...item, qty: newQty };
            }
            return item;
        }));
    };

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const tax = subtotal * 0.0825;
    const total = subtotal + tax;

    return (
        <div className="h-[calc(100vh-140px)] flex gap-8 animate-fade-in overflow-hidden">
            {/* Product Selection */}
            <div className="flex-1 flex flex-col gap-6 overflow-hidden">
                <div className="flex gap-4 items-center h-12">
                    <div className="relative flex-1 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Search products or scan barcode..."
                            className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all font-medium"
                        />
                    </div>
                    <div className="flex gap-2 h-full">
                        {["All", "Apparel", "Music", "Media"].map(cat => (
                            <button key={cat} className={`px-6 h-full rounded-2xl text-xs font-bold transition-all ${cat === "All" ? "bg-primary shadow-[0_0_15px_rgba(255,0,122,0.3)]" : "glass border-white/10 hover:border-white/30"
                                }`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 grid grid-cols-2 lg:grid-cols-4 gap-4 pb-4 custom-scrollbar">
                    {products.map((product, i) => (
                        <button
                            key={i}
                            onClick={() => addToCart(product)}
                            className="glass p-6 flex flex-col items-center text-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border-white/5 bg-gradient-to-br to-transparent"
                            style={{
                                background: `linear-gradient(135deg, ${product.color.split("-")[1] === "blue" ? "rgba(59,130,246,0.1)" :
                                    product.color.split("-")[1] === "purple" ? "rgba(168,85,247,0.1)" :
                                        product.color.split("-")[1] === "pink" ? "rgba(236,72,153,0.1)" :
                                            product.color.split("-")[1] === "cyan" ? "rgba(6,182,212,0.1)" :
                                                product.color.split("-")[1] === "green" ? "rgba(34,197,94,0.1)" :
                                                    "rgba(255,255,255,0.05)"}, transparent)`
                            }}
                        >
                            <div className="text-5xl drop-shadow-lg">{product.emoji}</div>
                            <div>
                                <div className="font-bold text-sm tracking-tight">{product.name}</div>
                                <div className="text-primary font-black text-lg mt-1">${product.price}</div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Cart / Checkout */}
            <div className="w-[450px] glass flex flex-col overflow-hidden bg-black/40 border-none rounded-[32px] shadow-2xl">
                <div className="p-8 border-b border-white/10 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/20 rounded-xl">
                            <ShoppingCart className="text-primary" size={24} />
                        </div>
                        <h3 className="text-xl font-bold tracking-tight">Current Cart</h3>
                    </div>
                    <div className="text-xs font-bold text-white/40 bg-white/5 px-3 py-1.5 rounded-full">
                        {cart.reduce((a, b) => a + b.qty, 0)} Items
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-white/20 gap-4">
                            <ShoppingCart size={64} strokeWidth={1} />
                            <div className="text-sm font-medium uppercase tracking-widest">Cart is empty</div>
                        </div>
                    ) : (
                        cart.map((item, i) => (
                            <div key={i} className="flex justify-between items-center group animate-fade-in">
                                <div className="flex-1">
                                    <div className="text-sm font-bold flex items-center gap-2">
                                        {item.name}
                                        <button onClick={() => removeFromCart(item.name)} className="text-white/20 hover:text-red-500 transition-colors">
                                            <X size={14} />
                                        </button>
                                    </div>
                                    <div className="text-[10px] text-white/40 mt-1 uppercase tracking-widest font-black">
                                        Unit: ${item.price}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-3 bg-white/5 rounded-xl p-1 border border-white/5">
                                        <button
                                            onClick={() => updateQty(item.name, -1)}
                                            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="text-sm font-mono font-bold w-4 text-center">{item.qty}</span>
                                        <button
                                            onClick={() => updateQty(item.name, 1)}
                                            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                    <div className="text-sm font-black text-right w-16">
                                        ${(item.qty * item.price)}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-8 bg-white/5 border-t border-white/10 space-y-4">
                    <div className="space-y-2">
                        <div className="flex justify-between text-white/40 text-xs font-medium">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-white/40 text-xs font-medium">
                            <span>Sales Tax (8.25%)</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-2xl font-black mt-2 pt-2 border-t border-white/5">
                            <span>Total</span>
                            <span className="text-primary">${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <button className="flex flex-col items-center justify-center gap-2 p-4 glass border-white/10 hover:border-white/30 transition-all group">
                            <DollarSign className="text-green-500 group-hover:scale-110 transition-transform" size={24} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Cash</span>
                        </button>
                        <button className="flex flex-col items-center justify-center gap-2 p-4 glass bg-primary border-none shadow-[0_0_20px_rgba(255,0,122,0.3)] hover:scale-[1.02] transition-all group">
                            <CreditCard className="group-hover:scale-110 transition-transform" size={24} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Card</span>
                        </button>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all active:scale-[0.98]">
                        <Zap className="text-accent fill-accent" size={16} />
                        Instant Checkout (RFID)
                    </button>
                </div>
            </div>
        </div>
    );
}
