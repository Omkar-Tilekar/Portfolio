import React, { useState, useEffect } from 'react';
import './Navbar.css';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container container">
                <a href="#hero" className="logo">
                    Omkar<span className="accent-text">.ai</span>
                </a>

                <div
                    className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
                    <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
                    <li><a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a></li>
                    <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
