import React, { Component } from 'react';
import './styles/Header.css';
import NavItem from './components/NavItem';
import DropdownBox from './components/DropdownBox';
import Logo from './components/Logo';
import Profile from './components/Profile';

class Header extends Component {

  state = {
    boxPosition: 'menu-hidden',
    pointerColor: 'pointer-hidden'
  };

  hidden = () => this.setState({ boxPosition: 'menu-hidden', pointerColor: 'pointer-hidden' });
  results = () => this.setState({ boxPosition: 'menu-results', pointerColor: 'pointer-color-nav' });
  standings = () => this.setState({ boxPosition: 'menu-standings', pointerColor: 'pointer-color-nav' });
  schedule = () => this.setState({ boxPosition: 'menu-schedule', pointerColor: 'pointer-color-nav' });
  join_us = () => this.setState({ boxPosition: 'menu-join-us', pointerColor: 'pointer-color-nav' });
  info = () => this.setState({ boxPosition: 'menu-info', pointerColor: 'pointer-color-nav' });

  pointer_color_box = () => this.setState({ pointerColor: 'pointer-color-box' });
  pointer_color_nav = () => this.setState({ pointerColor: 'pointer-color-nav' });
  pointer_hidden = () => this.setState({ pointerColor: 'pointer-hidden' });

  render() {
    return (
      <header className="shadow-5-ns">
        <Logo />
        <nav onMouseLeave={this.hidden}>
          <span className="nav-item" onMouseEnter={this.results} >
            <NavItem nav={"RESULTS"} />
          </span>
          <span className="nav-item" onMouseEnter={this.standings} >
            <NavItem nav={"STANDINGS"} />
          </span>
          <span className="nav-item" onMouseEnter={this.schedule} >
            <NavItem nav={"SCHEDULE"} />
          </span>
          <span className="nav-item" onMouseEnter={this.join_us} >
            <NavItem nav={"JOIN US"} />
          </span>
          <span className="nav-item" onMouseEnter={this.info} >
            <NavItem nav={"INFO"} />
          </span>

          <div id='dropdown-box' className={`${this.state.boxPosition}`} onMouseEnter={this.pointer_color_box} onMouseLeave={this.pointer_hidden}>
            <div className={`${this.state.pointerColor} DropdownPointer`}>
            </div>
            <DropdownBox
              boxPosition={this.state.boxPosition}
            />
          </div>
        </nav>
        <Profile />
      </header>
    );
  }
}

export default Header;