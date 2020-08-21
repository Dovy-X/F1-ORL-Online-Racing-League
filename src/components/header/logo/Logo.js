import React from 'react';
import './Logo.css';
import logo from  './orl-logo2.png';

const NavLogo = () => {
    return (
        <div id="logo">
            <img className='logo-img' src={logo} alt='orl logo'/>
        </div>
    );
};

export default NavLogo;