import React from "react";
import "../styles/TestimonialsSection.css";

const TestimonialsSection = () => {
    return (
        <section className="testimonials-section">
            <h2 className="section-title">Real Students, Real Stories</h2>
            <p className="section-subtitle">
                Hear from 14 UWindsor students on how HiveExp elevates their University Experience — from unforgettable events
                to unbeatable deals. Hear it straight from the students themselves!
            </p>

            <div className="testimonials-container">
                {/* LEFT COLUMN: YouTube Playlist + Info */}
                <div className="video-column">
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/videoseries?si=xJ9Yj0A5Qq3G96lI&amp;list=PLWcHP9O8HLdNcYw_MGOTWbEBKSQom6zHG"
                            width="560"
                            height="315"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="HiveExp Testimonials Playlist"
                        ></iframe>
                    </div>


                    <a
                        href="https://www.youtube.com/playlist?list=PLWcHP9O8HLdNcYw_MGOTWbEBKSQom6zHG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="watch-more-btn"
                    >
                        Watch the Full Playlist
                    </a>
                </div>

                {/* RIGHT COLUMN: Student Quotes */}
                <div className="quotes-column">
                    <blockquote className="quote-card">
                        <p>
                            “Every day, there’s a new event around campus or Windsor. It’s great to see it all in real time.”
                        </p>
                        <span className="quote-author">– Kevin, Pre-Dental Society President</span>
                    </blockquote>

                    <blockquote className="quote-card">
                        <p>
                            “Everything is in one place, so I can quickly fit events into my already hectic schedule.”
                        </p>
                        <span className="quote-author">– Olivia, Science Society President</span>
                    </blockquote>

                    <blockquote className="quote-card">
                        <p>
                            “I like how easy it is to share what’s happening on campus. My club’s biggest challenge has always been exposure.”
                        </p>
                        <span className="quote-author">– Emma, Filipino Club President</span>
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
