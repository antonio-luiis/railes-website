import React from 'react';
import { Check, Calendar, Search } from 'lucide-react';
import { AIFeatureSection } from '@/components/AIFeatureSection';

export default function ArtificialIntelligencePage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-24">

            {/* 
                HEADER SECTION
                "Artificial Intelligence" with Colorful Diamond Icon
            */}
            <section className="text-center px-4 py-16 max-w-4xl mx-auto">
                <div className="flex flex-col items-center justify-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                            Artificial
                        </h1>
                        {/* Colorful Diamond/Gem Icon */}
                        <div className="relative w-14 h-14">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-pink-500 rounded-lg transform rotate-45"></div>
                            <div className="absolute inset-2 bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-300 rounded-md transform rotate-45"></div>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1e40af] -mt-2">
                        Intelligence
                    </h1>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-[#1e40af] mb-6">
                    Total Visibility with Industrial AI
                </h2>

                <div className="border-t border-slate-200 pt-6">
                    <p className="text-sm text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        At RAILES, we believe that achieving zero defects starts with a reliable foundation of real-time data.
                        Our MES solution enables full vertical integration, from planning to execution, providing complete shop
                        floor visibility and the predictive capability to address issues before they occur.
                    </p>
                </div>
            </section>

            {/* 
                SECTION 1: PREDICTIVE QUALITY
                Icon: Checkmark (Blue gradient)
            */}
            <AIFeatureSection
                icon={
                    <svg viewBox="0 0 64 64" className="w-full h-full">
                        <path
                            d="M10 32 L26 48 L54 16"
                            stroke="url(#gradient1)"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#ec4899" />
                            </linearGradient>
                        </defs>
                    </svg>
                }
                title="Predictive Quality"
                description="Integrating real-time data collection, machine learning, and manufacturing domain expertise, our predictive quality system identifies deviations before they affect production."
                cards={[
                    "Monitors machine signals continuously",
                    "Detects anomalies in real time",
                    "Issues early alerts to operators and quality teams"
                ]}
                bottomNote="The system delivers continuous insights, automatic root cause detection, and real-time alerts, all within a single platform."
            />

            {/* 
                SECTION 2: MULTI-OBJECTIVE PLANNING
                Icon: Calendar (Blue/Pink gradient)
            */}
            <AIFeatureSection
                icon={
                    <svg viewBox="0 0 64 64" className="w-full h-full">
                        <rect
                            x="8"
                            y="12"
                            width="48"
                            height="44"
                            rx="4"
                            stroke="url(#gradient2)"
                            strokeWidth="4"
                            fill="none"
                        />
                        <line x1="8" y1="22" x2="56" y2="22" stroke="url(#gradient2)" strokeWidth="4" />
                        <circle cx="20" cy="32" r="2" fill="url(#gradient2)" />
                        <circle cx="32" cy="32" r="2" fill="url(#gradient2)" />
                        <circle cx="44" cy="32" r="2" fill="url(#gradient2)" />
                        <circle cx="20" cy="44" r="2" fill="url(#gradient2)" />
                        <circle cx="32" cy="44" r="2" fill="url(#gradient2)" />
                        <defs>
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#ec4899" />
                            </linearGradient>
                        </defs>
                    </svg>
                }
                title="Multi-Objective Planning"
                description="RAILES MES includes an AI-powered planning engine that considers multiple constraints simultaneously such as delivery deadlines, energy consumption, and machine availability."
                cards={[
                    "Balances competing objectives without manual trade-offs",
                    "Supports planning decisions with simulation-based recommendations",
                    "Optimizes production for performance and sustainability"
                ]}
                bottomNote="The system delivers continuous insights, automatic root cause detection, and real-time alerts, all within a single platform."
            />

            {/* 
                SECTION 3: GENAI FOR INDUSTRIAL DATA SEARCH
                Icon: Magnifying Glass (Blue gradient)
            */}
            <AIFeatureSection
                icon={
                    <svg viewBox="0 0 64 64" className="w-full h-full">
                        <circle
                            cx="26"
                            cy="26"
                            r="16"
                            stroke="url(#gradient3)"
                            strokeWidth="4"
                            fill="none"
                        />
                        <line
                            x1="38"
                            y1="38"
                            x2="54"
                            y2="54"
                            stroke="url(#gradient3)"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                        <defs>
                            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#8b5cf6" />
                            </linearGradient>
                        </defs>
                    </svg>
                }
                title="GenAI for Industrial Data Search"
                description="Industrial data can be complex and fragmented. Our GenAI tool simplifies access to insights by enabling natural language queries across your data infrastructure."
                cards={[
                    "Search production logs, quality reports, and machine data using plain language",
                    "Identify trends and issues instantly",
                    "Make informed decisions faster, without requiring data science expertise"
                ]}
                bottomNote="Industrial data made accessible, searchable, and actionable."
            />

        </main>
    );
}
