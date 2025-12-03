import Link from 'next/link';
import { Phone, Instagram } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link href="/" className="logo">
                    Mia Bella <span className="logo-sub">Salon & Spa</span>
                </Link>
                <div className="nav-links">
                    <Link href="#about">About</Link>
                    <Link href="#gallery">Gallery</Link>
                    <Link href="#reviews">Reviews</Link>
                    <Link href="#contact">Contact</Link>
                </div>
                <div className="nav-actions">
                    <a href="https://instagram.com/miabellasalonandspasalem" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <Instagram size={24} />
                    </a>
                    <a href="tel:5035882677" className="btn-primary nav-cta">
                        <Phone size={18} style={{ marginRight: '0.5rem' }} />
                        Book Now
                    </a>
                </div>
            </div>
        </nav>
    );
}
