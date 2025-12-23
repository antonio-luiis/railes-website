import { ChevronRight, ClipboardList, Users, Megaphone, Clock, ShieldCheck, Pencil, RefreshCw, SquareArrowOutUpRight, BrainCircuit, FastForward } from 'lucide-react';
import Image from 'next/image';

const industries = [
    "Pharmaceuticals Manufacturing",
    "Automotive Manufacturing",
    "Packaging Manufacturing",
    "Aerospace & Defense Manufacturing"
];

const visibilityItems = [
    { icon: ClipboardList, label: "Work Orders" },
    { icon: Users, label: "Operators" },
    { icon: Megaphone, label: "Work Carers" }, // Assuming 'Work Carers' based on icon/text similarity, or maybe 'Work Centers' if that makes more sense in context? Text looks like 'Work Carers' or 'Work Centers'. I'll stick to 'Work Centers' which is common in manufacturing, but the image says 'Work Carers'? It looks like 'Work Careers' or 'Work Carers'. Let's check the image closely. It says "Work Carers". I will use that.
    { icon: Clock, label: "Downtimes" }
];

export function IndustrySolutionsSection() {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 relative">

                {/* Header and Industry Pills */}
                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10">Your Industry solutions</h2>

                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {/* Row 1 */}
                        <div className="w-full flex justify-center mb-2">
                            <button className="bg-white px-8 py-4 rounded-full shadow-sm text-gray-700 hover:shadow-md transition-shadow flex items-center gap-3 text-lg font-medium">
                                {industries[0]}
                                <div className="bg-gray-100 rounded-full p-1">
                                    <ChevronRight className="w-4 h-4 text-gray-500" />
                                </div>
                            </button>
                        </div>

                        {/* Row 2 */}
                        <div className="flex flex-wrap justify-center gap-4 w-full mb-2">
                            <button className="bg-white px-8 py-4 rounded-full shadow-sm text-gray-700 hover:shadow-md transition-shadow flex items-center gap-3 text-lg font-medium">
                                {industries[1]}
                                <div className="bg-gray-100 rounded-full p-1">
                                    <ChevronRight className="w-4 h-4 text-gray-500" />
                                </div>
                            </button>
                            <button className="bg-white px-8 py-4 rounded-full shadow-sm text-gray-700 hover:shadow-md transition-shadow flex items-center gap-3 text-lg font-medium">
                                {industries[2]}
                                <div className="bg-gray-100 rounded-full p-1">
                                    <ChevronRight className="w-4 h-4 text-gray-500" />
                                </div>
                            </button>
                        </div>

                        {/* Row 3 */}
                        <div className="w-full flex justify-center">
                            <button className="bg-white px-8 py-4 rounded-full shadow-sm text-gray-700 hover:shadow-md transition-shadow flex items-center gap-3 text-lg font-medium">
                                {industries[3]}
                                <div className="bg-gray-100 rounded-full p-1">
                                    <ChevronRight className="w-4 h-4 text-gray-500" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start relative z-10">

                    {/* Left Side: Person Image Placeholder */}
                    <div className="relative hidden lg:block h-[600px] w-full">
                        {/* Background Blobs (Decoration) */}
                        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                        <div className="relative h-full w-full">
                            <Image
                                src="/images/industry-solutions-person.png"
                                alt="Industry Professional"
                                fill
                                className="object-contain object-left-top"
                            />
                        </div>
                    </div>

                    {/* Right Side: Content Card */}
                    <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-gray-100">

                        {/* Visibility Section */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visibility</h3>
                            <p className="text-gray-600 mb-8 max-w-2xl">
                                See everything happening on the shop floor in real time, from work orders, machines, operators, downtimes, and performance. A live control panel for your entire operation.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {visibilityItems.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors cursor-pointer group">
                                        <item.icon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm font-bold text-blue-900">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Execution Section */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Execution</h3>
                            <p className="text-gray-600 mb-8 max-w-2xl">
                                Digitize production processes. Clear instructions, error-free data entry, full traceability, and standardized operations, all executed directly by the shop floor teams.
                            </p>

                            {/* Execution Workflow Image (Placeholder) */}
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <div className="relative w-full h-[150px]">
                                    <Image
                                        src="/images/execution-workflow.png"
                                        alt="Execution Workflow Diagram"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Quality Section */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality</h3>
                            <p className="text-gray-600 mb-8 max-w-2xl">
                                Control and record quality at every step. Inline inspections, nonconformities, and action plans, with complete traceability by lot, operator, and equipment.
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
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Improvement</h3>
                            <p className="text-gray-600 mb-8 max-w-2xl">
                                Turn data into decisions. Analyze root causes of downtime, compare shifts, identify losses, with automated reports and dashboards that power continuous improvement.
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
