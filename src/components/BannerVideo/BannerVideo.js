import React from 'react';
import './BannerVideo.css';
import youtube from './youtube-icon.png';

const BannerVideo = () => {
    return (
        <div className="banner-video">
            <h1 className="video-txt">
                RECENT EVENTS
            </h1>
            <iframe title="recent event" className="video-main" width="1200" height="675" src="https://www.youtube.com/embed/sCLj6gsH4yM">
            </iframe>
            <div className="videos-wrapper">
                <iframe title="recent event" className="video-more" width="392" height="220" src="https://www.youtube.com/embed/ys7_EiKYuw8">
                </iframe>
                <iframe title="recent event" className="video-more" width="392" height="220" src="https://www.youtube.com/embed/GFRxX5cavME">
                </iframe>
                <iframe title="recent event" className="video-more" width="392" height="220" src="https://www.youtube.com/embed/24f0J7j8ZTU">
                </iframe>
            </div>
            <a href="https://www.youtube.com/channel/UCTWGlywfZmfcvFk8RMckBUQ" target="_blank" rel="noopener noreferrer" className="video shadow-5-ns grow">
                <div className="video-icon-wrapper">
                    <img className="video-icon" src={youtube} alt=""/>
                </div>
                <div>
                    Subscribe on <b>YouTube</b>
                </div>
            </a>
        </div>
    );
};

export default BannerVideo;