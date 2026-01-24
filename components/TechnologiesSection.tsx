import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface TechnologyItem {
    label: string;
    href?: string;
}

interface TechnologiesSectionProps {
    data: {
        title: string;
        technologies: (string | TechnologyItem)[];
    }
}

export function TechnologiesSection({ data }: TechnologiesSectionProps) {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 relative">
                {/* Header */}
                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10">{data.title}</h2>

                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {data.technologies.map((item, idx) => {
                            const isObject = typeof item === 'object';
                            const label = isObject ? item.label : item;
                            const href = isObject ? item.href : undefined;

                            const content = (
                                <>
                                    {label}
                                    <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full p-1">
                                        <ChevronRight className="w-4 h-4 text-white" />
                                    </div>
                                </>
                            );

                            const className = "bg-white px-8 py-4 rounded-full shadow-sm text-gray-700 hover:shadow-md transition-shadow flex items-center gap-3 text-lg font-medium";

                            if (href) {
                                return (
                                    <Link key={idx} href={href} className={className}>
                                        {content}
                                    </Link>
                                );
                            }

                            return (
                                <button key={idx} className={className}>
                                    {content}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
