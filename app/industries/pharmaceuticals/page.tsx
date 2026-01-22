import Link from 'next/link';
import { ArrowRight, ChevronRight, Check, Play } from 'lucide-react';
import Image from 'next/image';
import { IndustryPills } from '@/components/IndustryPills';
import { CallToActionSection } from '@/components/CallToActionSection';

export default function PharmaPage() {
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
                            Pharmaceutical Excellence
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-8 leading-[1.1] tracking-tight">
                            Railes MES for Pharmaceuticals:<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Manufacturing Excellence
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Railes MES is purpose-built for the pharmaceutical industry, offering a modular, compliant, and flexible Manufacturing Execution System that empowers quality, traceability, and accelerated batch release. Built by experts in pharma digitalization, Railes MES joins industry best practices with modern automation to give your manufacturing operations a competitive edge.
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
                            src="/images/Pharma.png"
                            alt="Pharmaceutical Manufacturing"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* 
              BLOCK 2: WHY RAILES (4 CARDS GRID)
              2x2 Grid with checkmarks
            */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
                        Why Railes MES is the Pharma Partner You Need
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">

                        {/* Decorative Pill Background */}
                        {/* Decorative Pill Background - User Asset Placeholder */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[120%] pointer-events-none z-0 flex items-center justify-center opacity-60">
                            {/* 
                                COMPANION: Please upload the vector image as 'pharma-bg-shape.svg' (or png) to public/images/
                             */}
                            <Image
                                src="/images/pharma-bg-shape.svg"
                                alt="Decorative Background"
                                width={800}
                                height={600}
                                className="w-full h-auto object-contain rotate-[-45deg]"
                            />
                        </div>


                        {/* Card 1 */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-8 right-8 text-purple-600 bg-purple-50 p-2 rounded-full">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
                                Pharma-Ready Compliance & Quality Control
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Enforces electronic batch records (EBR) and master batch records, eliminating manual paperwork.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-8 right-8 text-purple-600 bg-purple-50 p-2 rounded-full">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
                                Right-First-Time Workflows
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Avoid deviations directly by validating data input in real-time. Guide operators with precise, step-by-step instructions.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-8 right-8 text-purple-600 bg-purple-50 p-2 rounded-full">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
                                Composable & Scalable Platform
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Start fast with standard apps and scale as you grow. Seamlessly integrate with ERPs, LIMS, and existing equipment.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-8 right-8 text-purple-600 bg-purple-50 p-2 rounded-full">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
                                Modular Architecture for Pharma Needs
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Designed purely for pharma complexities. Handle weighing, dispensing, and packaging with dedicated modules without custom code.
                            </p>
                        </div>

                    </div>
                </div>
            </section >

            {/* 
              BLOCK 3: COMPARISON TABLE
              "What sets RAILES MES apart"
            */}
            < section className="py-24 bg-gray-50" >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
                        Railes MES vs Traditional Pharma MES
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
                                        <td className="py-6 px-8 font-semibold text-blue-900">Deployment Time</td>
                                        <td className="py-6 px-8">6-18 months</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">3-6 months</div>
                                            <div className="text-sm text-gray-500">(modular implementation)</div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Customization</td>
                                        <td className="py-6 px-8">Heavy and costly</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">Configurable via no-code tools,</div>
                                            <div className="text-sm text-gray-500">minimal custom development</div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Paperless<br />Batch Records</td>
                                        <td className="py-6 px-8">Retrofit EBR</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">Native EBR functionality</div>
                                            <div className="text-sm text-gray-500">with exception review</div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Scalability<br />& Flexibility</td>
                                        <td className="py-6 px-8">Rigid monoliths</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">Composable modules, easy</div>
                                            <div className="text-sm text-gray-500">new-product adaptation</div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">AI & IIoT</td>
                                        <td className="py-6 px-8">Not standard</td>
                                        <td className="py-6 px-8">
                                            <div className="font-semibold text-gray-900">Built-in AI analytics, machine</div>
                                            <div className="text-sm text-gray-500">connectivity</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section >

            {/* 
              BLOCK 4: 6 KEY BENEFITS
              Grid of small cards with numbers
            */}
            < section className="py-24 bg-white" >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                            6 Key Benefits
                            <br />
                            <span className="text-blue-500">for Pharma Manufacturers</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

                        {/* Benefit 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">1</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Ensure Compliance & Quality</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Consistent enforcement of SOPs, full audit trails, and validated digital records build trust.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">2</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Boost Efficiency & Throughput</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Track performance in real time, reduce deviations, and optimize scheduling and operations.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">3</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Minimize Risk</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Immediately detect non-conformances, reduce downtime, and ensure product integrity.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">4</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Scale with Confidence</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Adapt quickly to new drug launches or biotech manufacturing.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 5 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">5</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Reduce Costs</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Eliminate paper, manual checks, lengthy reviews, and under-utilized equipment.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 6 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center text-white font-bold text-xl shadow-md">6</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Speed to Value</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Rapid ROI through simplified implementation and QA overhead reduction, faster documentation review and batch release cycles.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section >

            {/* 
              BLOCK 5: TRANSFORM CTA
              Dark blue rounded container
            */}
            < section className="py-20 bg-white overflow-visible" >
                <div className="container mx-auto px-4">
                    <div className="relative">
                        {/* Blue Card Content */}
                        <div className="bg-[linear-gradient(-60deg,#004eab,#038efd)] rounded-[2.5rem] p-10 md:p-16 relative overflow-visible">
                            {/* Background Splashes */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                            <div className="relative z-10 md:w-2/3 text-white">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                                    Transform Your Pharma Operations?
                                </h2>
                                <h3 className="text-xl font-semibold mb-6">
                                    Railes MES transforms pharma manufacturing through:
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Centralized data in real-time to advanced numerical control capabilities.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Increase efficiency and reduce waste and downtime.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Overhaul KPIs (Time to Market & Quality).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Advanced analytics and actionable insights for rapid optimization.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Overlapping Image - Positioned Absolute Bottom Right */}
                        <div className="hidden md:block absolute bottom-0 right-0 translate-y-1/2 md:translate-x-[10%] w-[350px] lg:w-[450px] z-20">
                            <Image
                                src="/images/Person_Pharma.png"
                                alt="Production Dashboard"
                                width={600}
                                height={400}
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section >

            {/* INDUSTRY SOLUTIONS */}
            <IndustryPills />

            {/* 
              BLOCK 6: E-BOOK DOWNLOAD (HIDDEN)
              White section with download CTA
            
            <section className="pb-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-gray-50 rounded-[2rem] p-10 md:p-12 flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto border border-gray-100">

                        <div className="md:w-1/3">
                            <div className="aspect-[3/4] bg-white shadow-xl rounded-xl -rotate-3 border border-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 font-medium">E-book Cover</span>
                            </div>
                        </div>

                        <div className="md:w-2/3">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Titulo do E-book</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                See why leading pharma giants are switching to Railes MES to embrace Industry 4.0 standards.
                                Download our free guide to learn more.
                            </p>
                            <button className="bg-[#1e3a8a] text-white font-bold py-4 px-8 rounded-xl w-full md:w-auto shadow-lg hover:shadow-xl hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
                                <span>Click here to download</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                    </div>
                </div>
            </section>
            */}

            {/* FOOTER CTA */}
            < CallToActionSection
                data={{
                    badgeText: "Ready for Pharma 4.0?",
                    title: "Achieve Manufacturing Excellence",
                    highlightedTitle: "Now",
                    titleSuffix: "",
                    description: "Join leading pharmaceutical companies using Railes MES to ensure compliance, quality, and efficiency.",
                    primaryButtonText: "Request a Demo",
                    primaryButtonLink: "/demo",
                    secondaryButtonText: "Contact Sales",
                    secondaryButtonLink: "/contact"
                }
                }
            />

        </main >
    );
}
