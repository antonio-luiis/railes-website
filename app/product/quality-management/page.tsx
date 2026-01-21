import React from 'react';
import { ShieldCheck, BarChart3, ClipboardCheck, AlertTriangle, FileCheck, Component, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CallToActionSection } from '@/components/CallToActionSection';
import { ProductFeatures } from '@/components/ProductFeatures';

export default function QualityManagementPage() {
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
                            Quality Management
                        </h1>

                        <p className="text-xl md:text-2xl font-bold text-slate-800 mb-6">
                            Ensure product quality at every step of your operations.
                        </p>

                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
                            Detect issues early, standardize inspections, and build a culture of continuous improvement, without slowing down production.
                        </p>

                        {/* Quality Management Image */}
                        <div className="relative mx-auto max-w-6xl aspect-[21/9]">
                            <Image
                                src="/images/Quality.png"
                                alt="Quality Management Dashboard"
                                fill
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

                        <div className="grid md:grid-cols-3 gap-16">

                            {/* Benefit 1 */}
                            <div className="text-center">
                                <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-6 text-blue-600">
                                    <ClipboardCheck className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    Built-In <br />Quality
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Catch and correct defects in real time, before they move downstream.
                                </p>
                            </div>

                            {/* Benefit 2 */}
                            <div className="text-center">
                                <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-6 text-blue-600">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    Paperless & <br />Standardized
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Eliminate variability with digital inspections, forms, and audits.
                                </p>
                            </div>

                            {/* Benefit 3 */}
                            <div className="text-center">
                                <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-6 text-blue-600">
                                    <FileCheck className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    Continuous<br />Improvement
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Turn shop floor data into actionable insights to prevent future issues.
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
                            Deliver High Quality with RAILES MES
                        </h2>
                    </div>

                    <div className="space-y-12 max-w-5xl mx-auto">

                        {/* Feature 1: Inline Quality Checks (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <ClipboardCheck className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Inline Quality Checks</h3>
                                <p className="text-slate-500">
                                    Embed inspections directly into the production process. Trigger checks based on product, process, or shift changes.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2: SPC & Trends (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Non-Conformance Management
                                </h3>
                                <p className="text-slate-500">
                                    Automatically flag deviations and guide operators through resolution steps. Track trends and recurring issues over time.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3: Non-Conformance Management (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <AlertTriangle className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Digital SOPs & Workflows
                                </h3>
                                <p className="text-slate-500">
                                    Standardize procedures with interactive digital work instructions and checklists. Keep teams aligned across lines and shifts.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4: Digital Calibration (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <Component className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Audit-Ready Records
                                </h3>
                                <p className="text-slate-500">
                                    Maintain a complete digital trail of inspections, actions taken, and operator signatures, ready for internal or external audits.
                                </p>
                            </div>
                        </div>

                        {/* Feature 5: Supplier Quality (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Live Quality Dashboards
                                </h3>
                                <p className="text-slate-500">
                                    Monitor key quality KPIs like defect rates, first-pass yield, and inspection results in real time.
                                </p>
                            </div>
                        </div>

                        {/* Feature 6: eHR & Compliance (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow mb-20">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <FileCheck className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Root Cause Analysis Tools
                                </h3>
                                <p className="text-slate-500">
                                    Investigate quality incidents using structured tools like 5 Whys, Ishikawa, or Pareto analysis. Capture findings directly in the system.
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
                                    Why Choose RAILES for Quality Management?
                                </h2>
                                <h3 className="text-xl font-semibold mb-6">
                                    RAILES brings quality into every operation, in real time.
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">No more paper forms or siloed spreadsheets.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Embedded directly into your production workflows.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Easy for operators, powerful for quality teams.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Designed for regulated industries.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Scalable across teams, lines, and sites.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Overlapping Image - Positioned Absolute Bottom Right */}
                        <div className="hidden md:block absolute bottom-0 right-0 translate-y-1/2 md:translate-x-[-10%] w-[350px] lg:w-[450px] z-20">
                            <Image
                                src="/images/Extra1.png"
                                alt="Quality Dashboard"
                                width={600}
                                height={400}
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCT FEATURES */}
            <ProductFeatures excludeHref="/product/quality-management" />

            {/* FOOTER CTA */}
            <CallToActionSection
                data={{
                    badgeText: "Ready for Quality 4.0?",
                    title: "Achieve Zero Defect Manufacturing",
                    highlightedTitle: "Now",
                    titleSuffix: "",
                    description: "Join leading manufacturers using Railes MES to ensure the highest quality standards.",
                    primaryButtonText: "Get a Live Demo",
                    primaryButtonLink: "/demo",
                    secondaryButtonText: "Contact Sales",
                    secondaryButtonLink: "/contact"
                }}
            />

        </main>
    );
}
