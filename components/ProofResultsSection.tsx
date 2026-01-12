import { Check, ChevronRight, ChevronUp } from 'lucide-react';
import Link from 'next/link';

interface ProofResultsSectionProps {
    data?: {
        title?: string;
        description?: string;
        roiText?: string;
        stats?: Array<{
            value: string;
            label: string;
        }>;
    }
}

export function ProofResultsSection({ data }: ProofResultsSectionProps) {

    const fallback = {
        title: "Proof is in the results",
        description: "See how our customers are transforming their manufacturing operations with measurable improvements in efficiency and quality.",
        roiText: "The numbers don't lie. We tackle to your operations all backed,",
        stats: [
            { value: "45%", label: "uptime" },
            { value: "40%", label: "increase in\nproduction\nefficiency" },
            { value: "30%", label: "improvement\nin product\nquality" }
        ]
    };

    const content = { ...fallback, ...data };
    const stats = content.stats || fallback.stats;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="bg-gray-50 rounded-[32px] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Side: Text Content */}
                    <div className="lg:w-1/3 pt-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            {content.title}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {content.description}
                        </p>
                    </div>

                    {/* Right Side: Stats Grid */}
                    <div className="lg:w-2/3 w-full">
                        <div className="flex flex-col gap-6">

                            {/* ROI Guarantee Card */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-6">
                                <div className="shrink-0 flex items-center gap-4">
                                    <div>
                                        <span className="block text-4xl font-bold text-blue-900">100%</span>
                                        <span className="text-sm text-blue-600 font-medium">ROI guarantee</span>
                                    </div>
                                    <Check className="w-8 h-8 text-pink-500" strokeWidth={3} />
                                </div>
                                <p className="text-gray-600 border-l border-gray-100 pl-0 md:pl-6 md:border-l-2">
                                    {content.roiText}
                                </p>
                            </div>

                            {/* Vertical Stats Columns */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-end">

                                {stats.map((stat, idx) => (
                                    <div key={idx} className={`bg-white rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-2 duration-300 ${idx === 0 ? 'h-[340px]' : idx === 1 ? 'h-[300px]' : 'h-[260px]'}`}>
                                        <span className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</span>
                                        <span className="text-sm text-blue-600 font-medium mb-4 whitespace-pre-line">{stat.label}</span>
                                        <div className="mt-auto">
                                            <ChevronUp className="w-8 h-8 text-pink-500" strokeWidth={3} />
                                        </div>
                                    </div>
                                ))}

                                {/* Book Demo Button (Aligned bottom) */}
                                <div className="h-[220px] flex items-end">
                                    <Link href="/demo" className="group w-full bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-semibold py-5 px-6 rounded-3xl flex items-center justify-between transition-all shadow-lg hover:shadow-blue-200/50 hover:shadow-xl hover:-translate-y-1">
                                        <span className="text-lg">Book a demo</span>
                                        <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                                            <ChevronRight className="w-5 h-5" />
                                        </div>
                                    </Link>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
