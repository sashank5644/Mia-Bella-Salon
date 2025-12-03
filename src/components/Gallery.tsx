import Image from 'next/image';

const images = [
    '/images/image-0.jpg',
    '/images/image-2.jpg',
    '/images/image-3.jpg',
    '/images/image-4.png',
];

export default function Gallery() {
    return (
        <section id="gallery" className="section gallery-section">
            <div className="container">
                <h2 className="section-title text-center">Our Masterpieces</h2>
                <div className="gallery-grid">
                    {images.map((src, index) => (
                        <div key={index} className="gallery-item">
                            <Image
                                src={src}
                                alt={`Mia Bella Salon Work ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ objectFit: 'cover' }}
                                className="gallery-img"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
