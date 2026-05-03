"use client";

import React from 'react';
import Link from 'next/link';

/**
 * Footer Component - Corporate Edition
 * Features: WhatsApp Integration for Demo, Vercel Link for Verification, DHA Lahore Branding
 */
const Footer: React.FC = () => {
    // WhatsApp Configuration
    const phoneNumber = "923094158560";
    const demoMessage = encodeURIComponent("Hello! I am interested in a demo of your verification services. Please provide more details.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${demoMessage}`;

    // Vercel Login Link
    const vercelLoginUrl = "https://your-project-name.vercel.app/login";

    return (
        <footer className="relative mt-32 font-sans">
            {/* 1. CTA Section */}
            <div className="container mx-auto px-6 relative z-20 -mb-28">
                <div className="bg-[#003366] rounded-xl py-16 px-6 text-center shadow-2xl max-w-6xl mx-auto border-b-4 border-[#0056b3]">
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-10 tracking-tight">
                        Ready to verify?
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6">

                        {/* Start Verification - Vercel Link */}
                        <a href={vercelLoginUrl}>
                            <button className="bg-[#0056b3] hover:bg-[#004494] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-md active:scale-95">
                                Start verification
                            </button>
                        </a>

                        {/* Request a Demo - WhatsApp Link */}
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <button className="bg-white text-[#003366] border-2 border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-transparent hover:text-white transition-all shadow-md active:scale-95">
                                Request a demo
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* 2. Main Footer Section */}
            <div className="bg-[#0a192f] pt-48 pb-10 text-white">
                <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-white/10 pb-20">

                    {/* Services */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-[#0056b3]">Our Services</h3>
                        <ul className="space-y-5 text-gray-300">
                            <li><Link href="#" className="hover:text-white transition-colors">Identity Verification</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Education Verification</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Document Verification</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Employment Verification</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Pakistan Verification</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-[#0056b3]">Company</h3>
                        <ul className="space-y-5 text-gray-300">
                            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Sectors We Serve</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Applicant FAQs</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* Contact - DHA Lahore */}
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-bold mb-8 text-[#0056b3]">Contact Us</h3>
                        <address className="not-italic text-gray-300 leading-relaxed mb-10 text-lg">
                            Building 14, Sector CCA<br />
                            DHA Phase 5<br />
                            Lahore, Punjab 54000, Pakistan
                            +923309990727
                            info@verification.com.pk
                        </address>

                        <div className="flex flex-wrap items-center gap-6">
                            {/* WhatsApp Demo Link (Secondary) */}
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <button className="bg-[#0056b3] hover:bg-[#004494] text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg active:scale-95">
                                    Book a demo
                                </button>
                            </a>

                            <div className="flex space-x-3">
                                <Link href="#" className="bg-[#003366] p-2.5 rounded-lg hover:bg-[#0056b3] transition-all flex items-center justify-center border border-white/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </Link>
                                <Link href="#" className="bg-[#003366] p-2.5 rounded-lg hover:bg-[#0056b3] transition-all flex items-center justify-center border border-white/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="container mx-auto px-10 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <div className="flex items-center gap-4 mb-6 md:mb-0">
                        <div className="bg-[#0056b3] p-1.5 rounded-md w-10 h-10 flex items-center justify-center shadow-inner">
                            <span className="text-white font-black text-xl">V</span>
                        </div>
                        <span className="font-semibold text-gray-300">
                            Project of DIB Education System (Pvt) Ltd.
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 items-center">
                        <p>© {new Date().getFullYear()} verification.com. All rights reserved.</p>
                        <span className="text-gray-700 hidden md:inline">|</span>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;