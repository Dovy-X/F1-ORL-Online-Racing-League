import React from 'react';
import './NavItem.css';

const NavBtn = (props) => {
      return (
          <div className="w-25 nav-item flex justify-center items-center pointer ">
              {props.navItem}
          </div>
      );
  }

export default NavBtn;