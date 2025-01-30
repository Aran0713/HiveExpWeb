import React from "react";
import "../styles/PlanSection.css";

const PlanSection = () => {
    return (
        <section className="plan-section">
            <h2>Boost Your Reach</h2>
            <p className="plan-subtitle">
                Choose the perfect one-time package to elevate your event—from basic
                listings to complete coverage. <br />
                <strong>
                    Each button below leads to a page where you can email us about your
                    chosen plan, schedule a free call, or share event details.
                </strong>
            </p>

            <div className="pricing-table">

                {/* Starter: Free */}
                <div className="pricing-card">
                    <h3>Starter</h3>
                    <ul className="plan-description">
                        <li>Unlimited event listing in the app</li>
                        <li>One free onboarding call (optional)</li>
                        <li>24/7 support—our team is here to help</li>
                    </ul>
                    <p className="price">$0 (One-Time)</p>
                    <a href="/contact" className="buy-button">Get Started</a>
                </div>

                {/* Social Boost */}
                <div className="pricing-card">
                    <h3>Social Boost</h3>
                    <ul className="plan-description">
                        <li>All Starter features</li>
                        <li>In-app Featured Event placement (top of search page)</li>
                        <li>One social media shoutout on HiveExp’s channels</li>
                    </ul>
                    <p className="price">$49 (One-Time)</p>
                    <a href="/contact" className="buy-button">Boost It</a>
                </div>

                {/* Enhanced Exposure */}
                <div className="pricing-card">
                    <h3>Enhanced Exposure</h3>
                    <ul className="plan-description">
                        <li>All Social Boost features</li>
                        <li>Professional video coverage (one event)</li>
                        <li>Edited highlight reel + raw footage</li>
                    </ul>
                    <p className="price">$79 (One-Time)</p>
                    <a href="/contact" className="buy-button">Get Enhanced</a>
                </div>

                {/* All-Out Premium */}
                <div className="pricing-card highlight">
                    <h3>All-Out Premium</h3>
                    <ul className="plan-description">
                        <li>All Enhanced Exposure features</li>
                        <li>Unlimited coverage for a single event</li>
                        <li>In-app ad placement for extra visibility (banner in homepage)</li>
                        <li>Multiple social media promotions</li>
                    </ul>
                    <p className="price">$499 (One-Time)</p>
                    <a href="/contact" className="buy-button">All Out Upgrade</a>
                </div>

            </div>
        </section>
    );
};

export default PlanSection;
