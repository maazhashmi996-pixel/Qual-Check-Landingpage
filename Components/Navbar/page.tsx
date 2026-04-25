import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
    const navLinks = [
        { name: 'Sector', hasDropdown: true },
        { name: 'Solutions', hasDropdown: true },
        { name: 'About Us', hasDropdown: true },
        { name: 'Resources', hasDropdown: true },
        { name: 'FAQs', hasDropdown: true },
    ];

    return (
        <nav className="flex items-center justify-between px-10 py-4 bg-[#2D4A53] text-white shadow-lg">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
                <div className="bg-[#43B5AD] p-2 rounded-sm">
                    <span className="text-2xl font-bold text-[#2D4A53]">Q</span>
                </div>
                <div className="leading-tight uppercase text-sm font-semibold tracking-wider">
                    QUALIFICATION <br /> <span className="font-bold">CHECK</span>
                </div>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                    <div key={link.name} className="flex items-center cursor-pointer hover:text-gray-300 transition">
                        <span className="text-[15px]">{link.name}</span>
                        {link.hasDropdown && <ChevronDown size={16} className="ml-1" />}
                    </div>
                ))}
                <Link href="/contact" className="text-[15px] hover:text-gray-300">Contact Us</Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
                <button className="bg-[#FF9654] hover:bg-[#e88543] text-white px-6 py-2.5 rounded-full font-medium transition">
                    Book a demo
                </button>
                <button className="border border-[#FF9654] text-white px-6 py-2.5 rounded-full font-medium hover:bg-white hover:text-[#2D4A53] transition">
                    Log in / Sign up
                </button>
            </div>
        </nav>
    );
};

export default Navbar;