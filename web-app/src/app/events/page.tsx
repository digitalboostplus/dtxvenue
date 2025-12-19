import React from "react";
import Link from "next/link";
import { Calendar, MapPin, Clock, Ticket, ArrowRight, Music, Star } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function EventsPage() {
    const events = [
        {
            id: 1,
            artist: "The Midnight Echo",
            tour: "Neon Horizon World Tour",
            date: "Oct 24, 2025",
            venue: "Moody Center",
            city: "Austin, TX",
            time: "8:00 PM",
            status: "On Sale",
            image: "linear-gradient(to right, #4338ca, #3b82f6)",
            price: "$45 - $250"
        },
        {
            id: 2,
            artist: "Desert Pulse",
            tour: "Heatwave Festival Pre-Party",
            date: "Nov 02, 2025",
            venue: "Empire Control Room",
            city: "Austin, TX",
            time: "9:30 PM",
            status: "Selling Fast",
            image: "linear-gradient(to right, #ea580c, #f59e0b)",
            price: "$35"
        },
        {
            id: 3,
            artist: "Cyber Synth Collective",
            tour: "Digital Dreams",
            date: "Nov 15, 2025",
            venue: "ACL Live",
            city: "Austin, TX",
            time: "7:00 PM",
            status: "Sold Out",
            image: "linear-gradient(to right, #ec4899, #8b5cf6)",
            price: "Resale Only"
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <Navbar />

            <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto animate-fade-in">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">UPCOMING <span className="gradient-text">SHOWS</span></h1>
                        <p className="text-xl text-white/40 max-w-xl">
                            Curated live experiences powered by the DTX platform. Secure tickets, pre-order merch, and skip the lines.
                        </p>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <button className="px-6 py-2 glass rounded-full text-xs font-bold border border-primary/50 text-primary">All Events</button>
                        <button className="px-6 py-2 glass rounded-full text-xs font-bold border-white/10 hover:border-white/30 transition-all">Conserts</button>
                        <button className="px-6 py-2 glass rounded-full text-xs font-bold border-white/10 hover:border-white/30 transition-all">Festivals</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {events.map((event) => (
                        <div key={event.id} className="glass p-0 rounded-3xl overflow-hidden group hover:!border-primary/30 transition-all duration-500 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>
                            <div
                                className="absolute inset-0 z-0 opacity-40 group-hover:scale-105 transition-transform duration-700"
                                style={{ background: event.image }}
                            ></div>

                            <div className="relative z-20 p-6 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
                                {/* Date Badge */}
                                <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 w-20 h-20 md:w-24 md:h-24 rounded-2xl shrink-0">
                                    <span className="text-[10px] md:text-xs font-bold uppercase text-white/60">{event.date.split(" ")[0]}</span>
                                    <span className="text-2xl md:text-3xl font-black">{event.date.split(" ")[1].replace(",", "")}</span>
                                </div>

                                {/* Event Info */}
                                <div className="flex-1 w-full">
                                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2 md:mb-3">
                                        <span className="text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/20 uppercase tracking-widest">
                                            {event.tour}
                                        </span>
                                        {event.status === "Selling Fast" && (
                                            <span className="text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full bg-orange-500/20 text-orange-500 border border-orange-500/20 uppercase tracking-widest flex items-center gap-1">
                                                <Star size={10} fill="currentColor" /> Selling Fast
                                            </span>
                                        )}
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 group-hover:text-primary transition-colors">{event.artist}</h2>
                                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm font-medium text-white/60">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={14} className="md:w-4 md:h-4" />
                                            {event.venue} — {event.city}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} className="md:w-4 md:h-4" />
                                            Doors: {event.time}
                                        </div>
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="flex flex-col items-start md:items-end gap-4 md:gap-2 shrink-0 w-full md:w-auto">
                                    <div className="md:text-right">
                                        <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Starting at</div>
                                        <div className="text-xl md:text-2xl font-black">{event.price}</div>
                                    </div>
                                    <Link href={`/events/${event.id}`} className="bg-white text-black hover:bg-white/90 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 w-full md:w-auto">
                                        <Ticket size={18} className="md:w-5 md:h-5" />
                                        {event.status === "Sold Out" ? "Waitlist" : "Get Tickets"}
                                        <ArrowRight size={18} className="md:w-5 md:h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
