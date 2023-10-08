import React, { useState } from 'react';
import './Navbar.css'; 
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    
    return (
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
            <div className="container">
                <div className="logo">PueblaRX Store</div>
                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <nav>
                        <ul>
                            <li>Inicio</li>
                            <li>Productos</li>
                            <li>Contacto</li>
                        </ul>
                    </nav>
                    <CartWidget/>
                </div>

                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                </div>
            </div>
        </nav>
        
    );
}

export default Navbar;
