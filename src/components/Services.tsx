"use client";

const services = [
    {
        name: "Wefting / Hand-Tied",
        description: "Premium hand-tied weft extensions for seamless, natural-looking volume and length.",
        icon: "✨"
    },
    {
        name: "UV Extensions",
        description: "Advanced UV-bonded extensions that are gentle on your natural hair with a secure hold.",
        icon: "💫"
    },
    {
        name: "I-Tips",
        description: "Individual strand extensions applied with micro-rings for maximum flexibility and movement.",
        icon: "💎"
    },
    {
        name: "K-Tips",
        description: "Keratin-bonded extensions that blend flawlessly for a completely natural finish.",
        icon: "🌟"
    },
    {
        name: "Tape-In",
        description: "Quick, easy-to-apply tape extensions perfect for adding instant volume and length.",
        icon: "✂️"
    }
];

export default function Services() {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <h2 className="section-title text-center">Our Services</h2>
                <p className="section-subtitle text-center">
                    Specializing in premium hair extension techniques
                </p>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <span className="service-icon">{service.icon}</span>
                            <h3 className="service-name">{service.name}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
