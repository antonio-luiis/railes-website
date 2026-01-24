"use client";

import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Briefcase, Send, CheckCircle2, Globe, Users, Zap } from 'lucide-react';
import { useState } from 'react';

type JobCategory = 'All' | 'Engineering' | 'Design' | 'Sales';

interface Job {
    id: number;
    slug: string;
    title: string;
    category: JobCategory;
    location: string;
    type: string;
}

const jobs: Job[] = [
    {
        id: 1,
        slug: 'senior-full-stack-engineer',
        title: 'Senior Full Stack Engineer',
        category: 'Engineering',
        location: 'Remote (EU)',
        type: 'Full-time'
    },
    {
        id: 2,
        slug: 'product-designer-ui-ux',
        title: 'Product Designer (UI/UX)',
        category: 'Design',
        location: 'Lisbon, PT',
        type: 'Full-time'
    },
    {
        id: 3,
        slug: 'enterprise-sales-executive',
        title: 'Enterprise Sales Executive',
        category: 'Sales',
        location: 'London, UK',
        type: 'Full-time'
    }
];

export default function CareersPage() {
    const [selectedCategory, setSelectedCategory] = useState<JobCategory>('All');

    const filteredJobs = selectedCategory === 'All'
        ? jobs
        : jobs.filter(job => job.category === selectedCategory);

    const categories: JobCategory[] = ['All', 'Engineering', 'Design', 'Sales'];

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
                        Build Software That Runs <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                            Manufacturing
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        We build MES software that helps manufacturers plan, track, and improve production in real time. Join a team focused on creating reliable, intuitive tools for complex industrial environments.
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
                        <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed">
                            Building MES software means solving real operational problems. You'll work closely with product, engineering, and customers to turn complex processes into clear, usable solutions, and see the impact of your work on the factory floor.
                        </p>
                        <p className="text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed font-medium">
                            Are you looking for an opportunity in a growing and tech-driven company? You're in the right place. Check the opportunities below.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Value 1 */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Impact</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Everyone's work matters. From day one, you contribute to projects that have real influence on our products, our customers, and the wider ecosystem.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">People-First Culture</h3>
                            <p className="text-slate-500 leading-relaxed">
                                We foster a supportive, respectful, and collaborative environment where ideas are shared openly, individuals are valued, and teams grow together.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Continuous Innovation</h3>
                            <p className="text-slate-500 leading-relaxed">
                                We encourage experimentation and learning. By iterating quickly and embracing new ideas, we turn creativity into practical solutions that move the company forward.
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
                        {/* Filter Buttons */}
                        <div className="flex gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedCategory === category
                                        ? 'bg-blue-600 text-white shadow-sm'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4 max-w-5xl mx-auto">
                        {filteredJobs.length === 0 ? (
                            <div className="text-center py-12 text-slate-500">
                                No positions available in this category.
                            </div>
                        ) : (
                            filteredJobs.map((job) => (
                                <Link key={job.id} href={`/careers/${job.slug}`}>
                                    <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                                <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.category}</span>
                                                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                                            </div>
                                        </div>
                                        <button className="px-6 py-3 bg-slate-50 text-slate-900 font-semibold rounded-xl border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all text-sm shrink-0">
                                            View Details
                                        </button>
                                    </div>
                                </Link>
                            ))
                        )}
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
                                    Didn't Find the Right Position?
                                </h2>
                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                    Not every role exists yet. Some are created when the right person comes along.
                                </p>
                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                    If you think your experience could add value to RAILES, we'd like to hear from you.
                                </p>

                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                        <span>Showcase your unique skills</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
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
