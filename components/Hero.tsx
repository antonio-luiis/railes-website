import { LogoMarquee } from "./LogoMarquee";
import { urlForImage } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface HeroProps {
    data?: {
        title?: string;
        highlightedWords?: string[];
        description?: string;
        heroImage?: {
            asset?: {
                _id: string;
                url: string;
            };
            alt?: string;
        };
        videoUrl?: string;
    };
}

export function Hero({ data }: HeroProps) {
    // Fallback content
    const title = data?.title || "See. Control. Optimize All in one platform";
    const description = data?.description || "Railes MES allows you to monitor your production in real time, manage processes, optimize operations with AI, and automate the entire manufacturing workflow.";
    const highlightedWords = data?.highlightedWords || ["Optimize", "platform"];
    const imageUrl = data?.heroImage?.asset?.url || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80";
    const imageAlt = data?.heroImage?.alt || "Factory Automation";

    // Helper to render title with highlighted words
    const renderTitle = () => {
        const words = title.split(' ');
        return words.map((word, index) => {
            const cleanWord = word.replace(/[.,!?]/g, '');
            const isHighlighted = highlightedWords.includes(cleanWord);

            if (isHighlighted) {
                return (
                    <span key={index} className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        {word}{' '}
                    </span>
                );
            }
            return <span key={index}>{word}{' '}</span>;
        });
    };

    return (
        <section className="pt-24 md:pt-32 pb-10 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
                    {/* Left Content */}
                    <div className="max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4 md:mb-6 text-railes-blue">
                            {renderTitle()}
                        </h1>
                        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-lg leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Right Image/Video */}
                    <div className="relative">
                        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gray-900 group cursor-pointer">
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50 z-10" />
                            <img
                                src={imageUrl}
                                alt={imageAlt}
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Play/Pause UI */}
                            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-20 flex items-center gap-2 text-white/80 text-xs md:text-sm font-medium">
                                <button className="flex items-center gap-2 hover:text-white transition-colors">
                                    Pause <div className="w-4 h-4 border border-current rounded-full flex items-center justify-center text-[10px]">||</div>
                                </button>
                            </div>
                        </div>

                        {/* Decorative blurred blobs */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 md:w-32 md:h-32 bg-purple-500/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-24 h-24 md:w-32 md:h-32 bg-blue-500/20 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>

            {/* Marquee */}
            <LogoMarquee />
        </section>
    );
}
