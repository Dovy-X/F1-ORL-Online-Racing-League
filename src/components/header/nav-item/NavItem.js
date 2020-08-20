import React from 'react';
import './NavItem.css';

const NavItem = (p) => {
    return (
        <div className="nav-item">{p.nav}</div>
    );
}

export default NavItem;