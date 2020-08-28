import React from 'react';
import '../styles/Logo.css';
import logo from  '../images/orl-logo2.png';

const NavLogo = () => {
    return (
        <img className='logo-img' src={logo} alt='orl logo'/>
    );
};

export default NavLogo;