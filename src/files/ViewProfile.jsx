import React from 'react'

const ViewProfile = () => {
  return (
    <div id="EditProfilePage">
      <div id="EditProfileLeft">
      <img src="./IMG_1631.jpg" alt="user's profile picture" id="profilePic" />
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

export default ViewProfile