// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2>Contact Us</h2>
            <p>We’d love to hear from you! Fill out the form below and we’ll get back to you shortly.</p>

            <form>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required />

                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required />

                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Enter subject" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
