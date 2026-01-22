import React from 'react';
import { Sparkles, Layers, Activity, Monitor, Zap } from 'lucide-react';
import { CallToActionSection } from '@/components/CallToActionSection';

export default function DigitalTwinPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

            {/* 
                HERO SECTION
                Modern gradient header with floating elements
            */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

                <div className="relative max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg">
                        <Monitor className="w-4 h-4" />
                        Virtual Representation
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-blue-600 bg-clip-text text-transparent leading-tight">
                        Digital Twin
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-8">
                        Your Factory, Virtualized
                    </h2>

                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Create a living digital replica of your manufacturing operations. Monitor performance,
                        simulate changes, and optimize processes in a risk-free virtual environment before
                        implementing them on the shop floor.
                    </p>
                </div>
            </section>

            {/* 
                FEATURE 1: REAL-TIME SYNCHRONIZATION
                Card-based layout with icon, gradient background
            */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row gap-8 mb-10">
                            {/* Icon */}
                            <div className="shrink-0">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Activity className="w-12 h-12 text-white" />
                                </div>
                            </div>

                            {/* Title & Description */}
                            <div className="flex-1">
                                <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                    Real-Time Synchronization
                                </h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Bridge the physical and digital worlds with real-time data synchronization.
                                    Visualize machine states, production flows, and inventory levels instantly as they happen.
                                </p>
                            </div>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Live shop floor visualization
                                </p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Instant state updates and monitoring
                                </p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Seamless data integration across systems
                                </p>
                            </div>
                        </div>

                        {/* Bottom Note */}
                        <div className="mt-8 flex items-center gap-2 text-blue-700 font-medium">
                            <Zap className="w-5 h-5" />
                            <p className="text-sm">
                                Full visibility into your operations, mirrored perfectly in the digital space.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
                FEATURE 2: SCENARIO SIMULATION
                Alternating layout with gradient
            */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row gap-8 mb-10">
                            {/* Icon */}
                            <div className="shrink-0">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Layers className="w-12 h-12 text-white" />
                                </div>
                            </div>

                            {/* Title & Description */}
                            <div className="flex-1">
                                <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                    Scenario Simulation
                                </h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Test "what-if" scenarios to validate decisions. Simulate production schedule changes,
                                    line reconfigurations, or capacity adjustments without disrupting actual operations.
                                </p>
                            </div>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Risk-free testing environment
                                </p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Validate critical production changes
                                </p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Forecast impact of strategic decisions
                                </p>
                            </div>
                        </div>

                        {/* Bottom Note */}
                        <div className="mt-8 flex items-center gap-2 text-blue-700 font-medium">
                            <Sparkles className="w-5 h-5" />
                            <p className="text-sm">
                                Make confident decisions backed by accurate simulation data.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
                FEATURE 3: LIFECYCLE MANAGEMENT
                Final feature with teal/emerald gradient
            */}
            <section className="py-16 px-4 pb-24">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row gap-8 mb-10">
                            {/* Icon */}
                            <div className="shrink-0">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Monitor className="w-12 h-12 text-white" />
                                </div>
                            </div>

                            {/* Title & Description */}
                            <div className="flex-1">
                                <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                    Process Optimization
                                </h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Identify bottlenecks and inefficiencies through advanced analytics on your digital model.
                                    Drive continuous improvement with data-backed insights directly from your digital twin.
                                </p>
                            </div>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Identify hidden bottlenecks
                                </p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Optimize resource allocation
                                </p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-lg font-bold text-slate-900">
                                    Data-driven continuous improvement
                                </p>
                            </div>
                        </div>

                        {/* Bottom Note */}
                        <div className="mt-8 flex items-center gap-2 text-blue-700 font-medium">
                            <Activity className="w-5 h-5" />
                            <p className="text-sm">
                                Optimize your factory's performance throughout its entire lifecycle.
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
                        <div className="bg-[linear-gradient(-60deg,#1e40af,#2563eb)] rounded-[2.5rem] p-10 md:p-16 relative overflow-visible">
                            {/* Background Splashes */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                            <div className="relative z-10 md:w-2/3 text-white">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                                    Why Choose RAILES for Digital Twin?
                                </h2>
                                <h3 className="text-xl font-semibold mb-6">
                                    Because it empowers you to visualize, predict, and perform like never before.
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0" />
                                        <span className="text-blue-50/90 leading-relaxed">Complete real-time visibility of operations.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0" />
                                        <span className="text-blue-50/90 leading-relaxed">Risk-free simulation of production changes.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0" />
                                        <span className="text-blue-50/90 leading-relaxed">Faster identification and resolution of bottlenecks.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0" />
                                        <span className="text-blue-50/90 leading-relaxed">Reduced downtime through predictive insights.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0" />
                                        <span className="text-blue-50/90 leading-relaxed">Enhanced collaboration through a single source of truth.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Overlapping Image - Positioned Absolute Bottom Right */}
                        <div className="hidden absolute bottom-0 right-0 translate-y-1/2 md:translate-x-[15%] w-[350px] lg:w-[450px] z-20">
                            <img
                                src="/images/Grafico_AI.png"
                                alt="Digital Twin Analytics"
                                width={600}
                                height={400}
                                className="object-contain drop-shadow-2xl"
                            />
                            {/* Note: Kept the AI image for now as placeholder, user can request change later */}
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
                            <strong>Building your Digital Twin with RAILES:</strong>
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 max-w-6xl mx-auto">

                        {/* Step 1 */}
                        <div className="relative w-full md:flex-1">
                            <div className="bg-white rounded-[3rem] p-10 text-center shadow-lg border border-slate-100 h-full relative z-10">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    Connect<br />Assets
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Link your physical machinery and systems to the RAILES platform.
                                </p>
                                {/* Dot */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-500"></div>
                            </div>
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-[85%] left-1/2 w-full h-[2px] bg-slate-200 -z-0"></div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative w-full md:flex-1">
                            <div className="bg-white rounded-[3rem] p-10 text-center shadow-lg border border-slate-100 h-full relative z-10">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    Build<br />Model
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Configure your virtual factory layout, flows, and constraints.
                                </p>
                                {/* Dot */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-500"></div>
                            </div>
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-[85%] left-1/2 w-full h-[2px] bg-slate-200 -z-0"></div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative w-full md:flex-1">
                            <div className="bg-white rounded-[3rem] p-10 text-center shadow-lg border border-slate-100 h-full relative z-10">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    Simulate &<br />Optimize
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Run simulations, analyze results, and implement improvements.
                                </p>
                                {/* Dot */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-500"></div>
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
                        Ready to virtualize your factory?
                    </h2>

                    <a href="/demo" className="inline-block w-full max-w-4xl mx-auto group">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-6 md:p-8 shadow-xl transform transition-transform group-hover:scale-[1.02]">
                            <span className="block text-white text-xl md:text-3xl font-medium">
                                Book a demo today and experience the power
                            </span>
                            <span className="block text-white text-xl md:text-3xl font-medium mt-2">
                                of the RAILES Digital Twin technology.
                            </span>
                        </div>
                    </a>
                </div>
            </section>

            {/* FOOTER CTA */}
            <CallToActionSection
                data={{
                    badgeText: "Step into the Future",
                    title: "Start Your Digital Twin Journey",
                    highlightedTitle: "Now",
                    titleSuffix: "",
                    description: "Join forward-thinking manufacturers who use Digital Twins to de-risk decisions and accelerate growth.",
                    primaryButtonText: "Request a Demo",
                    primaryButtonLink: "/demo",
                    secondaryButtonText: "Contact Sales",
                    secondaryButtonLink: "/contact"
                }}
            />

        </main>
    );
}
