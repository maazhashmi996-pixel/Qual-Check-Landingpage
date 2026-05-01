"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
    { id: 1, src: "/logos/bqa.png", alt: "BQA" },
    { id: 2, src: "/logos/goc.png", alt: "General Optical Council" },
    { id: 3, src: "/logos/saqa.png", alt: "SAQA" },
    { id: 4, src: "/logos/hongkong.png", alt: "Hong Kong Immigration" },
    { id: 5, src: "/logos/cisi.png", alt: "CISI" },
    { id: 6, src: "/logos/ecctis.png", alt: "Ecctis" },
    { id: 7, src: "/logos/engineering-nz.png", alt: "Engineering NZ" },
    { id: 8, src: "/logos/imper.png", alt: "IMPER" },
];

/**
 * TrustedBy Component - Infinite Smooth Marquee
 * Features: Auto-scrolling, Grayscale-to-Color hover, Edge Fading
 */
const TrustedBy: React.FC = () => {
    // Array ko triple kar dete hain for seamless ultra-wide scrolling
    const duplicatedLogos = [...logos, ...logos, ...logos];

    return (
        <section className="bg-[#F8F8F5] py-20 border-t border-gray-100 overflow-hidden relative">

            <div className="container mx-auto px-6 mb-16 text-center">
                <div className="flex flex-col items-center gap-3">
                    <span className="text-[#43B5AD] text-[10px] font-black uppercase tracking-[0.5em]">Global Network</span>
                    <h2 className="text-[#002b5c] text-3xl md:text-4xl font-black tracking-tighter">
                        Trusted by <span className="text-[#43B5AD]">Industry Leaders.</span>
                    </h2>
                </div>
            </div>

            {/* Slider Container with Perspective Masking */}
            <div className="relative group">

                {/* Left/Right Glassmorphism Fade */}
                <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#F8F8F5] via-[#F8F8F5]/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#F8F8F5] via-[#F8F8F5]/80 to-transparent z-20 pointer-events-none" />

                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex items-center gap-16 md:gap-24 px-8"
                        animate={{
                            x: ["0%", "-33.33%"],
                        }}
                        transition={{
                            duration: 35, // Slow & Professional speed
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {duplicatedLogos.map((logo, index) => (
                            <div
                                key={`${logo.id}-${index}`}
                                className="flex-shrink-0 group/logo relative"
                            >
                                <div className="w-32 md:w-44 h-16 md:h-24 relative grayscale opacity-40 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-110 transition-all duration-700 ease-out flex items-center justify-center">
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="max-w-full max-h-full object-contain filter drop-shadow-sm"
                                    />
                                </div>

                                {/* Subtle Tooltip on Hover */}
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                    <span className="text-[10px] font-bold text-[#43B5AD] tracking-widest uppercase">Verified Partner</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="mt-20 max-w-4xl mx-auto border-b border-gray-200/50"></div>
        </section>
    );
};

export default TrustedBy;