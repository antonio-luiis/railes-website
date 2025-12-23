import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface SolutionCard {
    title: string;
    description: string;
    type: 'list' | 'image';
    listItems?: string[];
    image?: {
        asset: {
            url: string;
        };
        alt?: string;
    };
}

interface SolutionsProps {
    data: {
        title: string;
        industries: string[];
        cards: SolutionCard[];
    };
}

export function SolutionsSection({ data }: SolutionsProps) {
    if (!data) return null;

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">{data.title}</h2>

                    {/* Industry Pills */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {data.industries?.map((industry, index) => (
                            <div
                                key={index}
                                className="bg-white px-6 py-3 rounded-full shadow-sm text-gray-700 hover:shadow-md transition-shadow cursor-pointer flex items-center gap-2"
                            >
                                {industry}
                                <ArrowRight className="w-4 h-4 text-gray-400" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content Card */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
                    <div className="space-y-16">
                        {data.cards?.map((card, index) => (
                            <div key={index} className="grid md:grid-cols-[300px_1fr] gap-8 items-start">

                                {/* Text Side */}
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {card.description}
                                    </p>
                                </div>

                                {/* Content Side */}
                                <div className="bg-gray-50 rounded-xl p-6 w-full">
                                    {card.type === 'image' && card.image?.asset?.url ? (
                                        <div className="relative w-full h-48 md:h-64">
                                            <Image
                                                src={card.image.asset.url}
                                                alt={card.image.alt || card.title}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {card.listItems?.map((item, idx) => (
                                                <div key={idx} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm text-center h-full">
                                                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-3 text-blue-600">
                                                        {/* Generic Icon based on index/random for now since we don't have icon selection in Sanity yet */}
                                                        <div className="w-5 h-5 bg-blue-600 rounded-sm opacity-20" />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
