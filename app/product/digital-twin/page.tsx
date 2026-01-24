import React from 'react';
import { Sparkles, Layers, Activity, Monitor, Zap, Check } from 'lucide-react';
import { CallToActionSection } from '@/components/CallToActionSection';
import { TechnologiesSection } from '@/components/TechnologiesSection';

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

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-blue-600 bg-clip-text text-transparent leading-tight pb-2">
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
                BLOCK: 6 KEY BENEFITS
                Copied from Pharma Page
            */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                            Core Benefits of Digital Twin
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

                        {/* Benefit 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">1</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Live and Bi-directional Production Modeling</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Not just monitoring, but simulating and even influencing actual operations.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">2</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Real-time Digital Product Mirrors</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Create continuous virtual representations of your production line or product variants. RAILES leverages MES data to keep the Digital Twin current, enabling responsive and adaptive insights.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">3</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Predictive Maintenance & Reduced Downtime</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    By analyzing live and historical performance via the Digital Twin, anticipate equipment failures early and trigger MES-led preventative actions, minimizing disruption.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">4</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Simulation for Optimized Product Flow</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Test new product configurations, scheduling, or material setups in the virtual twin before deployment, ensuring peak efficiency on the shop floor.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 5 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">5</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Quality Assurance and Root Cause Insight</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Detect deviations or anomalies virtually, analyze root causes within the Digital Twin, and alert MES workflows in real time for corrective action.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 6 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">6</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Enhanced Lifecycle Visibility & Collaboration</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    With MES and Digital Twin working in harmony, cross-functional teams, from design to production, can access unified, real-time product data, improving clarity and coordination.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* 
                SECTION: IMPLEMENTATION ADVANTAGES
                2x2 Grid
            */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Implementation Advantages at RAILES
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Advantage 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                <Activity className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-slate-900 mb-2">Unified Real-Product Feedback Loop</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    MES captures operational data; the Digital Twin simulates and tests; insights feedback for continuous refinement and action.
                                </p>
                            </div>
                        </div>

                        {/* Advantage 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-slate-900 mb-2">Product-Specific Precision</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    Whether scaling across variants or optimizing unique builds, the twin adapts to product-specific parameters for smarter responses.
                                </p>
                            </div>
                        </div>

                        {/* Advantage 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-slate-900 mb-2">Faster, Safer Rollouts</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    Validate new layouts or product flows virtually before execution, reducing risk and accelerating time-to-market.
                                </p>
                            </div>
                        </div>

                        {/* Advantage 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                <Layers className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-slate-900 mb-2">Scalable and Adaptive</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    Begin with a focused pilot (e.g., one product line), prove value, then expand, aligned with best practices in agile digital twin adoption.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
                SECTION: HOW IT WORKS
            */}
            {/* 
                SECTION: HOW IT WORKS
            */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">
                            Process Overview
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Building your Digital Twin
                        </h2>
                        <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
                            Three simple steps to bridge the gap between your physical factory and intelligent digital simulation.
                        </p>
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Connecting Line (Background) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 -z-10"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                            {/* Step 1 */}
                            <div className="relative group">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 relative">
                                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                            <Layers className="w-8 h-8" />
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border border-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600 shadow-sm">
                                            1
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                        Model Your Flow
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed">
                                        Using MES data, construct a virtual replica of your product’s physical production, including machines, process steps, and performance parameters.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative group">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 relative">
                                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                            <Activity className="w-8 h-8" />
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border border-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600 shadow-sm">
                                            2
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                        Simulate & Adapt
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed">
                                        Run real-time simulations: tune schedules, energy usage, quality checkpoints, and machine parameters, all before impacting actual operations.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative group">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 relative">
                                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                            <Check className="w-8 h-8" />
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border border-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600 shadow-sm">
                                            3
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                        Close the Loop
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed">
                                        Operational deviations or inefficiencies detected in the twin immediately trigger MES actions, whether maintenance, rescheduling, or quality alerts.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 
                SECTION: TRANSFORM CTA
            */}
            <section className="py-20 bg-slate-50 overflow-visible">
                <div className="container mx-auto px-4">
                    <div className="relative">
                        {/* Blue Card Content */}
                        <div className="bg-[linear-gradient(-60deg,#004eab,#038efd)] rounded-[2.5rem] p-10 md:p-16 relative overflow-visible">
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
                SECTION: TECHNOLOGIES
            */}
            <TechnologiesSection
                data={{
                    title: "Know more about RAILES Technologies",
                    technologies: [
                        { label: "Digital Twin", href: "/product/digital-twin" },
                        { label: "Artificial Intelligence", href: "/product/artificial-intelligence" }
                    ]
                }}
            />

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
