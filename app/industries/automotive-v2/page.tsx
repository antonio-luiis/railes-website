import Link from 'next/link';
import { ChevronRight, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function AutomotivePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* 
              BLOCK 1: HERO SECTION
              Design: Full width dark image background with white centered text
            */}
            <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">

                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/Fotos_Industries-Automotive.jpg"
                        alt="Automotive Manufacturing Line"
                        fill
                        priority
                        className="object-cover"
                    />
                    {/* Dark Overlay for text readability */}
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">

                    {/* Main Headlines */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 max-w-5xl mx-auto leading-tight">
                        Railes MES for Automotive:<br />
                        Precision & Performance
                    </h1>

                    <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>

                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                </div>
            </section>

            {/* 
              BLOCK 2: SUB-HERO / VALUE PROP
              White background with centered blue text
            */}
            <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] max-w-4xl mx-auto leading-tight">
                        Lorem ipsum dolor sit amet, consectetur
                    </h2>
                </div>
            </section>

            {/* 
              BLOCK 3: WHY RAILES (GRID)
            */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
                        Why Automotive Leaders Choose Railes
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">

                        {/* Card 1 */}
                        <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
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
                        <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
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
                        <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
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
                        <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
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
                    <div className="bg-[#1e3a8a] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
                        {/* Background Splashes */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                                Ready to accelerate your automotive production?
                            </h2>
                            <p className="text-blue-100 text-xl mb-10">
                                Discover why top OEMs choose Railes MES for their smart factories.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-white text-blue-900 font-bold py-5 px-10 rounded-full shadow-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                                    <span>Schedule a Demo</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="bg-transparent border border-blue-400 text-white font-semibold py-5 px-10 rounded-full hover:bg-blue-800/50 transition-colors">
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
