import React from "react";
import {
    Download,
    Send,
    CheckCircle2,
    FileCheck,
    Calculator,
    PieChart as PieChartIcon
} from "lucide-react";

export default function SettlementPage() {
    const calculations = [
        { label: "Total Gross Merch Sales", value: "$45,290.00", type: "positive" },
        { label: "Less Combined Sales Tax (8.25%)", value: "-$3,736.43", type: "negative" },
        { label: "Adjusted Gross Sales", value: "$41,553.57", type: "neutral" },
        { label: "Venue Merch Cut (20%)", value: "-$8,310.71", type: "negative" },
        { label: "Credit Card Fees (3.2%)", value: "-$1,449.28", type: "negative" },
        { label: "Net Payable to Artist", value: "$31,793.58", type: "final" },
    ];

    const standBreakdown = [
        { name: "Main Lobby Stand", manager: "Sarah J.", sales: "$18,450", status: "Counted In/Out" },
        { name: "Concourse A (East)", manager: "Mark W.", sales: "$12,120", status: "Counted In/Out" },
        { name: "VIP Lounge Stand", manager: "Alex R.", sales: "$8,320", status: "Counted In/Out" },
        { name: "Trailer (Backstage)", manager: "Dana T.", sales: "$6,400", status: "Counted In/Out" },
    ];

    return (
        <div className="space-y-8 animate-fade-in pb-12">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Show Settlement</h1>
                    <p className="text-white/40 text-sm mt-1">Reconcile nightly performance and finalize artist splits.</p>
                </div>
                <div className="flex gap-4">
                    <button className="glass flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold border-white/10 hover:border-white/30 transition-all">
                        <Download size={16} />
                        Export PDF
                    </button>
                    <button className="bg-primary hover:bg-primary/80 text-white flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold transition-all shadow-lg shadow-primary/20">
                        <FileCheck size={16} />
                        Finalize Show
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Settlement Summary Card */}
                <div className="lg:col-span-2 glass p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
                        <Calculator size={120} />
                    </div>

                    <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                        <FileCheck className="text-primary" size={24} />
                        Final Calculation (Event 204)
                    </h3>

                    <div className="space-y-4">
                        {calculations.map((calc, i) => (
                            <div
                                key={i}
                                className={`flex justify-between items-center py-4 border-b border-white/5 last:border-0 ${calc.type === "final" ? "mt-8 pt-8 border-t !border-white/20" : ""
                                    }`}
                            >
                                <div className={`text-sm ${calc.type === "final" ? "text-xl font-black uppercase tracking-widest" : "text-white/60 font-medium"}`}>
                                    {calc.label}
                                </div>
                                <div className={`font-mono text-lg font-bold ${calc.type === "negative" ? "text-red-500" : calc.type === "final" ? "text-3xl text-primary font-black animate-pulse" : "text-white"
                                    }`}>
                                    {calc.value}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="flex items-center gap-4 mb-4">
                            <PieChartIcon className="text-accent" size={20} />
                            <h4 className="text-sm font-bold uppercase tracking-widest text-white/60">Revenue Allocation</h4>
                        </div>
                        <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden flex">
                            <div className="h-full bg-primary transition-all duration-1000" style={{ width: "70%" }}></div>
                            <div className="h-full bg-secondary transition-all duration-1000" style={{ width: "18%" }}></div>
                            <div className="h-full bg-accent transition-all duration-1000" style={{ width: "8%" }}></div>
                            <div className="h-full bg-white/40 transition-all duration-1000" style={{ width: "4%" }}></div>
                        </div>
                        <div className="flex gap-6 mt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="text-[10px] font-bold text-white/40 uppercase">Artist Share (70%)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                <span className="text-[10px] font-bold text-white/40 uppercase">Venue Share (18%)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-accent"></div>
                                <span className="text-[10px] font-bold text-white/40 uppercase">Tax (8%)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Status and Actions Card */}
                <div className="space-y-8">
                    <div className="glass p-8">
                        <h3 className="text-lg font-bold mb-6">Stand Status</h3>
                        <div className="space-y-4">
                            {standBreakdown.map((stand, i) => (
                                <div key={i} className="group cursor-default">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="text-sm font-bold group-hover:text-primary transition-colors">{stand.name}</div>
                                        <div className="text-xs font-black text-primary">{stand.sales}</div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-[10px] text-white/40">Manager: {stand.manager}</div>
                                        <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-tighter text-green-500">
                                            <CheckCircle2 size={10} />
                                            {stand.status}
                                        </div>
                                    </div>
                                    <div className="mt-3 w-full h-[1px] bg-white/5"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass p-8 bg-gradient-to-br from-primary/5 to-transparent">
                        <h3 className="text-lg font-bold mb-6">Distribution</h3>
                        <p className="text-xs text-white/50 mb-6 leading-relaxed">
                            Once finalized, funds will be distributed to connected accounts. Artist net payable ($31,793.58)
                            will be sent to routing termination **XXXX-1290.
                        </p>
                        <div className="space-y-3">
                            <button className="w-full bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl text-xs font-bold border border-white/10 flex items-center justify-center gap-2 transition-all">
                                <Send size={14} className="text-primary" />
                                Email Settlement Log
                            </button>
                            <button className="w-full bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl text-xs font-bold border border-white/10 flex items-center justify-center gap-2 transition-all">
                                <FileCheck size={14} className="text-secondary" />
                                Verify Cash Counts
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
