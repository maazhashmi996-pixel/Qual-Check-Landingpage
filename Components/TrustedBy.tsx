"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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

const TrustedBy: React.FC = () => {
    // Infinite loop ke liye array ko double kar dete hain
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="bg-[#F8F8F5] py-16 border-t border-gray-200 overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-[#2D4A53] text-3xl font-light mb-12">
                    Trusted By
                </h2>

                {/* Slider Container */}
                <div className="relative flex overflow-hidden">
                    <motion.div
                        className="flex space-x-16 items-center"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {duplicatedLogos.map((logo, index) => (
                            <div
                                key={`${logo.id}-${index}`}
                                className="flex-shrink-0 w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300"
                            >
                                {/* Agar image paths abhi nahi hain, to aap Placeholder/Img tag use kar sakte hain */}
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Fade Effect on Sides */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F8F8F5] to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F8F8F5] to-transparent z-10" />
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;