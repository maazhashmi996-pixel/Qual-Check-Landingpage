import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="bg-[#F8F8F5] py-24 px-6 text-center">
            <div className="max-w-5xl mx-auto">
                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl font-bold text-[#2D4A53] mb-6">
                    Global Verification Made Simple
                </h1>

                {/* Stats Subheading */}
                <div className="text-2xl md:text-3xl text-[#2D4A53] font-light mb-10">
                    <span className="font-bold text-[#2D4A53]">50,000</span> Trusted Sources,{' '}
                    <span className="font-bold text-[#2D4A53]">195+</span> Countries,{' '}
                    <span className="font-bold text-[#2D4A53]">20</span> languages,{' '}
                    <span className="font-bold text-[#2D4A53]">1</span> Portal
                </div>

                {/* Description */}
                <p className="text-xl text-[#4A5568] leading-relaxed max-w-4xl mx-auto mb-12">
                    Our intuitive verification solutions are trusted by thousands of organisations worldwide,
                    supporting global recruitment and mobility whilst protecting against fraud.
                </p>

                {/* Hero Button */}
                <button className="border-2 border-[#FF9654] text-[#FF9654] px-10 py-3 rounded-full font-semibold hover:bg-[#FF9654] hover:text-white transition-all duration-300">
                    Book a demo
                </button>
            </div>
        </section>
    );
};

export default Hero;