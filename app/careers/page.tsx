"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Clock, Briefcase, Send, CheckCircle2, Globe, Users, Zap } from 'lucide-react';

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* 
              HERO SECTION
            */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 border-b border-white/10">
                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        We are hiring!
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
                        Build the Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                            Manufacturing
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Join a team of engineers, designers, and problem solvers dedicated to transforming how things are made.
                    </p>

                    <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 mx-auto"
                        onClick={() => {
                            const element = document.getElementById('open-positions');
                            element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        View Open Positions
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </section>

            {/* 
              VALUES SECTION (Culture)
            */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Join Railes?</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            We offer more than just a job. We offer the chance to make a tangible impact on the global supply chain.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Value 1 */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Global Impact</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Our software runs in factories across 3 continents, powering the production of essential goods.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Collaborative Culture</h3>
                            <p className="text-slate-500 leading-relaxed">
                                No silos. Engineers talk to designers, and everyone talks to customers. We build together.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Fast-Paced Innovation</h3>
                            <p className="text-slate-500 leading-relaxed">
                                We ship fast and iterate often. You'll see your code in production in days, not months.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
              OPEN POSITIONS SECTION
            */}
            <section id="open-positions" className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Open Positions</h2>
                            <p className="text-slate-500">Find the role that fits you best.</p>
                        </div>
                        {/* Optional Filter Mockup */}
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-sm">All</button>
                            <button className="px-4 py-2 bg-white text-slate-600 border border-slate-200 rounded-full text-sm font-semibold hover:bg-slate-50">Engineering</button>
                            <button className="px-4 py-2 bg-white text-slate-600 border border-slate-200 rounded-full text-sm font-semibold hover:bg-slate-50">Sales</button>
                        </div>
                    </div>

                    <div className="grid gap-4 max-w-5xl mx-auto">

                        {/* Job Card 1 */}
                        <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Senior Full Stack Engineer</h3>
                                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> Engineering</span>
                                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Remote (EU)</span>
                                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Full-time</span>
                                </div>
                            </div>
                            <button className="px-6 py-3 bg-slate-50 text-slate-900 font-semibold rounded-xl border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all text-sm shrink-0">
                                Apply Now
                            </button>
                        </div>

                        {/* Job Card 2 */}
                        <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Product Designer (UI/UX)</h3>
                                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> Design</span>
                                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Lisbon, PT</span>
                                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Full-time</span>
                                </div>
                            </div>
                            <button className="px-6 py-3 bg-slate-50 text-slate-900 font-semibold rounded-xl border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all text-sm shrink-0">
                                Apply Now
                            </button>
                        </div>

                        {/* Job Card 3 */}
                        <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Enterprise Sales Executive</h3>
                                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> Sales</span>
                                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> London, UK</span>
                                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Full-time</span>
                                </div>
                            </div>
                            <button className="px-6 py-3 bg-slate-50 text-slate-900 font-semibold rounded-xl border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all text-sm shrink-0">
                                Apply Now
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
              GENERAL APPLICATION SECTION
              Design: Clean card for spontaneous application
            */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2.5rem] p-10 md:p-16 border border-blue-100 relative overflow-hidden">

                        {/* Decorative Circle */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-50 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/20">
                                    <Send className="w-7 h-7" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                    Don't see the right role?
                                </h2>
                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                    We are always looking for talented individuals to join our team.
                                    Submit a general application and we'll keep you in mind for future openings.
                                </p>

                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                        <span>Showcase your unique skills</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                        <span>Priority review for matching roles</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="md:w-1/2 w-full">
                                <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-6">General Application</h3>
                                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="john@example.com" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">LinkedIn / Portfolio URL</label>
                                            <input type="url" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="https://linkedin.com/in/..." />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Upload CV</label>
                                            <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                                                <span className="text-sm text-blue-600 font-medium">Click to upload</span>
                                                <span className="text-sm text-slate-400"> or drag and drop</span>
                                                <div className="text-xs text-slate-400 mt-1">PDF, DOCX up to 5MB</div>
                                            </div>
                                        </div>
                                        <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 mt-2">
                                            Submit Application
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
