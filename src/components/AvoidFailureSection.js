import React, { useState, useEffect, useRef } from "react";
import "../styles/AvoidFailureSection.css";

const AvoidFailureSection = () => {


    // Replace with all the logos you have
    const initialLogos = [
        "memories/memories1.jpg",
        "memories/memories16.jpg",
        "memories/memories2.jpg",
        "memories/memories3.jpg",
        "memories/memories5.jpg",
        "memories/memories18.jpg",
        "memories/memories6.jpg",
        "memories/memories4.jpg",
        "memories/memories7.jpg",
        "memories/memories8.jpg",
        "memories/memories9.jpg",
        "memories/memories10.jpg",
        "memories/memories11.jpg",
        "memories/memories12.jpg",
        "memories/memories13.jpg",
        "memories/memories14.jpg",
        "memories/memories15.jpg",
        "memories/memories17.jpg",
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
        setTranslateX((prev) => prev - 300);
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
        <section className="avoid-failure-section">
            <h2>Don’t Miss Out!</h2>
            <p>
                Don’t miss out on the best years of your life! Stay in the loop with HiveExp—because these are the stories you’ll tell forever!!!
            </p>
            <div className="avoid-failure-carousel-container">
                {/* Sliding track */}
                <div
                    className="avoid-failure-carousel-track"
                    ref={trackRef}
                    style={trackStyle}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {logoList.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Company Logo ${index + 1}`}
                            className="avoid-failure-carousel-image"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AvoidFailureSection;
