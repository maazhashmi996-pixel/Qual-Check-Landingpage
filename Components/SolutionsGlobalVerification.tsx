"use client";

import React from 'react';
import Image from 'next/image';
import { Globe, ShieldCheck, ArrowUpRight, CheckCircle, Languages } from 'lucide-react';

/**
 * SolutionsGlobalVerification - High-End Bento Grid Layout
 * Branding: Verification.com VIP Styling
 * Palette: Teal (#43B5AD), Navy (#002b5c), Orange (#FF9654)
 */
const SolutionsGlobalVerification: React.FC = () => {
    return (
        <section className="w-full bg-white overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

                {/* --- TOP LEFT: BRAND IDENTITY BLOCK --- */}
                <div className="relative bg-[#43B5AD] p-12 md:p-24 flex flex-col justify-between overflow-hidden group">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-12">
                            <h2 className="text-white text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
                                Global<br />
                                <span className="text-[#002b5c]">Verification</span>
                            </h2>
                            <div className="text-[#FF9654] animate-pulse">
                                <Globe size={120} strokeWidth={0.5} />
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest">
                            <ShieldCheck size={16} /> 100% Primary Source Verified
                        </div>
                    </div>

                    {/* Bottom Logo Strip */}
                    <div className="relative z-10 flex items-center gap-6 mt-20">
                        <div className="bg-white p-3 rounded-2xl shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                            <div className="border-[4px] border-[#43B5AD] rounded-full w-12 h-12 flex items-center justify-center">
                                <div className="bg-[#43B5AD] rounded-full w-5 h-5"></div>
                            </div>
                        </div>
                        <div>
                            <p className="text-white/60 text-[10px] font-black tracking-widest uppercase">Powered by</p>
                            <p className="text-white text-xl font-black tracking-tighter leading-none">QUALIFICATION CHECK</p>
                        </div>
                    </div>
                </div>

                {/* --- TOP RIGHT: EXECUTIVE SUMMARY BLOCK --- */}
                <div className="bg-[#002b5c] p-12 md:p-24 flex flex-col justify-center relative">
                    <div className="absolute top-0 right-0 p-8">
                        <ArrowUpRight className="text-[#43B5AD]" size={40} />
                    </div>
                    <div className="max-w-md space-y-8">
                        <h3 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
                            Accurate <span className="text-[#43B5AD]">Professional</span> Verification.
                        </h3>
                        <div className="w-20 h-1 bg-[#FF9654]"></div>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
                            Accessible via a premium cloud portal, we verify academic and professional awards directly at the source—universities, institutes, and high schools globally.
                        </p>
                    </div>
                </div>

                {/* --- BOTTOM LEFT: DEEP INSIGHT & ACTION BLOCK --- */}
                <div className="bg-[#f8fafc] md:bg-[#1E3A44] p-12 md:p-24 flex flex-col justify-center text-gray-300 relative group">
                    <div className="space-y-8 max-w-xl">
                        {/* Interactive List */}
                        <div className="space-y-6">
                            {[
                                "Available 24/7 for global recruiters and applicants.",
                                "Full compliance with local privacy laws and UKVI standards.",
                                "Backed by operations across 3 continents in 20+ languages."
                            ].map((text, i) => (
                                <div key={i} className="flex gap-4 items-start group/item">
                                    <div className="mt-1 bg-[#43B5AD] rounded-full p-1 group-hover/item:bg-[#FF9654] transition-colors">
                                        <CheckCircle size={16} className="text-white" />
                                    </div>
                                    <p className="text-lg md:text-xl text-gray-100 group-hover/item:text-white transition-colors">{text}</p>
                                </div>
                            ))}
                        </div>

                        <p className="pt-6 font-black text-white text-2xl md:text-3xl leading-tight tracking-tighter border-t border-white/10">
                            Complete clarity on your candidate’s qualifications, <span className="text-[#43B5AD]">anywhere on Earth.</span>
                        </p>

                        <div className="flex flex-wrap items-center gap-8 pt-8">
                            <button className="bg-[#FF9654] hover:bg-white hover:text-[#002b5c] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 shadow-2xl active:scale-95">
                                Book a Demo
                            </button>
                            <div className="flex items-center gap-3 text-white/50">
                                <Languages size={20} className="text-[#43B5AD]" />
                                <span className="text-xs font-bold uppercase tracking-widest">20+ Languages Supported</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM RIGHT: GLOBAL TEAM IMAGE --- */}
                <div className="relative min-h-[500px] overflow-hidden group">
                    <Image
                        src="/de.png"
                        alt="Global Operations Team"
                        fill
                        className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms] ease-out"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c]/80 via-transparent to-transparent"></div>

                    <div className="absolute bottom-12 left-12 text-white">
                        <p className="text-xs font-black uppercase tracking-[0.4em] text-[#43B5AD] mb-2">Global Impact</p>
                        <h4 className="text-3xl font-black">Trusted by 5,000+ <br />Institutions</h4>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SolutionsGlobalVerification;