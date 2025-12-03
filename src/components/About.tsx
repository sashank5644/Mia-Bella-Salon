export default function About() {
    return (
        <section id="about" className="section about-section">
            <div className="container about-grid">
                <div className="about-text">
                    <h2>Experience the Difference</h2>
                    <p>
                        For over <strong>24 years</strong>, Mia Bella Salon & Spa has been a staple of beauty and relaxation in Salem, Oregon.
                        Our commitment to excellence has earned us the prestigious <strong>"Best of Salem"</strong> award for two consecutive years.
                    </p>
                    <p>
                        Located conveniently on Browning Ave, we offer a sanctuary where you can escape the daily grind and
                        indulge in premium hair, nail, and spa services tailored just for you.
                    </p>
                </div>
                <div className="about-stats">
                    <div className="stat-item">
                        <span className="stat-number">24</span>
                        <span className="stat-label">Years Running</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">2x</span>
                        <span className="stat-label">Best of Salem Winner</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
