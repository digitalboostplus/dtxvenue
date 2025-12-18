import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-8 flex flex-col items-center text-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight animate-fade-in">
          ELEVATE YOUR <br />
          <span className="gradient-text">LIVE EXPERIENCE</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          The all-in-one commerce platform for tours, festivals, and venues.
          Real-time inventory, seamless settlements, and a voice-powered concierge.
        </p>
        <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button className="bg-secondary hover:bg-secondary/80 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105">
            Book a Demo
          </button>
          <Link href="/events" className="glass px-8 py-3 rounded-full font-bold border border-white/10 hover:border-white/30 transition-all text-center">
            Explore Events
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Real-Time Inventory",
              desc: "Track stock across every stand and trailer in real-time. Never miss a sale due to a stockout.",
              icon: "📦",
              color: "primary"
            },
            {
              title: "Digital Settlements",
              desc: "Automated nightly settlements between artists and venues. No more spreadsheets or disputes.",
              icon: "💰",
              color: "secondary"
            },
            {
              title: "AI Voice Concierge",
              desc: "Personalized event recommendations and FAQ handling powered by advanced AI voice technology.",
              icon: "🎙️",
              color: "accent"
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="glass p-8 hover:!border-primary/50 transition-all duration-500 group cursor-default"
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live Preview / Stats section */}
      <section className="py-20 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">Designed for the <span className="text-primary">Rush</span>.</h2>
            <p className="text-white/60 text-lg mb-8">
              AtVenu inspiration meets modern technology. Our system is built to handle the highest volume
              sales cycles—from the 15-minute intermission to the post-show surge.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-ping"></div>
                <span className="text-sm font-medium">125,000+ Events Powered</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">99.9% Uptime in Offline Mode</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="glass aspect-video w-full rounded-2xl p-4 flex items-center justify-center relative overflow-hidden border-2 border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              <div className="text-center relative z-10">
                <div className="text-5xl font-black mb-2">$2B+</div>
                <div className="text-xs text-secondary font-bold uppercase tracking-widest">Transactions Processed</div>
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
