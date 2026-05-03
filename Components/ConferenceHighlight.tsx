"use client";

import React from 'react';
import Image from 'next/image';

/**
 * ConferenceHighlight Component - VIP Edition
 * Optimized for verification.com branding.
 */
const ConferenceHighlight: React.FC = () => {
    // Brand Colors
    const brandBlue = "#004085";
    const brandTeal = "#43B5AD";

    return (
        <section className="relative bg-white py-24 px-8 md:px-16 lg:px-24 overflow-hidden">

            {/* Subtle Background Branding Element */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#43B5AD]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#004085]/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">

                {/* Left Side: Content with VIP Typography */}
                <div className="w-full lg:w-1/2 space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-12 h-1 bg-[#43B5AD] rounded-full"></span>
                            <span className="text-[#43B5AD] font-bold tracking-widest uppercase text-sm">Event Spotlight</span>
                        </div>
                        <h2 className="text-[#004085] text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                            QCHE 2026: Elevating <span className="text-[#43B5AD]">Global Assurance</span>
                        </h2>
                    </div>

                    <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed border-l-4 border-[#004085]/10 pl-6">
                        <p className="font-medium text-[#2D4A53]">
                            On Wednesday 11 February 2026, <span className="font-bold text-[#004085]">Verification.com</span> hosted 80 elite delegates from 40 global universities at the prestigious Glaziers Hall, London Bridge.
                        </p>
                        <p>
                            In strategic partnership with Password English Language Testing, the second annual QCHE conference redefined collaborative integrity in international student recruitment.
                        </p>
                    </div>

                    {/* VIP Styled Action Button */}
                    <button className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#004085] text-white font-bold rounded-2xl transition-all duration-300 hover:bg-[#43B5AD] hover:shadow-[0_20px_40px_rgba(67,181,173,0.3)] active:scale-95">
                        <span>Explore Highlights</span>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </button>
                </div>

                {/* Right Side: Image with VIP Framing */}
                <div className="w-full lg:w-1/2">
                    <div className="relative group">
                        {/* Decorative Frame Elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#43B5AD] rounded-tl-3xl transition-all group-hover:-top-6 group-hover:-left-6"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#004085] rounded-br-3xl transition-all group-hover:-bottom-6 group-hover:-right-6"></div>

                        {/* Main Image Container */}
                        <div className="relative h-[400px] md:h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,64,133,0.15)] bg-gray-100">
                            <Image
                                src="/9.jpg"
                                alt="QCHE 2026 Conference Speakers and Delegates"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />
                            {/* Sophisticated Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#004085]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Floating Event Badge */}
                        <div className="absolute -bottom-8 left-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#43B5AD]/10 rounded-full flex items-center justify-center text-[#43B5AD]">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[#004085] font-black text-xl leading-none">FEB 2026</p>
                                    <p className="text-gray-400 text-sm font-bold tracking-widest mt-1">GLAZIERS HALL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ConferenceHighlight;