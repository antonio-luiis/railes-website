import React from 'react';
import { Sparkles, Brain, Zap, Search, Activity, Cpu, Bot, Network, ArrowRight } from 'lucide-react';

export default function ArtificialIntelligencePageV3() {
    return (
        <main className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">

            {/* 
                HERO SECTION
                "Dark Future" Aesthetic: Deep Navy BG, Glowing Text, Subtle Grid
            */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Background Grid & Glows */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/20 rounded-[100%] blur-[100px] pointer-events-none" />

                <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8 backdrop-blur-sm">
                        <Sparkles className="w-3 h-3" />
                        <span>Next-Gen Industrial Intelligence</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent">
                        INDUSTRIAL <br className="hidden md:block" />
                        INTELLIGENCE
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
                        Achieve zero defects with a self-correcting manufacturing ecosystem.
                        RAILES AI turns your real-time data into <span className="text-blue-400 font-semibold">predictive action</span>.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-10px_rgba(37,99,235,0.7)] hover:-translate-y-1">
                            Deploy AI Engine
                        </button>
                        <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-slate-300 font-semibold rounded-full border border-slate-700 hover:border-slate-600 transition-all backdrop-blur-sm">
                            View Documentation
                        </button>
                    </div>
                </div>
            </section>

            {/* 
                BENTO GRID FEATURES
                High density, glowing borders, dark layout
            */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

                        {/* FEATURE 1: PREDICTIVE QUALITY (Large, spans 2 cols) */}
                        <div className="group relative md:col-span-2 bg-slate-900/50 rounded-[2rem] border border-slate-800 p-10 overflow-hidden hover:border-blue-500/50 transition-colors duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                                        <Activity className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Predictive Quality</h3>
                                    <p className="text-slate-400 text-lg max-w-lg mb-8">
                                        Detect anomalies before they happen. Our models analyze machine signals in real-time to forecast defects with 99.9% accuracy.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {['Signal Monitoring', 'Anomaly Detection', 'Early Alerts', 'Root Cause Analysis'].map((item) => (
                                            <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-end opacity-50 group-hover:opacity-100 transition-opacity">
                                    <ArrowRight className="text-blue-400 w-8 h-8" />
                                </div>
                            </div>
                        </div>

                        {/* FEATURE 2: GENAI SEARCH (Vertical tall card) */}
                        <div className="group relative md:row-span-2 bg-slate-900/50 rounded-[2rem] border border-slate-800 p-10 overflow-hidden hover:border-purple-500/50 transition-colors duration-500 flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />

                            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                                <Search className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Industrial GenAI</h3>
                            <p className="text-slate-400 mb-8 flex-grow">
                                Stop writing SQL queries. Ask your factory data questions in plain English and get instant answers tailored to your context.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/50">
                                    <p className="text-xs text-slate-500 mb-2">Prompt</p>
                                    <p className="text-sm text-slate-200 font-mono">"Show me downtime causes for Line 3 yesterday"</p>
                                </div>
                                <div className="bg-blue-900/20 p-4 rounded-xl border border-blue-500/20">
                                    <p className="text-xs text-blue-400 mb-2">Insight</p>
                                    <p className="text-sm text-blue-100 font-medium">Main cause: Motor Overheating (4 events, 2h 15m total).</p>
                                </div>
                            </div>
                        </div>

                        {/* FEATURE 3: PLANNING ENGINE (Square card) */}
                        <div className="group relative bg-slate-900/50 rounded-[2rem] border border-slate-800 p-10 overflow-hidden hover:border-emerald-500/50 transition-colors duration-500">
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                                <Network className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Multi-Objective Planning</h3>
                            <p className="text-slate-400 text-sm mb-6">
                                Balance delivery deadlines, energy costs, and maintenance windows automatically.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded">Simulation</span>
                                <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded">Optimization</span>
                            </div>
                        </div>

                        {/* FEATURE 4: SELF-CORRECTING (Square card) */}
                        <div className="group relative bg-slate-900/50 rounded-[2rem] border border-slate-800 p-10 overflow-hidden hover:border-orange-500/50 transition-colors duration-500">
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                                <Cpu className="w-6 h-6 text-orange-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Edge Intelligence</h3>
                            <p className="text-slate-400 text-sm mb-6">
                                Process data at the source. Ultra-low latency decision making for high-speed lines.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs font-mono bg-orange-500/10 text-orange-400 px-2 py-1 rounded">&lt;10ms Latency</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
                STATS SECTION 
            */}
            <section className="py-20 border-t border-slate-800/50 bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">99<span className="text-blue-500">%</span></div>
                            <div className="text-slate-500 text-sm uppercase tracking-wider">Defect Detection</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">30<span className="text-purple-500">%</span></div>
                            <div className="text-slate-500 text-sm uppercase tracking-wider">Waste Reduction</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">10<span className="text-emerald-500">x</span></div>
                            <div className="text-slate-500 text-sm uppercase tracking-wider">Faster Insights</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">24<span className="text-orange-500">/7</span></div>
                            <div className="text-slate-500 text-sm uppercase tracking-wider">Autonomous Monitoring</div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
