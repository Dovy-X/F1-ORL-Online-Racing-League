import React, { Component } from 'react';
import './Nav.css'
import NavItem from '../../components/nav/nav-item/NavItem'

class Nav extends Component {
  render() {
    return (
      <div>
        <header className="w-100 bb b--black-40 flex justify-center">
          <nav className="flex flex-row">
            <NavItem navItem={"NEWS"}/>
            <NavItem navItem={"LEAGUES"}/>
            <NavItem navItem={"JOIN US"}/>
            <NavItem navItem={"ABOUT"}/>
          </nav>
        </header>
        
      </div>
    );
  }
}

export default Nav;