import React from "react";

const Gallery = () => {
    const images = [
        "/images/carService.jpg",
        "/images/programming.jpg",
        "/images/piston.jpg",
        "/images/laurel-and-michael-evans-c-KDq7nxVdQ-unsplash.jpg",
        "/images/body.jpg",
        "/images/carwash.jpg",
        "/images/mechanical.jpg",
        "/images/oil.jpg",
        "/images/spray.jpg",
        "/images/bodyConversion.jpg",
    ];

    return (
        <section id="gallery" className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div key={index} className="gallery-item">
                        <img src={img} alt={`Gallery ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
