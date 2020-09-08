import React from 'react';
import '../styles/DropdownBox.css';
import { Link } from 'react-router-dom';

const DropdownBox = (p) => {
    var boxContent;
    switch (p.boxPosition) {
        case 'menu-results':
            boxContent = [
                <Link to="/results-f1a"         className="menu-item"   >F1 - A LEAGUE</        Link>,
                <Link to="/results-f1b"         className="menu-item"   >F1 - B LEAGUE</        Link>,
                <Link to="/"                    className="menu-item"   >DIRT RALLY</           Link>,
                <Link to="/"                    className="menu-item"   >ASSETTO CORSA COMPETIZIONE</      Link>,
                <Link to="/"                    className="menu-item"   >PROJECT CARS</         Link>,
            ];
            break;
        case 'menu-standings':
            boxContent = [
                <Link to="/standings-f1a"       className="menu-item"   >F1 - A LEAGUE</        Link>,
                <Link to="/standings-f1b"       className="menu-item"   >F1 - B LEAGUE</        Link>,
                <Link to="/"                    className="menu-item"   >DIRT RALLY</           Link>,
                <Link to="/"                    className="menu-item"   >ASSETTO CORSA COMPETIZIONE</      Link>,
                <Link to="/"                    className="menu-item"   >PROJECT CARS</         Link>,
            ];
            break;
        case 'menu-schedule':
            boxContent = [
                <Link to="/schedule-f1a"        className="menu-item"   >F1 - A LEAGUE</        Link>,
                <Link to="/schedule-f1b"        className="menu-item"   >F1 - B LEAGUE</        Link>,
                <Link to="/"                    className="menu-item"   >DIRT RALLY</           Link>,
                <Link to="/"                    className="menu-item"   >ASSETTO CORSA COMPETIZIONE</      Link>,
                <Link to="/"                    className="menu-item"   >PROJECT CARS</         Link>,
            ];
            break;
        case 'menu-join-us':
            boxContent = [
                <Link to="/"                    className="menu-item"   >FORMULA 1 (open)</     Link>,
                <Link to="/"                    className="menu-item"   >DIRT RALLY (open)</    Link>,
                <Link to="/"                    className="menu-item"   >ASSETTO CORSA COMPETIZIONE</      Link>,
                <Link to="/"                    className="menu-item"   >PROJECT CARS</         Link>,
            ];
            break;
        case 'menu-info':
            boxContent = [
                <Link to="/"                    className="menu-item"   >FORMULA 1 rules</      Link>,
                <Link to="/"                    className="menu-item"   >DIRT RALLY rules</     Link>,
                <Link to="/"                    className="menu-item"   >ACC rules</Link>,
                <Link to="/"                    className="menu-item"   >PROJECT CARS rules</   Link>,
                <Link to="/"                    className="menu-item"   >{"Coordinators & Hosts"}</  Link>,
                <Link to="/"                    className="menu-item"   >About ORL</            Link>,
                <Link to="/"                    className="menu-item"   >Help</                 Link>,
                <Link to="/"                    className="menu-item"   >Contact Us</           Link>,
                
            ];
            break;
        default:
            boxContent = [];
    }

    return (
        <ul className='menu'>
            {boxContent.map((value) => {
                return value
            })}
        </ul>
    );
};

// DropdownBox.defaultProps = {
//     boxPosition:'hidden',
//     boxMenu: null
// }

export default DropdownBox;