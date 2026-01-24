import type { Metadata } from 'next';
import { FileText, AlertTriangle, Clock, Search, TrendingDown, Database, Shield, Activity } from 'lucide-react';
import { CallToActionSection } from '@/components/CallToActionSection';

export const metadata: Metadata = {
    title: 'Use Cases | Railes MES',
    description: 'Discover how RAILES MES solves real manufacturing challenges across industries.',
};

export default function UseCasesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto max-w-5xl text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Framework for digital records:
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0066eb] mb-12">
                        from log books to eBR
                    </h2>

                    {/* Card with Production Image */}
                    <div className="max-w-xl mx-auto mb-8">
                        <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 rounded-3xl">
                            <div className="bg-white rounded-[22px] p-6">
                                <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[16/9] flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                        <div className="space-y-2 text-left">
                                            <p className="text-sm font-semibold text-gray-900">Production 2223398</p>
                                            <p className="text-xs text-gray-600">Operation: XDP-3 Lavanda</p>
                                            <p className="text-xs text-gray-500">📅 22/06/2025 10:30  ⏱ 02:30</p>
                                            <p className="text-xs text-gray-500">👤 REF: CD00022223398</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description Text */}
                    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        In highly regulated industries like pharmaceuticals, many manufacturers still rely on paper-based
                        systems: manual logbooks, batch records, and checklists, to document critical operations.
                        While familiar, these outdated methods introduce errors, delays, and compliance risks
                        that no modern operation can afford.
                    </p>
                </div>
            </section>

            {/* Risks Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0066eb] text-center mb-4">
                        The Risks and Inefficiencies of Paper Records in Pharma
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Pharmaceutical companies that still use paper-based documentation face
                        a long list of challenges that impact both compliance and operational efficiency:
                    </p>

                    {/* Grid of Risk Cards */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Row 1 */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <AlertTriangle className="w-8 h-8 text-orange-500 mb-4" />
                            <p className="text-gray-900 font-semibold text-sm leading-relaxed">
                                Manual data entry increases the risk of errors, inconsistencies, and missing information.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <Clock className="w-8 h-8 text-blue-500 mb-4" />
                            <p className="text-gray-900 font-semibold text-sm leading-relaxed">
                                Audit readiness becomes reactive, with time-consuming record retrieval.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <Shield className="w-8 h-8 text-red-500 mb-4" />
                            <p className="text-gray-900 font-semibold text-sm leading-relaxed">
                                Difficult to maintain compliance with FDA 21 CFR Part 11, EU Annex 11, and other regulations.
                            </p>
                        </div>

                        {/* Row 2 */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <Database className="w-8 h-8 text-purple-500 mb-4" />
                            <p className="text-gray-900 font-semibold text-sm leading-relaxed">
                                Accessing historical data for trend analysis or deviations is slow and inefficient.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <FileText className="w-8 h-8 text-green-500 mb-4" />
                            <p className="text-gray-900 font-semibold text-sm leading-relaxed">
                                Batch reviews and approvals are delayed due to manual handling.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <Search className="w-8 h-8 text-indigo-500 mb-4" />
                            <p className="text-gray-900 font-semibold text-sm leading-relaxed">
                                Traceability is limited, making investigations and root-cause analysis difficult.
                            </p>
                        </div>

                        {/* Row 3 - Bottom cards with gradient border */}
                        <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] rounded-2xl">
                            <div className="bg-white rounded-2xl p-6 h-full">
                                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                                <p className="text-gray-900 font-semibold text-sm leading-relaxed">
                                    Audits require extensive documentation handling, increasing stress and prep time.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] rounded-2xl">
                            <div className="bg-white rounded-2xl p-6 h-full">
                                <TrendingDown className="w-8 h-8 text-blue-600 mb-4" />
                                <p className="text-gray-900 font-semibold text-sm leading-relaxed">
                                    Lack of integration with ERP, QMS, or equipment systems leads to siloed information.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] rounded-2xl">
                            <div className="bg-white rounded-2xl p-6 h-full">
                                <Activity className="w-8 h-8 text-blue-600 mb-4" />
                                <p className="text-gray-900 font-semibold text-sm leading-relaxed">
                                    Overall, paper-based systems become a bottleneck in an environment demanding speed, accuracy, and transparency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CallToActionSection
                data={{
                    badgeText: "Ready to Go Digital?",
                    title: "Transform Your Documentation",
                    highlightedTitle: "Today",
                    titleSuffix: "",
                    description: "Discover how RAILES MES can help you transition from paper to digital records seamlessly.",
                    primaryButtonText: "Book a Demo",
                    primaryButtonLink: "/demo",
                    secondaryButtonText: "Contact Sales",
                    secondaryButtonLink: "/contact"
                }}
            />
        </main>
    );
}
