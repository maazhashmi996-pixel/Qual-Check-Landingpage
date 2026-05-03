"use client";

import React from 'react';
import Image from 'next/image';
import {
    Globe,
    Fingerprint,
    UserCheck,
    Stethoscope,
    Wallet,
    Zap,
    FileBadge,
    ArrowRight,
    HelpCircle
} from 'lucide-react';

interface SolutionCardProps {
    headerBg: string;
    title: string;
    subtitle: string;
    description: string;
    icon?: React.ReactNode;
    isCTA?: boolean;
    imageSrc?: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
    headerBg, title, subtitle, description, icon, isCTA, imageSrc
}) => {
    return (
        <div className="group bg-white flex flex-col h-full rounded-3xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-20px_rgba(67,181,173,0.2)] transition-all duration-500 border border-gray-100 overflow-hidden relative">

            {/* Top Accent Bar */}
            <div className={`h-2 w-full ${headerBg}`}></div>

            {/* Card Body */}
            <div className="p-8 flex flex-col flex-grow">

                {isCTA ? (
                    <div className="flex flex-col items-center text-center space-y-6 flex-grow py-4">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#43B5AD]/20 shadow-inner">
                            <Image src={imageSrc || "/2.png"} alt="Support" fill className="object-cover" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black text-[#002b5c] tracking-tight">{subtitle}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                        </div>
                        <button className="w-full mt-auto bg-[#002b5c] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#43B5AD] transition-all group-hover:scale-105">
                            Contact Our Team <ArrowRight size={18} />
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Header Info */}
                        <div className="flex justify-between items-start mb-6">
                            <div className={`p-4 rounded-2xl ${headerBg.replace('bg-', 'bg-')}/10 text-[#002b5c] bg-opacity-10`}>
                                {icon}
                            </div>
                            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest border border-gray-100 px-3 py-1 rounded-full">
                                Verified
                            </span>
                        </div>

                        <div className="space-y-3 flex-grow">
                            <h3 className="text-xl font-black text-[#002b5c] leading-tight tracking-tight group-hover:text-[#43B5AD] transition-colors">
                                {title}
                            </h3>
                            <p className="text-[#43B5AD] text-xs font-bold uppercase tracking-wider">
                                {subtitle}
                            </p>
                            <p className="text-gray-500 text-[14px] leading-relaxed pt-2">
                                {description}
                            </p>
                        </div>

                        {/* Footer Action */}
                        <div className="mt-10 pt-6 border-t border-gray-50 flex justify-between items-center">
                            <button className="text-[#002b5c] text-xs font-black tracking-widest uppercase hover:text-[#43B5AD] transition-colors flex items-center gap-2 group/btn">
                                Learn More
                                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-[#43B5AD]/10 group-hover:text-[#43B5AD] transition-all">
                                <HelpCircle size={16} />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const OurSolutions: React.FC = () => {
    const solutions = [
        {
            headerBg: "bg-[#002b5c]",
            title: "Verification",
            subtitle: "Academic & Professional",
            description: "Providing world-class primary source verification for qualifications and licenses across 190+ countries.",
            icon: <Globe size={28} className="text-[#002b5c]" />
        },
        {
            headerBg: "bg-[#43B5AD]",
            title: "Digital ID Verification",
            subtitle: "Identity Protection (DIDV)",
            description: "Advanced biometric and document checks to prevent identity theft in an increasingly digital world.",
            icon: <Fingerprint size={28} className="text-[#43B5AD]" />
        },
        {
            headerBg: "bg-[#004085]",
            title: "Admissions Plus",
            subtitle: "University Ecosystem",
            description: "Combining digital ID checks with degree verification—essential for streamlining university admissions.",
            icon: <UserCheck size={28} className="text-[#004085]" />
        },
        {
            headerBg: "bg-[#002b5c]",
            title: "Medical Monitoring",
            subtitle: "Licence Tracking",
            description: "Automated subscription service to ensure all medical practitioners maintain current and valid licenses.",
            icon: <Stethoscope size={28} className="text-[#002b5c]" />
        },
        {
            headerBg: "bg-[#004085]",
            title: "I'm Verified",
            subtitle: "Secure Digital Wallet",
            description: "A secure digital vault for individuals to store and share pre-verified credentials with employers.",
            icon: <Wallet size={28} className="text-[#004085]" />
        },
        {
            headerBg: "bg-[#43B5AD]",
            title: "AutoVerify",
            subtitle: "Institutional Automation",
            description: "Automate verification requests for graduates and members, reducing manual overhead significantly.",
            icon: <Zap size={28} className="text-[#43B5AD]" />
        },
        {
            headerBg: "bg-[#002b5c]",
            title: "Digital Credentials",
            subtitle: "Instant Certification",
            description: "Bridging the gap between results and graduation with immediate, secure digital certificates.",
            icon: <FileBadge size={28} className="text-[#002b5c]" />
        }
    ];

    return (
        <section className="relative bg-[#F8F8F5] py-32 px-6 overflow-hidden">

            {/* VIP WATERMARK */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
                <span className="text-[60rem] font-black text-[#002b5c]">SOLUTIONS</span>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-24 space-y-4">
                    <span className="text-[#43B5AD] font-black tracking-[0.3em] uppercase text-xs">Empowering Integrity</span>
                    <h2 className="text-[#002b5c] text-5xl md:text-7xl font-black tracking-tighter">
                        Our <span className="text-[#43B5AD]">Solutions.</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl text-lg font-medium">
                        Comprehensive verification tools designed for modern institutions, global recruiters, and individuals.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {solutions.map((item, index) => (
                        <SolutionCard key={index} {...item} />
                    ))}

                    {/* Contact CTA Card */}
                    <SolutionCard
                        headerBg="bg-[#43B5AD]"
                        title=""
                        subtitle="Want to know more?"
                        description="Our specialists are ready to discuss your specific verification needs."
                        isCTA={true}
                        imageSrc="/2.png"
                    />
                </div>

                {/* Bottom Stats Insight */}
                <div className="mt-24 py-10 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-400 font-bold text-sm tracking-widest uppercase">Institutional Excellence 2026</p>
                    <div className="flex gap-12">
                        <div className="flex flex-col">
                            <span className="text-[#002b5c] font-black text-2xl">99.9%</span>
                            <span className="text-xs text-gray-400 font-bold uppercase">Accuracy</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#43B5AD] font-black text-2xl">24/7</span>
                            <span className="text-xs text-gray-400 font-bold uppercase">Monitoring</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurSolutions;