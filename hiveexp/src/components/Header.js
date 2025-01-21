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
        </header>
    );
};

export default Header;
