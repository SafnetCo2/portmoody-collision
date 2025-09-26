import React from "react";

const Testimonials = () => {
    const testimonials = [
        { name: "John D.", text: "Fantastic service! My car looks brand new." },
        { name: "Sarah M.", text: "Professional and affordable. Highly recommended." },
        { name: "Alex R.", text: "Best car body repair shop in Port Moody." }
    ];

    return (
        <section id="testimonials" className="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonials-list">
                {testimonials.map((t, i) => (
                    <blockquote key={i}>
                        <p>"{t.text}"</p>
                        <footer>- {t.name}</footer>
                    </blockquote>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
