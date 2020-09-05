import React, { Component } from 'react';

class MobileNav extends Component {

    state = {
        menuBtn: "linesBtn",
        menuBox: "hideMenu"
    }

    toggleMenu = () => {
        this.state.menuBox === "hideMenu" ? 
        this.setState ( { menuBox: "showMenu", menuBtn: "xBtn" }) : 
        this.setState ( { menuBox: "hideMenu", menuBtn: "linesBtn" })
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
                    <div className="mobile-nav-menu-box-items-wrapper">
                        <span className="mobile-nav-menu-box-item">
                            RESULTS
                        </span>
                        <span className="mobile-nav-menu-box-item">
                            STANDINGS
                        </span>
                        <span className="mobile-nav-menu-box-item">
                            SCHEDULE
                        </span>
                        <span className="mobile-nav-menu-box-item">
                            JOIN US
                        </span>
                        <span className="mobile-nav-menu-box-item">
                            INFO
                        </span>
                        <span className="mobile-nav-menu-box-item">
                            ACCOUNT
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileNav;