import React, { Component } from 'react';
import './Header.css';
import NavItem from '../../components/header/nav-item/NavItem';
import DropdownBox from '../../components/header/dropdown-box/DropdownBox';
import Logo from '../../components/header/logo/Logo';

class Nav extends Component {

  state = {
    boxPosition: 'menu-hidden',
    pointerColor: 'pointer-hidden'
  };

  hidden = () => this.setState({ boxPosition: 'menu-hidden', pointerColor: 'pointer-hidden'});
  news = () => this.setState({ boxPosition: 'menu-news', pointerColor: 'pointer-color-nav'});
  leagues = () => this.setState({ boxPosition: 'menu-leagues', pointerColor: 'pointer-color-nav'});
  join_us = () => this.setState({ boxPosition: 'menu-join_us', pointerColor: 'pointer-color-nav'});
  get_to_know_us = () => this.setState({ boxPosition: 'menu-get_to_know_us', pointerColor: 'pointer-color-nav'});
  about = () => this.setState({ boxPosition: 'menu-about', pointerColor: 'pointer-color-nav'});

  pointer_color_box = () => this.setState({ pointerColor: 'pointer-color-box'});
  pointer_color_nav = () => this.setState({ pointerColor: 'pointer-color-nav'});
  pointer_hidden = () => this.setState({ pointerColor: 'pointer-hidden'});

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

          <div id='dropdown-box' className={`${this.state.boxPosition}`} onMouseEnter={this.pointer_color_box} onMouseLeave={this.pointer_hidden}>
            <div className={`${this.state.pointerColor} DropdownPointer`}></div>
            {/* <div className="DropdownBridge"></div> */}
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