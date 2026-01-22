import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { ctaSection } from "@/lib/mock-data";
import { CallToActionSection } from "@/components/CallToActionSection";

export const metadata: Metadata = {
    title: 'Contact Us | Railes',
    description: 'Get in touch with the Railes team for support, product questions, or partnership opportunities.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white pt-20">
            {/* Header Section */}
            <section className="pt-16 pb-12 text-center px-4">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                        Get in Touch<br />
                        <span className="text-[#0057D9]">with Railes</span>
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
                        Whether you have questions about our product, need support,
                        or want to explore partnership opportunities, our team is here to help.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="bg-gray-50 py-16 md:py-24 relative overflow-hidden">

                {/* Decorative Star/Asterisk - Right Side */}
                <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/4 pointer-events-none select-none">
                    <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                        <defs>
                            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#818cf8" /> {/* Indigo */}
                                <stop offset="50%" stopColor="#c084fc" /> {/* Purple */}
                                <stop offset="100%" stopColor="#3b82f6" /> {/* Blue */}
                            </linearGradient>
                        </defs>
                        {/* A rough approximation of the 8-pointed rounded star/asterisk */}
                        <g style={{ filter: "drop-shadow(0px 10px 20px rgba(59, 130, 246, 0.3))" }}>
                            <path
                                d="M200 0 L220 160 L380 140 L240 200 L380 260 L220 240 L200 400 L180 240 L20 260 L160 200 L20 140 L180 160 Z"
                                fill="url(#starGradient)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="40"
                                stroke="url(#starGradient)"
                            />
                            {/* Trying a simpler cross strokes approach to match the 'stick' look */}
                            <line x1="200" y1="20" x2="200" y2="380" stroke="url(#starGradient)" strokeWidth="40" strokeLinecap="round" />
                            <line x1="20" y1="200" x2="380" y2="200" stroke="url(#starGradient)" strokeWidth="40" strokeLinecap="round" />
                            <line x1="72" y1="72" x2="328" y2="328" stroke="url(#starGradient)" strokeWidth="40" strokeLinecap="round" />
                            <line x1="328" y1="72" x2="72" y2="328" stroke="url(#starGradient)" strokeWidth="40" strokeLinecap="round" />
                        </g>
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl mx-auto">
                        <form className="space-y-6">

                            {/* Name */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    placeholder="Message"
                                    rows={4}
                                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none font-medium"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#0066eb] hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-500/30 text-lg"
                                >
                                    Send message
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="bg-white py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24">
                        {/* Lisbon */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Lisbon</h3>
                            <p className="text-[#1e3a8a]/80 mb-1 leading-relaxed">
                                Avenida 5 de Outubro, nº115, 6ºB
                            </p>
                            <p className="text-[#1e3a8a]/80 mb-4 leading-relaxed">
                                1050-052 Lisbon, Portugal
                            </p>
                            <a href="mailto:geral@muvu.tech" className="text-[#1e3a8a] font-bold hover:underline">
                                geral@muvu.tech
                            </a>
                        </div>

                        {/* Guarda */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Guarda</h3>
                            <p className="text-[#1e3a8a]/80 mb-1 leading-relaxed">
                                Rua do Campo, nº5, 2ºEsq
                            </p>
                            <p className="text-[#1e3a8a]/80 mb-4 leading-relaxed">
                                6300-672, Guarda, Portugal
                            </p>
                            <a href="mailto:geral@muvu.tech" className="text-[#1e3a8a] font-bold hover:underline">
                                geral@muvu.tech
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Careers Section - Gray Rounded Bottom */}
            <section className="bg-white pb-12 px-4">
                <div className="bg-gray-50 rounded-[3rem] py-20 md:py-24 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12">Join Our Team</h2>

                        <div className="max-w-4xl mx-auto rounded-[2.5rem] p-1 bg-gradient-to-r from-[#0099ff] to-[#ff3399]">
                            <div className="bg-gradient-to-r from-[#1E90FF] to-[#FF69B4] rounded-[2.3rem] py-16 px-8 md:px-12 flex flex-col items-center justify-center text-center">
                                <p className="text-white text-xl md:text-2xl font-medium mb-8 max-w-2xl">
                                    We are seeking the best and brightest individuals to join our team.
                                </p>
                                <Link href="/careers">
                                    <button className="bg-[#1e3a8a] hover:bg-blue-900 text-white font-medium py-3 px-8 rounded-full transition-colors flex items-center gap-2 text-sm">
                                        See careers <ChevronRight className="w-4 h-4" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
              Global CTA Section
            */}
            <CallToActionSection data={ctaSection} />
        </main>
    );
}
