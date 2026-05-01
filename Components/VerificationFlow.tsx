"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe, Laptop, ArrowRight, ShieldCheck } from 'lucide-react';

/**
 * VerificationFlow Component - The Interactive Process Map
 * Theme: Technical, Kinetic, Transparent
 */
const VerificationFlow: React.FC = () => {
    return (
        <section className="bg-[#F8F8F5] py-24 px-6 overflow-hidden relative">

            {/* Background Narrative Title */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <h2 className="text-[#002b5c] text-3xl md:text-5xl font-black tracking-tighter">
                    How it <span className="text-[#43B5AD]">Works.</span>
                </h2>
                <p className="text-gray-500 font-medium mt-4">Three simple steps to global authenticity.</p>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative">

                {/* --- STEP 1: INPUT --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center space-y-6 relative z-10 w-full md:w-1/3"
                >
                    <div className="relative">
                        {/* Status Pulse */}
                        <div className="absolute -inset-4 bg-[#43B5AD]/20 rounded-full animate-ping opacity-75"></div>

                        <div className="relative w-32 h-32 rounded-[2.5rem] bg-white border-2 border-[#43B5AD] overflow-hidden shadow-2xl flex items-center justify-center p-2">
                            <div className="rounded-[2rem] overflow-hidden w-full h-full relative">
                                <Image
                                    src="/images/applicant.jpg"
                                    alt="Applicant"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-[#002b5c] text-white p-2 rounded-xl shadow-lg">
                            <ShieldCheck size={20} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-[#002b5c] font-black text-xl uppercase tracking-tighter">
                            Submission
                        </h3>
                        <p className="text-gray-500 text-sm font-medium max-w-[200px]">
                            Applicant or organization uploads details to the platform.
                        </p>
                    </div>
                </motion.div>

                {/* --- CONNECTOR 1 --- */}
                <div className="hidden md:block absolute left-[28%] top-[35%] w-[15%] pointer-events-none">
                    <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <svg width="100%" height="40" viewBox="0 0 120 40" fill="none">
                            <path d="M5 20C30 5 90 5 115 20" stroke="#FF9654" strokeWidth="3" strokeDasharray="8 8" className="opacity-30" />
                            <path d="M105 12L115 20L105 28" stroke="#FF9654" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.div>
                </div>

                {/* --- STEP 2: THE ENGINE --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col items-center justify-center w-full md:w-1/3"
                >
                    {/* Animated Orbit */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute w-72 h-72 border border-dashed border-[#43B5AD]/40 rounded-full"
                    />

                    <div className="relative z-10 w-full max-w-[320px]">
                        {/* Device Frame */}
                        <div className="bg-[#002b5c] rounded-2xl border-[6px] border-[#2D4A53] shadow-[0_40px_80px_-15px_rgba(0,43,92,0.4)] overflow-hidden">
                            <div className="bg-[#1E3A44] aspect-video flex flex-col relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                                <div className="p-4 flex flex-col h-full">
                                    <div className="flex justify-between items-center mb-auto">
                                        <div className="space-y-1">
                                            <div className="w-8 h-1 bg-[#43B5AD] rounded-full"></div>
                                            <div className="w-12 h-1 bg-white/20 rounded-full"></div>
                                        </div>
                                        <Globe className="text-[#FF9654] animate-spin-slow" size={24} />
                                    </div>

                                    <div className="mt-4 space-y-2">
                                        <div className="h-2 w-full bg-white/10 rounded"></div>
                                        <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                                    </div>

                                    <div className="mt-auto bg-[#43B5AD]/20 border border-white/10 p-2 rounded flex items-center gap-2">
                                        <div className="w-4 h-4 bg-[#43B5AD] rounded-sm animate-pulse"></div>
                                        <span className="text-[8px] text-white font-bold tracking-widest uppercase">Processing Request...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Device Base Reflection */}
                        <div className="h-2 w-[90%] mx-auto bg-black/20 blur-md rounded-full mt-4"></div>
                    </div>

                    <h3 className="mt-8 text-[#002b5c] font-black text-xl uppercase tracking-tighter">
                        Verification Engine
                    </h3>
                </motion.div>

                {/* --- CONNECTOR 2 --- */}
                <div className="hidden md:block absolute right-[28%] top-[35%] w-[15%] pointer-events-none">
                    <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                    >
                        <svg width="100%" height="40" viewBox="0 0 120 40" fill="none">
                            <path d="M5 20C30 5 90 5 115 20" stroke="#FF9654" strokeWidth="3" strokeDasharray="8 8" className="opacity-30" />
                            <path d="M105 12L115 20L105 28" stroke="#FF9654" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.div>
                </div>

                {/* --- STEP 3: OUTPUT --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center w-full md:w-1/3"
                >
                    <div className="relative group">
                        <div className="w-24 h-48 bg-[#002b5c] rounded-[2.5rem] border-[4px] border-[#2D4A53] relative shadow-2xl overflow-hidden flex flex-col">
                            {/* Screen Glow */}
                            <div className="absolute inset-0 bg-[#43B5AD]/5 group-hover:bg-[#43B5AD]/10 transition-colors"></div>

                            {/* Content */}
                            <div className="mt-12 flex flex-col items-center gap-4 p-4 text-center">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="bg-[#43B5AD] rounded-full p-3 shadow-[0_0_20px_rgba(67,181,173,0.5)]"
                                >
                                    <CheckCircle2 size={32} className="text-white" />
                                </motion.div>
                                <div className="space-y-1">
                                    <div className="h-1 w-12 bg-white/20 mx-auto rounded"></div>
                                    <div className="h-1 w-8 bg-white/10 mx-auto rounded"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Success Badge */}
                        <div className="absolute -top-4 -right-4 bg-[#FF9654] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg transform rotate-12">
                            VERIFIED
                        </div>
                    </div>

                    <h3 className="mt-10 text-[#002b5c] font-black text-xl uppercase tracking-tighter">
                        Instant Result
                    </h3>
                    <p className="text-gray-500 text-sm font-medium mt-2 max-w-[200px] text-center">
                        Secure digital proof delivered to your dashboard.
                    </p>
                </motion.div>

            </div>

            {/* Bottom Visual Connection Line */}
            <div className="mt-24 max-w-5xl mx-auto border-b border-dashed border-gray-200"></div>
        </section>
    );
};

export default VerificationFlow;