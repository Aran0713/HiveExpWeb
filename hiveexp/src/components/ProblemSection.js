import React from "react";
import "../styles/ProblemSection.css";

const ProblemSection = () => {
    return (
        <section className="problem-section">
            <h2>The Struggle to Find Local Events</h2>
            <p>
                Spending hours searching for things to do? Missing out on local deals and hidden gems? You’re not alone.
            </p>
            <img src="../assets/problem.jpg" alt="Bored students" />
            <p className="empathy-text">We’ve all been there — but not anymore.</p>
        </section>
    );
};

export default ProblemSection;
