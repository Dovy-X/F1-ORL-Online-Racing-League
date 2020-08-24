import React from 'react';
import './DropdownBox.css';

const DropdownBox = (p) => {
        var boxContent;
        switch(p.boxPosition){
            case 'menu-news':
                boxContent = ['Latest News', 'F1 League', 'Other Leagues'];
                break;
            case 'menu-leagues':
                boxContent = ['F1', 'Assetto Corsa', 'DiRT Rally','Project Cars'];
                break;
            case 'menu-join_us':
                boxContent = ['F1-A: season 13', 'F1-B: season 13', 'Assetto Corsa Competizione: season 2', 'DiRT Rally: season 7', 'Project Cars 3: season 1'];
                break;
            case 'menu-get_to_know_us':
                boxContent = ['Be our guest on Discord', 'ORL staff', 'Drivers'];
                break;
            case 'menu-about':
                boxContent = ['about1', 'about2'];
                break;
            default:
                boxContent = [];
        }
 
    return (
        <ul className='menu'>
            {boxContent.map((value, index) => {
                return <li className='menu-item' key={index}>{value}</li>
            })}
        </ul>
    );
};

// DropdownBox.defaultProps = {
//     boxPosition:'hidden',
//     boxMenu: null
// }

export default DropdownBox;