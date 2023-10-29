import React, { useState } from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <header>
            <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                <div className="container">
                    <Link to="/">
                        <img src={"../img/logo.png"} alt="Logo Rx" className='imglogo'/>
                    </Link>
                    
                    <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/categoria/2">Accesorios</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/categoria/3">Indumentaria</NavLink>
                                </li>
                                
                                <li></li>
                            </ul>
                        </nav>
                        <CartWidget />
                    </div>

                    <div className="menu-icon" onClick={toggleMenu}>
                        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
