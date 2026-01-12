import { ArrowRight, Check, Package, Search, Truck, Settings } from 'lucide-react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

interface ComplianceQualitySectionProps {
    data?: {
        complianceTitle?: string;
        complianceDescription?: string;
        complianceImage?: any;
        qualityTitle?: string;
        qualityDescription?: string;
        qualityImage?: any;
    }
}

export function ComplianceQualitySection({ data }: ComplianceQualitySectionProps) {
    const fallback = {
        complianceTitle: "Compliance and Traceability",
        complianceDescription: "Ensure full traceability and compliance with industry standards through automated data tracking and reporting.",
        qualityTitle: "Quality Management and Control",
        qualityDescription: "Maintain high quality standards with real-time monitoring and automated quality control processes."
    };

    const content = { ...fallback, ...data };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Card 1: Compliance and Traceability */}
                    <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col h-full relative overflow-hidden">
                        <div className="mb-8 relative z-10">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                {content.complianceTitle}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {content.complianceDescription}
                            </p>
                        </div>

                        {/* Visual: Flowchart Image */}
                        <div className="bg-gray-50 rounded-2xl p-6 mt-auto relative min-h-[260px] flex items-center justify-center">
                            <div className="relative w-full h-full min-h-[200px]">
                                {content.complianceImage && (
                                    <Image
                                        src={urlForImage(content.complianceImage).url()}
                                        alt={content.complianceImage.alt || "Compliance Flowchart"}
                                        fill
                                        className="object-contain"
                                    />
                                )}
                            </div>
                        </div>

                        <div className="mt-6 flex items-center text-sm font-semibold text-gray-900 cursor-pointer hover:text-blue-700 transition-colors">
                            See the overall Equipment Effectiveness
                        </div>
                    </div>

                    {/* Card 2: Quality Management and Control */}
                    <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col h-full relative overflow-hidden">
                        <div className="mb-8 relative z-10">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                {content.qualityTitle}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {content.qualityDescription}
                            </p>
                        </div>

                        {/* Visual: Dashboard Image */}
                        <div className="mt-auto relative min-h-[200px]">
                            <div className="relative w-full h-[250px]">
                                {content.qualityImage && (
                                    <Image
                                        src={urlForImage(content.qualityImage).url()}
                                        alt={content.qualityImage.alt || "Quality Dashboard"}
                                        fill
                                        className="object-contain"
                                    />
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
