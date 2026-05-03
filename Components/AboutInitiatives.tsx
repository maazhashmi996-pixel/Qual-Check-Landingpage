"use client";

import React from 'react';
import Image from 'next/image';

/**
 * Initiatives Component - VIP Branding
 * Updated for verification.com theme (Blue & Teal)
 */
const Initiatives: React.FC = () => {
    // Theme Colors
    const brandBlue = "#004085";
    const brandTeal = "#43B5AD";

    const initiatives = [
        {
            logo: "/gg.jpg",
            title: "Global Security Initiative",
            desc: "We align with the highest standards of international verification security and data protection protocols."
        },
        {
            logo: "/Drive.webp",
            title: "Corporate Excellence",
            desc: "Proudly committed to fostering a professional and mentally supportive workspace for our global team."
        },
        {
            logo: "/16.png",
            title: "Social Responsibility",
            desc: "Dedicated to giving back through our chosen annual charity, supporting global humanitarian efforts."
        }
    ];

    return (
        <section className="bg-white pb-24">
            <div className="bg-[#004085] pt-24 pb-48 px-8 text-center rounded-b-[50px] md:rounded-b-[100px] relative overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-40 h-40 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 border-4 border-[#43B5AD] rounded-full translate-x-1/3 translate-y-1/3"></div>
                </div>

                <div className="relative z-10">
                    <span className="text-[#43B5AD] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                        Our Commitments
                    </span>
                    <h2 className="text-white text-3xl md:text-5xl font-extrabold max-w-4xl mx-auto leading-tight">
                        We are proud to support global initiatives that promote <span className="text-[#43B5AD]">integrity and excellence.</span>
                    </h2>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8 -mt-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {initiatives.map((item, index) => (
                        <div key={index} className="flex flex-col group h-full">

                            {/* Glassmorphism Effect Card */}
                            <div className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,64,133,0.1)] border border-gray-100 flex items-center justify-center h-72 transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_30px_60px_rgba(67,181,173,0.2)] relative overflow-hidden">
                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#43B5AD]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="relative w-40 h-40">
                                    <Image
                                        src={item.logo}
                                        alt={item.title}
                                        fill
                                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>

                            {/* Text below card */}
                            <div className="mt-10 flex flex-col items-center text-center px-4">
                                <h3 className="text-[#004085] text-2xl font-bold mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                    {item.desc}
                                </p>

                                {/* Custom Themed Button */}
                                <button className="relative overflow-hidden group/btn px-10 py-3 rounded-xl font-bold text-white transition-all">
                                    <span className="absolute inset-0 bg-[#004085] group-hover/btn:bg-[#43B5AD] transition-colors duration-300"></span>
                                    <span className="relative z-10 flex items-center gap-2">
                                        View Impact
                                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7"></path></svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Initiatives;