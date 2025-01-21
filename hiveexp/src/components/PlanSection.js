import React from "react";
import "../styles/PlanSection.css";

const PlanSection = () => {
    return (
        <section className="plan-section">
            <h2>Boost Your Business with HiveExp</h2>
            <div className="pricing-table">
                <div className="pricing-card">
                    <h3>Starter</h3>
                    <p>Event listing on the app.</p>
                    <p className="price">Free</p>
                </div>
                <div className="pricing-card">
                    <h3>Pro</h3>
                    <p>Event listing + social media shoutouts.</p>
                    <p className="price">$50/month</p>
                </div>
                <div className="pricing-card">
                    <h3>Premium</h3>
                    <p>Event listing, social media shoutouts, and professional event photography/video coverage.</p>
                    <p className="price">$150/month</p>
                </div>
            </div>
        </section>
    );
};

export default PlanSection;
