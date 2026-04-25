"use client";

import React from 'react';
import Image from 'next/image';
import { GraduationCap, Search, Stethoscope, BriefcaseBusiness, ChevronRight } from 'lucide-react';

// Card Data Structure
interface SolutionCardProps {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    points: string[];
    ctaText?: string;
}

// Reusable Card Component
const SolutionCard: React.FC<SolutionCardProps> = ({ icon: Icon, title, points, ctaText }) => {
    return (
        <div className="bg-white p-8 rounded-sm shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full hover:shadow-[0_15px_50px_-10px_rgba(67,181,173,0.1)] transition-all duration-300">
            <div className="mb-6">
                {/* Orange icon wrap */}
                <div className="bg-[#FF9654]/10 text-[#FF9654] p-3 rounded-full inline-block">
                    <Icon size={28} />
                </div>
            </div>

            <h3 className="text-xl font-semibold text-[#2D4A53] mb-5 tracking-tight">{title}</h3>

            <ul className="text-[15px] text-[#4A5568] leading-relaxed space-y-3 mb-6 flex-grow">
                {points.map((point, index) => (
                    <li key={index} className="list-disc list-inside">
                        {point}
                    </li>
                ))}
            </ul>

            {ctaText && (
                <a href="#" className="flex items-center text-[#FF9654] font-medium hover:text-[#e88543] transition mt-auto">
                    {ctaText} <ChevronRight size={18} className="ml-1" />
                </a>
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
                "Are your admissions teams overwhelmed by volume of work?",
                "Are you concerned about fraudulent applications?",
                "Do you want to improve student experience?",
                "Do you need verification tracking and reporting for UKVI?"
            ],
            ctaText: "Find out more"
        },
        {
            icon: Search,
            title: "Background Screening & Recruitment",
            points: [
                "Do you need to check candidates' international qualifications at the primary source?",
                "Do you need a trusted GDPR-compliant service, available to you 24/7?",
                "Is comprehensive global coverage an essential part of your offering?",
                "Do you need a fixed price per check?"
            ],
            ctaText: "Find out more"
        },
        {
            icon: Stethoscope,
            title: "Health & Social Care",
            points: [
                "Do you recruit internationally?",
                "Do you need to check licences to practise?",
                "Do you need to check the credentials and language skills of every employee?",
                "Does your staff list change daily, with agency and bank staff, and students?"
            ],
            ctaText: "Find out more"
        },
        {
            icon: BriefcaseBusiness,
            title: "Regulatory Authorities & Professional Bodies",
            points: [
                "Do you have a large membership?",
                "Do you receive numerous enquiries about your members' certifications?",
                "Would you like to automate the related administration?",
                "Would you like to make registration self-funding?"
            ],
            ctaText: "Find out more"
        }
    ];

    return (
        <section className="bg-[#F8F8F5] py-24 relative overflow-hidden">
            {/* Background Graphic - Circular design */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="500" cy="500" r="300" stroke="#43B5AD" strokeWidth="2" fill="none" />
                    <circle cx="200" cy="800" r="150" stroke="#43B5AD" strokeWidth="2" fill="none" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Mockups */}
                    <div className="relative h-[600px] flex items-center justify-center">
                        {/* Base Laptop */}
                        <div className="absolute w-[80%] left-0 top-0 shadow-2xl">
                            <img src="/mockups/laptop.png" alt="QC Portal Laptop" className="object-contain" />
                        </div>
                        {/* Woman with Tablet */}
                        <div className="absolute w-[300px] left-[-50px] bottom-[-20px] z-10">
                            <img src="/mockups/woman.png" alt="Person using QC" className="object-contain" />
                        </div>
                        {/* Large C graphic behind woman */}
                        <div className="absolute left-[-100px] bottom-0 text-[#43B5AD] text-[400px] font-bold opacity-30 z-0">C</div>

                        {/* Tablet */}
                        <div className="absolute w-[45%] right-[5%] top-[10%] shadow-xl z-20">
                            <img src="/mockups/tablet.png" alt="QC Portal Tablet" className="object-contain" />
                        </div>
                        {/* Mobile with "I'm Verified" */}
                        <div className="absolute w-[25%] right-[10%] bottom-[5%] shadow-xl z-30">
                            <img src="/mockups/phone.png" alt="QC Portal Phone" className="object-contain" />
                        </div>
                    </div>

                    {/* Right Side: Text & Cards */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#2D4A53] mb-12 leading-tight">
                            How Qualification Check can help your organisation
                        </h2>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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