"use client";
import React, { useState } from 'react';

const Hero = () => {
    const images = ['/bg-hero.jpg', '/bg-hero2.jpg', '/bg-hero3.jpg'];
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="relative h-[80vh] md:h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{ backgroundImage: `url('${images[currentIndex]}')` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 z-0" />

            {/* Content */}
            <div className="relative z-10">
                <h1 className="text-2xl md:text-5xl font-bold">Solusi Pertanian Modern :</h1>
                <p className="mt-4 text-sm md:text-xl">Kami menyediakan berbagai solusi inovatif</p>
                <button className="mt-6 px-6 py-2 border-2 rounded-full text-white border-white hover:bg-white hover:text-black transition">
                    Mulai Sekarang
                </button>
            </div>

            {/* Clickable Indicators */}
            <div className="absolute bottom-6 flex gap-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-white scale-110' : 'bg-gray-400'
                            } transition-all duration-300`}
                        aria-label={`Gambar ke-${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
