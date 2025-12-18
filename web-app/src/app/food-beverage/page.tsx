import Navbar from "@/components/Navbar";

export default function FoodBeveragePage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-8 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight animate-fade-in uppercase">
                    Revolutionize <br />
                    <span className="gradient-text">Food & Beverage</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    The POS solution built for the rush. Faster service, mobile ordering,
                    and real-time inventory for every concession stand and bar.
                </p>
                <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <button className="bg-secondary hover:bg-secondary/80 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 neon-text">
                        Start Serving
                    </button>
                    <button className="glass px-8 py-3 rounded-full font-bold border border-white/10 hover:border-white/30 transition-all text-center">
                        View Analytics
                    </button>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Mobile Ordering",
                            desc: "Enable fans to order from their seats and skip the line with QR codes and mobile payments.",
                            icon: "📱"
                        },
                        {
                            title: "Inventory Sync",
                            desc: "Track every keg and burger patty in real-time across multiple stock rooms and trailers.",
                            icon: "🍔"
                        },
                        {
                            title: "Menu Updates",
                            desc: "Change prices or items mid-show across all registers instantly via the command center.",
                            icon: "⚡"
                        },
                        {
                            title: "Cash Tracking",
                            desc: "Automated cash reconciliation for every register, reducing errors and theft.",
                            icon: "💸"
                        }
                    ].map((feature, i) => (
                        <div key={i} className="glass p-8 hover:!border-secondary/50 transition-all duration-500">
                            <div className="text-4xl mb-6">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Speed Section */}
            <section className="py-20 px-8 relative overflow-hidden bg-white/[0.02]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 w-full order-2 md:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass p-6 border-secondary/20 aspect-square flex flex-col justify-center items-center text-center">
                                <div className="text-3xl font-black text-secondary">1.2s</div>
                                <div className="text-[10px] uppercase font-bold tracking-widest opacity-50 mt-2">Avg. Transaction</div>
                            </div>
                            <div className="glass p-6 border-primary/20 aspect-square flex flex-col justify-center items-center text-center mt-8">
                                <div className="text-3xl font-black text-primary">25%</div>
                                <div className="text-[10px] uppercase font-bold tracking-widest opacity-50 mt-2">Revenue Boost</div>
                            </div>
                            <div className="glass p-6 border-accent/20 aspect-square flex flex-col justify-center items-center text-center -mt-8">
                                <div className="text-3xl font-black text-accent">99.9%</div>
                                <div className="text-[10px] uppercase font-bold tracking-widest opacity-50 mt-2">Offline Uptime</div>
                            </div>
                            <div className="glass p-6 border-white/10 aspect-square flex flex-col justify-center items-center text-center">
                                <div className="text-3xl font-black">0</div>
                                <div className="text-[10px] uppercase font-bold tracking-widest opacity-50 mt-2">Line Wait Panic</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 order-1 md:order-2">
                        <h2 className="text-4xl font-bold mb-6">Designed for the <span className="text-secondary">Halftime Rush</span>.</h2>
                        <p className="text-white/60 text-lg mb-8 leading-relaxed">
                            When 20,000 fans hit the concourse at once, every second counts. Our F&B system is
                            optimized for high-concurrency environments, ensuring your staff can process
                            orders faster than ever before.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-secondary/20 p-2 rounded-lg">✅</div>
                                <div>
                                    <h4 className="font-bold">Rapid SKU Lookup</h4>
                                    <p className="text-sm text-white/40">Visual menu layout for lightning-fast staff training.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-secondary/20 p-2 rounded-lg">✅</div>
                                <div>
                                    <h4 className="font-bold">Offline Resilience</h4>
                                    <p className="text-sm text-white/40">Process transactions even if the stadium Wi-Fi goes down.</p>
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
