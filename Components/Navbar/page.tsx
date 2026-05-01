"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const phoneNumber = "923094158560";
    const demoMessage = encodeURIComponent("Hello! I would like to book a demo for the Qualification Check platform.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${demoMessage}`;
    const vercelLoginUrl = "https://your-project-name.vercel.app/login";

    // Handle Navbar Background on Scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Solutions', href: '/solutions' },
        { name: 'About Us', href: '/about' },
        { name: 'Resources', href: '/resources' },
        { name: 'FAQs', href: '/faqs' },
    ];

    return (
        <>
            <nav className={`fixed top-0 w-full z-[110] transition-all duration-500 ${scrolled
                    ? 'bg-[#002b5c]/90 backdrop-blur-md py-3 shadow-xl'
                    : 'bg-[#2D4A53] py-5'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">

                    {/* --- LOGO SECTION --- */}
                    <Link href="/" className="relative flex items-center space-x-3 group z-[120]">
                        <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-500 group-hover:scale-110">
                            <Image
                                src="/logo.png"
                                alt="Qualification Check Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="leading-none flex flex-col">
                            <span className="text-white text-lg md:text-xl font-black tracking-tighter uppercase">
                                Qualification
                            </span>
                            <span className="text-[#43B5AD] text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                                Check
                            </span>
                        </div>
                    </Link>

                    {/* --- DESKTOP NAVIGATION --- */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-4 py-2 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 relative group ${isActive ? 'text-[#43B5AD]' : 'text-white/80 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#43B5AD] rounded-full transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}></span>
                                    <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#43B5AD] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* --- AUTH & ACTION BUTTONS --- */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href={vercelLoginUrl}
                            className="text-white/80 hover:text-white text-sm font-bold transition-colors px-4"
                        >
                            Log In
                        </a>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="relative overflow-hidden group bg-[#FF9654] hover:bg-[#ff8533] text-white px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95">
                                <span className="relative z-10">Book a Demo</span>
                            </button>
                        </a>
                    </div>

                    {/* --- MOBILE MENU TOGGLE --- */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors z-[120]"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* --- MOBILE DRAWER --- */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setIsOpen(false)}
            />

            <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#002b5c] z-[105] shadow-2xl transform transition-transform duration-500 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="flex flex-col h-full pt-28 px-8 space-y-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-2xl font-bold tracking-tight transition-colors ${pathname === link.href ? 'text-[#43B5AD]' : 'text-white hover:text-[#43B5AD]'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="pt-8 flex flex-col gap-4 border-t border-white/10">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                            <button className="w-full bg-[#FF9654] text-white py-4 rounded-xl font-black uppercase tracking-widest shadow-md active:scale-95 transition-transform">
                                Book a Demo
                            </button>
                        </a>
                        <a
                            href={vercelLoginUrl}
                            className="w-full text-center text-white/70 font-bold uppercase tracking-widest py-3 hover:text-white"
                        >
                            Log In / Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;