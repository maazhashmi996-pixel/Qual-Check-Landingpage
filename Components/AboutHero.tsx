"use client";

import React from 'react';

const AboutHero: React.FC = () => {
    // Theme Colors
    const primaryBlue = "#004085"; // Deep Trust Blue
    const accentTeal = "#43B5AD";  // Logo Teal

    return (
        <section className="relative bg-[#f4f7fa] py-28 px-6 md:px-16 overflow-hidden">

            {/* Background Decorative Elements for VIP Look */}
            <div className="absolute top-[-10%] right-[-5%] w-72 h-72 bg-[#43B5AD]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#004085]/5 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto text-center relative z-10">

                {/* Badge Style Heading */}
                <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white border border-[#43B5AD]/20 shadow-sm">
                    <span className="text-[#43B5AD] font-bold tracking-widest text-sm uppercase">
                        Our Vision & Legacy
                    </span>
                </div>

                <h1 className="text-[#004085] text-5xl md:text-8xl font-extrabold mb-10 tracking-tight">
                    About <span className="text-[#43B5AD]">Us</span>
                </h1>

                <h3 className="text-[#2D4A53] text-2xl md:text-4xl font-semibold max-w-4xl mx-auto leading-tight mb-12">
                    Innovating global verification through <span className="underline decoration-[#43B5AD] decoration-4 underline-offset-8">advanced technology</span> and human integrity.
                </h3>

                {/* Glassmorphism Content Box */}
                <div className="bg-white/60 backdrop-blur-md border border-white p-8 md:p-12 rounded-[2rem] shadow-xl max-w-5xl mx-auto space-y-8">
                    <div className="space-y-6 text-gray-700 text-lg md:text-2xl leading-relaxed font-medium">
                        <p>
                            <strong className="text-[#004085]">Verification.com</strong> was established with a singular mission: to redefine the landscape of global credentials and identity security. Our journey began with a focus on eliminating fraud and streamlining authentication for a rapidly evolving digital world.
                        </p>
                        <p>
                            Today, we have evolved into a global powerhouse, serving thousands of enterprises across three continents. Our suite of <span className="text-[#43B5AD] font-bold">AI-powered compliance solutions</span> ensures that trust is not just a promise, but a verified reality in every transaction.
                        </p>
                    </div>

                    {/* Stats / Highlights Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200/50">
                        <div>
                            <div className="text-[#43B5AD] text-4xl font-black">15+</div>
                            <div className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-1">Years Excellence</div>
                        </div>
                        <div>
                            <div className="text-[#004085] text-4xl font-black">Global</div>
                            <div className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-1">Network Presence</div>
                        </div>
                        <div>
                            <div className="text-[#43B5AD] text-4xl font-black">Secure</div>
                            <div className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-1">Cloud Architecture</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;