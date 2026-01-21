import Link from 'next/link';
import { ChevronRight, Check, ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import { IndustryPills } from '@/components/IndustryPills';
import { CallToActionSection } from '@/components/CallToActionSection';

export default function AutomotivePage() {
    return (
        <main className="min-h-screen bg-white pt-32">
            {/* 
              BLOCK 1: HERO SECTION V2
              Design: Clean White Background -> Text Heading -> Large Image below
            */}
            <section className="relative px-4 pb-20">
                <div className="container mx-auto">

                    {/* 1. The Phrase (Heading) */}
                    <div className="text-center max-w-5xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Automotive Excellence
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-8 leading-[1.1] tracking-tight">
                            Railes MES for Automotive:<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Performance & Precision
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Railes MES is built for the automotive sector, delivering end‑to‑end control, from paint shop to final assembly. It unifies production operations with real-time data, ensuring quality, compliance, and responsiveness.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#1e3a8a] text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                                <span>Schedule a Demo</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="bg-white text-gray-700 border border-gray-200 font-bold py-4 px-10 rounded-full hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                                <Play className="w-4 h-4 fill-current" />
                                <span>Watch Video</span>
                            </button>
                        </div>
                    </div>

                    {/* 2. The Image */}
                    <div className="relative w-full max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 aspect-[21/9]">
                        <Image
                            src="/images/Automotive.png"
                            alt="Automotive Manufacturing Line"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* 
              BLOCK 2: WHY RAILES (4 CARDS GRID)
              Automotive Focus
            */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
                        Why Railes MES in the Automotive Manufacturing
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">

                        {/* Decorative Background Element (Subtle Grid or Shape) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border-[1px] border-blue-50 rounded-full bg-blue-50/20 -z-10 blur-3xl pointer-events-none"></div>

                        {/* Card 1 */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-8 right-8 text-blue-600 bg-blue-50 p-2 rounded-lg">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
                                Analytics, AI & Predictive Maintenance
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Railes MES uses AI to forecast machine failures, prevent quality issues before they occur, and optimize throughput, embracing advanced analytics just like leading automotive MES platforms.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-8 right-8 text-blue-600 bg-blue-50 p-2 rounded-lg">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
                                Integrated Control & ERP/Kanban Systems
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Leverage Railes MES as a bridge, connecting PLCs, controls, ERP, and supply chain, tailored for agility and modularity.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-8 right-8 text-blue-600 bg-blue-50 p-2 rounded-lg">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
                                Quality Management & Traceability
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Maintain full part genealogy from stamping through final inspection. Enforce work instructions and manage defects systematically, ensuring regulatory compliance and reducing recalls.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-8 right-8 text-blue-600 bg-blue-50 p-2 rounded-lg">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
                                Adaptive Scheduling & Lean Manufacturing
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Just‑in‑time production, dynamic order management, and line balancing for mass customization, fully aligned with lean automotive principles and efficiency goals.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
              BLOCK 3: COMPARISON TABLE
            */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
                        Railes MES vs Legacy Automotive MES
                    </h2>

                    <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden max-w-5xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#ec4899]">
                                        <th className="py-6 px-8 text-white font-bold text-lg w-1/4 border-r border-white/10">Feature</th>
                                        <th className="py-6 px-8 text-white font-bold text-lg w-1/3 border-r border-white/10">Legacy MES</th>
                                        <th className="py-6 px-8 text-white font-bold text-lg w-1/3">Railes MES</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600">
                                    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Integration Approach</td>
                                        <td className="py-6 px-8">Fixed monolithic systems</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">Modular, API-first</div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Real-Time Visibility</td>
                                        <td className="py-6 px-8">Limited dashboards</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">Real-time line, machine, and KPI monitoring</div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Traceability</td>
                                        <td className="py-6 px-8">Paper-based or fragmented</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">End-to-end genealogy, from stamping to final test</div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">AI & Predictive Maintenance</td>
                                        <td className="py-6 px-8">Rarely standard</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">Included: alerts on quality drift & machine health</div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Quality Control</td>
                                        <td className="py-6 px-8">Manual inspection</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">Systematic defect handling, in-line Quality Control compliance</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
              BLOCK 4: 6 KEY BENEFITS
            */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                            6 Key Benefits
                            <br />
                            <span className="text-blue-500">for Automotive Manufacturers</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

                        {/* Benefit 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">1</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Maximize Uptime</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Instantly flag line stops and minimize time-to-resolution.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">2</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Ensure Product Integrity</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Accurate traceability across component lineage for compliance and warranty support.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">3</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Boost Efficiency</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Lean workflows and dynamic scheduling minimize bottlenecks and speed throughput.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">4</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Cut Costs</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Reduce scrap, defects, and unplanned stoppages.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 5 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">5</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Scale Flexibly</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Build line-specific modules without re-engineering your entire MES.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 6 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">6</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Drive Better Decisions</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Data‑driven actions via AI insights and operational analytics.                               </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
              BLOCK 5: TRANSFORM CTA
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
                                    Revolutionize Your Automotive Operations
                                </h2>
                                <h3 className="text-xl font-semibold mb-6">
                                    With Railes MES, automotive manufacturers can:
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Implement targeted modules, assembly, testing, traceability, logistics, with minimal customization.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Seamlessly integrate with ERP, SCM, and shop-floor control systems.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Gain AI-based diagnostics for maintenance and quality.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Achieve paperless, fully traceable production.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Overlapping Image - Positioned Absolute Bottom Right */}
                        <div className="hidden md:block absolute bottom-0 right-0 translate-y-1/2 md:translate-x-[10%] w-[350px] lg:w-[450px] z-20">
                            <Image
                                src="/images/.png"
                                alt="Automotive Production Dashboard"
                                width={600}
                                height={400}
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRY SOLUTIONS */}
            <IndustryPills />

            {/* 
              BLOCK 6: E-BOOK DOWNLOAD (HIDDEN)
            
            <section className="pb-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-gray-50 rounded-[2rem] p-10 md:p-12 flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto border border-gray-100">
                        <div className="md:w-1/3">
                            <div className="aspect-[3/4] bg-white shadow-xl rounded-xl -rotate-3 border border-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 font-medium">Whitepaper</span>
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Digital Future of Aerospace</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Download our comprehensive guide on how Industry 4.0 is reshaping aerospace manufacturing and quality control.
                            </p>
                            <button className="bg-[#1e3a8a] text-white font-bold py-4 px-8 rounded-xl w-full md:w-auto shadow-lg hover:shadow-xl hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
                                <span>Download Whitepaper</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            */}

            {/* FOOTER CTA */}
            <CallToActionSection
                data={{
                    badgeText: "Ready for Automotive 4.0?",
                    title: "Achieve Manufacturing Excellence",
                    highlightedTitle: "Now",
                    titleSuffix: "",
                    description: "Join leading automotive OEMs and suppliers using Railes MES to drive performance and precision.",
                    primaryButtonText: "Request a Demo",
                    primaryButtonLink: "/demo",
                    secondaryButtonText: "Contact Sales",
                    secondaryButtonLink: "/contact"
                }}
            />

        </main>
    );
}
