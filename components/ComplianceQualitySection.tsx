import { ArrowRight, Check, Package, Search, Truck, Settings } from 'lucide-react';
import Image from 'next/image';

export function ComplianceQualitySection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Card 1: Compliance and Traceability */}
                    <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col h-full relative overflow-hidden">
                        <div className="mb-8 relative z-10">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                Compliance<br />and Traceability
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Ensure adherence to regulations and <span className="font-semibold text-gray-900">transparent tracking</span> of production processes, safeguarding quality and enabling swift issue resolution.
                            </p>
                        </div>

                        {/* Visual: Flowchart Image (Placeholder) */}
                        <div className="bg-gray-50 rounded-2xl p-6 mt-auto relative min-h-[260px] flex items-center justify-center">
                            <div className="relative w-full h-full min-h-[200px]">
                                <Image
                                    src="/images/compliance-flow.png"
                                    alt="Compliance and Traceability Flowchart"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex items-center text-sm font-semibold text-gray-900 cursor-pointer hover:text-blue-700 transition-colors">
                            See the overall Equipment Effectiveness
                        </div>
                    </div>

                    {/* Card 2: Quality Management and Control */}
                    <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col h-full relative overflow-hidden">
                        <div className="mb-8 relative z-10">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                Quality Management<br />and Control
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Prioritizes <span className="font-semibold text-gray-900">quality throughout the manufacturing process</span>, facilitating quality standards enforcement, inspections, and real-time quality tracking.
                            </p>
                        </div>

                        {/* Visual: Dashboard Image (Placeholder) */}
                        <div className="mt-auto relative min-h-[200px]">
                            <div className="relative w-full h-[250px]">
                                <Image
                                    src="/images/quality-dashboard.png"
                                    alt="Quality Management Dashboard"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
