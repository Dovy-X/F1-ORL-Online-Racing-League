import React from 'react';
import './Logo.css';
import logo from  './orl-logo2.png';

const NavLogo = () => {
    return (
        <img className='logo-img' src={logo} alt='orl logo'/>
    );
};

export default NavLogo;