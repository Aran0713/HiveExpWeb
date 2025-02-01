import React from "react";
import "../styles/SuccessSection.css";
import { useLocation } from "react-router-dom";


const SuccessSection = () => {
    const location = useLocation(); // Get the current page route
    const isContactPage = location.pathname === "/contact";
    return (
        <section className="success-section">
            <h2>Join the Hive</h2>
            <img
                src="HiveLogo.png"
                alt="HiveExp Logo"
                className="success-logo-img"
            />
            <p>Download HiveExp today and start creating memories!</p>
            <div className="cta-buttons">
                <a
                    href="https://tr.ee/Pq1rXt6VOQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-download"
                >
                    Download the App
                </a>
                {!isContactPage && (
                    <a href="/contact" className="btn btn-schedule">Contact Us</a>
                )}
            </div>
        </section>
    );
};

export default SuccessSection;
