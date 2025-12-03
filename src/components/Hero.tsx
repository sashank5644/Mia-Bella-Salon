"use client";

import Image from 'next/image';
import { sendGAEvent } from '@next/third-parties/google';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-bg">
                <Image
                    src="/images/image-1.jpg"
                    alt="Mia Bella Salon Exterior"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div className="hero-overlay"></div>
            </div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    Mia Bella <br />
                    <span className="text-gradient">Salon & Spa</span>
                </h1>
                <p className="hero-subtitle">Celebrating 24 Years of Excellence</p>
                <div className="hero-badges">
                    <div className="badge">
                        <span>🏆 2 Years Running Best of Salem</span>
                    </div>
                </div>
                <a
                    href="#contact"
                    className="btn-primary hero-cta"
                    onClick={() => sendGAEvent('event', 'conversion_click', { value: 'book_appointment_hero' })}
                >
                    Book Your Appointment
                </a>
            </div>
        </section>
    );
}
