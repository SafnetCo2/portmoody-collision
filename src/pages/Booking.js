import React, { useState } from "react";

const Booking = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        carType: "",
        registration: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Appointment Data:", formData);
        alert("Appointment submitted successfully!");
        setFormData({
            name: "",
            phone: "",
            email: "",
            date: "",
            carType: "",
            registration: "",
            message: "",
        });
    };

    return (
        <div className="booking-page">
            <h1>Book an Appointment</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="carType"
                    placeholder="Type of Car"
                    value={formData.carType}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="registration"
                    placeholder="Registration Number"
                    value={formData.registration}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                />
                <button type="submit" className="submit-btn">
                    Send
                </button>
            </form>
        </div>
    );
};

export default Booking;
