import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface Feature {
    _id: string;
    title: string;
    description: string;
    backgroundColor?: string;
    mockupImage?: {
        asset?: {
            _id: string;
            url: string;
        };
        alt?: string;
    };
}

interface FeatureBlockProps {
    features?: Feature[];
}

export function FeatureBlock({ features }: FeatureBlockProps) {
    // Fallback to single hardcoded feature if no data
    const defaultFeature: Feature = {
        _id: "default",
        title: "Made to simplify production and increase performance",
        description: "It is a Manufacturing Execution System (MES) created to integrate and automate activities in production environments, from the factory floor to decision-making managers.",
    };

    const featuresToRender = features && features.length > 0 ? features : [defaultFeature];

    return (
        <>
            {featuresToRender.map((feature) => (
                <section key={feature._id} className="py-12 md:py-20 px-4 md:px-6">
                    <div className="container mx-auto">
                        <div
                            className="rounded-3xl md:rounded-[2.5rem] p-6 md:p-16 overflow-hidden relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                        >
                            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
                                {/* Left Content */}
                                <div className="text-white max-w-xl">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                                        {feature.title}
                                    </h2>
                                    <p className="text-white/90 text-base md:text-lg leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Right Content - Dashboard with Charts */}
                                <div className="relative mt-6 lg:mt-0 min-h-[450px]">

                                    {/* Grafico_2 - Main Performance Chart (Background/Right) */}
                                    <div className="relative w-full -mt-8">
                                        <Image
                                            src="/images/Grafico_2.png"
                                            alt="Performance metrics"
                                            width={700}
                                            height={450}
                                            unoptimized
                                            className="w-full h-auto rounded-2xl shadow-2xl"
                                        />
                                    </div>

                                    {/* Grafico_1 - Floating OEE Chart (Foreground/Left) */}
                                    <div className="hidden lg:block absolute top-[65%] -left-20 transform -translate-y-1/2 w-96 z-10 overflow-hidden rounded-2xl">
                                        <Image
                                            src="/images/Grafico_1.png"
                                            alt="OEE Performance"
                                            width={450}
                                            height={600}
                                            unoptimized
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
