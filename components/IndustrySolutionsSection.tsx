import { ChevronRight, ClipboardList, Users, Megaphone, Clock, ShieldCheck, Pencil, RefreshCw, SquareArrowOutUpRight, BrainCircuit, FastForward, FileText, Cog, BarChart3, Route } from 'lucide-react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

interface IndustrySolutionsSectionProps {
    data?: {
        title?: string;
        industries?: string[];
        mainImage?: any;
        visibilityTitle?: string;
        visibilityDescription?: string;
        executionTitle?: string;
        executionDescription?: string;
        executionImage?: any;
        qualityTitle?: string;
        qualityDescription?: string;
        improvementTitle?: string;
        improvementDescription?: string;
    }
}

const visibilityItems = [
    { icon: ClipboardList, label: "Work Orders" },
    { icon: Users, label: "Operators" },
    { icon: Megaphone, label: "Work Centers" },
    { icon: Clock, label: "Downtimes" }
];

const executionItems = [
    { icon: FileText, label: "Instructions" },
    { icon: Cog, label: "Operations" },
    { icon: BarChart3, label: "Reporting" },
    { icon: Route, label: "Routing" }
];

export function IndustrySolutionsSection({ data }: IndustrySolutionsSectionProps) {
    const fallback = {
        title: "Your Industry solutions",
        visibilityTitle: "Visibility",
        visibilityDescription: "See everything happening on the shop floor in real time , from work orders, machines, operators, downtimes, and performance. A live control panel for your entire operation.",
        executionTitle: "Execution",
        executionDescription: "Digitize production processes. Clear instructions, error-free data entry, full traceability, and standardized operations, all executed directly by the shop floor teams.",
        qualityTitle: "Quality",
        qualityDescription: "Control and record quality at every step. Inline inspections, nonconformities, and action plans, with complete traceability by lot, operator, and equipment.",
        improvementTitle: "Improvement",
        improvementDescription: "Turn data into decisions. Analyze root causes of downtime, compare shifts, identify losses , with automated reports and dashboards that power continuous improvement.",
        industries: [
            "Pharmaceuticals Manufacturing",
            "Automotive Manufacturing",
            "Packaging Manufacturing",
            "Aerospace & Defense Manufacturing"
        ]
    };

    const content = { ...fallback, ...data };

    const industries = content.industries || fallback.industries;

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 relative">

                {/* Header and Industry Pills */}
                <div className="text-center mb-40 relative z-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10">{content.title}</h2>

                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {/* Render industries as buttons - simplified layout for dynamic list */}
                        <div className="flex flex-wrap justify-center gap-4 w-full">
                            {industries.map((ind, idx) => (
                                <button key={idx} className="bg-white px-8 py-4 rounded-full shadow-sm text-gray-700 hover:shadow-md transition-shadow flex items-center gap-3 text-lg font-medium">
                                    {ind}
                                    <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full p-1">
                                        <ChevronRight className="w-4 h-4 text-white" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col gap-0 items-center relative z-10">

                    {/* Top: Person Image */}
                    {/* <div className="relative w-full h-[550px] -translate-x-52 -translate-y-20 -mb-64 z-0 pointer-events-none">
                        {/* Background Blobs (Decoration) *\/}
                        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                        <div className="relative h-full w-full">
                            {content.mainImage && (
                                <Image
                                    src={content.mainImage.asset?.url || urlForImage(content.mainImage).url()}
                                    alt={content.mainImage.alt || "Industry Professional"}
                                    fill
                                    className="object-contain object-left-bottom"
                                />
                            )}
                        </div>
                    </div> */}

                    {/* Bottom: Content Card (Full Width) */}
                    <div className="w-full bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-gray-100 relative z-10">

                        {/* Visibility Section */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.visibilityTitle}</h3>
                            <p className="text-gray-600 mb-8 w-full">
                                {content.visibilityDescription}
                            </p>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {visibilityItems.map((item, idx) => {
                                    // Custom colors matching the mockup (Pink, Blue, Purple, Red)
                                    // Text is dark (gray-900), Icon is colored, Background is light pastel
                                    const styles = [
                                        { bg: "bg-pink-50", icon: "text-pink-600" }, // Work Orders
                                        { bg: "bg-blue-50", icon: "text-blue-600" }, // Operators
                                        { bg: "bg-purple-50", icon: "text-purple-600" }, // Work Centers
                                        { bg: "bg-red-50", icon: "text-red-500" }, // Downtimes
                                    ];
                                    const style = styles[idx % styles.length];

                                    return (
                                        <div key={idx} className={`flex items-center gap-4 ${style.bg} p-6 rounded-2xl hover:shadow-md transition-all cursor-pointer group`}>
                                            <item.icon className={`w-5 h-5 ${style.icon} group-hover:scale-110 transition-transform`} />
                                            <span className="text-sm font-bold text-gray-900 leading-tight">{item.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Execution Section */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.executionTitle}</h3>
                            <p className="text-gray-600 mb-8 w-full">
                                {content.executionDescription}
                            </p>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {executionItems.map((item, idx) => {
                                    // Colors matching global design (Blue, Purple, Pink, Indigo)
                                    const styles = [
                                        { bg: "bg-blue-50", icon: "text-blue-600" }, // Instructions
                                        { bg: "bg-purple-50", icon: "text-purple-600" }, // Operations
                                        { bg: "bg-pink-50", icon: "text-pink-600" }, // Reporting
                                        { bg: "bg-indigo-50", icon: "text-indigo-600" }, // Routing
                                    ];
                                    const style = styles[idx % styles.length];

                                    return (
                                        <div key={idx} className={`flex items-center gap-4 ${style.bg} p-6 rounded-2xl hover:shadow-md transition-all cursor-pointer group`}>
                                            <item.icon className={`w-5 h-5 ${style.icon} group-hover:scale-110 transition-transform`} />
                                            <span className="text-sm font-bold text-gray-900 leading-tight">{item.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quality Section */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.qualityTitle}</h3>
                            <p className="text-gray-600 mb-8 w-full">
                                {content.qualityDescription}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-center justify-center gap-3 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors cursor-pointer group">
                                    <ShieldCheck className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                                    <span className="text-base font-bold text-blue-900">Inspections</span>
                                </div>
                                <div className="flex items-center justify-center gap-3 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors cursor-pointer group">
                                    <Pencil className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                                    <span className="text-base font-bold text-blue-900">Action Plans</span>
                                </div>
                                <div className="flex items-center justify-center gap-3 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors cursor-pointer group">
                                    <RefreshCw className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                                    <span className="text-base font-bold text-blue-900">Traceability</span>
                                </div>
                            </div>
                        </div>

                        {/* Improvement Section */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.improvementTitle}</h3>
                            <p className="text-gray-600 mb-8 w-full">
                                {content.improvementDescription}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-center justify-center gap-3 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors cursor-pointer group">
                                    <SquareArrowOutUpRight className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                                    <span className="text-base font-bold text-blue-900">Suggestions</span>
                                </div>
                                <div className="flex items-center justify-center gap-3 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors cursor-pointer group">
                                    <BrainCircuit className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                                    <span className="text-base font-bold text-blue-900">Optimization</span>
                                </div>
                                <div className="flex items-center justify-center gap-3 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors cursor-pointer group">
                                    <FastForward className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                                    <span className="text-base font-bold text-blue-900">Prevention</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
