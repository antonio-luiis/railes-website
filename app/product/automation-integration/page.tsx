import React from 'react';
import { Workflow, Link2, Zap, Database, GitBranch, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CallToActionSection } from '@/components/CallToActionSection';
import { ProductFeatures } from '@/components/ProductFeatures';

export default function AutomationIntegrationPage() {
    return (
        <main className="min-h-screen bg-[#F9FAFB]">

            {/* 
              HERO SECTION 
            */}
            <section className="relative bg-white pt-32 pb-20 md:pb-32 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Automation & Integration
                        </h1>

                        <p className="text-xl md:text-2xl font-bold text-slate-800 mb-6">
                            Streamline production and connect every system in your operation.
                        </p>

                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
                            Automate repetitive tasks, synchronize data across platforms, and enable your machines, software, and people to work together seamlessly , all within RAILES MES.
                        </p>

                        {/* Automation & Integration Image */}
                        <div className="relative mx-auto max-w-6xl aspect-[21/9]">
                            <Image
                                src="/images/Automation.png"
                                alt="Automation and Integration Architecture"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* 
              KEY BENEFITS SECTION
            */}
            <section className="bg-[#F9FAFB] pb-24 pt-10 md:-mt-20 relative z-20 px-4">
                <div className="container mx-auto">
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-slate-50 max-w-6xl mx-auto">

                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-blue-700">
                                Key benefits
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-16">

                            {/* Benefit 1 */}
                            <div className="text-center">
                                <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-6 text-blue-600">
                                    <Link2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    Seamless<br />Connectivity
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Integrate ERP, PLCs, sensors, and other factory systems into one unified platform.
                                </p>
                            </div>

                            {/* Benefit 2 */}
                            <div className="text-center">
                                <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-6 text-blue-600">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    Faster<br />Processes
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Automate workflows to reduce manual intervention and speed up production.
                                </p>
                            </div>

                            {/* Benefit 3 */}
                            <div className="text-center">
                                <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-6 text-blue-600">
                                    <Cpu className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    Accurate<br />Real-Time Data
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Ensure every system is working with the same, up-to-the-minute information.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* 
              ZIG-ZAG FEATURE LIST
            */}
            <section className="py-24 bg-[#F9FAFB]">
                <div className="container mx-auto px-4">

                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                            Automate and Connect with RAILES MES
                        </h2>
                    </div>

                    <div className="space-y-12 max-w-5xl mx-auto">

                        {/* Feature 1: ERP Integration (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <Database className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Machine Integration
                                </h3>
                                <p className="text-slate-500">
                                    Connect directly to production equipment, PLCs, and IoT devices to capture real-time data and trigger automated actions.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2: PLM & PDM (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <GitBranch className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">System-to-System Integration
                                </h3>
                                <p className="text-slate-500">
                                    Link RAILES MES with ERP, WMS, QMS, and other enterprise systems to eliminate data silos and manual data entry.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3: Machine Connectivity (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <Cpu className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Automated Workflows
                                </h3>
                                <p className="text-slate-500">
                                    Configure rule-based triggers for production tasks, quality checks, or material movements, no coding required.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4: Workflow Automation (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <Workflow className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Data Synchronization
                                </h3>
                                <p className="text-slate-500">
                                    Keep information consistent across all integrated systems, from inventory levels to order status.
                                </p>
                            </div>
                        </div>

                        {/* Feature 5: API-First Architecture (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <Link2 className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Event-Driven Actions
                                </h3>
                                <p className="text-slate-500">
                                    Trigger alerts, reports, or downstream processes instantly when a machine state or data condition changes.
                                </p>
                            </div>
                        </div>

                        {/* Feature 6: Pre-Built Connectors (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow mb-20">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <Zap className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Scalable Architecture
                                </h3>
                                <p className="text-slate-500">
                                    Start small and expand, from connecting a single line to integrating an entire multi-site operation.
                                </p>
                            </div>
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
                                    Why RAILES for Automation & Integration?
                                </h2>
                                <h3 className="text-xl font-semibold mb-6">
                                    Because a truly connected factory is integrated. RAILES MES makes automation intelligent by bridging your shop floor and business systems in real time.
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">No more manual data re-entry between systems.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Eliminate delays with event-driven automation.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Easy for operators, powerful for engineers and IT teams.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Compatible with industry-standard protocols and APIs.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Built to grow with your manufacturing operation.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Overlapping Image - Positioned Absolute Bottom Right */}
                        <div className="hidden md:block absolute bottom-0 right-0 translate-y-1/2 md:translate-x-[-10%] w-[350px] lg:w-[450px] z-20">
                            <Image
                                src="/images/Extra1.png"
                                alt="Integration Architecture"
                                width={600}
                                height={400}
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCT FEATURES */}
            <ProductFeatures excludeHref="/product/automation-integration" />

            {/* FOOTER CTA */}
            <CallToActionSection
                data={{
                    badgeText: "Ready for Seamless Integration?",
                    title: "Connect Your Manufacturing Systems",
                    highlightedTitle: "Now",
                    titleSuffix: "",
                    description: "Join leading manufacturers using Railes MES to build a truly connected, automated factory.",
                    primaryButtonText: "Get a Live Demo",
                    primaryButtonLink: "/demo",
                    secondaryButtonText: "Contact Sales",
                    secondaryButtonLink: "/contact"
                }}
            />

        </main>
    );
}
