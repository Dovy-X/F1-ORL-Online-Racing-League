import React from 'react';
import '../styles/Profile.css';
import profile from '../images/profile_white.png';

const Profile = () => {
    return (
        <div className="center-img">
            <img className='profile-img' src={profile} alt='profile logo'/>
        </div>
    );
};

export default Profile;