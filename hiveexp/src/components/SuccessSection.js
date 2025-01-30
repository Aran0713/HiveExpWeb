import React from "react";
import "../styles/SuccessSection.css";

const SuccessSection = () => {
    return (
        <section className="success-section">
            <h2>Join the Hive</h2>
            <img
                src="/HiveLogo.png"
                alt="HiveExp Logo"
                className="success-logo-img"
            />
            <p>Download HiveExp today and start creating memories!</p>
            <div className="cta-buttons">
                <a href="/download" className="btn btn-download">Download the App</a>
                <a href="/schedule" className="btn btn-schedule">Contact Us</a>
            </div>
        </section>
    );
};

export default SuccessSection;
