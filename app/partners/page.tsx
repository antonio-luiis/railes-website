"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Users, Network, Award, Target,
    ArrowRight, CheckCircle2, Building2,
    Handshake, GraduationCap, Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PartnerType = 'affiliate' | 'technology';

export default function PartnersPage() {
    const [activeTab, setActiveTab] = useState<PartnerType>('affiliate');

    return (
        <main className="min-h-screen bg-white">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-[#1e3a8a]">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-700 text-blue-200 text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <Network className="w-4 h-4" />
                        <span>Global Partner Ecosystem</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight animate-in fade-in slide-in-from-bottom-3 duration-500 delay-100">
                        Better Operations are Powered by an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Ecosystem</span>
                    </h1>

                    <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                        Join the Railes network. Whether you are a consultant, integrator, or technology provider, let's modernize factory floors together.
                    </p>

                    <div className="flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-300">
                        <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                            Become a Partner
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. PARTNER PROGRAM SELECTOR */}
            <section className="py-20 bg-gray-50/50">
                <div className="container mx-auto px-4">

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-16">
                        <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-gray-200 inline-flex">
                            <button
                                onClick={() => setActiveTab('affiliate')}
                                className={cn(
                                    "px-8 py-3 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-2.5",
                                    activeTab === 'affiliate'
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                                )}
                            >
                                <Handshake className="w-4 h-4" />
                                Affiliate Partner
                            </button>
                            <button
                                onClick={() => setActiveTab('technology')}
                                className={cn(
                                    "px-8 py-3 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-2.5",
                                    activeTab === 'technology'
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                                )}
                            >
                                <Building2 className="w-4 h-4" />
                                Technology Partner
                            </button>
                        </div>
                    </div>

                    {/* Content Display */}
                    <div className="max-w-6xl mx-auto">

                        {/* AFFILIATE CONTENT */}
                        {activeTab === 'affiliate' && (
                            <div className="animate-in fade-in zoom-in-95 duration-300">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Affiliate Partner Program</h2>
                                    <p className="text-gray-600 max-w-2xl mx-auto">
                                        Perfect for professionals or consultants who want to refer qualified leads without handling the technical implementation.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">

                                    {/* Profile Card */}
                                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                            <Users className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Profile</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            Professionals or companies that do not implement the MES, but have a strong network within the industry. Focused on referring qualified leads and generating new business opportunities.
                                        </p>
                                    </div>

                                    {/* Responsibilities Card */}
                                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                                            <Target className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Responsibilities</h3>
                                        <ul className="space-y-3 text-sm text-gray-600">
                                            <li className="flex gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                                                <span>Identify and recommend potential clients.</span>
                                            </li>
                                            <li className="flex gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                                                <span>Facilitate introductions between RAILES and the target organization.</span>
                                            </li>
                                            <li className="flex gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                                                <span>Follow best practices in brand communication.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Benefits Card */}
                                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Benefits</h3>
                                        <ul className="space-y-3 text-sm text-gray-600">
                                            <li className="flex gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                <span>Financial commission for each closed contract.</span>
                                            </li>
                                            <li className="flex gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                <span>Bonus for validated leads.</span>
                                            </li>
                                            <li className="flex gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                <span>Access to marketing materials and presentations.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Requirements Card */}
                                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                                            <GraduationCap className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm mb-4">
                                            No technical requirements. Participation in basic RAILES introduction training is optional but recommended.
                                        </p>
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <span className="text-xs font-semibold text-orange-700 uppercase tracking-wide">Target</span>
                                            <p className="text-sm text-orange-900 mt-1">Meet minimum lead or closed contract targets according to level.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                        {/* TECHNOLOGY CONTENT */}
                        {activeTab === 'technology' && (
                            <div className="animate-in fade-in zoom-in-95 duration-300">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Partner Program</h2>
                                    <p className="text-gray-600 max-w-2xl mx-auto">
                                        For system integrators and IT consultants who want to implement, support, and build upon the Railes MES platform.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">

                                    {/* Profile Card */}
                                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                                            <Building2 className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Profile</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            Consulting firms, system integrators, IT/automation companies. Have the technical expertise to implement and support RAILES MES for clients.
                                        </p>
                                    </div>

                                    {/* Responsibilities Card */}
                                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                                            <Target className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Responsibilities</h3>
                                        <ul className="space-y-3 text-sm text-gray-600">
                                            <li className="flex gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                                                <span>Carry out the implementation of RAILES MES at client sites.</span>
                                            </li>
                                            <li className="flex gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                                                <span>Configure integrations with ERP, SCADA, LIMS.</span>
                                            </li>
                                            <li className="flex gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                                                <span>Provide support during go-live and operational phases.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Benefits Card */}
                                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Benefits</h3>
                                        <ul className="space-y-3 text-sm text-gray-600">
                                            <li className="flex gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                <span>Margin on licenses and subscriptions sold.</span>
                                            </li>
                                            <li className="flex gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                <span>Additional revenue from implementation services.</span>
                                            </li>
                                            <li className="flex gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                <span>Access to leads generated by RAILES (Accelerator+).</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Requirements Card */}
                                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                                            <GraduationCap className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements</h3>
                                        <ul className="space-y-3 text-sm text-gray-600 mb-4">
                                            <li className="flex gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                                                <span>At least one certified consultant.</span>
                                            </li>
                                            <li className="flex gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Meet quality metrics in project delivery.</span>
                                            </li>
                                            <li className="flex gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Participate in annual partner events.</span>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>

            {/* 3. CTA SECTION */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="bg-[#1e3a8a] rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden max-w-5xl mx-auto">
                        {/* Background Splashes */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10 text-white">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to grow with Railes?</h2>
                            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                                Whether you're looking to refer business or implement solutions, there's a place for you in our ecosystem.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 h-14 px-8 text-base">
                                    Become a Partner
                                </Button>
                                <Button size="lg" variant="outline" className="border-blue-400 text-white hover:bg-blue-800 hover:text-white bg-transparent h-14 px-8 text-base">
                                    Contact Partner Team
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
