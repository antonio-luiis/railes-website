'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Users, Zap, Leaf, CheckCircle, FileText, Linkedin, Instagram, Facebook, Lock, Briefcase } from 'lucide-react';

import { useState } from 'react';

// Story Carousel Component
function StoryCarousel() {
    const originalStories = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
            title: "The Beginning",
            description: "As we connected factory-floor operations, structured production workflows, and turned complex manufacturing processes into clear, executable systems, our vision expanded beyond our initial scope.",
            year: "2012"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
            ),
            title: "Railes is founded",
            description: "What began as a solution for visibility and control evolved into a full Manufacturing Execution System designed to bridge planning and execution. This journey led to the creation of Railes.",
            year: "2015"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Growth & Evolution",
            description: "At the beginning of 2026, backed by over a decade of experience in manufacturing software, we embraced a new identity with a clear focus on our core MES product.",
            year: "2026"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Stay tuned...",
            description: "Today, Railes empowers manufacturers with real-time visibility, traceability, and operational control that keep production moving efficiently into smart factories. There's so much more to come!",
            year: "The Future"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? originalStories.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === originalStories.length - 1 ? 0 : prev + 1));
    };

    const getCardStyle = (index: number) => {
        const total = originalStories.length;
        // Calculate relative position (-1, 0, 1, etc) considering wrap-around
        let relativePos = (index - currentIndex);
        if (relativePos > total / 2) relativePos -= total;
        if (relativePos < -total / 2) relativePos += total;

        const isCenter = relativePos === 0;
        const isLeft = relativePos === -1 || (currentIndex === 0 && index === total - 1); // Directly left or wrap around
        const isRight = relativePos === 1 || (currentIndex === total - 1 && index === 0); // Directly right or wrap around

        let xOffset = 0;
        let scale = 0.85;
        let opacity = 0;
        let zIndex = 0;
        let blur = '2px';

        if (isCenter) {
            xOffset = 0;
            scale = 1;
            opacity = 1;
            zIndex = 20;
            blur = '0px';
        } else if (relativePos === -1 || (index === (currentIndex - 1 + total) % total)) {
            // Left Card
            xOffset = -110;
            scale = 0.9;
            opacity = 0.5;
            zIndex = 10;
            blur = '1px';
        } else if (relativePos === 1 || (index === (currentIndex + 1) % total)) {
            // Right Card
            xOffset = 110;
            scale = 0.9;
            opacity = 0.5;
            zIndex = 10;
            blur = '1px';
        } else {
            // Hidden/Back cards
            xOffset = relativePos * 100; // Far away
            opacity = 0;
            zIndex = 0;
        }

        return {
            transform: `translateX(${xOffset}%) scale(${scale})`,
            opacity,
            zIndex,
            filter: `blur(${blur})`,
            position: 'absolute' as 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 'auto',
            width: '100%',
            maxWidth: 'min(90%, 380px)',
            height: 'fit-content',
            transition: 'all 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)'
        };
    };

    return (
        <section className="py-12 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4">
                <h2 className="text-3xl md:text-5xl font-black text-center text-gray-900 mb-12 md:mb-20">
                    Our story
                </h2>

                <div className="relative max-w-5xl mx-auto h-[450px]"> {/* Fixed height container */}

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-12 z-30">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-transform active:scale-95"
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-12 z-30">
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-transform active:scale-95"
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Cards */}
                    <div className="relative w-full h-full flex justify-center items-center perspective-1000">
                        {originalStories.map((story, index) => {
                            const style = getCardStyle(index);
                            const isCenter = index === currentIndex;

                            return (
                                <div
                                    key={index}
                                    style={style}
                                >
                                    <div className={`bg-white rounded-2xl p-8 text-center h-full border shadow-lg ${isCenter ? 'border-indigo-600 border-2 shadow-xl' : 'border-gray-100'}`}>
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors ${isCenter ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-400'}`}>
                                            {story.icon}
                                        </div>
                                        <h3 className={`font-bold text-xl mb-3 ${isCenter ? 'text-indigo-600' : 'text-indigo-600/70'}`}>
                                            {story.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                            {story.description}
                                        </p>
                                        <p className="text-gray-400 text-sm font-medium">{story.year}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default function OurCompanyPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* HERO BANNER */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/about-hero.jpg"
                        alt="Railes Team"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80 mix-blend-multiply" />
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl">
                    <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
                        We are building the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                            future of manufacturing
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-light">
                        Railes is the operating system that empowers factories to achieve operational excellence through real-time visibility and control.
                    </p>
                </div>
            </section>

            {/* 
              TEAM INTRO SECTION
              Bento-style layout with text
            */}
            <section className="py-12 md:py-24 px-4">
                <div className="container mx-auto max-w-7xl space-y-12 md:space-y-24">
                    {/* Row 1: Text Left, Images Right */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                        {/* Left: Text */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                As we connected factory-floor operations, structured production workflows, and turned complex manufacturing processes into clear, executable systems, our vision expanded beyond our initial scope. What began as a solution for visibility and control evolved into a full Manufacturing Execution System designed to bridge planning and execution. This journey led to the creation of Railes.
                            </p>
                        </div>

                        {/* Right: Two Portrait Images */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="aspect-[3/4] bg-gray-200 rounded-3xl overflow-hidden relative shadow-lg transform translate-y-8">
                                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                                    <Users className="w-12 h-12 text-blue-300" />
                                </div>
                            </div>
                            <div className="aspect-[3/4] bg-gray-200 rounded-3xl overflow-hidden relative shadow-lg">
                                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                                    <Users className="w-12 h-12 text-purple-300" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Image Left, Text Right */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                        {/* Left: Large Landscape Image */}
                        <div className="aspect-video bg-gray-200 rounded-3xl overflow-hidden relative shadow-xl">
                            <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                                <Users className="w-20 h-20 text-green-300" />
                            </div>
                        </div>

                        {/* Right: Text */}
                        <div className="space-y-8">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                <span className="text-blue-600 font-bold text-xl block mb-2">At the beginning of 2026</span>
                                backed by over a decade of experience in manufacturing software, we embraced a new identity with a clear focus on our core MES product. Today, Railes empowers manufacturers with real-time visibility, traceability, and operational control that keep production moving efficiently, reliably, and on track into smart factories.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
              OUR STORY SECTION
              Carousel/Slider Timeline
            */}
            <StoryCarousel />

            {/* 
              VALUES SECTION
              3x2 Grid with light purple cards
            */}
            <section className="pt-12 md:pt-20 pb-0 bg-white">
                <div className="container mx-auto max-w-7xl px-4">
                    <h2 className="text-3xl md:text-5xl font-black text-center text-gray-900 mb-12 md:mb-16">
                        Our culture and values
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {[
                            {
                                icon: <Shield className="w-8 h-8 text-indigo-600" />,
                                title: "Transparency & Trust",
                                description: "We believe that great partnerships are built on clarity and openness. By being transparent in everything we do, we foster trust, strengthen collaboration, and create long-term relationships with our customers."
                            },
                            {
                                icon: <Lock className="w-8 h-8 text-indigo-600" />,
                                title: "Confidentiality & Integrity",
                                description: "Your information is handled with the highest level of care and responsibility. We protect data, respect privacy, and act with integrity at all times, trust is the foundation of meaningful collaboration."
                            },
                            {
                                icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
                                title: "Professionalism",
                                description: "Professionalism goes beyond quality delivery. It reflects our commitment, accountability, and dedication to doing things right, every project, every decision, every time."
                            },
                            {
                                icon: <Leaf className="w-8 h-8 text-indigo-600" />,
                                title: "Social Responsibility & Sustainability",
                                description: "We are committed to making a positive impact. Sustainability matters not only to the planet, but also to the long-term success of businesses and communities. Responsible growth is the only growth we believe in."
                            }
                        ].map((value, index) => (
                            <div key={index} className="group relative bg-indigo-50/50 rounded-3xl p-6 md:p-10 text-center hover:bg-indigo-50 transition-all duration-300 h-80 flex flex-col items-center justify-center overflow-hidden cursor-default">
                                {/* Default State: Icon & Title */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 transition-all duration-300 group-hover:opacity-0 group-hover:scale-95 group-hover:translate-y-4">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-indigo-900 leading-tight">
                                        {value.title}
                                    </h3>
                                </div>

                                {/* Hover State: Description */}
                                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8 opacity-0 transition-all duration-300 transform translate-y-4 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                                    <p className="text-indigo-900 font-medium leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>

            {/* 
              GET TO KNOW US BETTER
              Social Media Links
            */}
            <section className="pt-8 md:pt-12 pb-12 md:pb-20 bg-white">
                <div className="container mx-auto max-w-7xl px-4">
                    {/* CTA Banner */}
                    <div className="relative mb-16 md:mb-24 bg-[linear-gradient(-60deg,#004eab,#038efd)] rounded-3xl p-8 md:p-12 overflow-hidden text-center">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-10 translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-400 rounded-full blur-2xl opacity-20"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                                Together we can impact <span className="font-normal opacity-90">how teams work across the globe</span>
                            </h3>
                            <Link href="/careers" className="inline-block">
                                <button className="bg-white text-[#004eab] font-bold py-4 px-10 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                                    <span>Join our team</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black text-center text-gray-900 mb-12 md:mb-16">
                        Get to know us better
                    </h2>

                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {/* LinkedIn */}
                        <a href="https://pt.linkedin.com/company/muvutechnologies" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center group-hover:bg-[#0077b5] group-hover:shadow-xl transition-all duration-300">
                                <Linkedin className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <span className="font-bold text-gray-700 group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
                        </a>

                        {/* Instagram */}
                        <a href="https://www.instagram.com/railes.mes/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-24 h-24 bg-pink-50 rounded-3xl flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-red-500 group-hover:to-purple-500 group-hover:shadow-xl transition-all duration-300">
                                <Instagram className="w-10 h-10 text-pink-600 group-hover:text-white transition-colors" />
                            </div>
                            <span className="font-bold text-gray-700 group-hover:text-pink-600 transition-colors">Instagram</span>
                        </a>

                        {/* Facebook */}
                        <a href="https://www.facebook.com/railesmes/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center group-hover:bg-[#1877F2] group-hover:shadow-xl transition-all duration-300">
                                <Facebook className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <span className="font-bold text-gray-700 group-hover:text-[#1877F2] transition-colors">Facebook</span>
                        </a>
                    </div>
                </div>
            </section>



        </main>
    );
}
