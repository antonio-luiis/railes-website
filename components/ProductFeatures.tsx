import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ProductFeaturesProps {
    title?: string;
    excludeHref?: string;
    features?: Array<{
        name: string;
        href: string;
    }>;
}

export function ProductFeatures({ title = "Explore Our Features", excludeHref, features }: ProductFeaturesProps) {
    const defaultFeatures = [
        { name: 'Production Management', href: '/product/production-management' },
        { name: 'Quality Management', href: '/product/quality-management' },
        { name: 'Digital Record', href: '/product/digital-record' },
        { name: 'Monitoring', href: '/product/monitoring' },
        { name: 'Automation & Integration', href: '/product/automation-integration' },
    ];

    const featureList = features || defaultFeatures;

    // Filter out the current page if excludeHref is provided
    const filteredFeatures = excludeHref
        ? featureList.filter(feature => feature.href !== excludeHref)
        : featureList;

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {filteredFeatures.map((feature) => (
                        <Link
                            key={feature.name}
                            href={feature.href}
                            className="bg-white px-8 py-4 rounded-full shadow-sm text-gray-700 hover:shadow-md transition-shadow flex items-center gap-3 text-lg font-medium"
                        >
                            {feature.name}
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
