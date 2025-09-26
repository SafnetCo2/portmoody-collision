import React from "react";

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-text">
                <h1>About</h1>
                <h2>Welcome to Port Moody Collision and Paint Shop</h2>
                <h3>Tesla Specialists – Fast, Professional, Reliable</h3>
                <p>
                    Port Moody Collision and Paint Shop is the Tri-Cities trusted destination
                    for ICBC automotive repairs. With over three decades of service, we
                    specialize in all makes and models, including Tesla and other specialty vehicles.
                    We provide expert autobody repairs, paint services, and convenience with
                    free Tesla courtesy cars for our clients.
                </p>
            </div>

            <div className="about-image">
                <img
                    src="/images/kate-ibragimova-bEGTsOCnHro-unsplash.jpg"
                    alt="Workshop"
                />
            </div>
        </section>
    );
};

export default About;
