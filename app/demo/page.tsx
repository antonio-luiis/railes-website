import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteSettings } from "@/lib/mock-data";

export default function DemoPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* 
              BLOCK 1: HERO SECTION
              Blue gradient background, split layout (Text Left, Form Right)
            */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">

                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                {/* Logo */}
                <div className="absolute top-6 left-6 md:left-12 z-50">
                    <Link href="/">
                        {siteSettings.logo?.asset?.url ? (
                            <img src={siteSettings.logo.asset.url} alt="RAILES" className="h-8 brightness-0 invert" />
                        ) : (
                            <span className="text-2xl font-bold tracking-tight text-white uppercase">RAILES</span>
                        )}
                    </Link>
                </div>

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
                        <div className="lg:w-1/2 w-full max-w-lg">
                            <div className="bg-white rounded-[24px] p-8 shadow-2xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Schedule a Custom Platform Demo</h3>

                                <form className="flex flex-col gap-4">
                                    {/* Name Field */}
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                        />
                                    </div>

                                    {/* Phone Field */}
                                    <div>
                                        <input
                                            type="tel"
                                            placeholder="Phone Number (+1) xxx-xxx-xxxx"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Business Email"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                        />
                                    </div>

                                    {/* Industry Field */}
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Industry (Optional)"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                        />
                                    </div>

                                    <p className="text-xs text-gray-500 leading-tight mt-2">
                                        By submitting this form, you agree to allow RAILES to store and process your personal data.
                                        For more info, check our <Link href="#" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                                    </p>

                                    <button
                                        type="submit"
                                        className="mt-2 w-full bg-[#1e40af] hover:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        Submit
                                    </button>

                                </form>
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
              BLOCK 4: BENEFITS LIST SECTION
              Gray container with centered text list
            */}
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

            {/* 
              BLOCK 5: BOTTOM CTA SECTION
              Blue background with final call to action
            */}
            <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                {/* Decorative X Shape (Bottom Right) */}
                <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none translate-y-1/3 translate-x-1/4">
                    <svg width="400" height="400" viewBox="0 0 100 100" className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] text-white fill-current">
                        <path d="M45,0 L55,0 L55,45 L100,45 L100,55 L55,55 L55,100 L45,100 L45,55 L0,55 L0,45 L45,45 Z" transform="rotate(15 50 50)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Let's get started
                    </h2>
                    <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
                        Fill out the form and we'll be in touch within one business day.
                    </p>

                    {/* Optional: Add button here if the form isn't immediately visible, 
                        or just rely on scrolling back up. Since the design shows this as a closing statement,
                        we'll keep it simple as per the visual. */}
                </div>
            </section>

        </main>
    );
}
