import React from 'react';
import { Eye, BarChart3, List, Clock, Calendar, Component, ArrowRight, CornerRightDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CallToActionSection } from '@/components/CallToActionSection';
import { IndustryPills } from '@/components/IndustryPills';

export default function ProductionManagementPage() {
    return (
        <main className="min-h-screen bg-[#F9FAFB]">

            {/* 
              HERO SECTION 
              Design: Centered Text -> Chart/Dashboard Graphic
            */}
            <section className="relative bg-white pt-32 pb-20 md:pb-32 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Production Management
                        </h1>

                        <p className="text-xl md:text-2xl font-bold text-slate-800 mb-6">
                            Real-time control and full visibility over your shop floor.
                        </p>

                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-16">
                            Optimize production operations, eliminate inefficiencies, and ensure your teams have everything they need to deliver on time, every time.
                        </p>

                        {/* Production Chart Image */}
                        <div className="relative mx-auto max-w-6xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden aspect-[21/9]">
                            <Image
                                src="/images/Production_Management.png"
                                alt="Production by Date Chart"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* 
              KEY BENEFITS SECTION
              Design: White card floating on gray background
            */}
            <section className="bg-[#F9FAFB] pb-24 pt-10 md:-mt-20 relative z-20 px-4">
                <div className="container mx-auto">
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-slate-50 max-w-6xl mx-auto">

                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-blue-700">
                                Key benefits
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
                            {/* Benefit 1 */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-slate-900">Real-Time<br />Tracking</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Monitor every production order and work center as it happens.
                                </p>
                            </div>

                            {/* Benefit 2 */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-slate-900">More Uptime,<br />Less Waste</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Identify bottlenecks and inefficiencies before they impact your deadlines.
                                </p>
                            </div>

                            {/* Benefit 3 */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-slate-900">Built for<br />Manufacturing Teams</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Simple, intuitive tools designed to help operators, supervisors, and planners work better.
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
                            Take Control of Your Production with RAILES MES
                        </h2>
                    </div>

                    <div className="space-y-12 max-w-5xl mx-auto">

                        {/* Feature 1: Visual order tracking (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <Eye className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Visual order tracking</h3>
                                <p className="text-slate-500">
                                    Follow production orders in real time, from start to finish, including setup, execution, and completion.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2: Performance dashboards (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Performance dashboards</h3>
                                <p className="text-slate-500">
                                    Track KPIs like OEE, cycle time, scrap rate, and productivity with live dashboards.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3: Work Instructions (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <List className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Work Instructions</h3>
                                <p className="text-slate-500">
                                    Provide operators with clear, visual, and up-to-date instructions. Adjusted to the product, process, or workstation. Reduce training time and avoid errors, even in complex or variable production environments.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4: Downtime and delay management (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <Clock className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Downtime and delay management</h3>
                                <p className="text-slate-500">
                                    Automatically log and categorize stoppages. Empower teams to act quickly with root-cause analysis tools.
                                </p>
                            </div>
                        </div>

                        {/* Feature 5: Dynamic scheduling (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <Calendar className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Dynamic scheduling</h3>
                                <p className="text-slate-500">
                                    Adjust production plans on the fly based on machine availability, inventory levels, or unexpected events.
                                </p>
                            </div>
                        </div>

                        {/* Feature 6: Traceability & Compliance (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow mb-20">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <Component className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Traceability & Compliance</h3>
                                <p className="text-slate-500">
                                    Keep full traceability of batches, operators, parameters, and work history for audits and continuous improvement.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
                SECTION: TRANSFORM CTA
                Dark blue rounded container
            */}
            <section className="py-20 bg-white overflow-visible">
                <div className="container mx-auto px-4">
                    <div className="relative">
                        {/* Blue Card Content */}
                        {/* Blue Card Content */}
                        <div className="bg-[linear-gradient(-60deg,#004eab,#038efd)] rounded-[2.5rem] p-10 md:p-16 relative overflow-visible">
                            {/* Background Splashes */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                            <div className="relative z-10 md:w-2/3 text-white">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                                    Ready to scale your production?
                                </h2>
                                <h3 className="text-xl font-semibold mb-6">
                                    Railes MES empowers you to:
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Achieve 100% digital traceability from raw material to finished product.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Reduce downtime and waste by up to 30% with real-time monitoring.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Streamline compliance with automated documentation and reporting.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Integrate seamlessly with ERP, PLM, and machine data systems.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Overlapping Image - Positioned Absolute Bottom Right */}
                        <div className="hidden md:block absolute bottom-0 right-0 translate-y-1/2 md:translate-x-[-10%] w-[350px] lg:w-[450px] z-20">
                            <Image
                                src="/images/Extra1.png"
                                alt="Production Dashboard"
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
                    badgeText: "Ready to optimize your production?",
                    title: "Start Optimizing Your Shop Floor",
                    highlightedTitle: "Today",
                    titleSuffix: "",
                    description: "Discover how Railes MES can transform your production management with real-time visibility and control.",
                    primaryButtonText: "Get a Live Demo",
                    primaryButtonLink: "/demo",
                    secondaryButtonText: "Contact Sales",
                    secondaryButtonLink: "/contact"
                }}
            />

        </main>
    );
}
