import Link from 'next/link';
import { ChevronRight, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function AerospacePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* 
              BLOCK 1: HERO SECTION
              Aerospace focus: Precision, Scale, Compliance
            */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white">

                {/* Background Decor: Subtle technical grids or blues */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">

                    {/* Breadcrumbs */}
                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500 mb-8">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900">Industries</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-blue-600">Aerospace & Defense</span>
                    </div>

                    {/* Headlines */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 max-w-5xl mx-auto leading-tight">
                        Railes MES for Aerospace & Defense<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Precision & Compliance at Altitude</span>
                    </h1>

                    <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Achieve AS9100 compliance, manage complex discrete assemblies, and ensure full digital thread traceability from design to flight.
                    </p>

                    {/* Dashboard/Visual Mockup */}
                    <div className="relative max-w-5xl mx-auto">
                        {/* Main Dashboard Image Placeholder */}
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative z-10 aspect-[16/9] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                            <div className="text-gray-400 font-medium text-center">
                                <span className="block mb-2 text-lg font-bold text-gray-300">Aerospace Dashboard</span>
                                <span className="text-sm">Complex Assembly View Placeholder</span>
                            </div>
                            {/* Central Placeholder Box */}
                            <div className="absolute inset-8 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center">
                                <span className="text-xs text-gray-400">Insert Dashboard Screenshot Here</span>
                            </div>
                        </div>

                        {/* Floating Element: Quality Check Card */}
                        <div className="absolute -bottom-8 -right-4 md:right-10 bg-white p-5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 max-w-xs z-20 hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                                    <Check className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-gray-900">AS9100 Compliant</span>
                                    <span className="text-xs text-gray-500">Audit Trail Verified</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element: Efficiency Metric */}
                        <div className="absolute top-10 -left-10 bg-white p-4 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 z-20 hidden lg:block animate-in fade-in slide-in-from-left-4 duration-700 delay-500">
                            <span className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-1 block">OEE Score</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-blue-900">94.2%</span>
                                <span className="text-xs text-green-500 font-medium">↑ 1.8%</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
              BLOCK 2: WHY RAILES (4 CARDS GRID)
              Aerospace Focus: AS9100, Assembly, Traceability
            */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
                        Why Aerospace Leaders Choose Railes MES
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
                                Native AS9100 & ISO 9001 Compliance
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Built to enforce strict quality standards. Automate FAI (First Article Inspection) and ensure audit-readiness at all times.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-8 right-8 text-blue-600 bg-blue-50 p-2 rounded-lg">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
                                Complex Discrete Assembly
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Manage thousands of parts and operations with ease. Support for both OEM production and MRO (Maintenance, Repair, Overhaul) workflows.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-8 right-8 text-blue-600 bg-blue-50 p-2 rounded-lg">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
                                Digital Thread & Full Genealogy
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Trace every serialized component from raw material to final assembly. Maintain a complete electronic history record (EHR).
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-8 right-8 text-blue-600 bg-blue-50 p-2 rounded-lg">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight">
                                Integrated Supply Chain
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Collaborate seamlessly with suppliers. Manage genealogy across multi-tier supply chains to prevent counterfeit parts.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
              BLOCK 3: COMPARISON TABLE
              "What sets RAILES MES apart"
            */}
            <section className="py-24 bg-blue-50/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
                        The Railes Advantage in Aerospace
                    </h2>

                    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden max-w-5xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-100">
                                        <th className="py-6 px-8 text-blue-900 font-bold text-lg w-1/4">Feature</th>
                                        <th className="py-6 px-8 text-gray-500 font-bold text-lg w-1/3">Legacy Aerospace MES</th>
                                        <th className="py-6 px-8 text-blue-600 font-bold text-lg w-1/3 bg-blue-50/30">Railes MES</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600">
                                    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">AS9100 Compliance</td>
                                        <td className="py-6 px-8">Costly Add-ons / Paper</td>
                                        <td className="py-6 px-8 font-bold text-blue-900 bg-blue-50/30">Native & Automated<br /><span className="text-sm font-normal text-gray-500">Built-in validation checks</span></td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Traceability</td>
                                        <td className="py-6 px-8">Siloed Data</td>
                                        <td className="py-6 px-8 font-bold text-blue-900 bg-blue-50/30">Digital Thread<br /><span className="text-sm font-normal text-gray-500">End-to-end genealogy</span></td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Complex Assembly</td>
                                        <td className="py-6 px-8">Tribal Knowledge</td>
                                        <td className="py-6 px-8 font-bold text-blue-900 bg-blue-50/30">Guided Workflows<br /><span className="text-sm font-normal text-gray-500">Interactive work instructions</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8 font-semibold text-blue-900">Change Management</td>
                                        <td className="py-6 px-8">Slow & Disconnected</td>
                                        <td className="py-6 px-8 font-bold text-blue-900 bg-blue-50/30">Integrated ECO/ECR<br /><span className="text-sm font-normal text-gray-500">Instant shop floor updates</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
              BLOCK 4: 6 KEY BENEFITS
              Grid of small cards with numbers
            */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                            6 Key Benefits
                            <br />
                            <span className="text-blue-500">for Aerospace Manufacturers</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

                        {/* Benefit 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md">1</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Zero Deviations</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Prevent errors before they happen with inline quality checks and mandatory validations.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-md">2</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Accelerate NPI</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Bring new products to flight faster by bridging the gap between engineering (PLM) and production.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-md">3</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Total Visibility</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Gain real-time insights into every work order, machine status, and operator action.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-md">4</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Cost Control</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Capture actual labor and material costs per serialized unit for accurate profitability analysis.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 5 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md">5</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Paperless Shop Floor</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Eliminate mountains of paperwork and the risk of lost records with fully digital eBRs.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 6 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-md">6</div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Audit Readiness</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Pass audits with confidence. all data is timestamped, signed, and easily retrievable.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
              BLOCK 5: TRANSFORM CTA
              Dark blue rounded container
            */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-[#1e3a8a] rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">

                        {/* Background Splashes */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10 md:w-1/2 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                                Ready to scale your aerospace production?
                            </h2>
                            <h3 className="text-xl font-semibold mb-6">
                                Railes MES empowers you to:
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                    <span className="text-blue-100/90 leading-relaxed">Achieve 100% digital traceability from raw material to finished part.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                    <span className="text-blue-100/90 leading-relaxed">Reduce scrap and rework by up to 30% with guided workflows.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                    <span className="text-blue-100/90 leading-relaxed">Pass AS9100 and ISO audits with zero findings.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                    <span className="text-blue-100/90 leading-relaxed">Integrate seamless with PLM, ERP, and machine data.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="relative z-10 md:w-5/12">
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 shadow-2xl">
                                {/* Placeholder for Aerospace Image */}
                                <div className="aspect-[4/5] bg-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-transparent transition-colors duration-500"></div>
                                    <span className="text-gray-400 font-bold px-8 text-center text-sm">Aerospace Engineer Image Placeholder</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
              BLOCK 6: E-BOOK DOWNLOAD
            */}
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

        </main>
    );
}
