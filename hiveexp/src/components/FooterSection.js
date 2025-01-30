import React from "react";
import "../styles/FooterSection.css";

const FooterSection = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                {/* 
                <h3>Stay Connected</h3>
                <div className="footer-links">
                    <a href="/download">Download the App</a>
                    <a href="mailto:contact@hiveexp.com">Contact Us</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
                <form className="subscription-form">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </form>
                */}
                <p>&copy; {new Date().getFullYear()} HiveExp. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default FooterSection;
