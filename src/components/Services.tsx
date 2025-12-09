"use client";

import { useState } from 'react';

const serviceCategories = [
    {
        category: "Hair Services",
        icon: "✂️",
        services: [
            "Haircuts for Men & Women",
            "Color Services",
            "Perms",
            "Facial Waxing"
        ]
    },
    {
        category: "Hair Extensions",
        icon: "✨",
        services: [
            "Wefting / Hand-Tied",
            "UV Extensions",
            "I-Tips",
            "K-Tips",
            "Tape-In"
        ]
    },
    {
        category: "Straightening Systems",
        icon: "💫",
        services: [
            "Brazilian Blowout",
            "Keratin Complex",
            "Japanese Straightening",
            "Hair Nano Plasty"
        ]
    },
    {
        category: "Nail Services",
        icon: "💅",
        services: [
            "Manicures",
            "Pedicures",
            "Nail Art & Design"
        ]
    }
];

export default function Services() {
    const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

    const toggleCategory = (index: number) => {
        setExpandedCategory(expandedCategory === index ? null : index);
    };

    return (
        <section id="services" className="section services-section">
            <div className="container">
                <h2 className="section-title text-center">Our Services</h2>
                <p className="section-subtitle text-center">
                    Mia Bella Salon & Spa is home to talented independent stylists and beauty professionals.
                    Our services evolve with our team of specialists, ensuring you always have access to
                    the latest techniques and personalized care.
                </p>
                <p className="section-note text-center">
                    Currently featuring hair stylists and nail technicians
                </p>
                <div className="services-grid">
                    {serviceCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`service-card ${expandedCategory === index ? 'expanded' : ''}`}
                            onClick={() => toggleCategory(index)}
                        >
                            <span className="service-icon">{category.icon}</span>
                            <h3 className="service-name">{category.category}</h3>
                            <div className="service-list">
                                {category.services.map((service, sIndex) => (
                                    <span key={sIndex} className="service-item">{service}</span>
                                ))}
                            </div>
                            <span className="expand-hint">
                                {expandedCategory === index ? 'Tap to collapse' : 'Tap to expand'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
