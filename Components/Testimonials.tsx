"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        text: "Whenever we have had challenges in the past, we have found the Verification Check operations team to be great at resolving them via Live Chat, and for adding newly requested institutions in a timely manner.",
        author: "Heidrick and Struggles",
        location: "United Kingdom",
        role: "Strategic Partner"
    },
    {
        id: 2,
        text: "The platform is incredibly intuitive. It has significantly reduced our turnaround time for background checks, allowing us to onboard talent much faster than before.",
        author: "Global Tech Solutions",
        location: "Germany",
        role: "HR Operations"
    },
    {
        id: 3,
        text: "Reliable, fast, and secure. Verification Check has become an essential part of our recruitment workflow, ensuring every credential is authenticated at the source.",
        author: "Elite Medical Group",
        location: "UAE",
        role: "Compliance Head"
    }
];

/**
 * Testimonials Component - VIP Editorial Edition
 * Features: Auto-play, Framer Motion transitions, Dots indicator
 */
const Testimonials: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        })
    };

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }, []);

    // Auto-play feature
    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="bg-[#F8F8F5] py-32 px-6 relative overflow-hidden">

            {/* Background Branding Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none flex items-center justify-center">
                <span className="text-[25rem] font-black text-[#002b5c] select-none">TRUST</span>
            </div>

            <div className="max-w-6xl mx-auto text-center relative z-10">

                {/* Section Badge */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="h-[1px] w-8 bg-[#43B5AD]"></div>
                    <span className="text-[#43B5AD] text-xs font-black uppercase tracking-[0.4em]">Global Recognition</span>
                    <div className="h-[1px] w-8 bg-[#43B5AD]"></div>
                </div>

                <h2 className="text-[#002b5c] text-4xl md:text-6xl font-black mb-20 tracking-tighter">
                    Voices of <span className="text-[#43B5AD]">Integrity.</span>
                </h2>

                <div className="relative flex items-center justify-center min-h-[400px]">

                    {/* Navigation Buttons - Hidden on Mobile, Premium on Desktop */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-[-20px] lg:left-0 z-20 p-4 text-[#002b5c] hover:text-[#FF9654] transition-colors hidden md:block"
                    >
                        <ChevronLeft size={64} strokeWidth={1} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-[-20px] lg:right-0 z-20 p-4 text-[#002b5c] hover:text-[#FF9654] transition-colors hidden md:block"
                    >
                        <ChevronRight size={64} strokeWidth={1} />
                    </button>

                    {/* Testimonial Content Wrapper */}
                    <div className="max-w-4xl w-full bg-white p-12 md:p-20 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,43,92,0.08)] relative">

                        {/* Decorative Quote Icon */}
                        <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-[#FF9654] text-white p-6 rounded-3xl shadow-xl rotate-[-10deg]">
                            <Quote size={32} fill="white" />
                        </div>

                        <div className="overflow-hidden relative h-full">
                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                <motion.div
                                    key={current}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.3 }
                                    }}
                                    className="flex flex-col items-center"
                                >
                                    <p className="text-[#2D4A53] text-xl md:text-3xl font-medium leading-relaxed italic mb-12">
                                        &ldquo;{testimonials[current].text}&rdquo;
                                    </p>

                                    <div className="space-y-1">
                                        <h4 className="text-[#002b5c] font-black text-xl md:text-2xl tracking-tight">
                                            {testimonials[current].author}
                                        </h4>
                                        <div className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest text-[#43B5AD]">
                                            <span>{testimonials[current].role}</span>
                                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                            <span className="text-gray-400">{testimonials[current].location}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Modern Progress Indicators */}
                <div className="flex justify-center items-center space-x-4 mt-16">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > current ? 1 : -1);
                                setCurrent(index);
                            }}
                            className={`group relative h-1.5 transition-all duration-500 rounded-full overflow-hidden ${current === index ? 'w-16 bg-[#002b5c]' : 'w-8 bg-gray-200 hover:bg-gray-300'
                                }`}
                        >
                            {current === index && (
                                <motion.div
                                    className="absolute inset-0 bg-[#FF9654]"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "0%" }}
                                    transition={{ duration: 8, ease: "linear" }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Mobile Tap Navigation Help */}
                <p className="md:hidden mt-8 text-gray-400 text-xs font-bold uppercase tracking-widest animate-pulse">
                    Swipe or use dots to navigate
                </p>
            </div>
        </section>
    );
};

export default Testimonials;