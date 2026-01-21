import Link from 'next/link';
import { ChevronRight, Check, ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import { IndustryPills } from '@/components/IndustryPills';
import { CallToActionSection } from '@/components/CallToActionSection';

export default function PackagingPage() {
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
                            Packaging Excellence
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-8 leading-[1.1] tracking-tight">
                            Railes MES for Packaging:<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Traceability & Flexibility
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Railes MES empowers packaging manufacturers to control, monitor, and optimize every step of production, from raw material intake to final product dispatch. Whether you're producing flexible packaging, labels, boxes, or folding cartons, Railes MES ensures efficiency, traceability, and maximum production performance.
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
                            src="/images/Packaging.png"
                            alt="Packaging Manufacturing"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* 
              BLOCK 2: WHY RAILES (4 CARDS GRID)
              Packaging Focus
            */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
                        Why Railes MES for Packaging Manufacturers
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
                                Advanced Traceability
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Full material and product traceability, from raw materials to finished packaging. Railes MES guarantees product compliance, customer confidence, and simplified audits.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-8 right-8 text-blue-600 bg-blue-50 p-2 rounded-lg">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
                                Waste & Scrap Reduction
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Monitor production scrap in real-time, minimize material waste, and optimize setup processes that are crucial for cost-sensitive packaging operations.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-8 right-8 text-blue-600 bg-blue-50 p-2 rounded-lg">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
                                Recipe & Work instructions
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ensure accurate, repeatable production with centralized management of recipes, work instructions, and production parameters, supporting quick changeovers and short-run flexibility
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-8 right-8 text-blue-600 bg-blue-50 p-2 rounded-lg">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
                                Quality & Compliance Control
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Enforce quality checks, forms, collect inspection data, and maintain digital records for ISO or customer-specific requirements.
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
                        Railes MES vs Legacy MES in Packaging
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
                                        <td className="py-6 px-8 font-semibold text-blue-900">OEE Monitoring</td>
                                        <td className="py-6 px-8">Limited or manual</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">Real-time, automated OEE, scrap, and performance monitoring</div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Product Traceability</td>
                                        <td className="py-6 px-8">Fragmented or paper-based</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">End-to-end material and product traceability</div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Changeover Management</td>
                                        <td className="py-6 px-8">Manual, prone to errors</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">Digital job and recipe management for fast, error-free setups</div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Waste Control</td>
                                        <td className="py-6 px-8">Reactive</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">Real-time scrap tracking and waste minimization</div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Integration</td>
                                        <td className="py-6 px-8">Siloed systems</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">Seamless ERP, machine, and shop-floor system integration</div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Industry Adaptability</td>
                                        <td className="py-6 px-8">Generic</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">Packaging-specific workflows for flexible production   </div>
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
                            <span className="text-blue-500">for Packaging Manufacturers</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

                        {/* Benefit 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">1</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Short Runs & Frequent Changeovers
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Railes MES simplifies recipe management and ensures smooth, efficient transitions between work orders.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">2</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Stringent Quality Requirements
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Guarantee product consistency and comply with regulatory standards through digital quality controls.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">3</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Ensure Compliance</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Meet regulatory requirements effortlessly with automated documentation and reporting.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">4</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Minimize Scrap & Downtime
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Real-time monitoring and alerts empower your team to reduce material waste and machine stoppages.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 5 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">5</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Full Product Traceability
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Know exactly where every raw material, component, and finished product came from and went.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 6 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">6</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Data-Driven Decisions</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Access production KPIs, machine status, and performance analytics at your fingertips.
                                </p>
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
                                    Transform Your Packaging Production
                                </h2>
                                <h3 className="text-xl font-semibold mb-6">
                                    With Railes MES, packaging manufacturers achieve:
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Real-time performance monitoring.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Digital traceability and compliance.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Faster changeovers with recipe control.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Reduced scrap and material waste.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Seamless connection to ERP and shop-floor systems.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Data-driven insights to continuously improve efficiency.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Overlapping Image - Positioned Absolute Bottom Right */}
                        <div className="hidden md:block absolute bottom-0 right-0 translate-y-1/2 md:translate-x-[10%] w-[350px] lg:w-[450px] z-20">
                            <Image
                                src="/images/.png"
                                alt="Packaging Production Dashboard"
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

            {/* FOOTER CTA */}
            <CallToActionSection
                data={{
                    badgeText: "Ready for Packaging 4.0?",
                    title: "Achieve Manufacturing Excellence",
                    highlightedTitle: "Now",
                    titleSuffix: "",
                    description: "Join leading packaging companies using Railes MES to ensure efficiency, quality, and traceability.",
                    primaryButtonText: "Request a Demo",
                    primaryButtonLink: "/demo",
                    secondaryButtonText: "Contact Sales",
                    secondaryButtonLink: "/contact"
                }}
            />

        </main>
    );
}
