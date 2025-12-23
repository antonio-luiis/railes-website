import { urlForImage } from "@/sanity/lib/image";

interface FeatureCard {
    _id: string;
    title: string;
    subtitle?: string;
    description: string;
    highlightedText?: string;
    mockupImage?: {
        asset?: {
            _id: string;
            url: string;
        };
        alt?: string;
    };
    badge?: string;
    bottomText?: string;
    order: number;
}

interface FeaturesGridProps {
    cards?: FeatureCard[];
}

export function FeaturesGrid({ cards }: FeaturesGridProps) {
    // Fallback data
    const defaultCards: FeatureCard[] = [
        {
            _id: "1",
            title: "Compliance",
            subtitle: "and Traceability",
            description: "Ensure adherence to regulations and transparent tracking of production processes, safeguarding quality and enabling swift issue resolution.",
            highlightedText: "transparent tracking",
            order: 1,
        },
        {
            _id: "2",
            title: "Quality Management",
            subtitle: "and Control",
            description: "Prioritizes quality throughout the manufacturing process, facilitating quality standards enforcement, inspections, and real-time quality tracking.",
            highlightedText: "quality throughout the manufacturing process",
            order: 2,
        },
        {
            _id: "3",
            title: "Customization",
            subtitle: "and Flexibility",
            description: "Customization options, ensuring seamless integration with existing systems and adaptation to diverse manufacturing processes.",
            highlightedText: "seamless integration",
            order: 3,
        },
        {
            _id: "4",
            title: "Advanced Data Analytics",
            subtitle: "and Artificial Intelligence",
            description: "Leveraging advanced data analytics and AI for learning and well-informed decision-making.",
            badge: "⭐ Advanced data analytics and AI",
            order: 4,
        },
    ];

    const featureCards = cards && cards.length > 0 ? cards : defaultCards;

    return (
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {featureCards.map((card) => {
                        // Split description to insert highlighted text
                        const descParts = card.highlightedText && card.description.includes(card.highlightedText)
                            ? card.description.split(card.highlightedText)
                            : [card.description];

                        return (
                            <div
                                key={card._id}
                                className="bg-gray-100 rounded-3xl p-8 md:p-10 relative overflow-hidden"
                            >
                                {/* Badge */}
                                {card.badge && (
                                    <div className="mb-6 text-blue-600 text-sm font-medium flex items-center gap-2">
                                        {card.badge}
                                    </div>
                                )}

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                    {card.title}
                                </h3>
                                {card.subtitle && (
                                    <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                        {card.subtitle}
                                    </h4>
                                )}

                                {/* Description with highlighted text */}
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    {descParts[0]}
                                    {card.highlightedText && descParts.length > 1 && (
                                        <>
                                            <span className="font-bold text-gray-900">
                                                {card.highlightedText}
                                            </span>
                                            {descParts[1]}
                                        </>
                                    )}
                                </p>

                                {/* Mockup Image */}
                                <div className="mt-8 bg-white/50 rounded-2xl p-6 min-h-[200px] flex items-center justify-center border border-gray-200 overflow-hidden">
                                    {card.mockupImage?.asset?.url ? (
                                        <img
                                            src={card.mockupImage.asset.url}
                                            alt={card.mockupImage.alt || card.title}
                                            className="w-full h-full object-contain"
                                        />
                                    ) : (
                                        <div className="text-gray-400 text-sm text-center">
                                            {card.order === 1 && "Process Flow Diagram"}
                                            {card.order === 2 && "Quality Metrics Dashboard"}
                                            {card.order === 3 && "Customization Interface"}
                                            {card.order === 4 && "AI Chat Interface"}
                                        </div>
                                    )}
                                </div>

                                {/* Bottom text */}
                                {card.bottomText && (
                                    <div className="mt-6 text-sm font-medium text-gray-700">
                                        {card.bottomText}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
