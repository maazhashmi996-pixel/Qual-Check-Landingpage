"use client";

import React from 'react';
import { ShieldCheck, Globe, Zap, ArrowRight } from 'lucide-react';

/**
 * ResourcesHero Component - VIP Conversion Edition
 * Theme: Trust, Scale, and Global Connectivity
 * Branding: verification.com 
 * Feature: WhatsApp Demo Integration
 */
const ResourcesHero: React.FC = () => {

    // WhatsApp Configuration
    const phoneNumber = "923094158560";
    const demoMessage = encodeURIComponent("Hello Verification.com! I would like to book a demo to learn more about your Global Qualification Verification platform.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${demoMessage}`;

    return (
        <section className="relative bg-[#F8F8F5] pt-32 pb-24 px-8 overflow-hidden font-sans">

            {/* --- VIP BACKGROUND ELEMENTS --- */}
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `linear-gradient(#002b5c 1px, transparent 1px), linear-gradient(90deg, #002b5c 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
            </div>

            {/* Decorative Blurs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#43B5AD]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF9654]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4"></div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* --- TOP BADGE --- */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#43B5AD] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#43B5AD]"></span>
                        </span>
                        <span className="text-[#002b5c] text-[10px] font-black uppercase tracking-[0.2em]">Live across 195+ Countries</span>
                    </div>
                </div>

                {/* --- MAIN HEADLINES --- */}
                <div className="text-center space-y-6 max-w-5xl mx-auto">
                    <h1 className="text-[#002b5c] text-5xl md:text-8xl font-black leading-[1] tracking-tighter">
                        Qualification <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002b5c] via-[#43B5AD] to-[#002b5c] bg-[length:200%_auto] animate-gradient-x">
                            Verification.
                        </span>
                    </h1>

                    <h3 className="text-[#43B5AD] text-lg md:text-2xl font-bold uppercase tracking-[0.3em] max-w-3xl mx-auto leading-relaxed">
                        53,000 trusted sources. One global platform.
                    </h3>
                </div>

                {/* --- CONTENT BLOCK --- */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                    {/* Left: Highlight */}
                    <div className="lg:col-span-2 space-y-8 text-left">
                        <div className="space-y-6 text-gray-600 text-lg md:text-2xl leading-relaxed">
                            <p className="font-black text-[#002b5c] text-2xl md:text-3xl">
                                Global recruitment doesn’t have to mean global risk.
                            </p>
                            <p className="max-w-3xl">
                                Pakistan Check connects you directly to over <span className="text-[#002b5c] font-bold underline decoration-[#43B5AD] decoration-4">53,000 verified sources</span> with one powerful tool.
                                Built for those who demand scalability and total security.
                            </p>
                        </div>

                        {/* CTA Group - WhatsApp Integrated */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <button className="w-full bg-[#FF9654] hover:bg-[#002b5c] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(255,150,84,0.4)] hover:shadow-none active:scale-95 flex items-center justify-center gap-3">
                                    Book a demo <ArrowRight size={20} />
                                </button>
                            </a>

                            <div className="flex items-center gap-4 text-[#002b5c] font-bold group cursor-pointer">
                                <span className="border-b-2 border-transparent group-hover:border-[#002b5c] transition-all">Explore Documentation</span>
                                <Zap size={18} className="text-[#43B5AD]" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Quick Stats/Features VIP Box */}
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#43B5AD]/10 flex items-center justify-center text-[#43B5AD]">
                                <ShieldCheck size={28} />
                            </div>
                            <div>
                                <p className="text-[#002b5c] font-black leading-none">Security First</p>
                                <p className="text-xs text-gray-400 font-medium">Source-level integrity</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#002b5c]/5 flex items-center justify-center text-[#002b5c]">
                                <Globe size={28} />
                            </div>
                            <div>
                                <p className="text-[#002b5c] font-black leading-none">Global Scale</p>
                                <p className="text-xs text-gray-400 font-medium">195 Countries mapped</p>
                            </div>
                        </div>
                        <div className="pt-4 border-t border-gray-50 italic text-gray-400 text-sm">
                            "The industry standard for cross-border compliance."
                        </div>
                    </div>
                </div>

                {/* --- LOGO STRIP / TRUST BAR --- */}
                <div className="mt-24 pt-10 border-t border-gray-200/50 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
                    <span className="font-black tracking-tighter text-2xl">ISO CERTIFIED</span>
                    <span className="font-black tracking-tighter text-2xl">GDPR COMPLIANT</span>
                    <span className="font-black tracking-tighter text-2xl">256-BIT ENCRYPTION</span>
                </div>
            </div>
        </section>
    );
};

export default ResourcesHero;