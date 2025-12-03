"use client";

import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import { sendGAEvent } from '@next/third-parties/google';

export default function Contact() {
    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-grid">
                <div className="contact-info">
                    <h2>Visit Us</h2>
                    <div className="info-item">
                        <MapPin className="icon" size={24} style={{ color: 'var(--color-gold)' }} />
                        <p>
                            <strong>Mia Bella Salon & Spa</strong><br />
                            735 Browning Ave. Southeast, Suite 150<br />
                            Salem, OR 97302
                        </p>
                    </div>
                    <div className="info-item">
                        <Phone className="icon" size={24} style={{ color: 'var(--color-gold)' }} />
                        <p>
                            <a
                                href="tel:5035882677"
                                className="hover-link"
                                onClick={() => sendGAEvent('event', 'contact_click', { value: 'phone_contact_section' })}
                            >
                                (503) 588-2677
                            </a>
                        </p>
                    </div>
                    <div className="info-item">
                        <Instagram className="icon" size={24} style={{ color: 'var(--color-gold)' }} />
                        <p>
                            <a
                                href="https://instagram.com/miabellasalonandspasalem"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover-link"
                                onClick={() => sendGAEvent('event', 'social_click', { value: 'instagram_contact_section' })}
                            >
                                @miabellasalonandspasalem
                            </a>
                        </p>
                    </div>
                    <div className="info-item">
                        <Clock className="icon" size={24} style={{ color: 'var(--color-gold)' }} />
                        <p>
                            Call for appointment availability.<br />
                            Celebrating 24 Years!
                        </p>
                    </div>
                </div>
                <div className="contact-map">
                    <iframe
                        src="https://maps.google.com/maps?q=Mia+Bella+Salon+Spa+735+Browning+Ave+Southeast+Suite+150+Salem+OR+97302&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: '300px', borderRadius: '8px' }}
                        allowFullScreen
                        loading="lazy"
                        title="Mia Bella Salon Location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
