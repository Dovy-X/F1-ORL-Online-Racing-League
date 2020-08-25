import React from 'react';
import './Banner_Connect.css';
import discord from './discord-icon.png';
import twitter from './twitter-icon.png';
import steam from './steam-icon.png';

const Banner_Connect = () => {
    return (
        <div className="banner-connect">
            <h1 className="connect-txt">
                CONNECT
            </h1>
            <div className="connect-wrapper">
            <div className="connect shadow-5-ns grow">
                    <div className="connect-icon-wrapper">
                        <img className="connect-icon" src={steam} alt=""/>
                    </div>
                    <div classname="c-txt">
                        Join ORL community group on <b>Steam</b>
                    </div>
                </div>
                <div className="connect shadow-5-ns grow">
                    <div className="connect-icon-wrapper">
                        <img className="connect-icon" src={discord} alt=""/>
                    </div>
                    <div classname="c-txt">
                        Chat with ORL participants on <b>Discord</b>
                    </div>
                </div>
                <div className="connect shadow-5-ns grow">
                    <div className="connect-icon-wrapper">
                        <img className="connect-icon" src={twitter} alt=""/>
                    </div>
                    <div classname="c-txt">
                        Find the latest news of ORL on <b>Twitter</b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner_Connect;