import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface IndustryPillsProps {
    title?: string;
    industries?: Array<{
        name: string;
        href: string;
    }>;
}

export function IndustryPills({ title = "Your Industry solutions", industries }: IndustryPillsProps) {
    const defaultIndustries = [
        { name: 'Pharmaceuticals Manufacturing', href: '/industries/pharmaceuticals' },
        { name: 'Automotive Manufacturing', href: '/industries/automotive' },
        { name: 'Packaging Manufacturing', href: '/industries/packaging' },
        { name: 'Aerospace & Defense Manufacturing', href: '/industries/aerospace-and-defense' },
    ];

    const industryList = industries || defaultIndustries;

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {industryList.map((industry) => (
                        <Link
                            key={industry.name}
                            href={industry.href}
                            className="bg-white px-8 py-4 rounded-full shadow-sm text-gray-700 hover:shadow-md transition-shadow flex items-center gap-3 text-lg font-medium"
                        >
                            {industry.name}
                            <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full p-1">
                                <ChevronRight className="w-4 h-4 text-white" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
