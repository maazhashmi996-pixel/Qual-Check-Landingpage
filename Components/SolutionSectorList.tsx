"use client";

import React from 'react';
import {
    School,
    HeartPulse,
    UserCheck,
    Award,
    ArrowRightCircle,
    ShieldCheck
} from 'lucide-react';

/**
 * SectorsList Component - Industry Expertise Edition
 * Style: Clean, Professional, Narrative
 * Branding: verification.com (Navy, Teal, and Orange accents)
 */
const SectorsList: React.FC = () => {
    const sectors = [
        {
            title: "Higher Education",
            icon: <School size={32} />,
            accent: "bg-[#43B5AD]",
            content: (
                <p>
                    Verification Check’s Pakistan Verification streamlines <span className="text-[#002b5c] font-bold">university admissions</span> by providing rapid, primary-source verification of applicants’ academic credentials. This reduces administrative friction, mitigates fraud, and ensures strict compliance with global <span className="text-[#FF9654] font-semibold text-sm tracking-wider uppercase">Visa Regulations</span>.
                </p>
            )
        },
        {
            title: "Health & Social Care",
            icon: <HeartPulse size={32} />,
            accent: "bg-[#FF9654]",
            content: (
                <p>
                    In the <span className="text-[#002b5c] font-bold">Health & Social Care sector</span>, we enable employers to confirm credentials for domestic  recruits. Integrated with <span className="text-[#43B5AD] font-semibold italic">UK Medical Licence Monitoring</span>, organisations can automate register checks and maintain the highest standards of clinical patient care.
                </p>
            )
        },
        {
            title: "Professional Recruitment",
            icon: <UserCheck size={32} />,
            accent: "bg-[#002b5c]",
            content: (
                <p>
                    A comprehensive solution for <span className="text-[#002b5c] font-bold">recruiters and background screeners</span> validating  qualifications. Our platform cuts "Time-to-Hire" metrics significantly, ensuring that only verified, high-caliber talent enters your candidate pipeline.
                </p>
            )
        },
        {
            title: "Professional Bodies",
            icon: <Award size={32} />,
            accent: "bg-[#43B5AD]",
            content: (
                <p>
                    <span className="text-[#002b5c] font-bold">Professional and regulatory bodies</span> benefit by efficiently confirming member qualifications. This infrastructure supports global professional standards and aids in the seamless recognition of international credentials across borders.
                </p>
            )
        }
    ];

    return (
        <section className="bg-[#F8F8F5] py-32 px-8 md:px-16 lg:px-24 relative overflow-hidden">

            {/* Subtle Tech Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#002b5c 2px, transparent 2px)`, backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="mb-24 space-y-4">
                    <div className="flex items-center gap-3 text-[#43B5AD]">
                        <ShieldCheck size={24} />
                        <span className="text-xs font-black uppercase tracking-[0.4em]">Sector Intelligence</span>
                    </div>
                    <h2 className="text-[#002b5c] text-4xl md:text-7xl font-black tracking-tighter leading-[1.1]">
                        Sectors we <span className="text-[#43B5AD]">work with.</span>
                    </h2>
                    <p className="text-gray-500 text-xl md:text-2xl max-w-3xl leading-relaxed font-medium">
                        Our Pakistan Verification infrastructure is the trusted standard for diverse industries ensuring integrity in every hire.
                    </p>
                </div>

                {/* Sectors Narrative Flow */}
                <div className="relative border-l-2 border-gray-200 ml-4 md:ml-8 pl-12 md:pl-20 space-y-24">
                    {sectors.map((sector, index) => (
                        <div key={index} className="relative group">

                            {/* Floating Icon Marker */}
                            <div className={`absolute left-[-68px] md:left-[-108px] top-0 w-14 h-14 md:w-20 md:h-20 ${sector.accent} text-white rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 rotate-[-5deg] group-hover:rotate-0`}>
                                {sector.icon}
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <h3 className="text-[#002b5c] text-3xl md:text-4xl font-black tracking-tight">
                                        {sector.title}
                                    </h3>
                                    <ArrowRightCircle className="text-[#43B5AD] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" />
                                </div>

                                <div className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-4xl bg-white/50 p-8 rounded-3xl border border-transparent group-hover:border-white group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                                    {sector.content}
                                </div>
                            </div>

                            {/* Connecting Line Decoration */}
                            {index !== sectors.length - 1 && (
                                <div className="absolute left-[-50px] md:left-[-80px] bottom-[-60px] text-[#43B5AD]/20 font-black text-6xl select-none">
                                    0{index + 1}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <div className="mt-32 text-center">
                    <button className="bg-[#002b5c] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#FF9654] transition-all duration-300 shadow-2xl active:scale-95">
                        Explore all solutions
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SectorsList;