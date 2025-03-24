import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
    return (
        <section className="hero-section">
            {/* LEFT COLUMN */}
            <div className="hero-left">
                <div className="hero-content">
                    <h1 className="hero-title">
                        The Future of <br />
                        <span>Campus Experiences</span>
                    </h1>
                    <p className="hero-subtitle">
                        Join thousands of students discovering new events and deals
                        every day! It’s never been easier to explore hidden gems
                        around your campus.
                    </p>

                    <div className="hero-buttons">
                        <a href="/search" className="btn hero-btn-explore">
                            Explore Experiences
                        </a>

                        <div className="store-buttons">
                            {/* Official Apple badge */}
                            <a
                                href="https://tr.ee/Pq1rXt6VOQ"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="Download on the App Store"
                                    className="store-badge"
                                />
                            </a>

                            {/* Official Google Play badge */}
                            <a
                                href="https://tr.ee/Pq1rXt6VOQ"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                                    alt="Get it on Google Play"
                                    className="store-badge2"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="hero-right">
                {/* Floating "3D-like" shapes container */}
                <div className="floating-shapes">
                    {/* SHAPE 1 */}
                    <div className="shape shape-1">
                        <svg
                            width="100"
                            height="100"
                            viewBox="0 0 200 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                {/* Linear gradient from top (light) to bottom (dark) */}
                                <linearGradient
                                    id="gradient1"
                                    x1="0.5"
                                    y1="0%"
                                    x2="0.5"
                                    y2="100%"
                                >
                                    <stop offset="0%" stopColor="#FFF9C4" />
                                    <stop offset="30%" stopColor="#FFD700" />
                                    <stop offset="70%" stopColor="#FF8C00" />
                                    <stop offset="100%" stopColor="#FF4500" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M100,20
                                   C130,20 160,50 160,80
                                   C160,110 100,180 100,180
                                   C100,180 40,110 40,80
                                   C40,50 70,20 100,20
                                   Z"
                                fill="url(#gradient1)"
                            />
                        </svg>
                    </div>

                    {/* SHAPE 2 */}
                    <div className="shape shape-2">
                        <svg
                            width="110"
                            height="110"
                            viewBox="0 0 200 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ transform: "rotate(10deg)" }}
                        >
                            <defs>
                                <linearGradient
                                    id="gradient2"
                                    x1="0.5"
                                    y1="0%"
                                    x2="0.5"
                                    y2="100%"
                                >
                                    <stop offset="0%" stopColor="#FFF9C4" />
                                    <stop offset="30%" stopColor="#FFD700" />
                                    <stop offset="70%" stopColor="#FF8C00" />
                                    <stop offset="100%" stopColor="#FF4500" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M100,20
                                   C130,20 160,50 160,80
                                   C160,110 100,180 100,180
                                   C100,180 40,110 40,80
                                   C40,50 70,20 100,20
                                   Z"
                                fill="url(#gradient2)"
                            />
                        </svg>
                    </div>

                    {/* SHAPE 3 */}
                    <div className="shape shape-3">
                        <svg
                            width="90"
                            height="90"
                            viewBox="0 0 200 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ transform: "rotate(-15deg)" }}
                        >
                            <defs>
                                <linearGradient
                                    id="gradient3"
                                    x1="0.5"
                                    y1="0%"
                                    x2="0.5"
                                    y2="100%"
                                >
                                    <stop offset="0%" stopColor="#FFF9C4" />
                                    <stop offset="30%" stopColor="#FFD700" />
                                    <stop offset="70%" stopColor="#FF8C00" />
                                    <stop offset="100%" stopColor="#FF4500" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M100,20
                                   C130,20 160,50 160,80
                                   C160,110 100,180 100,180
                                   C100,180 40,110 40,80
                                   C40,50 70,20 100,20
                                   Z"
                                fill="url(#gradient3)"
                            />
                        </svg>
                    </div>
                </div>

                <div className="phone-card">
                    <div className="phone-container">
                        <img
                            src="phone-mock.png"
                            alt="HiveExp Screen 1"
                            className="hero-phone-mock phone-left"
                        />
                        <img
                            src="phone-mock2.png"
                            alt="HiveExp Screen 2"
                            className="hero-phone-mock phone-right"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
