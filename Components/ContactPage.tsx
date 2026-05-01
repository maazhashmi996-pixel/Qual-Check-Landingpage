"use client";

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, Clock, MessageSquare, ArrowRight } from 'lucide-react';

/**
 * ContactPage - VIP Edition
 * Branding: verification.com (Navy Blue & Teal)
 * Style: Ultra-modern, Professional, High-Conversion
 */
const ContactPage: React.FC = () => {
    const brandBlue = "#004085";
    const brandTeal = "#43B5AD";

    return (
        <main className="bg-white min-h-screen font-sans">
            {/* Hero Header Section */}
            <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-b from-[#f4f8fb] to-white">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-[#43B5AD] rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#004085] rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
                    <span className="text-[#43B5AD] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Get in Touch</span>
                    <h1 className="text-[#004085] text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        Contact <span className="text-[#43B5AD]">Us</span> Today
                    </h1>
                    <p className="text-gray-500 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Have questions about our global verification services? Our experts are here to help.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-28">

                {/* Left Side: Information & Sales */}
                <div className="lg:col-span-5 space-y-12">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#43B5AD]/10 text-[#43B5AD] rounded-lg font-bold text-sm">
                            <Mail size={18} />
                            SALES ENQUIRIES
                        </div>
                        <h2 className="text-[#004085] text-3xl md:text-4xl font-bold leading-tight">
                            Ready to scale your verification process?
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Connect with our Solutions Team for a personalized demonstration of the Verification.com platform and tailored pricing.
                        </p>

                        <button className="group flex items-center gap-3 bg-[#004085] hover:bg-[#43B5AD] text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl hover:shadow-[#43B5AD]/30 active:scale-95">
                            Book a Demo
                            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>

                    {/* Customer Service Info Box */}
                    <div className="bg-[#f8fafc] border border-gray-100 p-8 rounded-[2rem] space-y-6">
                        <h3 className="text-[#004085] text-xl font-bold flex items-center gap-3">
                            <MessageSquare className="text-[#43B5AD]" />
                            Customer Support
                        </h3>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <Clock className="text-[#43B5AD] shrink-0" size={20} />
                                <p className="text-sm text-gray-600">
                                    <strong>Live Chat:</strong> Monday to Friday <br />
                                    03:30 to 21:30 GMT
                                </p>
                            </div>
                            <p className="text-xs text-gray-500 italic">
                                *Outside of these hours, please submit the form and our team will respond within 24 business hours.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form Card */}
                <div className="lg:col-span-7">
                    <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_30px_100px_rgba(0,64,133,0.08)] border border-gray-50">
                        <h3 className="text-[#004085] text-2xl font-bold mb-8">Send us a Message</h3>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">First Name</label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#43B5AD] outline-none transition-all placeholder:text-gray-300 text-[#004085]"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#43B5AD] outline-none transition-all placeholder:text-gray-300 text-[#004085]"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#43B5AD] outline-none transition-all placeholder:text-gray-300 text-[#004085]"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@company.com"
                                    className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#43B5AD] outline-none transition-all placeholder:text-gray-300 text-[#004085]"
                                    required
                                />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                                <textarea
                                    placeholder="How can we help you today?"
                                    rows={4}
                                    className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#43B5AD] outline-none transition-all placeholder:text-gray-300 text-[#004085] resize-none"
                                    required
                                ></textarea>
                            </div>

                            <div className="md:col-span-2 pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#004085] to-[#002b5c] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-[#004085]/20 transition-all active:scale-[0.98]"
                                >
                                    Submit Enquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer Map Section */}
            <section className="relative w-full h-[400px] bg-[#f8fafc] flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/images/world-map-dots.png"
                        alt="Global presence map"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="relative z-10 text-center space-y-2">
                    <h4 className="text-[#004085] font-bold text-2xl uppercase tracking-tighter">Global Presence</h4>
                    <p className="text-gray-400 font-medium">Supporting clients in over 190+ countries</p>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;