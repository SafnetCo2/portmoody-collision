import React from "react";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";

const Hero = () => {
    return (
        <section className="hero"
            style={{ backgroundImage: "url('/images/tesla.jpg')" }}
            >
            <div className="hero-content">
                <h1>Trusted Car Repairs in Port Moody</h1>
                <h2>Auto Body Repair Specialists</h2>
                <p>Your trusted auto body repair specialists in Port Moody.</p>
                <Link to="/booking" className="btn">
                    Book an Appointment
                </Link>
            </div>

            <Chatbot />
        </section>
    );
};

export default Hero;
