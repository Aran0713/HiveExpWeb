import React from "react";
import "../styles/SolutionSection.css";

const SolutionSection = () => {
    return (
        <section className="solution-section">
            {/* Intro / Feature Text */}
            <div className="solution-text-wrapper">
                <h2 className="solution-title">Meet Hive Experience</h2>
                <p className="solution-subtitle">
                    HiveExp is your one-stop mobile app for local events, campus happenings, and exclusive deals tailored just for university students.
                </p>

                <p className="solution-subtitle">
                    Join the buzz with over 1,000+ students and 100+ businesses already on board!
                </p>
            </div>

            {/* Cards Row: Showcases 4 screenshots */}
            <div className="solution-cards-row">
                {/* CARD 1: APP INTRO */}
                <div className="solution-card">
                    <img
                        src="/appScreenshots/ss9.png"
                        alt="HiveExp App Screenshot - Intro"
                        className="card-image"
                    />
                    <h3 className="card-title">Jump Right In</h3>
                    <p className="card-text">
                        Start strong with HiveExp’s welcoming screen—discover local events
                        and deals the moment you open the app!
                    </p>
                </div>

                {/* CARD 2: USER PROFILE */}
                <div className="solution-card">
                    <img
                        src="/appScreenshots/ss2.png"
                        alt="HiveExp App Screenshot - User Profile"
                        className="card-image"
                    />
                    <h3 className="card-title">Make It Yours</h3>
                    <p className="card-text">
                        Showcase your unique vibe. Personalize your feed and never miss the
                        hotspots that match your style!
                    </p>
                </div>

                {/* CARD 3: EVENT PLANNER */}
                <div className="solution-card">
                    <img
                        src="/appScreenshots/ss3.png"
                        alt="HiveExp App Screenshot - Event Planner"
                        className="card-image"
                    />
                    <h3 className="card-title">Plan &amp; Conquer</h3>
                    <p className="card-text">
                        From campus clubs to local businesses—list your events for free and keep everyone in the loop!
                    </p>
                </div>

                {/* CARD 4: SEARCH */}
                <div className="solution-card">
                    <img
                        src="/appScreenshots/ss6.png"
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
