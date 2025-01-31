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

    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        // Remove error when user starts typing
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        // Check for empty fields
        Object.keys(formData).forEach((field) => {
            if (!formData[field]) {
                newErrors[field] = "This field is required";
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Successful submission
        setFormSubmitted(true);
        alert("Your message has been sent!");

        // Reset form
        setFormData({ name: "", email: "", phone: "", package: "", message: "" });
        setErrors({});
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
                        className={errors.name ? "error-input" : ""}
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "error-input" : ""}
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}

                    <label>Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? "error-input" : ""}
                    />
                    {errors.phone && <p className="error-text">{errors.phone}</p>}

                    <label>What package are you interested in?</label>
                    <select
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className={errors.package ? "error-input" : ""}
                    >
                        <option value="">Select a package</option>
                        <option value="Starter">Starter</option>
                        <option value="Social Boost">Social Boost</option>
                        <option value="Enhanced Exposure">Enhanced Exposure</option>
                        <option value="All-Out Premium">All-Out Premium</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.package && <p className="error-text">{errors.package}</p>}

                    <label>How can we help you?</label>
                    <textarea
                        name="message"
                        placeholder="Enter details about your request"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "error-input" : ""}
                    ></textarea>
                    {errors.message && <p className="error-text">{errors.message}</p>}

                    <button type="submit" className="btn-submit">Submit</button>

                    {Object.keys(errors).length > 0 && (
                        <p className="error-text general-error">Please fill in all required fields.</p>
                    )}
                </form>
            </div>

            {/* Support Section */}
            <div className="contact-support">
                <h3>Need Help?</h3>
                <p>If you have any questions about our packages, event listings, or the app, reach out to our team:</p>
                <p><strong>Email:</strong> <a href="mailto:support@eventhivexp.com">support@eventhivexp.com</a></p>
                <p><strong>Call or WhatsApp:</strong> <a href="tel:+16476190713">647-619-0713</a></p>
            </div>
        </div>
    );
};

export default ContactForm;
