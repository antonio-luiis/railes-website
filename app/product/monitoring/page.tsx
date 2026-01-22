import React from 'react';
import { Activity, TrendingUp, AlertCircle, BarChart3, Eye, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CallToActionSection } from '@/components/CallToActionSection';
import { ProductFeatures } from '@/components/ProductFeatures';

export default function MonitoringPage() {
    return (
        <main className="min-h-screen bg-[#F9FAFB]">

            {/* 
              HERO SECTION 
            */}
            <section className="relative bg-white pt-32 pb-20 md:pb-32 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Monitoring
                        </h1>

                        <p className="text-xl md:text-2xl font-bold text-slate-800 mb-6">
                            Gain full visibility and control over your production operations in real time, capturing data and empowering smarter decisions.
                        </p>

                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
                            From streamlined production launches to seamless scaling, this keeps your operations efficient and adaptable.
                        </p>

                        {/* Monitoring Image */}
                        <div className="relative mx-auto max-w-6xl aspect-[21/9]">
                            <Image
                                src="/images/Monitoring.png"
                                alt="Real-time Monitoring Dashboard"
                                fill
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
                                    <Activity className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    Live Insights from<br />Start to Finish:
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Manage production runs through direct integration with shop floor equipment, capturing essential process data automatically.
                                </p>
                            </div>

                            {/* Benefit 2 */}
                            <div className="text-center">
                                <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-6 text-blue-600">
                                    <AlertCircle className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    Order-Centric<br />Tracking
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Link data, quality checks, inventory changes, and operational details, all back to each production order.
                                </p>
                            </div>

                            {/* Benefit 3 */}
                            <div className="text-center">
                                <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-6 text-blue-600">
                                    <TrendingUp className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    Future-Ready<br />Scalability
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Start with monitoring today; easily expand into full MES capabilities as your operational needs grow.
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
                            Deliver Smart Production with RAILES MES
                        </h2>
                    </div>

                    <div className="space-y-12 max-w-5xl mx-auto">

                        {/* Feature 1: Real-Time Dashboards (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <Eye className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Seamless Production Starts and Tracking
                                </h3>
                                <p className="text-slate-500">
                                    Operators can initiate and monitor production runs directly, with MES handling communication with factory equipment in real time.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2: OEE Tracking (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Order-driven data centrality
                                </h3>
                                <p className="text-slate-500">
                                    Key information, spanning production performance, inventory usage, quality inspection data, remains consolidated under each production order.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3: Downtime Analysis (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <AlertCircle className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Scale at your pace
                                </h3>
                                <p className="text-slate-500">
                                    Begin with production monitoring solutions; when ready, scale to a comprehensive MES platform without losing your existing infrastructure.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4: Production Alerts (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <Zap className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Strategic It IT-OT Aligment
                                </h3>
                                <p className="text-slate-500">
                                    Bridge Information Technology (IT) and Operational Technology (OT) layers thoughtfully, building toward Industry 4.0 and smart manufacturing practices.
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
                                    Why Choose RAILES for Monitoring your Manufacturing?
                                </h2>
                                <h3 className="text-xl font-semibold mb-6">
                                    Because Railes transforms monitoring from a routine requirement into a strategic advantage:
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Starts simple, expands thoughtfully, no upfront complexity.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Deep integration with shopfloor systems with data flowing automatically.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Ensures every production detail aligns with its order context.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Built for smart manufacturing evolution. From monitoring to full MES.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Overlapping Image - Positioned Absolute Bottom Right */}
                        <div className="hidden absolute bottom-0 right-0 translate-y-1/2 md:translate-x-[15%] w-[350px] lg:w-[450px] z-20">
                            <Image
                                src="/images/Extra1.png"
                                alt="Monitoring Dashboard"
                                width={600}
                                height={400}
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCT FEATURES */}
            <ProductFeatures excludeHref="/product/monitoring" />

            {/* FOOTER CTA */}
            <CallToActionSection
                data={{
                    badgeText: "Ready for Real-Time Visibility?",
                    title: "Start Monitoring Your Shop Floor",
                    highlightedTitle: "Today",
                    titleSuffix: "",
                    description: "Join leading manufacturers using Railes MES to track, analyze, and optimize production in real-time.",
                    primaryButtonText: "Get a Live Demo",
                    primaryButtonLink: "/demo",
                    secondaryButtonText: "Contact Sales",
                    secondaryButtonLink: "/contact"
                }}
            />

        </main>
    );
}
