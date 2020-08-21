import React from 'react';
import './DropdownBox.css';

const DropdownBox = (p) => {
    return (
    <div id='dropdown-box'>
        <ul className='menu'>
            <li className='menu-item'>
                {p.item1}
            </li>
            <li className='menu-item'>
                {p.item2}
            </li>
            <li className='menu-item'>
                {p.item3}
            </li>
        </ul>
    </div>
    );
};

export default DropdownBox;