import React, { ReactNode } from 'react';

interface AIFeatureSectionProps {
    icon: ReactNode;
    title: string;
    description: string;
    cards: string[];
    bottomNote?: string;
}

export function AIFeatureSection({
    icon,
    title,
    description,
    cards,
    bottomNote
}: AIFeatureSectionProps) {
    return (
        <section className="py-12 md:py-16 max-w-6xl mx-auto px-4">
            {/* Header: Icon + Title/Description Side by Side */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
                {/* Icon */}
                <div className="shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20">
                        {icon}
                    </div>
                </div>

                {/* Title + Description */}
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-3">
                        {title}
                    </h2>

                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>

            {/* Cards Grid - 3 columns */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
                {cards.map((cardText, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
                    >
                        <p className="text-base md:text-lg font-bold text-slate-900 leading-snug">
                            {cardText}
                        </p>
                    </div>
                ))}
            </div>

            {/* Bottom Note */}
            {bottomNote && (
                <p className="text-sm text-blue-700 font-medium text-center md:text-left">
                    {bottomNote}
                </p>
            )}
        </section>
    );
}
