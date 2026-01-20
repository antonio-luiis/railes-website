import Link from 'next/link';

export function ProvenResults() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto bg-[#F8F9FA] rounded-[40px] p-12 md:p-16 relative overflow-hidden">

                    {/* Header Content */}
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
                            Proven Results
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
                            The numbers don't lie.<br />
                            We tackle inefficiency, enhance quality, and deliver solutions tailored<br className="hidden md:block" />
                            to your operations all backed by guaranteed ROI.
                        </p>
                    </div>

                    {/* Stats Grid and Button Container */}
                    <div className="flex flex-col lg:flex-row items-end gap-8">

                        {/* Grid of Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 w-full lg:w-4/5">

                            {/* Card 1 */}
                            <div className="flex items-center gap-4">
                                <GradientCheck />
                                <div className="bg-white rounded-full py-4 px-8 shadow-sm flex-grow">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-bold text-[#0033AD]">100%</span>
                                        <span className="text-gray-600 text-lg">ROI guarantee</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex items-center gap-4">
                                <GradientCheck />
                                <div className="bg-white rounded-full py-4 px-8 shadow-sm flex-grow">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-bold text-[#0033AD]">25%</span>
                                        <span className="text-gray-600 text-lg">Efficiency increase</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="flex items-center gap-4">
                                <GradientCheck />
                                <div className="bg-white rounded-full py-4 px-8 shadow-sm flex-grow">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-bold text-[#0033AD]">40%</span>
                                        <span className="text-gray-600 text-lg">Error reduction</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="flex items-center gap-4">
                                <GradientCheck />
                                <div className="bg-white rounded-full py-4 px-8 shadow-sm flex-grow">
                                    <div>
                                        <div className="text-3xl font-bold text-[#0033AD]">3 Months</div>
                                        <div className="text-gray-600 text-sm">Implementation Time</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* CTA Button - Aligned to bottom right */}
                        <div className="w-full lg:w-1/5 flex justify-end lg:justify-end pb-2">
                            <Link
                                href="/demo"
                                className="inline-flex items-center gap-2 bg-[#1A368F] hover:bg-blue-800 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
                            >
                                Book a demo
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function GradientCheck() {
    return (
        <div className="w-14 h-14 flex-shrink-0 bg-white rounded-[18px] shadow-sm flex items-center justify-center transform -rotate-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20 6L9 17L4 12"
                    stroke="url(#gradient-check-v2)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <defs>
                    <linearGradient id="gradient-check-v2" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3B82F6" />
                        <stop offset="1" stopColor="#EC4899" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
