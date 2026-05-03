"use client";

import React from 'react';
import Image from 'next/image';
import { Award, Calendar, ArrowRight } from 'lucide-react';

/**
 * NewsHighlight Component - Award Excellence Edition
 * Style: Sophisticated, Clean, Institutional
 * Branding: verification.com VIP
 */
const NewsHighlight: React.FC = () => {
    return (
        <section className="bg-white py-24 px-8 md:px-16 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">

                {/* Left Side: Content Excellence */}
                <div className="w-full md:w-1/2 space-y-8 relative">

                    {/* VIP Label */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#004085]/5 rounded-full border border-[#004085]/10">
                        <Award size={16} className="text-[#43B5AD]" />
                        <span className="text-[#004085] text-xs font-black tracking-widest uppercase">Latest Updates</span>
                    </div>

                    <h2 className="text-[#004085] text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                        QCHE Awards 2026 winners: <span className="text-[#43B5AD]">Celebrating Excellence</span> in Compliance.
                    </h2>

                    <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
                        <div className="flex items-start gap-3">
                            <Calendar size={20} className="text-[#43B5AD] mt-1 flex-shrink-0" />
                            <p>
                                As the sun set over London on <span className="text-[#004085] font-bold">Wednesday 11 February</span> at the stunning
                                Glaziers Hall, we held our inaugural QC Awards 2026.
                            </p>
                        </div>
                        <p className="pl-8 border-l-2 border-[#43B5AD]/20 italic">
                            Honouring the creative, data-driven, and collaborative approaches that are
                            strengthening Pakistan verification standards and integrity.
                        </p>
                    </div>

                    {/* Premium Action Button */}
                    <button className="group flex items-center gap-4 text-[#004085] font-black text-lg mt-10 transition-all">
                        <span className="relative">
                            Read the full story
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#43B5AD] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </span>
                        <div className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:bg-[#004085] group-hover:text-white group-hover:border-[#004085] transition-all">
                            <ArrowRight size={20} />
                        </div>
                    </button>
                </div>

                {/* Right Side: Trophy Spotlight with Advanced Shadowing */}
                <div className="w-full md:w-1/2 flex justify-center relative">

                    {/* Decorative Background Element */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#43B5AD]/10 rounded-full blur-[100px]"></div>

                    <div className="relative group perspective-1000">
                        {/* Frame Border VIP */}
                        <div className="absolute -inset-4 border border-[#43B5AD]/20 rounded-2xl group-hover:inset-0 transition-all duration-700"></div>

                        <div className="relative h-[450px] md:h-[600px] w-full min-w-[320px] md:min-w-[450px] shadow-[0_40px_80px_-15px_rgba(0,64,133,0.3)] rounded-2xl overflow-hidden transform transition-all duration-700 group-hover:shadow-[0_60px_100px_-20px_rgba(0,64,133,0.4)] group-hover:-translate-y-2">
                            <Image
                                src="/sd.webp"
                                alt="QC Awards 2026 Trophy Ceremony"
                                fill
                                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                            />

                            {/* Glassmorphism Badge on Image */}
                            <div className="absolute bottom-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 px-6 py-4 rounded-xl">
                                <p className="text-white text-xs font-black tracking-tighter leading-none mb-1">GHENT UNIVERSITY</p>
                                <p className="text-[#43B5AD] text-[10px] font-bold tracking-widest uppercase">2026 Grand Winner</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default NewsHighlight;