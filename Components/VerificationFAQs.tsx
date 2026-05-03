"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';

/**
 * VerificationFAQs - Premium Enterprise Edition
 * Features: Framer Motion Accordions, Interactive States, WhatsApp Support Integration
 */
const VerificationFAQs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is Verification Check’s Pakistan Verification Service for?",
            answer: "Our Pakistan Verification service is used to check the academic or professional qualifications of a candidate or applicant, at any accredited university or institution in the world. It is used by individuals, employers, recruiters, background screeners and institutions, to verify qualifications and awards."
        },
        {
            question: "What does the Pakistan Verification service verify?",
            answer: "Verification Check verifies an individual's qualification or award with the original issuing body, based upon the supply of the following information: full name, date of birth, dates of attendance, institution, course title or award, qualification type and classification or grade."
        },
        {
            question: "How do I create an account?",
            answer: "Visit verificationcheck.com.pk and click on the Sign-Up button in the top right corner. Once your personal information is submitted, you will receive an invitation email to join the Verification Check verification platform."
        },
        {
            question: "How do I submit a check?",
            answer: "After you sign-in to the Verification Check verification platform, click on 'New Verification' on the left-hand side menu, add as many education checks as you need. Once you submit the individual details, click Next."
        },
        {
            question: "What is a Consent Form?",
            answer: "A signed consent form is often required before the university or institution will release the requested verification. Some institutions do not require consent forms. Some may require additional information such as scanned copies of transcripts."
        },

    ];

    // WhatsApp Configuration
    const phoneNumber = "923094158560";
    const message = encodeURIComponent("Hello! I'm interested in your Pakistan Verification services. Can you help me with a few questions?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <section className="bg-white py-32 px-6 lg:px-12 relative overflow-hidden font-sans">

            {/* Subtle Brand Watermark */}
            <div className="absolute top-10 right-[-50px] opacity-[0.03] rotate-12 pointer-events-none hidden lg:block text-[#002b5c]">
                <HelpCircle size={400} />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20 space-y-4">
                    <div className="flex items-center justify-center gap-2 text-[#43B5AD]">
                        <span className="h-[2px] w-10 bg-[#43B5AD]"></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Support Center</span>
                        <span className="h-[2px] w-10 bg-[#43B5AD]"></span>
                    </div>
                    <h2 className="text-[#002b5c] text-4xl md:text-6xl font-black tracking-tighter">
                        Common <span className="text-[#43B5AD]">Queries.</span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        Everything you need to know about our Pakistan verification infrastructure.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-6">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`group rounded-[2rem] border-2 transition-all duration-500 ${isOpen
                                    ? 'border-[#43B5AD] bg-[#F8F8F5] shadow-xl'
                                    : 'border-gray-100 hover:border-[#43B5AD]/30 bg-white'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full py-8 px-8 md:px-12 flex items-center justify-between text-left"
                                >
                                    <span className={`text-xl md:text-2xl font-bold tracking-tight pr-8 transition-colors duration-300 ${isOpen ? 'text-[#002b5c]' : 'text-[#2D4A53] group-hover:text-[#43B5AD]'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#43B5AD] text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-[#43B5AD]/10 group-hover:text-[#43B5AD]'
                                        }`}>
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-8 md:px-12 pb-10">
                                                <div className="pt-6 border-t border-gray-200/50">
                                                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Support CTA - Updated with WhatsApp Integration */}
                <div className="mt-20 p-10 rounded-[2.5rem] bg-[#002b5c] text-white flex flex-col md:flex-row items-center justify-between gap-8 border-b-8 border-[#43B5AD]">
                    <div className="space-y-2 text-center md:text-left">
                        <h4 className="text-2xl font-black">Still have questions?</h4>
                        <p className="text-white/60 font-medium">Our global operations team is available 24/7 to assist you via WhatsApp.</p>
                    </div>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-[#FF9654] hover:bg-white hover:text-[#002b5c] px-8 py-4 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 active:scale-95 whitespace-nowrap shadow-lg hover:shadow-orange-500/20"
                    >
                        <MessageSquare size={18} />
                        WhatsApp Support
                    </a>
                </div>
            </div>
        </section>
    );
};

export default VerificationFAQs;