import React from "react";
import "../styles/FooterSection.css";

const FooterSection = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <h3>Stay Connected</h3>
                <div className="footer-links">
                    <a href="https://tr.ee/Pq1rXt6VOQ" target="_blank" rel="noopener noreferrer">
                        Download the App
                    </a>
                    <a href="/contact">Contact Us</a>
                    <a href="https://linktr.ee/hiveexp" target="_blank" rel="noopener noreferrer">
                        Linktree
                    </a>
                    <a href="https://tr.ee/nx47qBFOwR" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                    <a href="https://tr.ee/LFdoCuS-Ha" target="_blank" rel="noopener noreferrer">
                        TikTok
                    </a>
                    <a href="https://tr.ee/WINuT38IEB" target="_blank" rel="noopener noreferrer">
                        Feature Request
                    </a>
                    <a href="https://tr.ee/Lszf-moM9i" target="_blank" rel="noopener noreferrer">
                        Discord
                    </a>
                    <a href="https://tr.ee/wgjnt5JPtL" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="https://tr.ee/GE2OvTMP-g" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                    <a href="https://tr.ee/FI-12hoW1Q" target="_blank" rel="noopener noreferrer">
                        X
                    </a>
                    <a href="https://tr.ee/8-Ci1CFe7w" target="_blank" rel="noopener noreferrer">
                        Threads
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} HiveExp. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default FooterSection;
