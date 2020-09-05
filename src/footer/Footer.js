import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>
                ORL - Online Racing League
            </p>
            <p>
                {new Date().getFullYear()}
            </p>

        </div>
    );
};

export default Footer;