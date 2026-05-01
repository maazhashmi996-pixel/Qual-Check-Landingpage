"use client";

import React from 'react';
import {
    Handshake,
    Eye,
    Heart,
    ShieldCheck,
    Flame,
    Gem,
    Zap,
    Compass
} from 'lucide-react';

/**
 * OurValues Component - Premium Branding
 * Theme: verification.com (Navy Blue & Teal)
 * Style: Minimalist, Modern, VIP
 */
const OurValues: React.FC = () => {
    // Brand Colors logic
    const brandBlue = "#004085"; // Logo Deep Blue
    const brandTeal = "#43B5AD"; // Logo Teal

    const values = [
        { name: "Respect", icon: <Handshake size={52} strokeWidth={1.5} /> },
        { name: "Vision", icon: <Eye size={52} strokeWidth={1.5} /> },
        { name: "Empathy", icon: <Heart size={52} strokeWidth={1.5} /> },
        { name: "Authentic", icon: <ShieldCheck size={52} strokeWidth={1.5} /> },
        { name: "Passionate", icon: <Flame size={52} strokeWidth={1.5} /> },
        { name: "Integrity", icon: <Gem size={52} strokeWidth={1.5} /> },
        { name: "Empowering", icon: <Zap size={52} strokeWidth={1.5} /> },
        { name: "Intrepid", icon: <Compass size={52} strokeWidth={1.5} /> },
    ];

    return (
        <section className="bg-[#002b5c] py-28 px-8 md:px-16 text-white text-center relative overflow-hidden">

            {/* Subtle Gradient Background Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#004085]/40 via-transparent to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-24 space-y-4">
                    <span className="text-[#43B5AD] font-bold tracking-[0.3em] uppercase text-sm">
                        The Core of Verification.com
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                        Our <span className="text-[#43B5AD]">Values</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-[#43B5AD] mx-auto rounded-full mt-6"></div>
                </div>

                {/* Values Grid with VIP Hover Effects */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center group cursor-default"
                        >
                            {/* Icon Container with Glassmorphism Hover */}
                            <div className="relative mb-8 p-6 rounded-2xl transition-all duration-500 group-hover:bg-white/5 group-hover:shadow-[0_0_40px_rgba(67,181,173,0.2)]">
                                <div className="text-[#43B5AD] transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-6 group-hover:text-white">
                                    {value.icon}
                                </div>

                                {/* Floating Glow behind icon on hover */}
                                <div className="absolute inset-0 bg-[#43B5AD]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Value Name with Letter Spacing */}
                            <h4 className="text-lg md:text-2xl font-bold tracking-wider text-gray-200 group-hover:text-[#43B5AD] transition-colors duration-300">
                                {value.name}
                            </h4>

                            {/* Sub-line for VIP look */}
                            <div className="w-0 h-0.5 bg-[#43B5AD] transition-all duration-300 group-hover:w-12 mt-2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValues;