"use client";

import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Globe2 } from 'lucide-react';

/**
 * SolutionsHero Component - The Global Authority Edition
 * Theme: Clean, High-Contrast, Professional
 * Branding: verification.com
 */
const SolutionsHero: React.FC = () => {
    return (
        <section className="relative bg-[#F8F8F5] pt-32 pb-24 px-6 overflow-hidden">

            {/* --- VIP BACKGROUND ELEMENTS --- */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.03]">
                <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.5H1200M0 100.5H1200M0 200.5H1200" stroke="#002b5c" />
                    <path d="M0.5 0V1200M100.5 0V1200M200.5 0V1200" stroke="#002b5c" />
                </svg>
            </div>

            {/* Soft Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#43B5AD]/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#FF9654]/10 blur-[100px] rounded-full"></div>

            <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">

                {/* --- TOP MINI BADGE --- */}
                <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-5 py-2 rounded-full shadow-sm mb-10 group cursor-default">
                    <Sparkles size={16} className="text-[#FF9654] group-hover:rotate-12 transition-transform" />
                    <span className="text-[#002b5c] text-[10px] font-black uppercase tracking-[0.25em]">
                        Trusted by 5,000+ Institutions
                    </span>
                </div>

                {/* --- MAIN HEADING --- */}
                <div className="text-center mb-10">
                    <h1 className="text-[#002b5c] text-5xl md:text-8xl font-black leading-[0.95] tracking-tighter max-w-5xl mx-auto">
                        Global Qualification <br />
                        <span className="text-[#43B5AD]">Verification.</span>
                    </h1>
                </div>

                {/* --- HIGHLIGHTED SUBHEADING --- */}
                <div className="relative mb-12">
                    <h2 className="text-[#2D4A53] text-xl md:text-3xl font-bold max-w-4xl leading-snug text-center">
                        53,000 trusted sources. <span className="bg-[#43B5AD]/10 px-2 text-[#43B5AD]">One global</span> qualification verification platform.
                    </h2>
                </div>

                {/* --- NARRATIVE CONTENT BLOCK --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-16 max-w-6xl border-y border-gray-200/60 py-12">

                    <div className="space-y-4 px-4">
                        <div className="flex justify-center md:justify-start text-[#FF9654]">
                            <ShieldCheck size={28} />
                        </div>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Global recruitment doesn't have to mean <span className="text-[#002b5c] font-bold">global risk.</span> We eliminate the guesswork in hiring.
                        </p>
                    </div>

                    <div className="space-y-4 px-4 border-x border-gray-100 hidden md:block">
                        <div className="flex justify-center md:justify-start text-[#43B5AD]">
                            <Globe2 size={28} />
                        </div>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Direct connection to <span className="text-[#002b5c] font-bold">195 countries</span> and source-verified data through one API-ready tool.
                        </p>
                    </div>

                    <div className="space-y-4 px-4">
                        <div className="flex justify-center md:justify-start text-[#002b5c]">
                            <Sparkles size={28} />
                        </div>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Confirm at source, <span className="text-[#002b5c] font-bold">deter fraud</span>, and scale your onboarding with confidence.
                        </p>
                    </div>

                </div>

                {/* --- CTA SECTION --- */}
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <button className="group bg-[#FF9654] hover:bg-[#002b5c] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(255,150,84,0.3)] active:scale-95 flex items-center gap-3">
                        Book a demo
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-[#2D4A53] font-bold text-sm border-b-2 border-[#43B5AD]/30 pb-1 cursor-pointer hover:text-[#43B5AD] transition-colors">
                        View Pricing Plans
                    </p>
                </div>

                {/* Footer Note */}
                <p className="mt-12 text-gray-400 text-xs font-medium tracking-wide">
                    SECURE • ENCRYPTED • SOURCE-VERIFIED
                </p>
            </div>
        </section>
    );
};

export default SolutionsHero;