import React, { useState, useRef } from "react";
import "../styles/ListExperience.css";

// Replace these with your actual 9 image paths
const stepImages = [
    "steps/step1.png",
    "steps/step2.png",
    "steps/step3.png",
    "steps/step4.png",
    "steps/step5.png",
    "steps/step6.png",
    "steps/step7.png",
    "steps/step8.png",
    "steps/step9.png",
];

const ListExperience = () => {
    // Lightbox state
    const [lightboxIndex, setLightboxIndex] = useState(null);

    // Carousel track ref
    const carouselTrackRef = useRef(null);

    // Open lightbox with the clicked image index
    const openLightbox = (idx) => {
        setLightboxIndex(idx);
    };

    // Close lightbox
    const closeLightbox = (e) => {
        e.stopPropagation();
        setLightboxIndex(null);
    };

    // Show next image
    const nextImage = (e) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev + 1) % stepImages.length);
    };

    // Show previous image
    const prevImage = (e) => {
        e.stopPropagation();
        setLightboxIndex((prev) =>
            (prev - 1 + stepImages.length) % stepImages.length
        );
    };

    // Scroll the carousel left/right
    const scrollLeft = () => {
        if (carouselTrackRef.current) {
            carouselTrackRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };
    const scrollRight = () => {
        if (carouselTrackRef.current) {
            carouselTrackRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    return (
        <div>
            <section className="list-experience-hero">
                {/* Floating shapes for a 3D/gold accent (optional) */}
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>

                <div className="list-hero-content">
                    {/* LEFT COLUMN: Title, Subtitle, Download Buttons */}
                    <div className="list-hero-left">
                        <h1 className="list-hero-title">
                            List Your <span>Experience</span>
                        </h1>
                        <p className="list-hero-subtitle">
                            It’s <strong>100% free</strong> to list your event or deal on HiveExp, and it appears on the app
                            <strong> instantly</strong>—no complicated forms. Keep it visible for as long as you want,
                            giving you <strong>free advertising</strong> to thousands of local students!
                            <br /><br />
                            <strong>Note:</strong> You can currently only list your experience through our mobile app.
                        </p>


                        <div className="list-hero-buttons">
                            <div className="store-buttons">
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
            </section>

            {/* RIGHT COLUMN: Step-by-Step Carousel */}
            <div className="list-hero-right">


                <div className="steps-carousel">
                    <button className="carousel-arrow arrow-left" onClick={scrollLeft}>
                        &lt;
                    </button>

                    <div className="steps-track" ref={carouselTrackRef}>
                        {stepImages.map((img, idx) => (
                            <div
                                className="step-image-wrapper"
                                key={idx}
                                onClick={() => openLightbox(idx)}
                            >
                                <img
                                    src={img}
                                    alt={`Step ${idx + 1}`}
                                    className="step-image"
                                />
                                <div className="overlay-click">Click to Enlarge</div>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-arrow arrow-right" onClick={scrollRight}>
                        &gt;
                    </button>
                </div>
                <div className="carousel-header">
                    <p>Steps to List a Deal. Tap any image to enlarge.</p>
                </div>
            </div>

            {/* LIGHTBOX (only if an image is open) */}
            {lightboxIndex !== null && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox}>
                            &times;
                        </button>
                        <button className="lightbox-prev" onClick={prevImage}>
                            &lt;
                        </button>

                        <img
                            src={stepImages[lightboxIndex]}
                            alt={`Step ${lightboxIndex + 1}`}
                            className="lightbox-img"
                        />

                        <button className="lightbox-next" onClick={nextImage}>
                            &gt;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListExperience;
