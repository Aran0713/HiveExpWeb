import React from "react";
import "../styles/SolutionSection.css";

const SolutionSection = () => {
    return (
        <section className="solution-section">
            <h2>Meet HiveExp</h2>
            <p>HiveExp is your one-stop mobile app to discover events, deals, and attractions tailored for university students.</p>
            <ul className="features-list">
                <li>Find events near you instantly.</li>
                <li>Exclusive deals for students.</li>
                <li>Join the buzz with over 1,000+ students and 100+ businesses already on board.</li>
            </ul>
            <img src="../assets/app-screenshot.jpg" alt="HiveExp App Screenshot" />
        </section>
    );
};

export default SolutionSection;
