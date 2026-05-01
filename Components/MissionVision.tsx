"use client";

import React from 'react';
import Image from 'next/image';
import { Target, Eye } from 'lucide-react';

/**
 * MissionVision Component - VIP Ultra-Wide Edition
 * Branding: verification.com (Deep Navy & Teal)
 * Style: Split-Screen Cinematic
 */
const MissionVision: React.FC = () => {
    return (
        <section className="w-full flex flex-col md:flex-row min-h-[500px] lg:min-h-[650px] overflow-hidden border-y border-gray-100">

            {/* --- LEFT CONTENT: Strategic Text --- */}
            <div className="w-full md:w-[35%] bg-[#002b5c] flex flex-col justify-center px-12 md:px-16 lg:px-24 py-24 md:py-0 relative">

                {/* Decorative Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
                </div>

                <div className="relative z-10 space-y-16">

                    {/* Mission Block */}
                    <div className="group">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 bg-[#43B5AD]/20 rounded-lg">
                                <Target className="text-[#43B5AD]" size={24} />
                            </div>
                            <span className="text-[#43B5AD] font-black tracking-[0.3em] uppercase text-xs">Our Mission</span>
                        </div>
                        <p className="text-[#F8F8F5] text-xl lg:text-2xl leading-relaxed font-medium">
                            To empower organisations and individuals through <span className="text-[#43B5AD] border-b-2 border-[#43B5AD]/30 group-hover:border-[#43B5AD] transition-all">trusted global verified</span> credentials.
                        </p>
                    </div>

                    {/* Vision Block */}
                    <div className="group">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 bg-[#43B5AD]/20 rounded-lg">
                                <Eye className="text-[#43B5AD]" size={24} />
                            </div>
                            <span className="text-[#43B5AD] font-black tracking-[0.3em] uppercase text-xs">Our Vision</span>
                        </div>
                        <p className="text-[#F8F8F5] text-xl lg:text-2xl leading-relaxed font-medium">
                            To be the <span className="text-white font-bold">ultimate trusted source</span> of global verified qualification and licence data.
                        </p>
                    </div>

                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#43B5AD] to-transparent"></div>
            </div>

            {/* --- RIGHT CONTENT: Cinematic Image --- */}
            <div className="w-full md:w-[65%] relative min-h-[400px] md:min-h-full group overflow-hidden">

                {/* Image Component with subtle parallax effect on hover */}
                <Image
                    src="/missionss.webp"
                    alt="The Global Workforce - Verification.com"
                    fill
                    className="object-cover object-center transition-transform duration-[3000ms] group-hover:scale-110"
                    priority
                />

                {/* Sophisticated Overlay Gradients */}
                {/* Left side shadow for text legibility transition */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#002b5c] via-transparent to-transparent opacity-40 md:opacity-20"></div>

                {/* VIP Glassmorphism Badge (Bottom Right) */}
                <div className="absolute bottom-10 right-10 backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-3xl max-w-xs hidden lg:block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <p className="text-white text-sm font-bold leading-relaxed">
                        "Creating a world where every credential is a bridge to opportunity, not a barrier."
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                        <div className="w-8 h-[1px] bg-[#43B5AD]"></div>
                        <span className="text-[#43B5AD] text-[10px] font-black uppercase tracking-tighter">Verified Integrity</span>
                    </div>
                </div>

                {/* Subtle Image Vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] pointer-events-none"></div>
            </div>

        </section>
    );
};

export default MissionVision;