import { ChevronDown } from "lucide-react";

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
        backgroundColor: "#1e3a8a",
    };

    const featuresToRender = features && features.length > 0 ? features : [defaultFeature];

    return (
        <>
            {featuresToRender.map((feature) => (
                <section key={feature._id} className="py-12 md:py-20 px-4 md:px-6">
                    <div className="container mx-auto">
                        <div
                            className="rounded-3xl md:rounded-[2.5rem] p-6 md:p-16 overflow-hidden relative"
                            style={{ backgroundColor: feature.backgroundColor || "#1e3a8a" }}
                        >
                            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
                                {/* Left Content */}
                                <div className="text-white max-w-xl">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                                        {feature.title}
                                    </h2>
                                    <p className="text-blue-100 text-base md:text-lg leading-relaxed opacity-90">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Right Content - Dashboard Mockup */}
                                <div className="relative mt-6 lg:mt-0">
                                    {/* Main Dashboard Card (Background) */}
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 w-full aspect-[4/3] relative overflow-hidden">
                                        <div className="absolute top-4 right-4">
                                            <div className="w-6 h-6 md:w-8 md:h-8 bg-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-pink-500/20">
                                                <div className="w-3 h-3 md:w-4 md:h-4 text-white">✦</div>
                                            </div>
                                        </div>

                                        {/* Mock Charts */}
                                        <div className="mt-8 space-y-4 md:space-y-6 opacity-50">
                                            <div className="h-px w-full bg-white/20" />
                                            <div className="h-px w-full bg-white/20" />
                                            <div className="h-px w-full bg-white/20" />
                                            {/* Wave line */}
                                            <svg className="w-full h-16 md:h-20 text-orange-300 fill-none stroke-current stroke-2" viewBox="0 0 100 20" preserveAspectRatio="none">
                                                <path d="M0 10 Q 10 5, 20 10 T 40 10 T 60 15 T 80 5 T 100 10" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Floating OEE Card (Foreground) - Hidden on mobile */}
                                    <div className="hidden lg:block absolute top-1/2 -left-20 transform -translate-y-1/3 bg-white rounded-2xl p-6 shadow-2xl w-72 text-gray-900">
                                        <div className="mb-4">
                                            <h3 className="text-blue-900 font-bold text-lg">OEE</h3>
                                            <p className="text-sm text-gray-500 leading-snug">
                                                See the overall Equipment Effectiveness
                                            </p>
                                        </div>

                                        {/* Circular Progress */}
                                        <div className="flex justify-center my-6 relative">
                                            <div className="w-32 h-32 rounded-full border-8 border-gray-100 flex items-center justify-center relative">
                                                <svg className="absolute inset-0 w-full h-full -rotate-90 transform">
                                                    <circle
                                                        cx="64"
                                                        cy="64"
                                                        r="58"
                                                        stroke="currentColor"
                                                        strokeWidth="8"
                                                        fill="transparent"
                                                        className="text-blue-600"
                                                        strokeDasharray="364"
                                                        strokeDashoffset="54" // 85%
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                <span className="text-3xl font-bold text-blue-900">85%</span>
                                            </div>
                                        </div>

                                        <div className="text-center mb-2">
                                            <span className="text-gray-600 font-medium">Effectiveness</span>
                                        </div>

                                        {/* Month Selector */}
                                        <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                                            July <ChevronDown className="w-4 h-4 text-gray-400" />
                                        </button>
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
