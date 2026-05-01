"use client";

import React from 'react';
import Image from 'next/image';
import {
    GraduationCap,
    Search,
    Stethoscope,
    BriefcaseBusiness,
    ChevronRight,
    CheckCircle2
} from 'lucide-react';

interface SolutionCardProps {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    points: string[];
    ctaText?: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon: Icon, title, points, ctaText }) => {
    return (
        <div className="group bg-white p-8 rounded-3xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full hover:shadow-[0_20px_50px_-15px_rgba(67,181,173,0.15)] hover:-translate-y-1 transition-all duration-500">
            <div className="mb-6 flex justify-between items-start">
                <div className="bg-[#FF9654]/10 text-[#FF9654] p-4 rounded-2xl transition-colors group-hover:bg-[#FF9654] group-hover:text-white duration-500">
                    <Icon size={26} />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-200 group-hover:text-[#43B5AD] transition-colors">
                    <CheckCircle2 size={18} />
                </div>
            </div>

            <h3 className="text-xl font-black text-[#002b5c] mb-5 tracking-tight leading-tight">
                {title}
            </h3>

            <ul className="space-y-4 mb-8 flex-grow">
                {points.map((point, index) => (
                    <li key={index} className="flex gap-3 text-[14px] text-gray-500 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#43B5AD] flex-shrink-0" />
                        {point}
                    </li>
                ))}
            </ul>

            {ctaText && (
                <button className="flex items-center gap-2 text-[#002b5c] font-black text-xs uppercase tracking-widest group/btn mt-auto">
                    {ctaText}
                    <ChevronRight size={16} className="text-[#FF9654] group-hover/btn:translate-x-1 transition-transform" />
                </button>
            )}
        </div>
    );
};

const Solutions: React.FC = () => {
    const solutionCardsData: SolutionCardProps[] = [
        {
            icon: GraduationCap,
            title: "Higher Education",
            points: [
                "Streamline admissions teams overwhelmed by volume",
                "Mitigate risks of fraudulent global applications",
                "Enhance the international student experience",
                "Automated tracking and reporting for UKVI compliance"
            ],
            ctaText: "Find out more"
        },
        {
            icon: Search,
            title: "Background Screening",
            points: [
                "Primary source verification for international talent",
                "24/7 GDPR-compliant cloud infrastructure",
                "Comprehensive global coverage across 195 countries",
                "Transparent, fixed-price pricing model"
            ],
            ctaText: "Find out more"
        },
        {
            icon: Stethoscope,
            title: "Health & Social Care",
            points: [
                "Seamless international recruitment workflow",
                "Instant licence-to-practise validation",
                "Credential and language skill audits",
                "Dynamic management for agency and bank staff"
            ],
            ctaText: "Find out more"
        },
        {
            icon: BriefcaseBusiness,
            title: "Professional Bodies",
            points: [
                "Scalable verification for large memberships",
                "Automated enquiry management systems",
                "Self-funding registration models",
                "Secure administrative automation"
            ],
            ctaText: "Find out more"
        }
    ];

    return (
        <section className="bg-[#F8F8F5] py-32 px-6 lg:px-12 relative overflow-hidden">

            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="10%" cy="20%" r="150" stroke="#43B5AD" strokeWidth="1" fill="none" />
                    <circle cx="90%" cy="80%" r="250" stroke="#FF9654" strokeWidth="1" fill="none" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    <div className="lg:col-span-5 relative h-[500px] md:h-[700px] flex items-center justify-center group">

                        <div className="absolute left-[-15%] bottom-0 text-[#43B5AD] text-[35rem] font-black opacity-[0.07] select-none group-hover:scale-110 transition-transform duration-1000">C</div>

                        {/* Base Laptop Mockup */}
                        <div className="absolute w-full top-0 z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-700 shadow-2xl rounded-xl overflow-hidden">
                            <img src="/portal.jpg" alt="Portal View" className="w-full h-auto object-contain" />
                        </div>

                        <div className="absolute w-[60%] right-[-10%] top-[30%] z-20 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700">
                            <img src="/tablet1.jpg" alt="Tablet View" className="w-full h-auto object-contain rounded-xl" />
                        </div>

                        <div className="absolute w-[65%] left-[-20%] bottom-[-5%] z-30 drop-shadow-2xl">
                            <img src="/mockups/woman.png" alt="Verification Professional" className="w-full h-auto object-contain" />
                        </div>

                        <div className="absolute w-[30%] right-[5%] bottom-[10%] z-40 shadow-2xl transform -rotate-12 hover:rotate-0 transition-all duration-500">
                            <img src="/mobile.webp" alt="Mobile Verification" className="w-full h-auto object-contain" />
                        </div>
                    </div>

                    {/* Right Side: Narrative & Strategy Cards */}
                    <div className="lg:col-span-7">
                        <div className="max-w-2xl">
                            <span className="text-[#43B5AD] font-black tracking-[0.3em] uppercase text-xs mb-4 block">Institutional Impact</span>
                            <h2 className="text-[#002b5c] text-4xl md:text-6xl font-black mb-16 leading-[1.1] tracking-tighter">
                                How Qualification Check <br />
                                <span className="text-[#43B5AD]">empowers</span> your organization.
                            </h2>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {solutionCardsData.map((card, index) => (
                                <SolutionCard key={index} {...card} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;