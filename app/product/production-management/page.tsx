import React from 'react';
import { Eye, BarChart3, List, Clock, Calendar, Component, ArrowRight, CornerRightDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductionManagementPage() {
    return (
        <main className="min-h-screen bg-[#F9FAFB]">

            {/* 
              HERO SECTION 
              Design: Centered Text -> Chart/Dashboard Graphic
            */}
            <section className="relative bg-white pt-32 pb-20 md:pb-32 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Production Management
                        </h1>

                        <p className="text-xl md:text-2xl font-bold text-slate-800 mb-6">
                            Real-time control and full visibility over your shop floor.
                        </p>

                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-16">
                            Optimize production operations, eliminate inefficiencies, and ensure your teams have everything they need to deliver on time, every time.
                        </p>

                        {/* Production Chart Image */}
                        <div className="relative mx-auto max-w-6xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden aspect-[21/9]">
                            <Image
                                src="/images/Production_Management.png"
                                alt="Production by Date Chart"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* 
              KEY BENEFITS SECTION
              Design: White card floating on gray background
            */}
            <section className="bg-[#F9FAFB] pb-24 pt-10 md:-mt-20 relative z-20 px-4">
                <div className="container mx-auto">
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-slate-50 max-w-6xl mx-auto">

                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-blue-700">
                                Key benefits
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
                            {/* Benefit 1 */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-slate-900">Real-Time<br />Tracking</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Monitor every production order and work center as it happens.
                                </p>
                            </div>

                            {/* Benefit 2 */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-slate-900">More Uptime,<br />Less Waste</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Identify bottlenecks and inefficiencies before they impact your deadlines.
                                </p>
                            </div>

                            {/* Benefit 3 */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-slate-900">Built for<br />Manufacturing Teams</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Simple, intuitive tools designed to help operators, supervisors, and planners work better.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
              ZIG-ZAG FEATURE LIST
            */}
            <section className="py-24 bg-[#F9FAFB]">
                <div className="container mx-auto px-4">

                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                            Take Control of Your Production with RAILES MES
                        </h2>
                    </div>

                    <div className="space-y-12 max-w-5xl mx-auto">

                        {/* Feature 1: Visual order tracking (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <Eye className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Visual order tracking</h3>
                                <p className="text-slate-500">
                                    Follow production orders in real time, from start to finish, including setup, execution, and completion.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2: Performance dashboards (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Performance dashboards</h3>
                                <p className="text-slate-500">
                                    Track KPIs like OEE, cycle time, scrap rate, and productivity with live dashboards.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3: Work Instructions (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <List className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Work Instructions</h3>
                                <p className="text-slate-500">
                                    Provide operators with clear, visual, and up-to-date instructions. Adjusted to the product, process, or workstation. Reduce training time and avoid errors, even in complex or variable production environments.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4: Downtime and delay management (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <Clock className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Downtime and delay management</h3>
                                <p className="text-slate-500">
                                    Automatically log and categorize stoppages. Empower teams to act quickly with root-cause analysis tools.
                                </p>
                            </div>
                        </div>

                        {/* Feature 5: Dynamic scheduling (Left) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:mr-auto md:w-[85%] hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <Calendar className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Dynamic scheduling</h3>
                                <p className="text-slate-500">
                                    Adjust production plans on the fly based on machine availability, inventory levels, or unexpected events.
                                </p>
                            </div>
                        </div>

                        {/* Feature 6: Traceability & Compliance (Right) */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:ml-auto md:w-[85%] hover:shadow-md transition-shadow mb-20">
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 md:order-2">
                                <Component className="w-8 h-8" />
                            </div>
                            <div className="md:text-right md:order-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Traceability & Compliance</h3>
                                <p className="text-slate-500">
                                    Keep full traceability of batches, operators, parameters, and work history for audits and continuous improvement.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
                SECTION: WHY CHOOSE RAILES
                Blue Card Block with Image
            */}
            <section className="py-12 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-blue-800 text-white rounded-[3rem] p-8 md:p-20 relative overflow-hidden shadow-2xl">
                        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                    Why choose RAILES for <br />Production Management?
                                </h2>
                                <h3 className="text-xl md:text-2xl font-bold mb-6 text-blue-200">
                                    Because it connects your shop floor to your decision-making in real time.
                                </h3>
                                <ul className="space-y-4 text-blue-100 font-medium text-lg">
                                    <li>Modular and customizable</li>
                                    <li>Easy to integrate with ERP and automation systems</li>
                                    <li>Designed for industries where precision and timing matter</li>
                                    <li>Scalable Across Plants and Lines</li>
                                    <li>AI-Powered Insights</li>
                                </ul>
                            </div>
                            <div className="lg:w-1/2 relative w-full">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-700/50 bg-blue-900 w-full">
                                    <div className="absolute inset-0 flex items-center justify-center bg-blue-800">
                                        <span className="text-blue-400 font-medium">Professional with Tablet Image</span>
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
                                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
                SECTION: INDUSTRY SOLUTIONS
                Asymmetric Grid (Bento/Staggered)
            */}
            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-4 text-center">

                    <div className="max-w-3xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                                Your Industry solutions
                            </h2>
                            <p className="text-slate-500 text-lg">
                                Railes MES allows you to monitor your production in real time.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">

                            {/* Column 1 */}
                            <div className="space-y-4">
                                {/* Pharmaceuticals (Tall) */}
                                <Link href="/industries/pharmaceuticals" className="group block bg-white p-6 rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden aspect-[4/5] flex flex-col items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" /><path d="m8.5 8.5 7 7" /></svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 leading-tight">Pharmaceuticals<br />Manufacturing</h3>
                                    </div>
                                </Link>

                                {/* Packaging (Square/Short) */}
                                <div className="group bg-white p-6 rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden aspect-square flex flex-col items-center justify-center cursor-pointer">
                                    <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 leading-tight">Packaging<br />Manufacturing</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2 (Offset/Staggered) */}
                            <div className="space-y-4 md:mt-8">
                                {/* Automotive (Square/Short) */}
                                <div className="group bg-white p-6 rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden aspect-square flex flex-col items-center justify-center cursor-pointer">
                                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 leading-tight">Automotive<br />Manufacturing</h3>
                                    </div>
                                </div>

                                {/* Aerospace (Tall) */}
                                <Link href="/industries/aerospace-and-defense" className="group block bg-white p-6 rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden aspect-[4/5] flex flex-col items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h5" /><path d="M13 12h9" /><path d="M4 17V7l7 5 5-9 2 2-5 9 5 2v-4l2 2v6l-2-2v-4l-5 2-5 9-2-2Z" /></svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 leading-tight">Aerospace & Defense<br />Manufacturing</h3>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* FOOTER CTA */}
            <section className="py-24 bg-blue-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Optimizing Your Shop Floor Today</h2>
                    <div className="flex justify-center gap-4">
                        <Link href="/demo" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors">
                            Get a Live Demo
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
