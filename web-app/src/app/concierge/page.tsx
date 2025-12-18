"use client";

import React, { useState, useRef, useEffect } from "react";
import { Mic, Send, Bot, Sparkles, X, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function VoiceConciergePage() {
    const [isListening, setIsListening] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
        { role: 'bot', text: "Welcome to DTX Venue. I'm your AI Concierge. Ask me about inventory, settlements, or tonight's show logistics." }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        setMessages(prev => [...prev, { role: 'user', text: inputValue }]);
        setInputValue("");

        // Simulate AI latency
        setTimeout(() => {
            const response = simulateAIResponse(inputValue);
            setMessages(prev => [...prev, { role: 'bot', text: response }]);
        }, 1000);
    };

    const simulateAIResponse = (query: string) => {
        const q = query.toLowerCase();
        if (q.includes("inventory") || q.includes("stock")) return "Total inventory is currently at 12,403 units. Specifically, 'Classic Tour Tees' are running low in the Concourse A stand.";
        if (q.includes("sale") || q.includes("revenue")) return "Total revenue for tonight is currently $124,592. We're trending 12.5% higher than the last show in this venue.";
        if (q.includes("settlement")) return "The artist settlement is preliminary. Net payable is estimated at $31,793.58. Would you like me to email the draft PDF?";
        if (q.includes("wifi") || q.includes("password")) return "The 'Production-Secure' WiFi password is: DtxRox_2025!";
        return "I can help with real-time venue data. Try asking about sales, inventory levels, or settlement status.";
    };

    const toggleListening = () => {
        setIsListening(!isListening);
        if (!isListening) {
            // Simulate voice input
            setTimeout(() => {
                setIsListening(false);
                setInputValue("What is the current revenue?");
            }, 2000);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 pt-24 relative overflow-hidden">
            <Navbar />
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-black to-secondary/10 z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full animate-pulse z-0"></div>

            <div className="w-full max-w-2xl z-10 glass border border-white/10 rounded-3xl overflow-hidden flex flex-col h-[80vh] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                {/* Header */}
                <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5 backdrop-blur-xl">
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full ${isListening ? "bg-red-500 animate-pulse" : "bg-primary"}`}>
                            <Bot size={24} className="text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold tracking-tight">AI Concierge</h1>
                            <div className="flex items-center gap-2 text-xs font-bold text-white/40 uppercase tracking-widest">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Online • Voice Active
                            </div>
                        </div>
                    </div>
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <X size={20} className="text-white/40" />
                    </button>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user'
                                ? 'bg-primary text-white rounded-tr-sm'
                                : 'bg-white/10 text-white border border-white/10 rounded-tl-sm backdrop-blur-md'
                                }`}>
                                <p className="leading-relaxed text-sm">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isListening && (
                        <div className="flex justify-start">
                            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-sm flex items-center gap-2">
                                <div className="flex gap-1 h-4 items-center">
                                    <div className="w-1 bg-primary h-full animate-[music-bar_0.5s_ease-in-out_infinite]"></div>
                                    <div className="w-1 bg-primary h-2/3 animate-[music-bar_0.6s_ease-in-out_infinite]"></div>
                                    <div className="w-1 bg-primary h-1/2 animate-[music-bar_0.4s_ease-in-out_infinite]"></div>
                                    <div className="w-1 bg-primary h-3/4 animate-[music-bar_0.7s_ease-in-out_infinite]"></div>
                                </div>
                                <span className="text-xs font-bold text-white/40 uppercase tracking-wider">Listening...</span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-6 bg-white/5 border-t border-white/10">
                    <div className="relative flex items-center gap-4">
                        <button
                            onClick={toggleListening}
                            className={`p-4 rounded-2xl transition-all ${isListening
                                ? "bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                                : "bg-white/10 hover:bg-white/20"
                                }`}
                        >
                            <Mic size={24} className="text-white" />
                        </button>
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about sales, inventory, or logistics..."
                                className="w-full h-14 bg-black/20 border border-white/10 rounded-2xl pl-6 pr-12 text-sm focus:outline-none focus:border-primary/50 transition-all font-medium placeholder:text-white/20"
                            />
                            <button
                                onClick={handleSend}
                                className="absolute right-2 top-2 p-2.5 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-xl transition-all"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 flex gap-2 justify-center">
                        {["Current Revenue?", "Inventory Status", "Settlement Draft"].map((suggestion, i) => (
                            <button
                                key={i}
                                onClick={() => setInputValue(suggestion)}
                                className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-[10px] font-bold uppercase tracking-wider text-white/60 transition-colors"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
