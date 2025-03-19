// Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
    // Track whether mobile menu is open
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-inner">
                {/* Left: Logo + Brand */}
                <div className="header-left">
                    <Link to="/" className="brand-logo">
                        <img
                            src="HiveLogo.png"
                            alt="HiveExp Logo"
                            className="header-logo-img"
                        />
                        <h1 className="header-logo-text">HiveExp</h1>
                    </Link>
                </div>

                {/* Right: Desktop Nav */}
                <div className="header-right desktop-nav">
                    <Link to="/explore" className="btn btn-explore">
                        Explore Experiences
                    </Link>
                    <Link to="/listExperience" className="btn btn-list">
                        List Experiences
                    </Link>
                    <a
                        href="https://tr.ee/Pq1rXt6VOQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-download"
                    >
                        Download the App
                    </a>
                    <Link to="/contact" className="btn btn-schedule">
                        Schedule a Call
                    </Link>
                </div>

                {/* Hamburger Icon (Mobile) */}
                <div className="hamburger-icon" onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* Mobile Menu (shown when isMobileMenuOpen) */}
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <Link to="/explore" className="mobile-menu-link" onClick={toggleMobileMenu}>
                        Explore Experiences
                    </Link>
                    <Link to="/listExperience" className="mobile-menu-link" onClick={toggleMobileMenu}>
                        List Experiences
                    </Link>
                    <a
                        href="https://tr.ee/Pq1rXt6VOQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-menu-link"
                        onClick={toggleMobileMenu}
                    >
                        Download the App
                    </a>
                    <Link to="/contact" className="mobile-menu-link" onClick={toggleMobileMenu}>
                        Schedule a Call
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
