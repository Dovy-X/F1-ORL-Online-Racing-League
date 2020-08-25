import React from 'react';
import './Profile.css';
import profile from './profile_white.png';

const Profile = () => {
    return (
        <div className="center-img">
            <img className='profile-img' src={profile} alt='profile logo'/>
        </div>
    );
};

export default Profile;