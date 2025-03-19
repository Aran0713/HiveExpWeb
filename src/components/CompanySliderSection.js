import React, { useState, useEffect, useRef } from "react";
import "../styles/CompanySliderSection.css"; // or your preferred stylesheet name

const CompanySliderSection = () => {
    // Replace with all the logos you have
    const initialLogos = [
        "logos/company1.png",
        "logos/company2.png",
        "logos/company3.png",
        "logos/company4.png",
        "logos/company5.png",
        "logos/company6.png",
        "logos/company7.png",
        "logos/company8.png",
        "logos/company9.png",
        "logos/company10.png",
        "logos/company11.png",
        "logos/company12.png",
        "logos/company13.png",
        "logos/company14.png",
        "logos/company15.png",
        "logos/company16.png",
        "logos/company17.png",
        "logos/company18.png",
        "logos/company19.png",
        "logos/company20.png",
    ];

    // Keep our list of logos in state so we can reorder them
    const [logoList, setLogoList] = useState(initialLogos);

    // Current left translation (in px)
    const [translateX, setTranslateX] = useState(0);

    // Whether or not to animate the transform (for smooth transitions)
    const [enableTransition, setEnableTransition] = useState(true);

    // Ref to the track for listening to transition events
    const trackRef = useRef(null);

    // Automatically slide every 2 seconds (adjust the interval as needed)
    useEffect(() => {
        const interval = setInterval(() => {
            slideLeft();
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Move track left by 200px
    const slideLeft = () => {
        setEnableTransition(true);
        setTranslateX((prev) => prev - 180);
    };

    // Reorder the array at the end of the transition for an infinite loop
    const handleTransitionEnd = () => {
        const newList = [...logoList];
        const firstLogo = newList.shift(); // remove the first item
        newList.push(firstLogo);           // push it to the end

        // Update the state with the new list
        setLogoList(newList);

        // Disable transition and reset translateX to 0 instantly (so it snaps)
        setEnableTransition(false);
        setTranslateX(0);
    };

    // Inline style for the sliding track
    const trackStyle = {
        transform: `translateX(${translateX}px)`,
        transition: enableTransition ? "transform 0.5s ease" : "none",
    };

    return (
        <section className="company-slider-section">
            {/* Wave divider at the top */}
            <div className="wave-divider-top">
                <svg
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill="#fff" d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" />
                </svg>
            </div>

            {/* Floating hex shapes (optional) */}
            <div className="floating-shapes">
                <div className="hex-shape shape-1"></div>
                <div className="hex-shape shape-2"></div>
            </div>

            {/* Tagline and Subheading */}
            <h2 className="company-slider-title">Our Trusted Partners</h2>
            <p className="company-slider-subtitle">
                We collaborate with leading businesses and brands to create unforgettable
                campus experiences.
            </p>

            {/* Carousel */}
            <div className="company-carousel-container">
                <div
                    className="company-carousel-track"
                    ref={trackRef}
                    style={trackStyle}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {logoList.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Company Logo ${index + 1}`}
                            className="company-carousel-image"
                        />
                    ))}
                </div>
            </div>

            {/* Wave divider at the bottom */}
            <div className="wave-divider-bottom">
                <svg
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill="#fff" d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" />
                </svg>
            </div>
        </section>
    );
};

export default CompanySliderSection;
