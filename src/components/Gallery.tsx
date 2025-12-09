"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
    '/images/image-0.jpg',
    '/images/image-2.jpg',
    '/images/image-3.jpg',
    '/images/image-4.png',
    '/images/image-5.jpg',
    '/images/image-6.jpg',
    '/images/image-7.jpg',
    '/images/image-8.jpg',
    '/images/image-9.JPEG',
    '/images/image-10.JPEG',
    '/images/image-11.jpg',
    '/images/image-12.JPEG',
    '/images/image-13.JPEG',
    '/images/image-14.jpg',
    '/images/image-15.jpg',
    '/images/image-16.jpg',
    '/images/image-17.jpg',
    '/images/image-18.jpg',
];

export default function Gallery() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section id="gallery" className="section gallery-section">
            <div className="container">
                <h2 className="section-title text-center">Our Masterpieces</h2>
                <div
                    ref={scrollRef}
                    className="gallery-carousel"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                    <div className="gallery-track">
                        {images.map((src, index) => (
                            <div key={index} className="gallery-slide">
                                <Image
                                    src={src}
                                    alt={`Mia Bella Salon Work ${index + 1}`}
                                    fill
                                    sizes="300px"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-center" style={{ marginTop: '1rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    ← Drag to see more →
                </p>
            </div>
        </section>
    );
}
