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
                <a href="https://steamcommunity.com/groups/onlineracingleague" target="_blank" rel="noopener noreferrer" className="connect shadow-5-ns grow">
                    <div className="connect-icon-wrapper">
                        <img className="connect-icon" src={steam} alt=""/>
                    </div>
                    <div>
                        Join ORL community group on <b>Steam</b>
                    </div>
                </a>
                <a href="https://discord.com/invite/4srpsxB" target="_blank" rel="noopener noreferrer" className="connect shadow-5-ns grow">
                    <div className="connect-icon-wrapper">
                        <img className="connect-icon" src={discord} alt=""/>
                    </div>
                    <div>
                        Chat with ORL participants on <b>Discord</b>
                    </div>
                </a>
                <a href="https://twitter.com/team_orl" target="_blank" rel="noopener noreferrer" className="connect shadow-5-ns grow">
                    <div className="connect-icon-wrapper">
                        <img className="connect-icon" src={twitter} alt=""/>
                    </div>
                    <div>
                        Find the latest news of ORL on <b>Twitter</b>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Banner_Connect;