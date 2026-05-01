"use client";

import React from 'react';
import Image from 'next/image';

const ConferenceHighlight: React.FC = () => {
    return (
        <section className="bg-white py-20 px-8 md:px-16 lg:px-24 border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                {/* Left Side: Content */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-[#2D4A53] text-4xl md:text-5xl font-bold leading-tight">
                        QCHE 2026: Strengthening Assurance in a Changing Admissions Landscape
                    </h2>

                    <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                        <p>
                            On Wednesday 11 February 2026, Qualification Check welcomed 80
                            delegates from 40 universities to Glaziers Hall, London Bridge, for the
                            second annual QCHE conference.
                        </p>
                        <p>
                            Held in partnership with Password English Language Testing, the event
                            focused on collaborative approaches to maintaining integrity in global
                            student recruitment.
                        </p>
                    </div>

                    <button className="mt-4 text-[#43B5AD] font-bold text-lg border-b-2 border-[#43B5AD] hover:text-[#2D4A53] hover:border-[#2D4A53] transition-colors pb-1">
                        View conference highlights
                    </button>
                </div>

                {/* Right Side: Conference Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative h-[350px] md:h-[450px] w-full rounded-lg overflow-hidden shadow-xl transform hover:rotate-1 transition-transform duration-500">
                        <Image
                            src="/9.jpg" // Screenshot wali speakers wali image yahan use karein
                            alt="Panel discussion at QCHE 2026 Conference"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ConferenceHighlight;