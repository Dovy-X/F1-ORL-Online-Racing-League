import React, { Component } from 'react';
import './Header.css';
import NavItem from '../../components/header/nav-item/NavItem';
import DropdownBox from '../../components/header/dropdown-box/DropdownBox';
import Logo from '../../components/header/logo/Logo';

class Nav extends Component {

  state = {
    boxPosition: 'menu-hidden',
    pointerPosition: 'pointer-hidden'
  };

  hidden = () => this.setState({ boxPosition: 'menu-hidden', pointerPosition: 'pointer-hidden'});
  news = () => this.setState({ boxPosition: 'menu-news', pointerPosition: 'pointer-visible'});
  leagues = () => this.setState({ boxPosition: 'menu-leagues', pointerPosition: 'pointer-visible'});
  join_us = () => this.setState({ boxPosition: 'menu-join_us', pointerPosition: 'pointer-visible'});
  get_to_know_us = () => this.setState({ boxPosition: 'menu-get_to_know_us', pointerPosition: 'pointer-visible'});
  about = () => this.setState({ boxPosition: 'menu-about', pointerPosition: 'pointer-visible'});

  render() {
    return (
      <header>
        <Logo />
        <nav onMouseLeave={this.hidden}>
          <span className="nav-item" onMouseEnter={this.news} ><NavItem nav={"NEWS"} /></span>
          <span className="nav-item" onMouseEnter={this.leagues} ><NavItem nav={"LEAGUES"} /></span>
          <span className="nav-item" onMouseEnter={this.join_us} ><NavItem nav={"JOIN US"} /></span>
          <span className="nav-item" onMouseEnter={this.get_to_know_us} ><NavItem nav={"GET TO KNOW US"} /></span>
          <span className="nav-item" onMouseEnter={this.about} ><NavItem nav={"ABOUT"} /></span>

          <div id='dropdown-box' className={`${this.state.boxPosition}`}>
            <div className={`${this.state.pointerPosition} DropdownPointer`}></div>
            <div className="DropdownBridge"></div>
              <DropdownBox 
                boxPosition={this.state.boxPosition}
              />
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;