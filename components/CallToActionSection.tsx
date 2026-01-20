import { ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface CallToActionSectionProps {
    data?: {
        badgeText?: string;
        title?: string;
        highlightedTitle?: string;
        titleSuffix?: string;
        description?: string;
        primaryButtonText?: string;
        primaryButtonLink?: string;
        secondaryButtonText?: string;
        secondaryButtonLink?: string;
    }
}

export function CallToActionSection({ data }: CallToActionSectionProps) {
    const fallback = {
        badgeText: "Ready to transform your factory?",
        title: "Railes MES can enhance efficiency",
        highlightedTitle: "",
        titleSuffix: "",
        description: "Discover how our solution can boost your operations.",
        primaryButtonText: "Book a demo",
        primaryButtonLink: "/demo",
        secondaryButtonText: "Contact Sales",
        secondaryButtonLink: "/contact",
    };

    const content = { ...fallback, ...data };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with Gradient and Noise/Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(-60deg,#004eab,#038efd)] z-0"></div>

            {/* Abstract Decorative Shapes */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-5xl mx-auto">

                    {/* Tagline / Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-200 text-sm font-medium mb-8">
                        <Sparkles className="w-4 h-4" />
                        <span>{content.badgeText}</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                        {content.title}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">{content.highlightedTitle}</span> {content.titleSuffix}
                    </h2>

                    <p className="text-blue-100/80 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                        {content.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href={content.primaryButtonLink || "/demo"} className="group w-full sm:w-auto bg-white hover:bg-blue-50 text-blue-900 font-bold py-5 px-10 rounded-full flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                            <span className="text-lg">{content.primaryButtonText}</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link href={content.secondaryButtonLink || "/contact"} className="group w-full sm:w-auto bg-transparent border border-white/20 hover:bg-white/10 text-white font-semibold py-5 px-10 rounded-full flex items-center justify-center gap-3 transition-all">
                            <span>{content.secondaryButtonText}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
