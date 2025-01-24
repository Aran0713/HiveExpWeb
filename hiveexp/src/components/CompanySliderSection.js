import React, { useState, useEffect, useRef } from "react";
import "../styles/CompanySliderSection.css"; // or your preferred stylesheet name

const CompanySliderSection = () => {
    // Replace with all the logos you have
    const initialLogos = [
        "/logos/company1.png",
        "/logos/company2.png",
        "/logos/company3.png",
        "/logos/company4.png",
        "/logos/company5.png",
        "/logos/company6.png",
        "/logos/company7.png",
        "/logos/company8.png",
        "/logos/company9.png",
        "/logos/company10.png",
        "/logos/company11.png",
        "/logos/company12.png",
        "/logos/company13.png",
        "/logos/company14.png",
        "/logos/company15.png",
        "/logos/company16.png",
        "/logos/company17.png",
        "/logos/company18.png",
        "/logos/company19.png",
        "/logos/company20.png",
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
        setTranslateX((prev) => prev - 200);
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
            <h2 className="company-slider-title">Partners</h2>

            {/* Carousel container (hides overflow) */}
            <div className="company-carousel-container">
                {/* Sliding track */}
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
        </section>
    );
};

export default CompanySliderSection;
