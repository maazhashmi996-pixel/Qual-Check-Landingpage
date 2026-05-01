"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, GraduationCap, Building2, ShieldCheck } from 'lucide-react';

/**
 * CaseStudies Component - VIP Dark Edition
 * Branding: verification.com (Navy Blue & Teal)
 * Style: Modern Cards, Interactive Hovers, Academic Focus
 */
const CaseStudies: React.FC = () => {
    const cases = [
        {
            image: "/ccc.jpg",
            icon: <Building2 className="text-[#43B5AD]" size={20} />,
            title: "Cambridge Judge Business School",
            subtitle: "Streamlining Global Admissions",
            desc: "The University of Cambridge's graduate management arm processes 90% of post-graduate students from overseas, requiring elite-level verification integrity."
        },
        {
            image: "/images/cisi-logo.png",
            icon: <ShieldCheck className="text-[#43B5AD]" size={20} />,
            title: "CISI Membership Process",
            subtitle: "Automated Verification Flow",
            desc: "Utilizing AutoVerify to instantly cross-reference incoming requests against the global membership register for real-time status updates."
        },
        {
            image: "/images/bloomsbury-institute.jpg",
            icon: <GraduationCap className="text-[#43B5AD]" size={20} />,
            title: "Bloomsbury Institute",
            subtitle: "Compliance & Student Integrity",
            desc: "Enhanced an established admissions process with rigorous transcript checks and automated compliance interviews to ensure student authenticity."
        }
    ];

    return (
        <section className="bg-[#002b5c] py-28 px-8 md:px-16 lg:px-24 relative overflow-hidden">

            {/* Background Decorative Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#43B5AD]/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#004085]/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-20 space-y-4">
                    <span className="text-[#43B5AD] font-bold tracking-[0.3em] uppercase text-sm">Our Global Impact</span>
                    <h2 className="text-white text-4xl md:text-6xl font-black tracking-tight">
                        Case <span className="text-[#43B5AD]">Studies</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-[#43B5AD] rounded-full mt-4"></div>
                </div>

                {/* Case Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
                    {cases.map((item, index) => (
                        <div key={index} className="flex flex-col group h-full">

                            {/* Image Container with VIP Frame */}
                            <div className="relative h-72 w-full rounded-[2rem] overflow-hidden mb-8 shadow-2xl border border-white/5">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                                />
                                {/* Glassy Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c]/90 via-transparent to-transparent opacity-60"></div>

                                {/* Floating Icon Badge */}
                                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col flex-1 px-2">
                                <span className="text-[#43B5AD] text-xs font-bold uppercase tracking-widest mb-3">
                                    {item.subtitle}
                                </span>
                                <h3 className="text-white text-2xl font-bold mb-4 leading-snug group-hover:text-[#43B5AD] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-1">
                                    {item.desc}
                                </p>

                                {/* Modern CTA Button */}
                                <button className="inline-flex items-center gap-2 text-white font-bold text-sm group/btn">
                                    <span className="relative">
                                        VIEW CASE STUDY
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#43B5AD] transition-all group-hover/btn:w-full"></span>
                                    </span>
                                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-[#43B5AD] group-hover/btn:border-[#43B5AD] transition-all">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Trust Note */}
                <div className="mt-24 pt-12 border-t border-white/5 text-center">
                    <p className="text-gray-500 font-medium">
                        Joining 2,500+ Institutions worldwide in securing academic integrity.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;