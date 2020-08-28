import React from 'react';
import '../styles/Sponsors.css';
import hyperx from '../images/hyperx.png';

const Sponsors = () => {
    return (
        <div className="sponsors">
            <h1 className="sponsor-txt">
                SPONSORED BY
            </h1>
            <div className="sponsor-img-wrapper">
                <img className='sponsor-img' src={hyperx} alt='HyperX logo'/>
            </div>
        </div>
    );
};

export default Sponsors;