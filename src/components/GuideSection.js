import React from "react";
import "../styles/GuideSection.css";

const GuideSection = () => {
    return (
        <section className="guide-section">
            <h2 className="guide-title">Our Process</h2>

            <div className="guide-columns">
                {/* LEFT COLUMN: For Users */}
                <div className="guide-column guide-users">
                    <h3 className="guide-subtitle">For Users</h3>
                    <div className="guide-steps">
                        <div className="step">
                            <h4>1. Download the App</h4>
                            <p>Grab HiveExp on the App Store or Google Play.</p>
                        </div>
                        <div className="step">
                            <h4>2. Set Location &amp; Interests</h4>
                            <p>Personalize your feed and never miss what matters.</p>
                        </div>
                        <div className="step">
                            <h4>3. Discover Events &amp; Deals</h4>
                            <p>Explore hidden gems, campus happenings, and sweet discounts.</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: For Hosts */}
                <div className="guide-column guide-hosts">
                    <h3 className="guide-subtitle">For Hosts</h3>
                    <div className="guide-steps">
                        <div className="step">
                            <h4>1. Download the App &amp; Create Your Account</h4>
                            <p>Sign up in minutes to begin posting—totally free.</p>
                        </div>
                        <div className="step">
                            <h4>2. List Your Experiences</h4>
                            <p>
                                Share your upcoming events and deals to the entire HiveExp community.
                            </p>
                        </div>
                        <div className="step">
                            <h4>3. Boost Your Reach</h4>
                            <p>
                                Want more publicity? We’ll promote your experience on social media,
                                capture content, and let you buy ads directly on the app.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuideSection;
