import React from "react";

const Services = () => {
    const services = [
        { id: 1, title: "Body Repairs", img: "/images/body.jpg" },
        { id: 2, title: "Body Conversion", img: "/images/bodyConversion.jpg" },
        { id: 3, title: "Spray Painting", img: "/images/spray.jpg" },
        { id: 4, title: "Mechanical Repairs", img: "/images/mechanical.jpg" },
        { id: 5, title: "Car Wash", img: "/images/carwash.jpg" },
        { id: 6, title: "Oil Change", img: "/images/oil.jpg" }
    ];

    return (
        <section id="services" className="services">
            <h2>Our Services</h2>
            <div className="services-grid">
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <img src={service.img} alt={service.title} />
                        <h3>{service.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
