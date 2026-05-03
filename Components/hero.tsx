"use client";

import React from 'react';
import { ArrowRight, Globe2, ShieldCheck, Zap } from 'lucide-react';

/**
 * Hero Component - Ultra VIP Edition
 * Purpose: Main landing attraction for verification.com
 * Style: Minimalist, Corporate, Tech-Forward
 */
const Hero: React.FC = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-[#F8F8F5] overflow-hidden py-24 px-6">

            {/* --- VIP BACKGROUND ELEMENTS --- */}
            {/* Animated Gradient Orbs */}
            <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#43B5AD]/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#004085]/5 rounded-full blur-[120px]"></div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#2D4A53 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">

                {/* --- TOP BADGE --- */}
                <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-sm border border-gray-100 mb-8 animate-fade-in">
                    <span className="flex h-2 w-2 rounded-full bg-[#43B5AD]"></span>
                    <span className="text-[#2D4A53] text-sm font-bold tracking-wider uppercase">Next-Gen Verification Platform</span>
                </div>

                {/* --- MAIN HEADING --- */}
                <h1 className="text-6xl md:text-8xl font-black text-[#004085] mb-8 tracking-tighter leading-[0.95]">
                    Verification <br />
                    <span className="text-[#43B5AD] italic font-serif">Made Simple.</span>
                </h1>

                {/* --- PREMIUM STATS BAR --- */}
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mb-12 py-6 border-y border-gray-200/60">
                    <div className="flex flex-col items-center">
                        <span className="text-3xl md:text-4xl font-black text-[#004085]">50,000+</span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Trusted Sources</span>
                    </div>
                    <div className="h-10 w-px bg-gray-200 hidden md:block"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl md:text-4xl font-black text-[#004085]">50+</span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Universities</span>
                    </div>
                    <div className="h-10 w-px bg-gray-200 hidden md:block"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl md:text-4xl font-black text-[#004085]">20+</span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Educational Board</span>
                    </div>
                    <div className="h-10 w-px bg-gray-200 hidden md:block"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl md:text-4xl font-black text-[#43B5AD]">1</span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest font-black">Unified Portal</span>
                    </div>
                </div>

                {/* --- DESCRIPTION --- */}
                <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-3xl mx-auto mb-14 font-medium">
                    Trusted by thousands of global organisations to accelerate recruitment,
                    ensure compliance, and <span className="text-[#004085] font-bold underline decoration-[#43B5AD] decoration-2 underline-offset-4">eliminate fraud risk.</span>
                </p>

                {/* --- CALL TO ACTION BUTTONS --- */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button className="group relative bg-[#004085] text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all hover:bg-[#002b5c] hover:shadow-[0_20px_40px_rgba(0,64,133,0.2)] active:scale-95 flex items-center gap-3">
                        Book a VIP Demo
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>

                    <button className="flex items-center gap-3 text-[#004085] font-bold text-lg hover:text-[#43B5AD] transition-colors">
                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group">
                            <Zap size={20} className="fill-[#43B5AD] text-[#43B5AD]" />
                        </div>
                        See how it works
                    </button>
                </div>

                {/* --- TRUST BADGES (Bottom) --- */}
                <div className="mt-24 pt-10 border-t border-gray-100 flex flex-col items-center gap-6">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">Institutional Grade Security</p>
                    <div className="flex gap-8 opacity-40 grayscale hover:grayscale-0 transition-all cursor-not-allowed">
                        {/* Placeholder for small trust icons like ISO, GDPR etc */}
                        <ShieldCheck size={32} />
                        <Globe2 size={32} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;