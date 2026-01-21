import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function IndustrySolutionsSimple() {
    const industries = [
        { name: 'Pharmaceuticals Manufacturing', href: '/industries/pharmaceuticals' },
        { name: 'Automotive Manufacturing', href: '/industries/automotive' },
        { name: 'Packaging Manufacturing', href: '/industries/packaging' },
        { name: 'Aerospace & Defense Manufacturing', href: '/industries/aerospace-and-defense' },
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Header */}
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
                        Your Industry solutions
                    </h2>

                    {/* Industry Pills Grid */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {industries.map((industry) => (
                            <Link
                                key={industry.name}
                                href={industry.href}
                                className="group inline-flex items-center gap-3 bg-white hover:bg-blue-50 px-6 py-4 rounded-full shadow-sm hover:shadow-md transition-all border border-slate-100 hover:border-blue-200"
                            >
                                <span className="text-slate-900 font-medium text-base">
                                    {industry.name}
                                </span>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <ChevronRight className="w-4 h-4 text-white" />
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
