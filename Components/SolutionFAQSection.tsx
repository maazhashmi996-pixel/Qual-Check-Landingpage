"use client";

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageSquareQuote } from 'lucide-react';


const FAQSection: React.FC = () => {
    // State to track which FAQ is open
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // WhatsApp Configuration
    const phoneNumber = "923094158560";
    const supportMessage = encodeURIComponent("Hello! I have a question regarding the Global Verification services. Could you please assist me?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${supportMessage}`;

    const faqs = [
        {
            question: "What is global verification?",
            answer: "Global Verification is a state-of-the-art, cloud-based ecosystem developed by Qualification Check. It enables academic institutions and global enterprises to verify the authenticity of certificates, degrees, and professional licenses directly from the primary source, ensuring total compliance during international recruitment."
        },
        {
            question: "How does the Global Verification tool work?",
            answer: "The platform functions as a secure bridge between you and over 53,000 primary sources (universities, ministries, and professional bodies). Once a request is submitted, our automated infrastructure—backed by a global operations team—confirms the data and generates a tamper-proof, auditable report for your records."
        },
        {
            question: "How can I try the global verification tool?",
            answer: "Getting started is seamless. You can book a personalized walkthrough by clicking 'Book a demo'. Our specialists will demonstrate how the tool integrates into your existing HRMS or student management systems, ensuring a scalable and efficient workflow for your team."
        },
        {
            question: "Is the data handled securely and GDPR compliant?",
            answer: "Absolutely. Security is our core foundation. Qualification Check is ISO 27001 certified and fully GDPR compliant. All data is encrypted at rest and in transit, ensuring that sensitive applicant information is handled with the highest level of institutional integrity."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#F8F8F5] py-28 px-6 md:px-12 lg:px-24 relative overflow-hidden font-sans">

            {/* Background Decorative Element */}
            <div className="absolute top-10 right-[-5%] opacity-[0.03] pointer-events-none">
                <HelpCircle size={400} className="text-[#002b5c]" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-[#43B5AD]">
                            <MessageSquareQuote size={20} />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Support Hub</span>
                        </div>
                        <h2 className="text-[#002b5c] text-4xl md:text-6xl font-black tracking-tighter">
                            Frequently Asked <span className="text-[#43B5AD]">Questions.</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 font-medium max-w-xs text-sm border-l-2 border-[#43B5AD] pl-4">
                        Everything you need to know about our global verification infrastructure.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group border rounded-3xl transition-all duration-500 overflow-hidden ${openIndex === index
                                ? 'bg-white border-transparent shadow-[0_20px_40px_-15px_rgba(0,43,92,0.1)]'
                                : 'bg-transparent border-gray-200 hover:border-[#43B5AD]/50'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full py-7 px-8 flex items-center justify-between text-left transition-all outline-none"
                            >
                                <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${openIndex === index ? 'text-[#002b5c]' : 'text-[#2D4A53]'
                                    }`}>
                                    {faq.question}
                                </span>

                                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === index
                                    ? 'bg-[#002b5c] text-white rotate-180'
                                    : 'bg-white border border-gray-100 text-[#FF9654] shadow-sm'
                                    }`}>
                                    {openIndex === index ? (
                                        <Minus size={20} />
                                    ) : (
                                        <Plus size={20} />
                                    )}
                                </div>
                            </button>

                            {/* Animated Content */}
                            <div
                                className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${openIndex === index
                                    ? 'max-h-[500px] opacity-100'
                                    : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-8 pb-8 pt-0">
                                    <div className="h-[2px] w-12 bg-[#43B5AD] mb-6 opacity-30"></div>
                                    <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
                                        {faq.answer}
                                    </p>

                                    {openIndex === index && (
                                        <a
                                            href={whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-6 inline-flex items-center gap-2 text-[#43B5AD] text-xs font-black uppercase tracking-widest hover:text-[#002b5c] transition-colors"
                                        >
                                            Ask about this on WhatsApp <Plus size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Contact Invite */}
                <div className="mt-20 text-center p-12 rounded-[3rem] bg-[#002b5c] relative overflow-hidden group border-b-8 border-[#43B5AD]">
                    <div className="absolute inset-0 bg-[#43B5AD] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 opacity-10"></div>
                    <div className="relative z-10 space-y-4">
                        <h4 className="text-white text-2xl font-bold">Still have questions?</h4>
                        <p className="text-white/60">Our verification experts are here to help you 24/7 via WhatsApp.</p>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4"
                        >
                            <button className="bg-[#43B5AD] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-[#002b5c] transition-all shadow-lg active:scale-95">
                                Contact Support
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;