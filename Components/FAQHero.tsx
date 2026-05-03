"use client";

import React from 'react';
import Image from 'next/image';

/**
 * FAQHero Component - VIP Edition
 * Branding: verification.com (Navy Blue & Teal)
 * Style: Deep Gradient, Professional, High-Contrast
 */
const FAQHero: React.FC = () => {
    // Theme Colors
    const brandBlue = "#004085";
    const brandTeal = "#43B5AD";

    return (
        <section className="relative w-full h-[350px] md:h-[500px] overflow-hidden group">

            {/* Background Image with subtle zoom effect on section hover */}
            <div className="absolute inset-0 transition-transform duration-[2000ms] group-hover:scale-105">
                <Image
                    src="/images/diverse-team-devices.jpg"
                    alt="Verification.com Support Team"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Premium VIP Overlay: Deep Blue to Teal Transition */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#004085]/95 via-[#004085]/80 to-[#43B5AD]/70 z-10" />

            {/* Decorative Elements (VIP Touch) */}
            <div className="absolute inset-0 z-15 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
                <div className="absolute bottom-0 left-10 w-24 h-1 bg-[#43B5AD] rounded-full opacity-50"></div>
            </div>

            {/* Centered Text Content with Glassmorphism Effect */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">

                {/* Floating Badge */}
                <div className="mb-6 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                    <span className="text-[#43B5AD] text-xs md:text-sm font-black tracking-[0.4em] uppercase">
                        Knowledge Base
                    </span>
                </div>

                <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
                    Organisation <span className="text-[#43B5AD]">FAQs</span>
                </h1>

                {/* Subtitle with better spacing */}
                <div className="mt-8 relative">
                    <p className="text-gray-200 text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
                        Everything you need to know about our Pakistan verification ecosystem and enterprise solutions.
                    </p>
                    {/* Centered underline */}
                    <div className="w-20 h-1.5 bg-[#43B5AD] mx-auto mt-6 rounded-full"></div>
                </div>
            </div>

            {/* Bottom Curve (Subtle Detail) */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-30"></div>
        </section>
    );
};

export default FAQHero;