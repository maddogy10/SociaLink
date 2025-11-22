import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'

const Profile = () => {
  const navigate = useNavigate();
  const {user, profile, getUserProfile} = useContext(AuthContext);
  const handleEditProfile = () => {
    navigate('/createprofile');
  }
   useEffect(() => {
      //console.log("Fetching user profile for user:", Object.keys(user));
      if (!user || !user.id) {
        console.log("User or user.id not available yet");
        return;
      }
      getUserProfile();
     // getUserAvatar();
      
    }, [user]);

  return (
    <div id="EditProfilePage">
      <div id="EditProfileLeft">
      <img src={profile.img_url || null} alt="user's profile picture" id="profilePic" />
      <h2 id="userFirstAndLast">{profile.first_name} {profile.last_name}</h2>
      <h3 id="userMajor">{profile.major}</h3>
      <h3 id="gradYear">{profile.grad_year}</h3>
      </div>
      <div id="EditProfileRight">
      {/* change it so if it's their birthday, they can get a pop up to celebrate */}
      <h3 id="birthday">{profile.date_of_birth}</h3>
      <p id="biography">{profile.bio}</p>
      </div>
      <button id="editProfileButton" onClick={handleEditProfile}>Edit Profile</button>
    </div>
  )
}

export default Profile