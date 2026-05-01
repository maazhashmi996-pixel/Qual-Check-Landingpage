"use client";

import React from 'react';
import Image from 'next/image';

/**
 * GlobalPresence Component
 * Website theme according to verification.com logo.
 * Paragraphs modified for a more professional, trust-focused tone.
 */
const GlobalPresence: React.FC = () => {
    // Definining common color classes for easier updates.
    // Use logo colors: Main Blue for text/borders, Teal-Cyan for highlights.
    const textPrimary = "text-[#004085]"; // Darker logo blue for better readability
    const textSecondary = "text-gray-600";
    const textHighlight = "text-[#43B5AD]"; // Teal from logo/original code
    const bgSection = "bg-[#f9fafd]"; // Very light off-white with blue tint
    const borderAccent = "border-[#43B5AD]";

    return (
        <section className={`relative ${bgSection} py-24 px-8 md:px-16 overflow-hidden`}>
            {/* Top Border Accent (Matches teal highlight) */}
            <div className={`absolute top-0 left-0 w-full h-1 ${textHighlight}`}></div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Left Side: Professional Statistics & Text */}
                <div className="w-full md:w-2/5 z-10 space-y-12">

                    {/* Header: Setting the Trust Tone */}
                    <div className="space-y-3">
                        <h2 className={`${textPrimary} text-sm font-semibold tracking-wider uppercase`}>
                            TRUSTED GLOBALLY
                        </h2>
                        <h1 className={`${textPrimary} text-4xl md:text-5xl font-bold leading-tight`}>
                            Your Secure Gateway to Global Compliance
                        </h1>
                    </div>

                    <div className="space-y-12 border-l-4 ${borderAccent} pl-6">
                        {/* Modified Paragraph 1: Direct Physical Presence */}
                        <div className="space-y-2">
                            <h3 className={`${textSecondary} text-2xl md:text-3xl leading-snug`}>
                                Verified through a direct physical presence across <span className={`${textHighlight} font-bold`}>11 key international locations</span>
                            </h3>
                            <p className={`${textSecondary} text-base`}>
                                We ensure authenticity by managing crucial verifications in-country, reducing risk and accelerating processing times.
                            </p>
                        </div>

                        {/* Modified Paragraph 2: Comprehensive Language Support */}
                        <div className="space-y-2">
                            <h3 className={`${textSecondary} text-2xl md:text-3xl leading-snug`}>
                                Supporting global operations with native verification capabilities in <span className={`${textHighlight} font-bold`}>20+ world languages</span>
                            </h3>
                            <p className={`${textSecondary} text-base`}>
                                Breaking down language barriers to provide accurate and legally-sound results, regardless of origin.
                            </p>
                        </div>

                        {/* Modified Paragraph 3: Deep Regulatory Knowledge */}
                        <div className="space-y-2">
                            <h3 className={`${textSecondary} text-2xl md:text-3xl leading-snug`}>
                                Leveraging in-depth, expert knowledge of <span className={`${textHighlight} font-bold`}>regional processes and regulatory requirements</span>
                            </h3>
                            <p className={`${textSecondary} text-base`}>
                                Navigate complex international landscapes confidently with our local insights and compliance expertise.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: World Map Background (Themed for Trust) */}
                <div className="w-full md:w-3/5 relative h-[400px] md:h-[600px] mt-12 md:mt-0 flex items-center justify-center">

                    {/* Themed Glow for Map (Slight Teal-Blue) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#43B5AD]/5 to-[#004085]/5 rounded-full filter blur-3xl opacity-50"></div>

                    <div className="relative w-full h-full p-6 border-2 border-dashed border-[#004085]/10 rounded-2xl">
                        <Image
                            src="/17.png" // Apni map image yahan use karein (e.g., in /public)
                            alt="Map illustrating verification.com's Global Presence and verified office locations across 11 countries."
                            fill
                            className="object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                            priority={true} // Optimize loading for key section
                        />

                        {/* Note on Image: Agar map tasveer available nahi hai toh placeholder show hoga */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100 rounded-2xl group-hover:hidden">
                            <p className="p-10 text-center border border-dashed border-gray-300 rounded">
                                [ Placeholder for World Map Image at '/public/17.png' ]
                                <br />
                                Add your global presence map here.
                            </p>
                        </div>
                    </div>

                    {/* Optional: Interactive/Pulsing Dot Effect Placeholder (Using CSS only for now) */}
                    {/* Add pulsing animation classes in your global CSS to activate this */}
                    {/*
                    <div className="absolute top-[30%] left-[20%] w-4 h-4 bg-[#43B5AD] rounded-full animate-pulse-dots"></div>
                    <div className="absolute top-[50%] right-[40%] w-4 h-4 bg-[#004085] rounded-full animate-pulse-dots delay-200"></div>
                    */}
                </div>

            </div>
        </section>
    );
};

export default GlobalPresence;