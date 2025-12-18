import Navbar from "@/components/Navbar";

export default function TouringActsPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-8 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full -z-10"></div>
                <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-secondary/20 blur-[100px] rounded-full -z-10 animate-pulse"></div>
                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight animate-fade-in uppercase">
                    Tour Smarter <br />
                    <span className="gradient-text">Earn More</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    The all-in-one inventory and tour management platform.
                    From dive bars to stadiums, we help you keep every dollar you make on the road.
                </p>
                <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <button className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 neon-text">
                        Start Your Tour
                    </button>
                    <button className="glass px-8 py-3 rounded-full font-bold border border-white/10 hover:border-white/30 transition-all text-center">
                        View Pricing
                    </button>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-20 px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Inventory Master",
                            desc: "Track stock from warehouse to trailer to stadium. Real-time updates ensure you never miss a sale.",
                            icon: "📦",
                            accent: "primary"
                        },
                        {
                            title: "Instant Settlement",
                            desc: "Finalize your night in seconds. Automated reports for venues and artists with digital signatures.",
                            icon: "🖋️",
                            accent: "secondary"
                        },
                        {
                            title: "Luminate Reporting",
                            desc: "Automated SoundScan / Luminate reporting. Ensure your sales count toward the charts with zero effort.",
                            icon: "📈",
                            accent: "accent"
                        }
                    ].map((benefit, i) => (
                        <div key={i} className={`glass p-8 group hover:border-${benefit.accent}/50 transition-all duration-500`}>
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                            <p className="text-white/50 leading-relaxed text-sm">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* App Preview Section */}
            <section className="py-20 px-8 relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold mb-6 italic tracking-tighter">Your Tour in the <span className="text-primary italic">Palm of Your Hand</span>.</h2>
                        <p className="text-white/60 text-lg mb-8">
                            The DTX Mobile app works seamlessly across all devices, even in the dark,
                            high-noise environments of a live show. Offline mode ensures your data is
                            safe when the venue Wi-Fi fails.
                        </p>
                        <div className="flex gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-1">iOS</div>
                                <div className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">Native App</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-1">Android</div>
                                <div className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">Native App</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-1">Web</div>
                                <div className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">Desktop HQ</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full max-w-sm">
                        <div className="glass aspect-[9/19] rounded-[3rem] border-8 border-neutral-900 p-4 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-neutral-900 rounded-b-2xl z-20"></div>
                            <div className="h-full w-full bg-black rounded-[2rem] p-6 flex flex-col gap-6">
                                <div className="h-12 w-12 bg-primary/20 rounded-xl flex items-center justify-center text-xl">🏠</div>
                                <div className="space-y-4">
                                    <div className="h-4 w-3/4 bg-white/10 rounded-full"></div>
                                    <div className="h-4 w-1/2 bg-white/10 rounded-full"></div>
                                </div>
                                <div className="mt-auto grid grid-cols-2 gap-4">
                                    <div className="h-20 glass bg-primary/10 border-primary/20 rounded-xl"></div>
                                    <div className="h-20 glass bg-secondary/10 border-secondary/20 rounded-xl"></div>
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
