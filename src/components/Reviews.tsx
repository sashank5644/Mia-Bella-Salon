import { Star } from 'lucide-react';

const reviews = [
    {
        name: "Sarah M.",
        rating: 5,
        text: "Absolutely the best salon in Salem! The staff is incredibly professional and my hair has never looked better. 24 years of excellence shows!",
        date: "2 weeks ago"
    },
    {
        name: "Jessica K.",
        rating: 5,
        text: "I've been coming here for years. The atmosphere is so relaxing and they always do an amazing job. Highly recommend!",
        date: "1 month ago"
    },
    {
        name: "Emily R.",
        rating: 5,
        text: "Won Best of Salem for a reason! Love my nails every time. Great service and beautiful location.",
        date: "3 months ago"
    }
];

export default function Reviews() {
    return (
        <section id="reviews" className="section reviews-section">
            <div className="container">
                <h2 className="section-title text-center">What Our Clients Say</h2>
                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="review-header">
                                <div className="stars">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="#d4af37" color="#d4af37" />
                                    ))}
                                </div>
                                <span className="review-date">{review.date}</span>
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <p className="review-author">- {review.name}</p>
                        </div>
                    ))}
                </div>
                <div className="google-badge text-center" style={{ marginTop: '2rem' }}>
                    <p style={{ color: 'var(--color-text-muted)' }}>Rated 5 Stars on Google</p>
                </div>
            </div>
        </section>
    );
}
