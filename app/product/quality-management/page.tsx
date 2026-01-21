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
                            Ensure perfection in every product with integrated quality control.
                        </p>

                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
                            Automate inspections, manage non-conformances, and maintain audit-readiness with a unified Quality Management System (QMS) built into your MES.
                        </p>

                        {/* Quality Management Image */}
                        <div className="relative mx-auto max-w-6xl aspect-[21/9]">
                            <Image
                                src="/images/Quality_Management_Control_Railes.png"
                                alt="Quality Management Dashboard"
                                fill
                                className="object-cover rounded-[2rem] shadow-2xl border border-gray-100"
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
                                    Automated<br />Inspections
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Embed quality checks directly into work instructions to ensure nothing is missed.
                                </p>
                            </div>

                            {/* Benefit 2 */}
                            <div className="text-center">
                                <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-6 text-blue-600">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    Zero<br />Defects
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Catch issues at the source with inline validation and mistake-proofing (Poka-Yoke).
                                </p>
                            </div>

                            {/* Benefit 3 */}
                            <div className="text-center">
                                <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-6 text-blue-600">
                                    <FileCheck className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    Audit<br />Readiness
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Always be ready for ISO, FDA, or AS9100 audits with complete digital traceability.
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
                            Master Quality with RAILES MES
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
                                    Enforce mandatory quality steps within production workflows. Operators cannot proceed without validating measurements or checklists.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2: SPC & Trends (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">SPC & Trends</h3>
                                <p className="text-slate-500">
                                    Monitor process stability with real-time Statistical Process Control (SPC) charts. Detect drifts before they become defects.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3: Non-Conformance Management (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <AlertTriangle className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Non-Conformance Management</h3>
                                <p className="text-slate-500">
                                    Streamline NCR initiation, root cause analysis, and disposition. Manage CAPA (Corrective and Preventive Actions) efficiently.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4: Digital Calibration (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <Component className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Digital Calibration</h3>
                                <p className="text-slate-500">
                                    Track tool calibration schedules and prevent the use of uncalibrated or expired equipment on the shop floor.
                                </p>
                            </div>
                        </div>

                        {/* Feature 5: Supplier Quality (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Supplier Quality</h3>
                                <p className="text-slate-500">
                                    Inspect incoming materials and track supplier performance. Ensure only conforming parts enter your production line.
                                </p>
                            </div>
                        </div>

                        {/* Feature 6: eHR & Compliance (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow mb-20">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <FileCheck className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">eHR & Compliance</h3>
                                <p className="text-slate-500">
                                    Automatically compile Electronic History Records (eHR) / Device History Records (DHR) for full regulatory compliance.
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
                                    Ready to elevate your quality?
                                </h2>
                                <h3 className="text-xl font-semibold mb-6">
                                    Railes MES empowers you to:
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Reduce scrap and rework costs by up to 50%.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Ensure 100% compliance with industry standards.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Respond to quality issues faster with real-time data.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Eliminate paper-based quality records forever.</span>
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
