import React from "react";
import "../styles/TestimonialsSection.css";

const TestimonialsSection = () => {
    return (
        <section className="testimonials-section">
            <h2>What Our Users and Partners Say</h2>
            <div className="testimonials">
                <blockquote>
                    "I’ve discovered so many events I wouldn’t have known about without HiveExp!"
                    <span>- Jane Doe, Student</span>
                </blockquote>
                <blockquote>
                    "Our student turnout doubled thanks to HiveExp’s promotion."
                    <span>- ABC Bar</span>
                </blockquote>
            </div>
        </section>
    );
};

export default TestimonialsSection;
