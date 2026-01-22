import React from 'react';
import { Sparkles, Brain, Zap } from 'lucide-react';
import { CallToActionSection } from '@/components/CallToActionSection';

export default function ArtificialIntelligencePageV2() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

            {/* 
                HERO SECTION
                Modern gradient header with floating elements
            */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

                <div className="relative max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        Powered by AI
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-purple-600 bg-clip-text text-transparent leading-tight">
                        Artificial Intelligence
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-8">
                        Total Visibility with Industrial AI
                    </h2>

                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        At RAILES, we believe that achieving zero defects starts with a reliable foundation of real-time data.
                        Our MES solution enables full vertical integration, from planning to execution, providing complete shop
                        floor visibility and the predictive capability to address issues before they occur.
                    </p>
                </div>
            </section>

            {/* 
                FEATURE 1: PREDICTIVE QUALITY
                Card-based layout with icon, gradient background
            */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row gap-8 mb-10">
                            {/* Icon */}
                            <div className="shrink-0">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            {/* Title & Description */}
                            <div className="flex-1">
                                <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                    Predictive Quality
                                </h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Integrating real-time data collection, machine learning, and manufacturing domain expertise,
                                    our predictive quality system identifies deviations before they affect production.
                                </p>
                            </div>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Monitors machine signals continuously
                                </p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Detects anomalies in real time
                                </p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Issues early alerts to operators and quality teams
                                </p>
                            </div>
                        </div>

                        {/* Bottom Note */}
                        <div className="mt-8 flex items-center gap-2 text-blue-700 font-medium">
                            <Zap className="w-5 h-5" />
                            <p className="text-sm">
                                The system delivers continuous insights, automatic root cause detection, and real-time alerts, all within a single platform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
                FEATURE 2: MULTI-OBJECTIVE PLANNING
                Alternating layout with gradient
            */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row gap-8 mb-10">
                            {/* Icon */}
                            <div className="shrink-0">
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                        <line x1="9" y1="4" x2="9" y2="10" />
                                        <line x1="15" y1="4" x2="15" y2="10" />
                                    </svg>
                                </div>
                            </div>

                            {/* Title & Description */}
                            <div className="flex-1">
                                <h3 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
                                    Multi-Objective Planning
                                </h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    RAILES MES includes an AI-powered planning engine that considers multiple constraints simultaneously
                                    such as delivery deadlines, energy consumption, and machine availability.
                                </p>
                            </div>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Balances competing objectives without manual trade-offs
                                </p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Supports planning decisions with simulation-based recommendations
                                </p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Optimizes production for performance and sustainability
                                </p>
                            </div>
                        </div>

                        {/* Bottom Note */}
                        <div className="mt-8 flex items-center gap-2 text-purple-700 font-medium">
                            <Brain className="w-5 h-5" />
                            <p className="text-sm">
                                The system delivers continuous insights, automatic root cause detection, and real-time alerts, all within a single platform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
                FEATURE 3: GENAI FOR INDUSTRIAL DATA SEARCH
                Final feature with teal/cyan gradient
            */}
            <section className="py-16 px-4 pb-24">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl border border-cyan-100">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row gap-8 mb-10">
                            {/* Icon */}
                            <div className="shrink-0">
                                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="11" cy="11" r="8" />
                                        <path d="m21 21-4.35-4.35" />
                                    </svg>
                                </div>
                            </div>

                            {/* Title & Description */}
                            <div className="flex-1">
                                <h3 className="text-3xl md:text-4xl font-bold text-cyan-900 mb-4">
                                    GenAI for Industrial Data Search
                                </h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Industrial data can be complex and fragmented. Our GenAI tool simplifies access to insights
                                    by enabling natural language queries across your data infrastructure.
                                </p>
                            </div>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Search production logs, quality reports, and machine data using plain language
                                </p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Identify trends and issues instantly
                                </p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Make informed decisions faster, without requiring data science expertise
                                </p>
                            </div>
                        </div>

                        {/* Bottom Note */}
                        <div className="mt-8 flex items-center gap-2 text-cyan-700 font-medium">
                            <Sparkles className="w-5 h-5" />
                            <p className="text-sm">
                                Industrial data made accessible, searchable, and actionable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
                SECTION: TRANSFORM CTA
            */}
            <section className="py-20 bg-white overflow-visible">
                <div className="container mx-auto px-4">
                    <div className="relative">
                        {/* Blue Card Content */}
                        <div className="bg-[linear-gradient(-60deg,#004eab,#038efd)] rounded-[2.5rem] p-10 md:p-16 relative overflow-visible">
                            {/* Background Splashes */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                            <div className="relative z-10 md:w-2/3 text-white">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                                    Why Choose RAILES for AI-Powered Manufacturing?
                                </h2>
                                <h3 className="text-xl font-semibold mb-6">
                                    Because it transforms your data into actionable intelligence that drives real results.
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Predictive quality that prevents defects before they happen.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">AI-powered planning that optimizes for multiple objectives simultaneously.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Natural language search that makes complex data instantly accessible.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Real-time insights that enable faster, smarter decision-making.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Scalable AI solutions designed for industrial environments.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Overlapping Image - Positioned Absolute Bottom Right */}
                        <div className="hidden absolute bottom-0 right-0 translate-y-1/2 md:translate-x-[15%] w-[350px] lg:w-[450px] z-20">
                            <img
                                src="/images/Grafico_AI.png"
                                alt="AI Analytics Dashboard"
                                width={600}
                                height={400}
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 
                SECTION: HOW IT WORKS
            */}
            <section className="py-24 bg-[#F9FAFB] relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            How It Works
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            To achieve these goals, pharmaceutical companies are turning to RAILES MES,
                            a modular manufacturing execution system designed for the specific needs of regulated environments.
                            <br /><br />
                            <strong>Deploying AI with RAILES in 3 Steps:</strong>
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 max-w-6xl mx-auto">

                        {/* Step 1 */}
                        <div className="relative w-full md:flex-1">
                            <div className="bg-white rounded-[3rem] p-10 text-center shadow-lg border border-slate-100 h-full relative z-10">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    Connect<br />your data
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Integrate inputs from machines, sensors, MES, ERP, and operators.
                                </p>
                                {/* Dot */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            </div>
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-[85%] left-1/2 w-full h-[2px] bg-slate-200 -z-0"></div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative w-full md:flex-1">
                            <div className="bg-white rounded-[3rem] p-10 text-center shadow-lg border border-slate-100 h-full relative z-10">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    Activate<br />your AI modules
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Choose from Predictive Quality, AI Planning, or GenAI Insights.
                                </p>
                                {/* Dot */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            </div>
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-[85%] left-1/2 w-full h-[2px] bg-slate-200 -z-0"></div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative w-full md:flex-1">
                            <div className="bg-white rounded-[3rem] p-10 text-center shadow-lg border border-slate-100 h-full relative z-10">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    Begin<br />optimization
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Detect issues in real time, improve production schedules, and extract actionable insights automatically.
                                </p>
                                {/* Dot */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
                SECTION: FINAL CTA (Gradient Button)
            */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
                        Ready to see it in action?
                    </h2>

                    <a href="/demo" className="inline-block w-full max-w-4xl mx-auto group">
                        <div className="bg-gradient-to-r from-[#0091ff] to-[#ff4d9e] rounded-3xl p-6 md:p-8 shadow-xl transform transition-transform group-hover:scale-[1.02]">
                            <span className="block text-white text-xl md:text-3xl font-medium">
                                Reach out to us for a live demo and discover
                            </span>
                            <span className="block text-white text-xl md:text-3xl font-medium mt-2">
                                how our AI can change your manufacturing operation.
                            </span>
                        </div>
                    </a>
                </div>
            </section>

            {/* FOOTER CTA */}
            <CallToActionSection
                data={{
                    badgeText: "Ready for Smart Manufacturing?",
                    title: "Drive Intelligence with Railes AI",
                    highlightedTitle: "Now",
                    titleSuffix: "",
                    description: "Join leading manufacturers using Railes AI to predict quality, optimize planning, and automate insights.",
                    primaryButtonText: "Request a Demo",
                    primaryButtonLink: "/demo",
                    secondaryButtonText: "Contact Sales",
                    secondaryButtonLink: "/contact"
                }}
            />

        </main>
    );
}
