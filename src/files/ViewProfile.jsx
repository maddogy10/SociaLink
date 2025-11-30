import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate } from 'react-router-dom'

const ViewProfile = () => {
  const [otherProfile, setOtherProfile] = useState(null);
  const {id} = useParams();
  const { isLoggedIn } = useContext(AuthContext);
  useEffect(() => {
    const fetchOtherUser = async() => {
      const res = await fetch(`https://users-api-m07a.onrender.com/user/getotheruser/${id}`, {
        method: 'GET',
        credentials: 'include',
      });
      const data = await res.json();
      setOtherProfile(data);
    }
  fetchOtherUser();
  });
  if (!isLoggedIn) {
  return <Navigate to="/login"/>;
  }
  if (!otherProfile) {
    return <h2>Loading profile...</h2>;
  }
  return (
    <div id="ViewProfilePage">
      <div id="ViewProfileLeft">
      <img src={otherProfile.img_url || null } alt="user's profile picture" id="profilePic" />
      <h2 id="userFirstAndLast">{otherProfile.first_name} {otherProfile.last_name}</h2>
      <h3 id="userMajor">{otherProfile.major}</h3>
      <h3 id="gradYear">{otherProfile.grad_year}</h3>
      <h3 id="instagram">Instagram: @{otherProfile.instagram}</h3>
      <h3 id="snapchat">Snapchat: @{otherProfile.snapchat}</h3>
      </div>
      <div id="ViewProfileRight">
      {/* change it so if it's their birthday, they can get a pop up to celebrate */}
      <h3 id="birthday">{otherProfile.date_of_birth}</h3>
      <p id="biography">{otherProfile.bio}</p>
      </div>
    </div>
  )
}

export default ViewProfile