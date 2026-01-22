import { Component, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

interface CustomizationAISectionProps {
    data?: {
        customizationTitle?: string;
        customizationDescription?: string;
        customizationImage?: any;
        aiLabel?: string;
        aiTitle?: string;
        aiDescription?: string;
        aiImage?: any;
    }
}

export function CustomizationAISection({ data }: CustomizationAISectionProps) {
    const fallback = {
        customizationTitle: "Customization and Flexibility",
        customizationDescription: "Customization options, ensuring seamless integration with existing systems and adaptation to diverse manufacturing processes.",
        aiLabel: "Advanced data analytics and AI",
        aiTitle: "Advanced Data Analytics and Artificial Intelligence",
        aiDescription: "Leverage the power of AI to gain deep insights into your production data and predict future trends."
    };

    const content = { ...fallback, ...data };

    return (
        <section className="pb-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">

                    {/* Card 1: Customization and Flexibility */}
                    <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-sm flex flex-col relative overflow-hidden">
                        <div className="mb-6 relative z-10 max-w-md">
                            <h3 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                                {content.customizationTitle}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {content.customizationDescription}
                            </p>
                        </div>

                        {/* Visual: Gradient Bar with Icons Image */}
                        <div className="relative h-[250px] md:h-[300px] flex items-center justify-center">
                            <div className="relative w-full h-full">
                                {content.customizationImage && (
                                    <Image
                                        src={content.customizationImage.asset?.url || urlForImage(content.customizationImage).url()}
                                        alt={content.customizationImage.alt || "Customization Visual"}
                                        fill
                                        className="object-contain"
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Wrapper for Card 2 to hold Label and Card */}
                    <div className="flex flex-col gap-4">
                        {/* Top Label Outside Card */}
                        <div className="flex items-center gap-2 mb-2 pl-2">
                            <Sparkles className="w-5 h-5 text-blue-600 fill-blue-600" />
                            <span className="text-blue-900 font-bold text-sm tracking-wide">{content.aiLabel}</span>
                        </div>

                        {/* Card 2: Advanced Data Analytics and AI */}
                        <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-sm flex flex-col relative overflow-hidden">
                            <div className="mb-6 relative z-10">
                                <h3 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                                    {content.aiTitle}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {content.aiDescription}
                                </p>
                            </div>

                            {/* Visual: Chat Interface Image */}
                            <div className="relative h-[250px] md:h-[300px]">
                                <div className="relative w-full h-full">
                                    {content.aiImage && (
                                        <Image
                                            src={content.aiImage.asset?.url || urlForImage(content.aiImage).url()}
                                            alt={content.aiImage.alt || "AI Interface"}
                                            fill
                                            className="object-contain object-bottom"
                                        />
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
