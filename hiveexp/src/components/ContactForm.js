import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        package: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your message has been sent!");
        setFormData({ name: "", email: "", phone: "", package: "", message: "" });
    };

    return (
        <div>
            <div className="contact-container">
                <h2>Contact Us</h2>
                <p>
                    Tell us about your event or package needs, and our team will be in touch shortly to discuss onboarding, promotion, or any questions you have.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>Full Name</label>
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

                    <label>Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <label>What package are you interested in?</label>
                    <select
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a package</option>
                        <option value="Starter">Starter</option>
                        <option value="Social Boost">Social Boost</option>
                        <option value="Enhanced Exposure">Enhanced Exposure</option>
                        <option value="All-Out Premium">All-Out Premium</option>
                        <option value="Other">Other</option>
                    </select>

                    <label>How can we help you?</label>
                    <textarea
                        name="message"
                        placeholder=""
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit" className="btn-submit">Submit</button>
                </form>

            </div>
            {/* Support Section */}
            <div className="contact-support">
                <h3>Need Help?</h3>
                <p>
                    If you have any questions about our packages, event listings, or the app, reach out to our team:
                </p>
                <p><strong>Email:</strong> <a href="mailto:support@eventhivexp.com">support@eventhivexp.com</a></p>
                <p><strong>Call or WhatsApp:</strong> <a href="tel:+16476190713">647-619-0713</a></p>
            </div>
        </div>
    );
};

export default ContactForm;
