import React from "react";
import "../styles/SolutionSection.css";

const SolutionSection = () => {
    return (
        <section className="solution-section">
            {/* Intro / Feature Text */}
            <div className="solution-text-wrapper">
                <h2 className="solution-title">Meet Hive Experience</h2>
                <p className="solution-subtitle">
                    Imagine never missing the best moments on campus. HiveExp isn’t just an events app—it’s your backstage pass to unforgettable college life. Connect, discover hidden gems, and enjoy exclusive deals crafted for you.
                </p>
                <p className="solution-subtitle">
                    Join thousands of students and local businesses that make HiveExp a vibrant community. Ready to join the hive?
                </p>
            </div>





            {/* Cards Row: Showcases 4 screenshots */}
            <div className="solution-cards-row">
                {/* CARD 1 */}
                <div className="solution-card">
                    <img
                        src="phone-mock2.png"
                        alt="HiveExp App Screenshot - Intro"
                        className="card-image"
                    />
                    <h3 className="card-title">Jump Right In</h3>
                    <p className="card-text">
                        Start strong with HiveExp’s welcoming screen, discover local events
                        and deals the moment you open the app!
                    </p>
                </div>

                {/* CARD 2 */}
                <div className="solution-card">
                    <img
                        src="appScreenshots/ss2.png"
                        alt="HiveExp App Screenshot - User Profile"
                        className="card-image"
                    />
                    <h3 className="card-title">Make It Yours</h3>
                    <p className="card-text">
                        Showcase your unique vibe. Personalize your feed and never miss the
                        hotspots that match your style!
                    </p>
                </div>

                {/* CARD 3 */}
                <div className="solution-card">
                    <img
                        src="appScreenshots/ss3.png"
                        alt="HiveExp App Screenshot - Event Planner"
                        className="card-image"
                    />
                    <h3 className="card-title">Plan &amp; Conquer</h3>
                    <p className="card-text">
                        From campus clubs to local businesses, list your events and deals for free
                        and keep everyone in the loop!
                    </p>
                </div>

                {/* CARD 4 */}
                <div className="solution-card">
                    <img
                        src="phone-mock.png"
                        alt="HiveExp App Screenshot - Search"
                        className="card-image"
                    />
                    <h3 className="card-title">Search &amp; Score</h3>
                    <p className="card-text">
                        Quickly hunt down the best deals and campus happenings so you
                        never miss a moment of fun.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
