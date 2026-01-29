import React from 'react';
import ContactInfo from './ContactInfo';

function ProfileCard() {
  return (
    <div className="profile-card">
      <img src="/images/yourphoto.png" alt="Profile" className="profile-photo" />
      <h1>Your Name</h1>
      <ContactInfo />
    </div>
  );
}

export default ProfileCard;
