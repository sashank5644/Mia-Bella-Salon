"use client";

import Link from 'next/link';

const stylists = [
    {
        name: "Eva Schmidt",
        role: "Hair Stylist",
        specialty: "Color Specialist",
        socials: {
            instagram: "https://www.instagram.com/evaschmidtschair"
        }
    },
    {
        name: "Christal",
        role: "Hair Stylist",
        specialty: "Styling Expert",
        socials: {
            instagram: "https://www.instagram.com/c.h.r.i.s.t.a.l.u.n.g.e.r"
        }
    },
    {
        name: "Anthony",
        role: "Hair Stylist",
        specialty: "Creative Cuts & Color",
        socials: {
            instagram: "https://www.instagram.com/anthonyhairmia",
            facebook: "https://www.facebook.com/share/17eaBhce32/",
            tiktok: "https://www.tiktok.com/@anthonyhairmia"
        }
    },
    {
        name: "Nichole Taylor",
        role: "Hair Stylist",
        specialty: "Precision Styling",
        socials: {
            instagram: "https://www.instagram.com/nichole.taylor.hair",
            facebook: "https://www.facebook.com/nicholetaylorhair"
        }
    },
    {
        name: "Rachel Marconi",
        role: "Hair Stylist",
        specialty: "Style Transformation",
        socials: {
            instagram: "https://www.instagram.com/stylesbyrachellenay"
        }
    }
];

// Social media icons as SVG components
const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
);

export default function Stylists() {
    return (
        <section id="stylists" className="section stylists-section">
            <div className="container">
                <h2 className="section-title text-center">Meet Our Stylists</h2>
                <p className="section-subtitle text-center">
                    Our talented independent stylists bring years of experience and passion to every client.
                    Connect with them on social media to see their latest work and book your appointment.
                </p>

                <div className="stylists-grid">
                    {stylists.map((stylist, index) => (
                        <div key={index} className="stylist-card">
                            <div className="stylist-avatar">
                                <span className="avatar-initial">{stylist.name.charAt(0)}</span>
                            </div>
                            <h3 className="stylist-name">{stylist.name}</h3>
                            <span className="stylist-role">{stylist.role}</span>
                            <span className="stylist-specialty">{stylist.specialty}</span>

                            <div className="stylist-socials">
                                {stylist.socials.instagram && (
                                    <Link
                                        href={stylist.socials.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link instagram"
                                        aria-label={`${stylist.name}'s Instagram`}
                                    >
                                        <InstagramIcon />
                                    </Link>
                                )}
                                {stylist.socials.facebook && (
                                    <Link
                                        href={stylist.socials.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link facebook"
                                        aria-label={`${stylist.name}'s Facebook`}
                                    >
                                        <FacebookIcon />
                                    </Link>
                                )}
                                {stylist.socials.tiktok && (
                                    <Link
                                        href={stylist.socials.tiktok}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link tiktok"
                                        aria-label={`${stylist.name}'s TikTok`}
                                    >
                                        <TikTokIcon />
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
