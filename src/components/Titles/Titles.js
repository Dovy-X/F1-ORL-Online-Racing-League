import React from 'react';
import './Titles.css';
import f1 from './f1-logo.png';
import assetto from './assetto-corsa-logo.png';
import rally from './dirt-rally-logo.png';
import project from './project-cars-logo.png';

const Titles = () => {
    return (
        <div className="titles">
            <h1 className="titles-txt">
                WE RACE IN
            </h1>
            <div className="titles-wrapper">
                <div className="title-img-wrapper">
                    <img className="title-img" src={f1} alt=""/>
                </div>
                <div className="title-img-wrapper">
                    <img className="title-img" src={rally} alt=""/>
                </div>
                <div className="title-img-wrapper">
                    <img className="title-img" src={project} alt=""/>
                </div>
                <div className="title-img-wrapper">
                    <img className="title-img" src={assetto} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Titles;