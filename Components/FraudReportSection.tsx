"use client";

import React from 'react';
import Image from 'next/image';
import { Download, ShieldCheck, ArrowRight } from 'lucide-react';

/**
 * FraudReportSection - VIP Edition
 * Optimized for Verification.com Branding
 */
const FraudReportSection: React.FC = () => {
    return (
        <section className="bg-white py-24 px-8 md:px-16 lg:px-24 border-t border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">

                {/* Top Section: Institution Spotlight */}
                <div className="relative group max-w-5xl">
                    {/* Decorative Accent */}
                    <div className="absolute -left-8 top-0 bottom-0 w-1.5 bg-[#43B5AD] rounded-full opacity-50"></div>

                    <div className="space-y-6 pl-4">
                        <span className="text-[#43B5AD] font-bold tracking-[0.2em] uppercase text-sm">Success Story</span>
                        <h2 className="text-[#004085] text-3xl md:text-5xl font-black leading-tight tracking-tight">
                            Streamlining applicant verification and fraud detection for <span className="text-[#43B5AD]">King's College London</span>
                        </h2>
                        <p className="text-gray-500 text-xl leading-relaxed max-w-3xl">
                            King’s College London optimized their admissions workflow with our specialized infrastructure,
                            drastically reducing fraud risk while accelerating processing times for global applicants.
                        </p>
                        <div className="flex items-center gap-3 text-[#004085] font-bold group-hover:gap-5 transition-all cursor-pointer">
                            <span>Read the full case study</span>
                            <ArrowRight size={20} />
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Report Download with VIP Card */}
                <div className="bg-[#f8fafc] rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 lg:gap-20 border border-gray-100 shadow-sm relative overflow-hidden">

                    {/* Background Decorative Circle */}
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#43B5AD]/5 rounded-full blur-3xl"></div>

                    {/* Left Content */}
                    <div className="w-full md:w-1/2 space-y-8 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm text-[#004085] font-bold text-sm">
                            <ShieldCheck size={18} className="text-[#43B5AD]" />
                            2025 INSIGHTS
                        </div>

                        <h2 className="text-[#004085] text-4xl md:text-6xl font-black leading-tight tracking-tighter">
                            International Admissions Fraud: <span className="text-[#43B5AD]">What Changed?</span>
                        </h2>

                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                            As deadlines compress and operational loads climb, risk creeps in.
                            Our <strong>Post-Cycle Fraud Report</strong> breaks down the latest tactics used in document forgery and how institutions are fighting back.
                        </p>

                        <button className="group relative overflow-hidden bg-[#004085] hover:bg-[#43B5AD] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center gap-4">
                            <Download size={22} className="group-hover:-translate-y-1 transition-transform" />
                            <span>Download Free Report</span>
                        </button>
                    </div>

                    {/* Right Image (Report Cover) with Premium Shadow */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative group perspective-1000">
                            {/* Floating Effect Wrapper */}
                            <div className="relative h-[400px] md:h-[550px] w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-[0_50px_100px_rgba(0,64,133,0.2)] transform group-hover:rotate-y-12 group-hover:scale-105 transition-all duration-700 ease-out">
                                <Image
                                    src="/ask.png"
                                    alt="Post-Cycle Fraud Report 2025 Intake Edition"
                                    fill
                                    className="object-cover"
                                />
                                {/* Glossy Overlay Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
                            </div>

                            {/* Decorative Shadow behind report */}
                            <div className="absolute -z-10 inset-0 bg-[#43B5AD]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default FraudReportSection;