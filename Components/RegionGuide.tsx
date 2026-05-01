"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, ArrowRight, ShieldAlert, Globe2 } from 'lucide-react';

/**
 * RegionGuide Component - Oceania Edition
 * Style: Clean, Editorial, Geographic Focus
 * Branding: verification.com (Navy & Teal with Orange Accents)
 */
const RegionGuide: React.FC = () => {
    return (
        <section className="bg-white py-24 px-8 md:px-16 lg:px-24 overflow-hidden relative">

            {/* Subtle Decorative Elements */}
            <div className="absolute top-20 left-10 opacity-[0.03] pointer-events-none">
                <Globe2 size={400} className="text-[#002b5c]" />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative z-10">

                {/* Left Side: Strategic Content */}
                <div className="w-full md:w-1/2 space-y-8">

                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-[#FF9654] flex items-center justify-center text-white border-2 border-white shadow-sm">
                                <MapPin size={14} />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-[#43B5AD] flex items-center justify-center text-white border-2 border-white shadow-sm">
                                <ShieldAlert size={14} />
                            </div>
                        </div>
                        <span className="text-[#002b5c] text-xs font-black tracking-[0.2em] uppercase">Regional Intelligence</span>
                    </div>

                    <h2 className="text-[#002b5c] text-4xl md:text-6xl font-black leading-tight tracking-tighter">
                        How to stop <span className="text-[#FF9654]">admissions fraud</span> (AUS & NZ)
                    </h2>

                    <div className="space-y-6 text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl">
                        <p className="font-medium">
                            For admissions teams across <span className="text-[#002b5c] font-bold">Australia and New Zealand</span>, the landscape of international student recruitment is constantly evolving.
                        </p>
                        <p>
                            As universities strive to welcome genuine talent from around the globe, they face increasing challenges in ensuring the authenticity of academic credentials in a high-stakes environment.
                        </p>
                    </div>

                    {/* VIP CTA Button */}
                    <button className="group flex items-center gap-4 bg-[#002b5c] text-white px-8 py-4 rounded-2xl font-bold transition-all hover:bg-[#43B5AD] hover:shadow-[0_20px_40px_-10px_rgba(67,181,173,0.4)] active:scale-95">
                        Read the full guide
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                            <ArrowRight size={14} />
                        </div>
                    </button>
                </div>

                {/* Right Side: Visual Map Presentation */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative group w-full max-w-[550px]">

                        {/* Outer Glow Effect */}
                        <div className="absolute inset-0 bg-[#FF9654]/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                        {/* Map Container */}
                        <div className="relative h-[400px] md:h-[550px] w-full bg-[#002b5c] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,30,60,0.4)] border border-white/10 flex items-center justify-center p-12 transition-transform duration-700 group-hover:-translate-y-3">

                            {/* Inner Abstract Pattern */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none"
                                style={{ backgroundImage: `radial-gradient(#43B5AD 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
                            </div>

                            <div className="relative w-full h-full transform transition-transform duration-[2000ms] group-hover:scale-105">
                                <Image
                                    src="/scam.webp"
                                    alt="Regional Focus: Australia and New Zealand"
                                    fill
                                    className="object-contain filter drop-shadow-[0_0_30px_rgba(255,150,84,0.3)]"
                                    priority
                                />
                            </div>

                            {/* Corner Stats Badge */}
                            <div className="absolute top-8 right-8 backdrop-blur-xl bg-white/5 border border-white/10 p-4 rounded-2xl hidden lg:block">
                                <div className="text-center">
                                    <p className="text-[#FF9654] text-2xl font-black leading-none">2026</p>
                                    <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase mt-1">Compliance Ed.</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Interaction Hint */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-xl px-6 py-3 rounded-full flex items-center gap-3 border border-gray-100 whitespace-nowrap">
                            <span className="w-2 h-2 rounded-full bg-[#FF9654] animate-ping"></span>
                            <p className="text-[#002b5c] text-xs font-black tracking-widest uppercase">Deep Dive: Oceania Sector</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RegionGuide;