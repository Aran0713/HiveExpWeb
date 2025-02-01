import React, { useState, useEffect, useRef } from "react";
import "../styles/ProblemSection.css";

const images = [
    "hivePhotos/hiveGlasses1.jpg",
    "hivePhotos/hiveGlasses2.jpg",
    "hivePhotos/hiveGlasses3.jpg",
    // "hivePhotos/hiveGlasses4.jpg",
    "hivePhotos/hiveGlasses5.jpg",
    "hivePhotos/hiveGlasses6.jpg",
    "hivePhotos/hiveGlasses7.jpg",
    "hivePhotos/hiveGlasses8.jpg",
    "hivePhotos/hiveGlasses9.jpg",
    // "hivePhotos/hiveGlasses10.jpg",
    "hivePhotos/hiveGlasses11.jpg",
    "hivePhotos/hiveGlasses12.jpg",
    // "hivePhotos/hiveGlasses13.jpg",
    "hivePhotos/hiveGlasses14.jpg",
];

const ProblemSection = () => {
    // We keep our list of images in state so we can reorder it
    const [imageList, setImageList] = useState(images);

    // Position of the sliding track (in px)
    const [translateX, setTranslateX] = useState(0);

    // Whether to animate the transform (for smooth transitions)
    const [enableTransition, setEnableTransition] = useState(true);

    // Use a ref to detect when the transition completes
    const trackRef = useRef(null);

    // Automatically slide every 2 seconds (adjust as needed)
    useEffect(() => {
        const interval = setInterval(() => {
            slideLeft();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Function that triggers the left slide
    const slideLeft = () => {
        // Enable transition, then move left by 200px (example size)
        setEnableTransition(true);
        setTranslateX((prev) => prev - 220);
    };

    // Handle the transition end to reorder images
    const handleTransitionEnd = () => {
        // The leftmost image is now "off-screen."
        // We remove the first image from the array and reinsert it at the end
        const newList = [...imageList];
        const firstImage = newList.shift();
        newList.push(firstImage);

        // Update the image list
        setImageList(newList);

        // Disable transition so we can snap back without visible movement
        setEnableTransition(false);
        // Reset translateX to 0 (so it looks like we never moved)
        setTranslateX(0);
    };

    // Combine styles for the "track" that holds images
    const trackStyle = {
        transform: `translateX(${translateX}px)`,
        transition: enableTransition ? "transform 0.5s ease" : "none",
    };

    return (
        <section className="problem-section">
            <h2 className="problem-title">The Struggle to Find Local Events</h2>
            <p className="problem-subtitle">
                Spending hours searching for things to do? Missing out on local deals
                and hidden gems? You’re not alone.
            </p>
            {/*<p className="empathy-text">We’ve all been there — but not anymore.</p> */}


            {/* Carousel Wrapper */}
            <div className="carousel-container">
                {/* Sliding track (flex container) */}
                <div
                    className="carousel-track"
                    ref={trackRef}
                    style={trackStyle}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {imageList.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`Slide ${idx}`}
                            className="carousel-image"
                        />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default ProblemSection;
