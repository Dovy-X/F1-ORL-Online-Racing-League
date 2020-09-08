import React from 'react';
import '../styles/BannerVideo.css';
import youtube from '../images/youtube-icon.png';

const BannerVideo = () => {
    return (
        <div className="banner-video">
            <h1 className="video-txt">
                RECENT EVENTS
            </h1>
            <div className="video-wrapper">
                <iframe title="recent event" className="iframe"
                    frameborder="0" width="100%" height="100%"
                    allowfullscreen allow="autoplay"
                    src="https://www.youtube.com/embed/sCLj6gsH4yM">
                </iframe>
            </div>
            <div className="videos-more-wrapper">
                <div className="video-more-wrapper">
                    <iframe title="recent event" className="iframe"
                        frameborder="0" 
                        allowfullscreen allow="autoplay"
                        src="https://www.youtube.com/embed/sCLj6gsH4yM">
                    </iframe>
                </div>
                <div className="video-more-wrapper">
                    <iframe title="recent event" className="iframe"
                        frameborder="0" 
                        allowfullscreen allow="autoplay"
                        src="https://www.youtube.com/embed/sCLj6gsH4yM">
                    </iframe>
                </div>
                <div className="video-more-wrapper">
                    <iframe title="recent event" className="iframe"
                        frameborder="0" 
                        allowfullscreen allow="autoplay"
                        src="https://www.youtube.com/embed/sCLj6gsH4yM">
                    </iframe>
                </div>
                {/* <iframe title="recent event" className="video-more" width="392" height="220" src="https://www.youtube.com/embed/ys7_EiKYuw8">
                </iframe>
                <iframe title="recent event" className="video-more" width="392" height="220" src="https://www.youtube.com/embed/GFRxX5cavME">
                </iframe>
                <iframe title="recent event" className="video-more" width="392" height="220" src="https://www.youtube.com/embed/24f0J7j8ZTU">
                </iframe> */}
            </div>
            <a href="https://www.youtube.com/channel/UCTWGlywfZmfcvFk8RMckBUQ" target="_blank" rel="noopener noreferrer" className="subscribe shadow-5-ns grow">
                <div className="youtube-icon-wrapper">
                    <img className="youtube-icon" src={youtube} alt="" />
                </div>
                <div>
                    See more content on <b>YouTube</b>
                </div>
            </a>
        </div>
    );
};

export default BannerVideo;