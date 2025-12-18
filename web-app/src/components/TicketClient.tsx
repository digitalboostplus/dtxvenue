"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock, CreditCard, Lock, CheckCircle2 } from "lucide-react";

export default function TicketClient({ id }: { id: string }) {
    const [step, setStep] = useState(1);
    const [ticketCount, setTicketCount] = useState(2);

    // Mock event data
    const event = {
        artist: "The Midnight Echo",
        venue: "Moody Center",
        date: "Oct 24, 2025",
        time: "8:00 PM",
        price: 45
    };

    const total = ticketCount * event.price;
    const fees = ticketCount * 12.50;

    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-lg animate-fade-in">
                <Link href="/events" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 font-bold text-sm">
                    <ArrowLeft size={16} />
                    Back to Events
                </Link>

                <div className="glass overflow-hidden rounded-3xl border border-white/10 relative">
                    {/* Progress Bar */}
                    <div className="h-1 bg-white/5 w-full flex">
                        <div className={`h-full bg-primary transition-all duration-500`} style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}></div>
                    </div>

                    <div className="p-8">
                        {/* Header */}
                        <div className="flex gap-6 mb-8 pb-8 border-b border-white/10">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary shrink-0"></div>
                            <div>
                                <h1 className="text-2xl font-black tracking-tight">{event.artist}</h1>
                                <div className="space-y-1 mt-2 text-sm text-white/60 font-medium">
                                    <div className="flex items-center gap-2"><Calendar size={14} /> {event.date} • {event.time}</div>
                                    <div className="flex items-center gap-2"><MapPin size={14} /> {event.venue}</div>
                                </div>
                            </div>
                        </div>

                        {step === 1 && (
                            <div className="space-y-8 animate-fade-in">
                                <div className="space-y-4">
                                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Select Tickets</label>
                                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <div>
                                            <div className="font-bold">General Admission</div>
                                            <div className="text-primary font-black">${event.price}</div>
                                        </div>
                                        <div className="flex items-center gap-4 bg-black/20 rounded-xl p-1">
                                            <button
                                                onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                                                className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="font-mono font-bold w-4 text-center">{ticketCount}</span>
                                            <button
                                                onClick={() => setTicketCount(ticketCount + 1)}
                                                className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2 pt-4 border-t border-white/5">
                                    <div className="flex justify-between text-sm text-white/40">
                                        <span>Subtotal</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-white/40">
                                        <span>Fees & Taxes</span>
                                        <span>${fees.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-black pt-2 text-white">
                                        <span>Total</span>
                                        <span>${(total + fees).toFixed(2)}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setStep(2)}
                                    className="w-full bg-primary hover:bg-primary/80 text-white py-4 rounded-xl font-bold transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(255,0,122,0.3)]"
                                >
                                    Checkout
                                </button>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6 animate-fade-in">
                                <div className="space-y-4">
                                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Payment Method</label>
                                    <div className="p-4 bg-white/5 rounded-2xl border border-primary/50 flex items-center gap-4 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>
                                        <CreditCard className="text-primary relative z-10" />
                                        <div className="relative z-10">
                                            <div className="font-bold">Apple Pay</div>
                                            <div className="text-xs text-white/40">Brian •••• 4242</div>
                                        </div>
                                        <CheckCircle2 className="ml-auto text-primary relative z-10" size={20} />
                                    </div>
                                </div>

                                <button
                                    onClick={() => setStep(3)}
                                    className="w-full bg-white text-black hover:bg-white/90 py-4 rounded-xl font-bold transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                                >
                                    <Lock size={16} />
                                    Pay ${(total + fees).toFixed(2)}
                                </button>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="text-center py-8 animate-fade-in">
                                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                                    <CheckCircle2 size={40} className="text-black" />
                                </div>
                                <h2 className="text-2xl font-black mb-2">You're Going!</h2>
                                <p className="text-white/60 text-sm mb-8">
                                    Tickets for <strong>The Midnight Echo</strong> have been sent to brian@dtx.com.
                                </p>
                                <div className="flex flex-col gap-3">
                                    <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-bold transition-all">
                                        View Taxes & Receipt
                                    </button>
                                    <Link href="/dashboard" className="w-full text-primary hover:text-white py-2 text-sm font-bold transition-colors">
                                        Return to Dashboard
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="text-center mt-6 flex items-center justify-center gap-2 text-white/20 text-xs font-bold uppercase tracking-widest">
                    <Lock size={12} />
                    Secured by DTX Platform
                </div>
            </div>
        </div>
    );
}
