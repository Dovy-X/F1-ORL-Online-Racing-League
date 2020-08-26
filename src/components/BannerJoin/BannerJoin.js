import React from 'react';
import './BannerJoin.css';

const BannerJoin = () => {
    return (
        <div className="banner-join">
            <h1 className="connect-txt">
                GET ON TRACK
            </h1>
            <div className="join-wrapper">
                <p className="step-txt"><b className="step-nr">1.</b> <br></br>Check if your desired league is open for registration (tab "JOIN US")</p>
                <p className="step-txt"><b className="step-nr">2.</b> <br></br>See if you are happy with the rules (tab "INFO")</p>
                <p className="step-txt"><b className="step-nr">3.</b> <br></br>Register on this website</p>
                <p className="step-txt"><b className="step-nr">4.</b> <br></br>Head to desired league registration page (tab "JOIN US")</p>
                <p className="step-txt"><b className="step-nr">5.</b> <br></br>Fill all required fields</p>
                <p className="step-txt"><b className="step-nr">6.</b> <br></br>Wait for ORL staff to contact you on Steam</p>
            </div>
        </div>
    );
};

export default BannerJoin;