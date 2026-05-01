"use client";

import React from 'react';
import Image from 'next/image';
import { BookOpen, Compass, ChevronRight, Globe } from 'lucide-react';

/**
 * ResourceGuide Component - Global University Recruitment
 * Style: Institutional, Trustworthy, Modern
 * Branding: verification.com VIP
 */
const ResourceGuide: React.FC = () => {
    return (
        <section className="bg-white py-24 px-8 md:px-16 lg:px-24 relative overflow-hidden">

            {/* Background Accent Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8fafc] -z-10 skew-x-[-12deg] translate-x-20 hidden lg:block"></div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative z-10">

                {/* Left Side: Editorial Content */}
                <div className="w-full md:w-1/2 space-y-8">

                    {/* Category Tag */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#43B5AD]/10 flex items-center justify-center text-[#43B5AD]">
                            <BookOpen size={20} />
                        </div>
                        <span className="text-[#002b5c] text-xs font-black tracking-widest uppercase">University Resources</span>
                    </div>

                    <h2 className="text-[#002b5c] text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter">
                        How to recruit <span className="text-[#43B5AD]">students from anywhere</span>: A global guide.
                    </h2>

                    <div className="space-y-6 text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl">
                        <p className="font-medium text-[#002b5c]/80">
                            International students enrich academic life, advance research, and support university finances across the globe.
                        </p>
                        <p>
                            However, recent policy shifts and fierce global competition mean universities need <span className="text-[#43B5AD] font-bold">robust systems</span> to manage international recruitment safely, efficiently, and with total integrity.
                        </p>
                    </div>

                    {/* Interactive Action Button */}
                    <div className="pt-4">
                        <button className="group flex items-center gap-6 text-[#002b5c] font-black text-sm tracking-widest uppercase bg-transparent border-2 border-[#002b5c] px-8 py-4 rounded-full hover:bg-[#002b5c] hover:text-white transition-all duration-300">
                            Read the full guide
                            <div className="w-8 h-8 rounded-full bg-[#43B5AD] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#002b5c] transition-colors">
                                <ChevronRight size={18} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Right Side: Visual Showcase */}
                <div className="w-full md:w-1/2">
                    <div className="relative group">

                        {/* Decorative Frames */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#43B5AD]/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#002b5c]/5 rounded-full blur-3xl"></div>

                        {/* Main Image Container */}
                        <div className="relative h-[400px] md:h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-15px_rgba(0,43,92,0.2)] border-8 border-white group-hover:shadow-[0_60px_120px_-20px_rgba(0,43,92,0.3)] transition-all duration-700">
                            <Image
                                src="/d.png"
                                alt="Global Student Recruitment Hub"
                                fill
                                className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                                priority
                            />

                            {/* Glassmorphism Overlay Card */}
                            <div className="absolute top-8 left-8 backdrop-blur-md bg-white/20 border border-white/30 p-5 rounded-2xl flex items-center gap-4 transform -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#002b5c]">
                                    <Globe size={24} className="animate-spin-slow" />
                                </div>
                                <div>
                                    <p className="text-white text-[10px] font-black tracking-widest uppercase">Active Coverage</p>
                                    <p className="text-white text-lg font-bold">190+ Countries</p>
                                </div>
                            </div>

                            {/* Floating Insight Label */}
                            <div className="absolute bottom-10 right-10 bg-[#002b5c] text-white px-6 py-4 rounded-2xl shadow-2xl transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                                <div className="flex items-center gap-3">
                                    <Compass className="text-[#43B5AD]" />
                                    <div>
                                        <p className="text-[10px] font-black opacity-60 uppercase tracking-tighter leading-none">Resource Hub</p>
                                        <p className="text-sm font-bold">2026 Strategy Paper</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ResourceGuide;