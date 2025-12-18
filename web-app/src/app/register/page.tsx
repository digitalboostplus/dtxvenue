import Navbar from "@/components/Navbar";

export default function RegisterPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-8 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight animate-fade-in uppercase">
                    The DTX <br />
                    <span className="gradient-text">Pro Register</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Hardware and software working in perfect harmony. Built for the world&apos;s
                    most demanding venues and tours.
                </p>
                <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <button className="bg-accent hover:bg-accent/80 text-black px-8 py-3 rounded-full font-bold transition-all hover:scale-105 neon-text shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                        Request Loaner Kit
                    </button>
                    <button className="glass px-8 py-3 rounded-full font-bold border border-white/10 hover:border-white/30 transition-all text-center">
                        View Specs
                    </button>
                </div>
            </section>

            {/* Hardware Display */}
            <section className="py-20 px-8 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="glass rounded-[40px] p-2 border-white/5 bg-gradient-to-b from-white/10 to-transparent">
                        <div className="glass rounded-[38px] p-12 flex flex-col items-center">
                            <div className="w-full max-w-4xl aspect-[21/9] bg-gradient-to-br from-zinc-800 to-black rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.1),transparent)] group-hover:bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.2),transparent)] transition-all duration-700"></div>
                                <div className="text-center z-10">
                                    <div className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4">DTX-R1 Enterprise</div>
                                    <h2 className="text-4xl font-bold">Military-Grade Durability.</h2>
                                    <p className="text-white/40 text-sm mt-2">Ruggedized design for the festival dust and stadium spills.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing & Payments */}
            <section className="py-20 px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Payment Types */}
                    <div className="md:col-span-1 space-y-8">
                        <h3 className="text-3xl font-bold">Accept <br /><span className="text-accent text-4xl">Everything.</span></h3>
                        <p className="text-white/50">Our integrated processing supports every modern payment method out of the box.</p>
                        <div className="grid grid-cols-3 gap-4 opacity-70">
                            {["💳", "⌚", "📱", "📻", "💸", "📊"].map((icon, i) => (
                                <div key={i} className="glass p-4 text-center text-2xl">{icon}</div>
                            ))}
                        </div>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li className="flex gap-2">✅ Apple Pay & Google Pay</li>
                            <li className="flex gap-2">✅ RFID / Contactless</li>
                            <li className="flex gap-2">✅ Dip & Swip Major Cards</li>
                            <li className="flex gap-2">✅ Offline Mode Support</li>
                        </ul>
                    </div>

                    {/* Pricing Card */}
                    <div className="md:col-span-2">
                        <div className="glass p-12 border-accent/20 bg-accent/5 h-full flex flex-col justify-center">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">Transparent Pricing</h4>
                                    <p className="text-white/40 text-sm">No hidden fees. No complicated tiers.</p>
                                </div>
                                <div className="bg-accent/20 text-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Enterprise</div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="p-8 glass bg-black/40 border-white/5">
                                    <div className="text-xs text-white/40 uppercase font-black tracking-tighter mb-2">Card Present</div>
                                    <div className="text-4xl font-black mb-1">2.59%</div>
                                    <div className="text-xs text-accent font-bold">+ $0.10 Per Transaction</div>
                                </div>
                                <div className="p-8 glass bg-black/40 border-white/5">
                                    <div className="text-xs text-white/40 uppercase font-black tracking-tighter mb-2">International</div>
                                    <div className="text-4xl font-black mb-1">3.49%</div>
                                    <div className="text-xs text-accent font-bold">+ $0.20 Per Transaction</div>
                                </div>
                            </div>
                            <div className="mt-12 flex gap-4">
                                <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-all">Get Custom Proposal</button>
                                <button className="text-white/60 text-sm font-bold flex items-center gap-2 hover:text-white transition-all">Request Hardware Demo ↗</button>
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
