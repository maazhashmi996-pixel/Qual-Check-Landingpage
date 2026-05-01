"use client";

import React from 'react';
import Image from 'next/image';
import { AlertCircle, ArrowUpRight } from 'lucide-react';

/**
 * FakeDegreeRisk Component - VIP Editorial Edition
 * Theme: Verification.com (Navy Blue & Teal)
 * Focus: Security, Compliance, Professionalism
 */
const FakeDegreeRisk: React.FC = () => {
    // Brand Colors
    const brandBlue = "#004085";
    const brandTeal = "#43B5AD";

    return (
        <section className="relative bg-[#fcfdfe] py-24 px-8 md:px-16 lg:px-24 border-t border-gray-100 overflow-hidden">

            {/* Background Texture for a "Premium Report" feel */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" /></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24 relative z-10">

                {/* Left Side: Content */}
                <div className="w-full md:w-1/2 space-y-8">

                    {/* Security Alert Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-lg">
                        <AlertCircle className="text-red-600" size={18} />
                        <span className="text-red-700 font-bold text-xs uppercase tracking-widest">Industry Insight 2026</span>
                    </div>

                    <h2 className="text-[#004085] text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
                        When Fake Degrees <span className="text-[#43B5AD]">Look Real.</span>
                    </h2>

                    <div className="space-y-6">
                        <p className="text-gray-700 text-xl font-bold leading-relaxed">
                            What a recent fake certificate scandal reveals about the critical limits of manual document checks.
                        </p>
                        <p className="text-gray-500 text-lg leading-relaxed border-l-4 border-[#43B5AD] pl-6">
                            Recent reporting around large-scale fraud rackets in India and regulatory shifts in Australia have brought international admissions compliance back into sharp focus. Document verification is no longer enough—digital truth is required.
                        </p>
                    </div>

                    {/* Premium Styled Link */}
                    <button className="group flex items-center gap-3 text-[#004085] font-extrabold text-lg transition-all hover:text-[#43B5AD]">
                        <span className="border-b-2 border-[#43B5AD]/30 group-hover:border-[#43B5AD] pb-1 transition-all">
                            Read the full analysis
                        </span>
                        <div className="w-10 h-10 rounded-full bg-[#004085]/5 flex items-center justify-center group-hover:bg-[#43B5AD] group-hover:text-white transition-all">
                            <ArrowUpRight size={20} />
                        </div>
                    </button>
                </div>

                {/* Right Side: Illustration with VIP Container */}
                <div className="w-full md:w-1/2">
                    <div className="relative p-4 md:p-8">
                        {/* Decorative Background for Image */}
                        <div className="absolute inset-0 bg-[#004085]/5 rounded-[3rem] rotate-3 transform group-hover:rotate-0 transition-transform duration-500"></div>

                        <div className="relative bg-white h-[350px] md:h-[450px] w-full rounded-[2.5rem] shadow-2xl overflow-hidden flex items-center justify-center border border-gray-100 transform hover:-translate-y-2 transition-all duration-500">

                            {/* Subtle Radial Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-white to-[#43B5AD]/10 opacity-60"></div>

                            <div className="relative w-[80%] h-[80%]">
                                <Image
                                    src="/fr.webp"
                                    alt="Verification Fraud Analysis"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Security Tag Overlay */}
                            <div className="absolute bottom-6 right-6 bg-[#004085] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                RISK MITIGATION
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FakeDegreeRisk;