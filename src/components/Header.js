import React from "react";
import "../styles/Header.css";
import { FaHome } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();
    const isContactPage = location.pathname === "/contact";

    return (
        <header className="header">
            <div className="header-inner">

                {/* Desktop Left: Nav Links */}
                <nav className="desktop-left-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                </nav>


                {/* Center: Logo + Brand */}
                <div className="center-brand">
                    <img
                        src="HiveLogo.png"
                        alt="HiveExp Logo"
                        className="header-logo-img"
                    />
                    <h1 className="header-logo-text">HiveExp</h1>
                </div>

                {/* Desktop Right: Buttons */}
                <div className="desktop-right-btns">
                    <a
                        href="https://tr.ee/Pq1rXt6VOQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-download"
                    >
                        Download the App
                    </a>
                    <a href="/contact" className="btn btn-schedule">
                        Schedule a Call
                    </a>
                </div>

                {/* Mobile Phone Icon */}
                {!isContactPage && (
                    <div className="mobile-phone-icon">
                        <a href="/contact" className="phone-icon-link">
                            <MdCall className="phone-icon-svg" />
                        </a>
                    </div>
                )}
                {isContactPage && (
                    <div className="mobile-phone-icon">
                        <a href="/" className="phone-icon-link">
                            <FaHome className="phone-icon-svg" />
                        </a>
                    </div>
                )}


            </div>
        </header>
    );
};

export default Header;
