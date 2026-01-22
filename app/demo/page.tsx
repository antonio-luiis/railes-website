import Link from 'next/link';
import { ArrowRight, Sparkles, Network, Activity, Zap, ShieldCheck, Globe } from 'lucide-react';

import { siteSettings, ctaSection } from "@/lib/mock-data";
import { Logo } from '@/components/Logo';
import { CallToActionSection } from "@/components/CallToActionSection";

export default function DemoPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* 
              BLOCK 1: HERO SECTION
              Blue gradient background, split layout (Text Left, Form Right)
            */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-[linear-gradient(-60deg,#004eab,#038efd)]">

                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>



                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">

                        {/* Text Content (Left) */}
                        <div className="lg:w-1/2 text-white">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-blue-200 text-sm font-medium mb-8 backdrop-blur-md">
                                <Sparkles className="w-4 h-4" />
                                <span>Get a personalized demo</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                See how RAILES MES can transform your operations
                            </h1>
                            <p className="text-xl text-blue-100/80 mb-8 leading-relaxed max-w-xl">
                                Looking to improve production visibility, streamline workflows, and eliminate manual errors?
                                <br /><br />
                                Let's talk. In a quick call, we'll show you how RAILES MES can help you modernize your factory floor.
                            </p>
                        </div>

                        {/* Form Card (Right) */}
                        <div className="lg:w-1/2 w-full max-w-[500px]">
                            <div className="p-[4px] rounded-[32px] bg-gradient-to-b from-[#ff5ac8] to-[#0099ff] shadow-2xl">
                                <div className="bg-white rounded-[28px] p-8 md:p-10">
                                    <h3 className="text-2xl font-bold text-gray-700 mb-8 text-center">Schedule a Custom Platform Demo</h3>

                                    <form className="flex flex-col gap-5">
                                        {/* Name Field */}
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="w-full px-5 py-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-light"
                                            />
                                        </div>

                                        {/* Phone Field */}
                                        <div>
                                            <input
                                                type="tel"
                                                placeholder="Phone Number (+ ) xxx-xxx-xxxx"
                                                className="w-full px-5 py-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-light"
                                            />
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="Business Email"
                                                className="w-full px-5 py-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-light"
                                            />
                                        </div>

                                        {/* Industry Field */}
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Industry (optional)"
                                                className="w-full px-5 py-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-light"
                                            />
                                        </div>

                                        <p className="text-[11px] text-gray-400 leading-tight mt-2 text-center px-2">
                                            By submitting this form, you agree to receive product and marketing-related communications from Railes
                                            in accordance with our <Link href="#" className="underline">Privacy Policy</Link>. You may unsubscribe from these communications at any time.
                                        </p>

                                        <button
                                            type="submit"
                                            className="mt-4 w-full bg-gradient-to-r from-[#0099ff] to-[#ff5ac8] text-white text-xl font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:opacity-95 transition-all duration-200"
                                        >
                                            Submit
                                        </button>

                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
              BLOCK 2: TRUSTED BY SECTION
              White overlapping section with logos
            */}
            <section className="relative -mt-10 pt-16 pb-20 bg-white rounded-t-[40px] z-20">
                <div className="container mx-auto px-4 text-center">

                    <div className="flex flex-col items-center justify-center gap-2 mb-10">
                        <div className="flex items-center gap-2 text-blue-600">
                            <Sparkles className="w-4 h-4 fill-blue-600" />
                            <span className="font-semibold text-sm uppercase tracking-wider">Trusted by</span>
                        </div>
                    </div>

                    {/* Logo Grid (Placeholder for Marquee) */}
                    <div className="flex flex-wrap justify-center gap-12 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Replace these with actual SVGs or Image components later */}
                        <div className="h-8 font-bold text-xl text-gray-800 flex items-center">PFIZER</div>
                        <div className="h-8 font-bold text-xl text-gray-800 flex items-center">TEKEVER</div>
                        <div className="h-8 font-bold text-xl text-gray-800 flex items-center">VIPEX</div>
                        <div className="h-8 font-bold text-xl text-gray-800 flex items-center">FACCO</div>
                        <div className="h-8 font-bold text-xl text-gray-800 flex items-center">CRITICAL</div>
                        <div className="h-8 font-bold text-xl text-gray-800 flex items-center">BOMBARDIER</div>
                    </div>

                </div>
            </section>

            {/* 
              BLOCK 3: WHAT TO EXPECT SECTION
              Three big circles
            */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What to Expect</h2>
                    <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
                        Railes MES allows you to monitor your production in real time.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">

                        {/* Circle 1 */}
                        <div className="aspect-square rounded-full bg-white border-4 border-gray-50 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center p-8 transition-transform hover:scale-105 duration-300">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                                A short<br />conversation
                            </h3>
                            <p className="text-gray-500 font-medium leading-snug">
                                to understand<br />your needs
                            </p>
                        </div>

                        {/* Circle 2 */}
                        <div className="aspect-square rounded-full bg-white border-4 border-gray-50 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center p-8 transition-transform hover:scale-105 duration-300">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                                A personalized<br />walkthrough
                            </h3>
                            <p className="text-gray-500 font-medium leading-snug">
                                of the RAILES<br />platform
                            </p>
                        </div>

                        {/* Circle 3 */}
                        <div className="aspect-square rounded-full bg-white border-4 border-gray-50 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center p-8 transition-transform hover:scale-105 duration-300">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                                Answers to<br />your questions
                            </h3>
                            <p className="text-gray-500 font-medium leading-snug">
                                about features,<br />integration,<br />and pricing
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
              BLOCK 4: BENEFITS LIST SECTION (ORIGINAL)
              Gray container with centered text list
            
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                            See how manufacturers use RAILES to:
                        </h2>
                        <p className="text-gray-500 mt-4">
                            Railes MES allows you to monitor your production in real time.
                        </p>
                    </div>

                    <div className="bg-gray-100/80 rounded-[40px] p-12 md:p-20 max-w-5xl mx-auto shadow-inner">
                        <div className="flex flex-col gap-10 items-center text-center">

                            <h3 className="text-xl md:text-2xl font-bold text-[#1e40af] hover:scale-105 transition-transform cursor-default">
                                Connect machines, systems, and people;
                            </h3>

                            <h3 className="text-xl md:text-2xl font-bold text-[#1e40af] hover:scale-105 transition-transform cursor-default">
                                Monitor production in real time;
                            </h3>

                            <h3 className="text-xl md:text-2xl font-bold text-[#1e40af] hover:scale-105 transition-transform cursor-default">
                                Automate data collection and reduce waste;
                            </h3>

                            <h3 className="text-xl md:text-2xl font-bold text-[#1e40af] hover:scale-105 transition-transform cursor-default">
                                Improve quality and ensure full traceability;
                            </h3>

                            <h3 className="text-xl md:text-2xl font-bold text-[#1e40af] hover:scale-105 transition-transform cursor-default">
                                Scale processes across lines and plants.
                            </h3>

                        </div>
                    </div>
                </div>
            </section>
            */}

            {/* 
              BLOCK 4.5: BENEFITS GRID (EXPLORER ALTERNATIVE)
              Card grid with gradient icons
            
            <section className="py-20 bg-gray-50/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-600 text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            <span>Why Railes MES?</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Empower your workforce,<br />optimize your production.
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            A modern solution designed for the factories of tomorrow.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        <div className="bg-white p-8 rounded-[32px] hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white mb-2 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                                <Network className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Connect Everything</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Seek seamless connectivity between machines, systems, and people for a unified operational view.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-[32px] hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white mb-2 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                                <Activity className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Real-Time Visibility</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Monitor production metrics as they happen. React instantly to bottlenecks and downtime.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-[32px] hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white mb-2 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Automate Collection</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Eliminate paper logs. Automate data collection to reduce waste and human error.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-[32px] hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start gap-4 group lg:ml-auto">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-2 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Ensure Quality</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Embed quality checks directly into workflows. Ensure full traceability from raw material to finished goods.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-[32px] hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start gap-4 group lg:mr-auto">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white mb-2 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Scale Globally</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Standardize processes and scale effortlessly across multiple production lines and global plants.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            */}

            {/* 
              BLOCK 4.6: HIGH-CONVERSION BENEFITS (V3 - PREMIUM)
              Stats-driven, gradient backgrounds, strong visual hierarchy
            
            <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
                {/* Decorative elements */}
            {/*
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-200/20 to-blue-200/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Header */}
            {/*
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-6 shadow-lg">
                            <Sparkles className="w-4 h-4" />
                            <span>Transform Your Operations</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            The MES Platform That<br />
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Drives Real Results</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Join leading manufacturers who've transformed their operations with RAILES MES
                        </p>
                    </div>

                    {/* Stats Row */}
            {/*
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 text-center hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">25%</div>
                            <div className="text-sm text-gray-600 font-medium">Efficiency Boost</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 text-center hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">40%</div>
                            <div className="text-sm text-gray-600 font-medium">Error Reduction</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 text-center hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">3mo</div>
                            <div className="text-sm text-gray-600 font-medium">To Full ROI</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 text-center hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">100%</div>
                            <div className="text-sm text-gray-600 font-medium">Traceability</div>
                        </div>
                    </div>

                    {/* Main Benefits Grid */}
            {/*
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">

                        {/* Benefit 1 */}
            {/*
                        <div className="group relative bg-white p-8 rounded-3xl border border-gray-200/50 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                                        <Network className="w-7 h-7" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Unified Operations</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Connect machines, systems, and people into one seamless platform. Break down silos and gain complete visibility.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Benefit 2 */}
            {/*
                        <div className="group relative bg-white p-8 rounded-3xl border border-gray-200/50 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                                        <Activity className="w-7 h-7" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Real-Time Intelligence</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Monitor every metric as it happens. Identify bottlenecks instantly and make data-driven decisions in real-time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Benefit 3 */}
            {/*
                        <div className="group relative bg-white p-8 rounded-3xl border border-gray-200/50 hover:border-indigo-300 transition-all duration-300 hover:shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                                        <Zap className="w-7 h-7" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Zero-Touch Automation</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Eliminate manual data entry and paper trails. Automate collection, reduce waste, and free your team for higher-value work.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Benefit 4 */}
            {/*
                        <div className="group relative bg-white p-8 rounded-3xl border border-gray-200/50 hover:border-cyan-300 transition-all duration-300 hover:shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                                        <ShieldCheck className="w-7 h-7" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Quality Assurance</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Build quality into every step. Achieve complete traceability from raw materials to finished products with confidence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom CTA */}
            {/*
                    <div className="text-center">
                        <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl shadow-blue-600/30">
                            <Globe className="w-12 h-12 text-white/90" />
                            <h3 className="text-2xl font-bold text-white">Ready to Scale Globally?</h3>
                            <p className="text-blue-100 max-w-md">
                                Standardize processes across lines and plants. Deploy once, scale everywhere.
                            </p>
                            <Link href="/">
                                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-1 duration-200">
                                    Schedule Your Demo Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            */}

            {/* 
              BLOCK 5: BOTTOM CTA SECTION
              Blue background with final call to action
            */}
            {/* 
              BLOCK 5: BOTTOM CTA SECTION (Replaced with Global CTA)
            */}
            <CallToActionSection data={ctaSection} />

        </main>
    );
}
