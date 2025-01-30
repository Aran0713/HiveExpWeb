import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>
                    Discover Events<br />
                    <span>Create Memories!</span>
                </h1>
                <p>
                    Find hidden gems, events, and deals around your university in
                    just one click.
                </p>
                <div className="hero-buttons">
                    <a
                        href="https://tr.ee/Pq1rXt6VOQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-download"
                    >
                        Download the App
                    </a>
                    <a href="/schedule" className="btn btn-schedule">
                        Schedule a Call
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
