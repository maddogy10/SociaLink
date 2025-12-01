import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate } from 'react-router-dom' 
const Profile = () => {
  const navigate = useNavigate();
  const {user, profile, getUserProfile, getUserAvatar, media, isLoggedIn} = useContext(AuthContext);
  // if edit profile button clicked, navigate to create profile
  const handleEditProfile = () => {
    navigate('/createprofile');
  }
   useEffect(() => {
    // if user doesn't exist, return 
      if (!user || !user.id) {
        console.log("User or user.id not available yet");
        return;
      }
      console.log(user.id);
      // if user exists, get profile and image
       getUserProfile();
      getUserAvatar();
        console.log(media);
    }, [user]);
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    if (!user || !profile) {
      return <div>Loading profile...</div>;
    }
  return (
    <div id="EditProfilePage">
      <div id="EditProfileLeft">
      <img src={media && media.length > 0 ?`https://ypxjrbesbjcwphekeaky.supabase.co/storage/v1/object/public/useravatars/${user.id}/avatars/${media[0].name}`: 'https://ypxjrbesbjcwphekeaky.supabase.co/storage/v1/object/public/useravatars/avatars/user.png'} alt="user's profile picture" id="profilePic" />
      <h2 id="userFirstAndLast">{profile.first_name} {profile.last_name}</h2>
      <h3 id="userMajor">{profile.major}</h3>
      <h3 id="gradYear">{profile.grad_year}</h3>
      <h3 id="instagram">Instagram: @{profile.instagram}</h3>
      <h3 id="snapchat">Snapchat: @{profile.snapchat}</h3>
      </div>
      <div id="EditProfileRight">
      <h3 id="birthday">{profile.date_of_birth}</h3>
      <p id="biography">{profile.bio}</p>
      </div>
      <button id="editProfileButton" onClick={handleEditProfile}>Edit Profile</button>
    </div>
  )
}

export default Profile