import React from 'react';
import { Terminal, Database, Cpu, Settings, GitBranch, Search, ChevronRight } from 'lucide-react';

export default function ArtificialIntelligencePageV4() {
    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-100 pb-24">

            {/* 
                HERO SECTION
                Style: Engineering Schematic / Blueprint
                Clean lines, monospace fonts, high contrast
            */}
            <section className="relative pt-32 pb-24 border-b border-slate-200">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-6 text-xs font-mono text-slate-500 tracking-wider">
                                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                                SYSTEM_STATUS: ONLINE
                                <span className="text-slate-300">|</span>
                                V.4.0.0
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
                                INDUSTRIAL<br />
                                <span className="text-slate-400">INTELLIGENCE</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-xl leading-relaxed mb-10">
                                Deterministic outcomes from probabilistic data.
                                Precision control for the modern factory floor.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="group flex items-center justify-between px-6 py-4 bg-slate-900 text-white min-w-[200px] hover:bg-blue-600 transition-colors">
                                    <span className="font-mono text-sm">INITIALIZE_DEMO</span>
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="group flex items-center justify-between px-6 py-4 border border-slate-200 hover:border-slate-900 min-w-[200px] transition-colors">
                                    <span className="font-mono text-sm text-slate-600 group-hover:text-slate-900">READ_DOCS</span>
                                </button>
                            </div>
                        </div>

                        {/* Abstract Technical Visualization */}
                        <div className="hidden md:block w-[400px] h-[400px] border border-slate-200 bg-slate-50 relative p-8 font-mono text-xs">
                            <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-slate-400" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-slate-400" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-slate-400" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-slate-400" />

                            <div className="space-y-4 text-slate-400">
                                <div className="flex justify-between border-b border-slate-200 pb-2">
                                    <span>METRIC</span>
                                    <span>VALUE</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>QUALITY_SCORE</span>
                                    <span className="text-blue-600">99.98%</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>PREDICTION_CONFIDENCE</span>
                                    <span className="text-blue-600">HIGH</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>LATENCY</span>
                                    <span className="text-blue-600">12ms</span>
                                </div>

                                <div className="pt-8 border-t border-slate-200 mt-8">
                                    <p className="mb-2">&gt; analyzing_stream...</p>
                                    <p className="mb-2">&gt; anomaly_detected: false</p>
                                    <p className="text-blue-600 animate-pulse">&gt; optimizing_parameters...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
                FEATURES SECTION
                Style: Technical Specs Grid
            */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-6xl">

                    <div className="mb-16 pb-4 border-b border-slate-200 flex justify-between items-end">
                        <h2 className="text-3xl font-bold tracking-tight">CORE CAPABILITIES</h2>
                        <span className="font-mono text-xs text-slate-400">MODULES_LOCKED</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
                        {/* FEATURE 1 */}
                        <div className="bg-white p-10 hover:bg-slate-50 transition-colors group">
                            <div className="w-12 h-12 border border-slate-200 flex items-center justify-center mb-8 bg-slate-50 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors">
                                <Database className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-mono">01. PREDICTIVE QUALITY</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Continuous signal monitoring and anomaly detection using isolated forest algorithms.
                                Prevents defects before physical manifestation.
                            </p>
                            <ul className="space-y-2 font-mono text-xs text-slate-500">
                                <li className="flex items-center gap-2">
                                    <span className="w-1 h-1 bg-blue-600" />
                                    REAL_TIME_INFERENCE
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1 h-1 bg-blue-600" />
                                    ROOT_CAUSE_ANALYSIS
                                </li>
                            </ul>
                        </div>

                        {/* FEATURE 2 */}
                        <div className="bg-white p-10 hover:bg-slate-50 transition-colors group">
                            <div className="w-12 h-12 border border-slate-200 flex items-center justify-center mb-8 bg-slate-50 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors">
                                <GitBranch className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-mono">02. PLANNING ENGINE</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Multi-objective constraint solver for production scheduling.
                                Optimizes against energy, throughput, and OEE targets simultaneously.
                            </p>
                            <ul className="space-y-2 font-mono text-xs text-slate-500">
                                <li className="flex items-center gap-2">
                                    <span className="w-1 h-1 bg-blue-600" />
                                    MONTE_CARLO_SIMULATION
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1 h-1 bg-blue-600" />
                                    DYNAMIC_RESCHEDULING
                                </li>
                            </ul>
                        </div>

                        {/* FEATURE 3 */}
                        <div className="bg-white p-10 hover:bg-slate-50 transition-colors group">
                            <div className="w-12 h-12 border border-slate-200 flex items-center justify-center mb-8 bg-slate-50 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors">
                                <Search className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-mono">03. DATA QUERYING</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Natural Language to SQL interface for unstructured industrial data mining.
                                Semantic search across operational logs and maintenance records.
                            </p>
                            <ul className="space-y-2 font-mono text-xs text-slate-500">
                                <li className="flex items-center gap-2">
                                    <span className="w-1 h-1 bg-blue-600" />
                                    SEMANTIC_SEARCH
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1 h-1 bg-blue-600" />
                                    AUTO_SUMMARIZATION
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
                Technical Footer Strip
            */}
            <section className="bg-slate-50 border-y border-slate-200 py-12">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-xs text-slate-500">
                        <div className="flex gap-8">
                            <span>COMPLIANCE: SOC2_TYPE_II</span>
                            <span>GDPR: COMPLIANT</span>
                            <span>ENCRYPTION: AES_256</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                            ALL_SYSTEMS_OPERATIONAL
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
