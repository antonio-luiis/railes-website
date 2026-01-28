import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Network, Activity, Zap, ShieldCheck, Globe } from 'lucide-react';
import { ctaSection } from "@/lib/mock-data";
import { CallToActionSection } from "@/components/CallToActionSection";
import { DemoForm } from '@/components/DemoForm';

export default function DemoPage() {

    // Logos to display (5 logos for single row)
    const logos = [1, 2, 4, 5, 6];

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
                                    <DemoForm />
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
                            <span className="font-semibold text-sm uppercase tracking-wider">Trusted by Industry Leaders</span>
                        </div>
                    </div>

                    {/* Logo Grid */}
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 px-4">
                        {logos.map((num) => (
                            <div key={num} className="relative w-32 h-12 md:w-48 md:h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                                <Image
                                    src={`/images/${num}.png`}
                                    alt={`Client Logo ${num}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
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

            <CallToActionSection data={ctaSection} />

        </main>
    );
}
