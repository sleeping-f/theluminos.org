import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
    const [affix, setAffix] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setAffix(true);
            } else {
                setAffix(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`nav ${affix ? 'affix' : ''}`}>
            <div className="container">
                <div className="logo">
                    <a href="#">Your Logo</a>
                </div>
                <div id="mainListDiv" className={`main_list ${menuOpen ? 'show_list' : ''}`}>
                    <ul className="navlinks">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <span className={`navTrigger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <i>a</i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;