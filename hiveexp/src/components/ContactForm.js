import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your message has been sent!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>Have questions? Get in touch with us!</p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label>Message</label>
                <textarea
                    name="message"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit" className="btn-submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
