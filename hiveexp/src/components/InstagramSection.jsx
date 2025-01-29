import React from "react";
import "../styles/InstagramSection.css"; // The CSS below

const InstagramSection = () => {
    return (
        <section className="ig-section">
            <h2 className="ig-title">Follow Us on Instagram</h2>
            <p className="ig-subtitle">
                Stay connected with us on Instagram to explore the latest university deals,
                see event highlights, and catch exclusive behind-the-scenes moments.
            </p>

            {/* IG Feed Wrapper - placeholders or your own embed */}
            <div className="ig-feed">
                {/* Example images or real embed. Replace with your plugin or custom feed. */}
                <div className="ig-post">
                    <img
                        src="https://via.placeholder.com/200x200.png?text=Instagram+Post+1"
                        alt="Instagram Post 1"
                    />
                </div>
                <div className="ig-post">
                    <img
                        src="https://via.placeholder.com/200x200.png?text=Instagram+Post+2"
                        alt="Instagram Post 2"
                    />
                </div>
                <div className="ig-post">
                    <img
                        src="https://via.placeholder.com/200x200.png?text=Instagram+Post+3"
                        alt="Instagram Post 3"
                    />
                </div>
                <div className="ig-post">
                    <img
                        src="https://via.placeholder.com/200x200.png?text=Instagram+Post+4"
                        alt="Instagram Post 4"
                    />
                </div>
                <div className="ig-post">
                    <img
                        src="https://via.placeholder.com/200x200.png?text=Instagram+Post+5"
                        alt="Instagram Post 5"
                    />
                </div>
            </div>

            {/* Buttons Row */}
            <div className="ig-buttons">
                <button className="ig-btn ig-load-more">Load More</button>
                <a
                    href="https://www.instagram.com/your_instagram_username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ig-btn ig-follow"
                >
                    Follow on Instagram
                </a>
            </div>
        </section>
    );
};

export default InstagramSection;
