import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function MerchPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-8 flex flex-col items-center text-center">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight animate-fade-in uppercase">
                    Maximize Your <br />
                    <span className="gradient-text">Merch Revenue</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    The industry-leading merchandise solution for live events.
                    Real-time tracking, automated settlements, and seamless logistical management.
                </p>
                <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <button className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 neon-text">
                        Request Demo
                    </button>
                    <button className="glass px-8 py-3 rounded-full font-bold border border-white/10 hover:border-white/30 transition-all text-center">
                        View Features
                    </button>
                </div>
            </section>

            {/* Merch Lifecycle Sections */}
            <section className="py-20 px-8 max-w-7xl mx-auto space-y-32">

                {/* Pre-Event */}
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Stage 1: Preparation</span>
                        <h2 className="text-4xl font-bold mb-6">Master Your <span className="text-primary">Advance</span>.</h2>
                        <p className="text-white/60 text-lg mb-8">
                            Create events, manage tax rates, and set up deal points across your entire tour in minutes.
                            Our centralized hub gives you total control over warehouse and trailer inventory before the first fan arrives.
                        </p>
                        <ul className="space-y-4 text-white/70">
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                Centralized Inventory Management
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                Automated Tour Item Advancing
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                POS Staff & Register Assignments
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="glass aspect-video w-full rounded-2xl p-8 border-2 border-primary/20 flex flex-col justify-center">
                            <div className="h-2 w-24 bg-primary/40 rounded-full mb-4"></div>
                            <div className="h-2 w-48 bg-white/10 rounded-full mb-4"></div>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="h-20 glass border-white/5 bg-white/5 rounded-xl"></div>
                                <div className="h-20 glass border-white/5 bg-white/5 rounded-xl"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* During Event */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                    <div className="flex-1">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Stage 2: Execution</span>
                        <h2 className="text-4xl font-bold mb-6">Real-Time <span className="text-secondary">Intelligence</span>.</h2>
                        <p className="text-white/60 text-lg mb-8">
                            Monitor sales by location and product line as they happens. Our platform tracks every transfer,
                            add, and return mid-show, ensuring your inventory is always accurate.
                        </p>
                        <ul className="space-y-4 text-white/70">
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                Live Sales Dashboards
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                Global Inventory Tracking
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                High-Velocity Transaction Processing
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="glass aspect-video w-full rounded-2xl p-8 border-2 border-secondary/20 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-secondary/10 to-transparent"></div>
                            <div className="text-center">
                                <div className="text-6xl font-black text-secondary mb-2">$84,200</div>
                                <div className="text-xs uppercase tracking-widest opacity-50 font-bold">Live Sales Today</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Post-Event */}
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Stage 3: Settlement</span>
                        <h2 className="text-4xl font-bold mb-6">Instant <span className="text-accent">Settlements</span>.</h2>
                        <p className="text-white/60 text-lg mb-8">
                            No more manual spreadsheets or disputes. At the end of the night, generate automated
                            settlement reports for artists and venues with one click.
                        </p>
                        <ul className="space-y-4 text-white/70">
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                                Multi-Party Settlement Reports
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                                Integrated Cash Reconciliation
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                                Fast Funds Transfer (2 Business Days)
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="glass aspect-video w-full rounded-2xl p-8 border-2 border-accent/20">
                            <div className="flex justify-between items-center mb-6">
                                <div className="font-bold">Settlement Report</div>
                                <div className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-bold uppercase">Success</div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm py-2 border-b border-white/5">
                                    <span className="opacity-50">Gross Sales</span>
                                    <span>$125,430.00</span>
                                </div>
                                <div className="flex justify-between text-sm py-2 border-b border-white/5">
                                    <span className="opacity-50">Venue Cut</span>
                                    <span>$12,543.00</span>
                                </div>
                                <div className="flex justify-between text-sm py-2 font-bold text-accent">
                                    <span>Artist Net</span>
                                    <span>$112,887.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Footer */}
            <footer className="py-12 px-8 border-t border-white/10 text-center text-white/40 text-sm">
                <p>© 2025 DTX Venue Platform. All rights reserved.</p>
            </footer>
        </div>
    );
}
