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
                            Real-time visibility into every corner of your factory.
                        </p>

                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
                            Track performance, detect anomalies, and make data-driven decisions with live dashboards and intelligent alerts.
                        </p>

                        {/* Monitoring Image */}
                        <div className="relative mx-auto max-w-6xl aspect-[21/9]">
                            <Image
                                src="/images/Monitoring.png"
                                alt="Real-time Monitoring Dashboard"
                                fill
                                className="object-cover rounded-[2rem] shadow-2xl border border-gray-100"
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
                                    Live<br />Performance
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Monitor OEE, cycle times, and throughput in real-time across all lines and work centers.
                                </p>
                            </div>

                            {/* Benefit 2 */}
                            <div className="text-center">
                                <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-6 text-blue-600">
                                    <AlertCircle className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    Instant<br />Alerts
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Get notified immediately when issues arise, so you can respond before they escalate.
                                </p>
                            </div>

                            {/* Benefit 3 */}
                            <div className="text-center">
                                <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-6 text-blue-600">
                                    <TrendingUp className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    Predictive<br />Insights
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Leverage AI to forecast bottlenecks and optimize production schedules proactively.
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
                            See Everything, Miss Nothing
                        </h2>
                    </div>

                    <div className="space-y-12 max-w-5xl mx-auto">

                        {/* Feature 1: Real-Time Dashboards (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <Eye className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Real-Time Dashboards</h3>
                                <p className="text-slate-500">
                                    Visualize production metrics, quality trends, and machine status on customizable dashboards accessible from anywhere.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2: OEE Tracking (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">OEE Tracking</h3>
                                <p className="text-slate-500">
                                    Automatically calculate Overall Equipment Effectiveness (OEE) and drill down into availability, performance, and quality losses.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3: Downtime Analysis (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <AlertCircle className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Downtime Analysis</h3>
                                <p className="text-slate-500">
                                    Categorize and analyze every stoppage event. Identify root causes and prioritize improvement initiatives.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4: Production Alerts (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <Zap className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Smart Alerts</h3>
                                <p className="text-slate-500">
                                    Configure threshold-based or AI-driven alerts for quality deviations, machine failures, or production delays.
                                </p>
                            </div>
                        </div>

                        {/* Feature 5: Historical Trends (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Historical Trends</h3>
                                <p className="text-slate-500">
                                    Compare performance over days, weeks, or months. Spot patterns and measure the impact of continuous improvement efforts.
                                </p>
                            </div>
                        </div>

                        {/* Feature 6: Mobile Access (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow mb-20">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <Activity className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Mobile Access</h3>
                                <p className="text-slate-500">
                                    Stay connected to your shop floor from anywhere with responsive dashboards optimized for tablets and smartphones.
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
                                    Ready to see your factory in real-time?
                                </h2>
                                <h3 className="text-xl font-semibold mb-6">
                                    Railes MES empowers you to:
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Increase OEE by 15-25% with actionable insights.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Reduce unplanned downtime with predictive alerts.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Make faster decisions with live data at your fingertips.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span className="text-blue-100/90 leading-relaxed">Empower teams with mobile dashboards anywhere, anytime.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Overlapping Image - Positioned Absolute Bottom Right */}
                        <div className="hidden md:block absolute bottom-0 right-0 translate-y-1/2 md:translate-x-[-10%] w-[350px] lg:w-[450px] z-20">
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
