import React from "react";
import "../styles/GuideSection.css";

const GuideSection = () => {
    return (
        <section className="guide-section">
            <h2>How HiveExp Works</h2>
            <div className="steps">
                <div className="step">
                    <h3>1. Download the app</h3>
                    <p>Available on the App Store and Google Play.</p>
                </div>
                <div className="step">
                    <h3>2. Set your location and interests</h3>
                    <p>Customize your feed to match your vibe.</p>
                </div>
                <div className="step">
                    <h3>3. Discover events and deals</h3>
                    <p>Never miss a hidden gem again!</p>
                </div>
            </div>
        </section>
    );
};

export default GuideSection;
