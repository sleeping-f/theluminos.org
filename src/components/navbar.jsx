import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import './navbar.css';
import ShinyText from './ShinyText/ShinyText';
import DecryptedText from './DecryptedText/DecryptedText';

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

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`nav ${affix ? 'affix' : ''}`}>
            <div className="container">
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="TheLumiNos Logo" />
                        <ShinyText className='logo-text'
                            text="TheLumiNos"
                            speed={3.3}
                            delay={0}
                            color="#E6BC82"
                            shineColor="#e0caab"
                            spread={120}
                            direction="left"
                            yoyo={true}
                            pauseOnHover={false}
                        />

                    </a>
                </div>
                <div id="mainListDiv" className={`main_list ${menuOpen ? 'show_list' : ''}`}>
                    <ul className="navlinks">
                        <li><a href="#services" onClick={closeMenu}><DecryptedText
                            text="Services"
                            speed={42}
                            maxIterations={22}
                            revealDirection="start"
                            animateOn="hover"
                        /></a></li>
                        <li><a href="#projects" onClick={closeMenu}><DecryptedText
                            text="Projects"
                            speed={42}
                            maxIterations={22}
                            revealDirection="start"
                            animateOn="hover"
                        /></a></li>
                        <li><a href="#clients" onClick={closeMenu}><DecryptedText
                            text="Clients"
                            speed={42}
                            maxIterations={22}
                            revealDirection="start"
                            animateOn="hover"
                        /></a></li>
                        <li><a href="#contact" onClick={closeMenu}><DecryptedText
                            text="Contact"
                            speed={42}
                            maxIterations={22}
                            revealDirection="start"
                            animateOn="hover"
                        /></a></li>
                        <li>
                            <a href="#contact" className="start-project-btn" onClick={closeMenu}>
                                <span className="plus-icon">+</span> Start Project
                            </a>
                        </li>
                    </ul>
                </div>
                <span className={`navTrigger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;