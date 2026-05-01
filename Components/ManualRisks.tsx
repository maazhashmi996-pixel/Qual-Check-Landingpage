"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, GraduationCap, Building2, ShieldCheck, ExternalLink } from 'lucide-react';

/**
 * CaseStudies Component - Ultra VIP Dark Edition
 * Branding: verification.com (Navy Blue & Teal)
 * Developed for: High-Impact Portfolio / Corporate Site
 */

const CaseStudies: React.FC = () => {
    const cases = [
        {
            image: "/ccc.jpg",
            icon: <Building2 className="text-[#43B5AD]" size={22} />,
            title: "Cambridge Judge Business School",
            subtitle: "Global Admissions Excellence",
            desc: "The University of Cambridge's management arm processes 90% of students from overseas, demanding elite verification integrity and speed."
        },
        {
            image: "/grade.jpg",
            icon: <ShieldCheck className="text-[#43B5AD]" size={22} />,
            title: "CISI Membership Process",
            subtitle: "Automated Integrity Flow",
            desc: "Leveraging real-time automation to cross-reference global membership requests, ensuring instant verification with zero manual friction."
        },
        {
            image: "/blomb.webp",
            icon: <GraduationCap className="text-[#43B5AD]" size={22} />,
            title: "Bloomsbury Institute",
            subtitle: "Compliance & Authenticity",
            desc: "Revolutionizing admissions with automated transcript analysis and digital compliance interviews to secure institutional academic standards."
        }
    ];

    return (
        <section className="bg-[#001e3c] py-28 px-8 md:px-16 lg:px-24 relative overflow-hidden">

            {/* --- VIP BACKGROUND ATMOSPHERE --- */}
            {/* Soft Teal Glow (Top Right) */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#43B5AD]/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            {/* Deep Blue Glow (Bottom Left) */}
            <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#004085]/20 rounded-full blur-[150px] pointer-events-none"></div>
            {/* Subtle Tech Grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- HEADER SECTION --- */}
                <div className="flex flex-col items-center text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#43B5AD] animate-ping"></span>
                        <span className="text-[#43B5AD] text-xs font-black tracking-[0.3em] uppercase">Industry Impact</span>
                    </div>
                    <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
                        Proven <span className="text-[#43B5AD]">Case Studies</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium opacity-80">
                        Discover how global institutions leverage our ecosystem to secure their admissions and membership workflows.
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-[#43B5AD] to-transparent rounded-full mt-8"></div>
                </div>

                {/* --- CASE STUDIES GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {cases.map((item, index) => (
                        <div key={index} className="flex flex-col group h-full cursor-pointer">

                            {/* Premium Image Frame */}
                            <div className="relative h-80 w-full rounded-[2.5rem] overflow-hidden mb-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5 bg-[#002b5c]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2 opacity-80 group-hover:opacity-100"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#001e3c] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>

                                {/* Floating Category Badge */}
                                <div className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center gap-2 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {item.icon}
                                    <span className="text-white text-[10px] font-black uppercase tracking-widest">Enterprise</span>
                                </div>
                            </div>

                            {/* Content Wrapper */}
                            <div className="flex flex-col flex-1 px-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-8 h-[2px] bg-[#43B5AD]"></span>
                                    <span className="text-[#43B5AD] text-xs font-black uppercase tracking-widest">
                                        {item.subtitle}
                                    </span>
                                </div>

                                <h3 className="text-white text-3xl font-bold mb-5 leading-tight tracking-tight group-hover:text-[#43B5AD] transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 text-lg leading-relaxed mb-10 flex-1 opacity-70 group-hover:opacity-100 transition-opacity">
                                    {item.desc}
                                </p>

                                {/* Interactive Button */}
                                <button className="inline-flex items-center gap-3 text-white font-extrabold text-sm tracking-widest group/btn w-fit">
                                    <span className="relative overflow-hidden">
                                        VIEW CASE STUDY
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#43B5AD] transform translate-x-[-105%] group-hover/btn:translate-x-0 transition-transform duration-500"></span>
                                    </span>
                                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-[#43B5AD] group-hover/btn:border-[#43B5AD] group-hover/btn:rotate-45 transition-all duration-500 shadow-lg">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- FOOTER TRUST NOTE --- */}
                <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-[#001e3c] bg-[#002b5c] overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-[#43B5AD] to-[#004085] opacity-50"></div>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-400 font-bold text-sm">
                            Trusted by <span className="text-white underline decoration-[#43B5AD]">2,500+ Institutions</span> worldwide.
                        </p>
                    </div>

                    <button className="flex items-center gap-2 text-[#43B5AD] font-black text-xs tracking-widest uppercase hover:tracking-[0.2em] transition-all">
                        Explore all stories <ExternalLink size={14} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;