import React, { Component } from 'react';
import './Header.css';
import NavItem from '../../components/header/nav-item/NavItem';
import DropdownBox from '../../components/header/dropdown-box/DropdownBox';
import Logo from '../../components/header/logo/Logo';

class Nav extends Component {
  render() {
    return (
        <header>
          <Logo/>
          <nav>
            <NavItem nav={"NEWS"}/>
            <DropdownBox 
            item1={'Latest Results'} 
            item2={'F1 League'} 
            item3={'Other Leagues'}
            />
            <NavItem nav={"LEAGUES"}/>
            <NavItem nav={"JOIN US"}/>
            <NavItem nav={"GET TO KNOW US"}/>
            <NavItem nav={"ABOUT"}/>
          </nav>
        </header>
    );
  }
}

export default Nav;