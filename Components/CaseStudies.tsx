"use client";

import React from 'react';
import Image from 'next/image';

const CaseStudies: React.FC = () => {
    const brandBlue = "#004085";
    const brandTeal = "#43B5AD";

    const cases = [
        {
            image: "/ccc.jpg",
            title: "Streamlining Admissions at Cambridge Judge Business School",
            desc: "Helping one of the world's most respected institutions manage international post-graduate verifications with 100% accuracy and speed."
        },
        {
            image: "/11.png",
            title: "CISI: Enhancing Global Membership Integrity",
            desc: "Implementing AutoVerify to provide real-time status checks against global registers, ensuring only genuine professionals are recognized."
        },
        {
            image: "/13.png",
            title: "Bloomsbury Institute: Compliance Simplified",
            desc: "Optimizing the admissions lifecycle by integrating thorough certificate and transcript authentication with seamless compliance interviews."
        }
    ];

    return (
        <section className="bg-[#002b5c] py-28 px-8 md:px-16 text-white relative overflow-hidden">

            {/* Background Accent for Depth */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#43B5AD]/5 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <span className="text-[#43B5AD] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                        Proven Results
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                        Case <span className="text-[#43B5AD]">Studies</span>
                    </h2>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                        See how we empower world-class organizations to secure their verification processes.
                    </p>
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {cases.map((item, index) => (
                        <div key={index} className="flex flex-col group h-full">

                            {/* Image Wrapper with VIP Animation */}
                            <div className="relative h-72 w-full mb-8 overflow-hidden rounded-[2rem] bg-[#004085] shadow-2xl border border-white/10">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c] via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 flex flex-col px-2">
                                <h3 className="text-2xl font-extrabold mb-5 leading-tight text-white group-hover:text-[#43B5AD] transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-10 line-clamp-4 group-hover:text-gray-300 transition-colors">
                                    {item.desc}
                                </p>

                                {/* VIP Styled Read More Button */}
                                <button className="mt-auto group/btn flex items-center gap-3 text-[#43B5AD] font-bold text-lg hover:text-white transition-all">
                                    <span className="relative">
                                        Read Full Success Story
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#43B5AD] transition-all duration-300 group-hover/btn:w-full"></span>
                                    </span>
                                    <div className="w-10 h-10 rounded-full border border-[#43B5AD]/30 flex items-center justify-center group-hover/btn:bg-[#43B5AD] group-hover/btn:border-[#43B5AD] transition-all">
                                        <svg
                                            className="w-5 h-5 text-[#43B5AD] group-hover/btn:text-white transform transition-transform group-hover/btn:translate-x-1"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;