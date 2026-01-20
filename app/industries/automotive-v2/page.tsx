import Link from 'next/link';
import { ChevronRight, Check, ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function AutomotivePageV2() {
    return (
        <main className="min-h-screen bg-white pt-32">
            {/* 
              BLOCK 1: HERO SECTION V2
              Design: Clean White Background -> Text Heading -> Large Image below
            */}
            <section className="relative px-4 pb-20">
                <div className="container mx-auto">

                    {/* 1. The Phrase (Heading) */}
                    <div className="text-center max-w-5xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            New Standard for Automotive
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-8 leading-[1.1] tracking-tight">
                            Railes MES for Automotive:<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Precision & Performance
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#1e3a8a] text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                                <span>Schedule a Demo</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="bg-white text-gray-700 border border-gray-200 font-bold py-4 px-10 rounded-full hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                                <Play className="w-4 h-4 fill-current" />
                                <span>Watch Video</span>
                            </button>
                        </div>
                    </div>

                    {/* 2. The Image */}
                    <div className="relative w-full max-w-[1400px] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 aspect-[21/9]">
                        <Image
                            src="/images/Fotos_Industries-Automotive.jpg"
                            alt="Automotive Manufacturing Line"
                            fill
                            priority
                            className="object-cover"
                        />
                        {/* Optional: Subtle gradient overlay at bottom to blend if needed */}
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>

                </div>
            </section>

            {/* 
              BLOCK 2: VALUE PROP (Same as V1 but cleaner bg)
            */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] max-w-4xl mx-auto leading-tight">
                        Driving efficiency from the <span className="underline decoration-blue-200 underline-offset-8">press shop</span> to <span className="underline decoration-blue-200 underline-offset-8">final assembly</span>.
                    </h2>
                </div>
            </section>

            {/* 
              BLOCK 3: WHY RAILES (Cards)
            */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                    <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
                        Why Automotive Leaders Choose Railes
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* Card 1 */}
                        <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                <Check className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Just-in-Time Production
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Optimize inventory and reduce waste with precise JIT manufacturing workflows integrated directly into your line.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
                                <Check className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Quality at Speed
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Maintain zero-defect policies even at high throughput with automated in-line quality inspections.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                                <Check className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Full Traceability
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Track every component from supplier to final assembly with VIN-specific genealogy.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                                <Check className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Connected Workforce
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Empower operators with digital work instructions and real-time performance feedback.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
              BLOCK 4: CTA
            */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-gray-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                                Ready to accelerate your automotive production?
                            </h2>
                            <p className="text-gray-400 text-xl mb-10">
                                Discover why top OEMs choose Railes MES for their smart factories.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-blue-600 text-white font-bold py-5 px-10 rounded-full shadow-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2">
                                    <span>Schedule a Demo</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="bg-transparent border border-gray-700 text-white font-semibold py-5 px-10 rounded-full hover:bg-gray-800 transition-colors">
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
