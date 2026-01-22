import Link from 'next/link';
import { ChevronRight, Check, ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import { IndustryPills } from '@/components/IndustryPills';
import { CallToActionSection } from '@/components/CallToActionSection';

export default function DiscreteManufacturingPage() {
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
                            Discrete Excellence
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-8 leading-[1.1] tracking-tight">
                            Railes MES for Discrete:<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Precision & Agility
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Master high-mix, low-volume production. Gain real-time visibility into every assembly, operator, and machine.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo">
                                <button className="bg-[#1e3a8a] text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                                    <span>Schedule a Demo</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <button className="bg-white text-gray-700 border border-gray-200 font-bold py-4 px-10 rounded-full hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                                <Play className="w-4 h-4 fill-current" />
                                <span>Watch Video</span>
                            </button>
                        </div>
                    </div>

                    {/* 2. The Image */}
                    <div className="relative w-full max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 aspect-[21/9]">
                        <Image
                            src="/images/Aerospace.png"
                            alt="Discrete Manufacturing"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* 
              BLOCK 2: WHY RAILES (4 CARDS GRID)
              Discrete Focus
            */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
                        Why Discrete Leaders Choose Railes MES
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
                                High-Mix Management
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Handle frequent changeovers and complex BOMs effortlessly. Adapt to custom orders without slowing down.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-8 right-8 text-blue-600 bg-blue-50 p-2 rounded-lg">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
                                Assembly Guidance
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Provide operators with digital, interactive work instructions to ensure zero-defect assembly every time.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-8 right-8 text-blue-600 bg-blue-50 p-2 rounded-lg">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
                                Real-Time WIP Tracking
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Know exactly where every order is on the floor. Identify bottlenecks instantly and optimize flow.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-8 right-8 text-blue-600 bg-blue-50 p-2 rounded-lg">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
                                Inventory & BoM Accuracy
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Automatically consume materials as they are used. Keep inventory levels accurate and prevent stockouts.
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
                        The Railes Advantage in Discrete
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
                                        <td className="py-6 px-8 font-semibold text-blue-900">Configurability</td>
                                        <td className="py-6 px-8">Hard-coded</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">No-Code / Low-Code</div>
                                            <div className="text-sm text-gray-500">Adapt fast to new products</div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Visibility</td>
                                        <td className="py-6 px-8">Shift-end Reports</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">Real-Time Dashboards</div>
                                            <div className="text-sm text-gray-500">Instant actionable insights</div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Work Instructions</td>
                                        <td className="py-6 px-8">Paper Binders</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">Interactive Digital</div>
                                            <div className="text-sm text-gray-500">Rich media support</div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Quality</td>
                                        <td className="py-6 px-8">Reactive</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">Proactive & Inline</div>
                                            <div className="text-sm text-gray-500">Prevent defects at source</div>
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
                            <span className="text-blue-500">for Discrete Manufacturers</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

                        {/* Benefit 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">1</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Reduce Lead TImes</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Streamline operations and eliminate non-value-added time to ship faster.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">2</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Improve Quality</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Enforce standardized processes and quality checks to reduce scrap and rework.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">3</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Gain Agility</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Respond quickly to changing customer demands and market shifts.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">4</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Engage Workforce</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Empower operators with modern tools and easy-to-follow instructions.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 5 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">5</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Trace Everything</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Build a complete digital record of production for warranty and compliance.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 6 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">6</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Data-Driven Decisions</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Use accurate, real-time data to drive continuous improvement.
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
                                    Ready to optimize your production?
                                </h2>
                                <h3 className="text-xl font-semibold mb-6">
                                    Railes MES empowers you to:
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Master high-mix, low-volume complexity.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Increase throughput and reduce lead times.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Eliminate assembly errors with digital guides.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Gain total floor visibility in real-time.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Overlapping Image - Positioned Absolute Bottom Right */}
                        <div className="hidden absolute bottom-0 right-0 translate-y-1/2 md:translate-x-[10%] w-[350px] lg:w-[450px] z-20">
                            <Image
                                src="/images/Aerospace.png"
                                alt="Discrete Manufacturing Dashboard"
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
                    badgeText: "Ready for Discrete 4.0?",
                    title: "Achieve Manufacturing Excellence",
                    highlightedTitle: "Now",
                    titleSuffix: "",
                    description: "Join leading discrete manufacturers using Railes MES to boost agility, quality, and efficiency.",
                    primaryButtonText: "Request a Demo",
                    primaryButtonLink: "/demo",
                    secondaryButtonText: "Contact Sales",
                    secondaryButtonLink: "/contact"
                }}
            />

        </main>
    );
}
