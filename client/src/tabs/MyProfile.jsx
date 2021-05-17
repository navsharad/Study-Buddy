import React from 'react';
import './myProfileStyles.css';

const MyProfile = ({userInfo}) => {
    return (
        <div className="profile-wrapper">
            <img src={userInfo.profilePic} alt="" />
            <button className="edit-profile-btn">Edit Profile</button>
            <h2>{userInfo.name}</h2>
            <h4>KEN HO LETS GO</h4>
        </div>
    )
}

export default MyProfile;
