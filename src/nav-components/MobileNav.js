import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll, } from 'body-scroll-lock';

class MobileNav extends Component {

    componentDidMount() {
        this.targetElement = document.querySelector('body');
    }

    state = {
        menuBtn: "linesBtn",
        menuBox: "hideMenu",
        menuContent: 'menu-show',
        subMenuContent: 'sub-menu-hidden',
        subMenuList: [],
        selectedMenu: ""
    }

    toggleMenu = () => {
        if (this.state.menuBox === "hideMenu") {
            this.setState({ 
                menuContent: 'menu-show', 
                menuBox: "showMenu", 
                menuBtn: "xBtn" 
            });
            disableBodyScroll(this.targetElement);
        } else {
            this.setState({ 
                menuBox: "hideMenu", 
                menuBtn: "linesBtn", 
                menuContent: 'menu-hidden',
                subMenuContent: 'sub-menu-hidden'
            });
            enableBodyScroll(this.targetElement);
        }
    }

    hideSubMenu = () => {
            this.setState({ subMenuContent: 'sub-menu-hidden', menuContent: 'menu-show'});
    }
    

    results = () => {
        this.setState({
            menuContent: 'menu-hidden',
            subMenuContent: 'sub-menu-show',
            selectedMenu: "RESULTS",
            subMenuList: [
                <Link to="/results-f1a" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >F1 - A LEAGUE</        Link>,
                <Link to="/results-f1b" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >F1 - B LEAGUE</        Link>,
                <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >DIRT RALLY</           Link>,
                <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >ASSETTO CORSA COMPETIZIONE</      Link>,
                <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >PROJECT CARS</         Link>,
            ]
        });

        
    }
    standings = () => {
            this.setState({
                menuContent: 'menu-hidden',
                subMenuContent: 'sub-menu-show',
                selectedMenu: "STANDINGS",
                subMenuList: [
                    <Link to="/standings-f1a" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >F1 - A LEAGUE</        Link>,
                    <Link to="/standings-f1b" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >F1 - B LEAGUE</        Link>,
                    <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >DIRT RALLY</           Link>,
                    <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >ASSETTO CORSA COMPETIZIONE</      Link>,
                    <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >PROJECT CARS</         Link>,
                ]
            });
    }
    schedule = () => {
            this.setState({
                menuContent: 'menu-hidden',
                subMenuContent: 'sub-menu-show',
                selectedMenu: "SCHEDULE",
                subMenuList: [
                    <Link to="/results-f1a" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >F1 - A LEAGUE</        Link>,
                    <Link to="/results-f1b" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >F1 - B LEAGUE</        Link>,
                    <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >DIRT RALLY</           Link>,
                    <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >ASSETTO CORSA COMPETIZIONE</      Link>,
                    <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >PROJECT CARS</         Link>,
                ]
            });
    }
    join_us = () => {
            this.setState({
                menuContent: 'menu-hidden',
                subMenuContent: 'sub-menu-show',
                selectedMenu: "JOIN US",
                subMenuList: [
                    <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >FORMULA 1 (open)</     Link>,
                    <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >DIRT RALLY (open)</    Link>,
                    <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >ASSETTO CORSA COMPETIZIONE</      Link>,
                    <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >PROJECT CARS</         Link>,
                ]
            });
    }
    info = () => {
            this.setState({
                menuContent: 'menu-hidden',
                subMenuContent: 'sub-menu-show',
                selectedMenu: "INFO",
                subMenuList: [
                    <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >FORMULA 1 rules</      Link>,
                    <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >DIRT RALLY rules</     Link>,
                    <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >ACC rules</Link>,
                    <Link to="/" className="mobile-nav-menu-box-item"   >PROJECT CARS rules</   Link>,
                    <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >{"Coordinators & Hosts"}</  Link>,
                    <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >About ORL</            Link>,
                    <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >Help</                 Link>,
                    <Link to="/" className="mobile-nav-menu-box-item" onClick={this.toggleMenu}  >Contact Us</           Link>,
                ]
            });
    }

    render() {
        return (
            <div className="mobile-nav-menu">
                <div onClick={this.toggleMenu} className="mobile-nav-menu-toggle">
                    <div className={`${this.state.menuBtn} hamburger`}></div>
                    <div className={`${this.state.menuBtn} hamburger`}></div>
                    <div className={`${this.state.menuBtn} hamburger`}></div>
                </div>
                <div className={`${this.state.menuBox} mobile-nav-menu-box`}>
                    <div className={`${this.state.menuContent} mobile-nav-menu-box-items-wrapper`}>
                        <span onClick={this.results} className="mobile-nav-menu-box-item">
                            RESULTS
                        </span>
                        <span onClick={this.standings} className="mobile-nav-menu-box-item">
                            STANDINGS
                        </span>
                        <span onClick={this.schedule} className="mobile-nav-menu-box-item">
                            SCHEDULE
                        </span>
                        <span onClick={this.join_us} className="mobile-nav-menu-box-item">
                            JOIN US
                        </span>
                        <span onClick={this.info} className="mobile-nav-menu-box-item">
                            INFO
                        </span>
                        <span onClick={this.toggleMenu} className="mobile-nav-menu-box-item">
                            ACCOUNT
                        </span>

                    </div>
                    <div className={`${this.state.subMenuContent} mobile-nav-menu-box-items-wrapper`}>
                        <span onClick={this.hideSubMenu} className="mobile-nav-menu-box-item selectedMenu">
                            <span className="back-arrow"></span>
                            {this.state.selectedMenu}
                        </span>

                        {this.state.subMenuList.map((value) => {
                            return value
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileNav;