import React from "react";
import "../styles/Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <img
                    src="/HiveLogo.png"
                    alt="HiveExp Logo"
                    className="header-logo-img"
                />
                <h1 className="header-logo-text">HiveExp</h1>
            </div>

            <div className="header-button">
                <a href="/download" className="btn btn-download">Download the App</a>
                <a href="/schedule" className="btn btn-schedule">Schedule a Call</a>
            </div>
        </header>
    );
};

export default Header;
