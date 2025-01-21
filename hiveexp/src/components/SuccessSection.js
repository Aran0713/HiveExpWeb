import React from "react";
import "../styles/SuccessSection.css";

const SuccessSection = () => {
    return (
        <section className="success-section">
            <h2>Join the Hive</h2>
            <p>Download HiveExp today and start creating memories!</p>
            <img src="../assets/success.jpg" alt="Successful events" />
            <div className="cta-buttons">
                <a href="/download" className="btn btn-download">Download the App</a>
                <a href="/schedule" className="btn btn-schedule">Schedule a Call</a>
            </div>
        </section>
    );
};

export default SuccessSection;
