import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'
import ImageUpload from '../components/ImageUpload'
import { Navigate } from 'react-router-dom'
const CreateProfile = () => {
  const {user, updateUser, profile, setProfile, getUserProfile, isLoggedIn} = useContext(AuthContext);
  console.log("CreateProfile user from context:", user);
  console.log("Current profile state:", profile);
    const handleSubmit = async() => {
      const updatedProfile = {
        first_name: document.getElementById("firstNameInput").value,
        last_name: document.getElementById("lastNameInput").value,
        email: document.getElementById("emailInput").value,
        major: document.getElementById("majorInput").value,
        grad_year: parseInt(document.getElementById("gradYearInput").value) || null,
        img_url: profile.img_url || null,
        date_of_birth: document.getElementById("dobInput").value || null,
        bio: document.getElementById("bioInput").value,
        instagram: document.getElementById("instagramInput").value,
        snapchat: document.getElementById("snapchatInput").value,
      };
      setProfile(updatedProfile);
      console.log("Profile to be submitted:", updatedProfile);
      try {

    // update context using backend data ONLY
    updateUser(updatedProfile);

    console.log("Updated user from backend:", updatedProfile);
  } catch (err) {
    console.error("Error updating profile:", err);
  }
     //console.log("Profile to be submitted:", profile);
    // submit profile data to backend
    //await updateUser(profile);
    //const userProfData = await getUserProfile();
    //console.log("Profile submitted:", userProfData);
    //return userProfData;
    }
    
    useEffect(() => {
    //console.log("Fetching user profile for user:", Object.keys(user));
    if (!user || !user.id) {
      console.log("User or user.id not available yet");
      return;
    }
    getUserProfile();
  }, [user]);
  if (!isLoggedIn) {
  return <Navigate to="/login" />;
}
  return (
    <div id="createProfilePage">
      <h2>Create Your Profile</h2>
      <ImageUpload />
      <p>First Name:</p>
      <input type="text" placeholder="First Name" id="firstNameInput"defaultValue={profile.first_name} required/>
      <p>Last Name:</p>
      <input type="text" placeholder="Last Name" id="lastNameInput"defaultValue={profile.last_name} required/>
      <p>Email:</p>
      <input type="email" placeholder="email" id="emailInput" defaultValue={profile.email} required/>
      <p>Major</p>
      <input type="text" placeholder="major" id="majorInput"defaultValue={profile.major} required/>
      <p>Graduation Year</p>
      <input type="text" placeholder="Graduation year" id="gradYearInput" defaultValue={profile.grad_year} required/>
      <p>Date of Birth</p>
      <input type="date" placeholder="Date of Birth" id="dobInput" defaultValue={profile.date_of_birth} required/>
      <p>Instagram</p>
      <span>@<input style={{width: "91%"}} type="text" placeholder="Instagram" id="instagramInput"defaultValue={profile.instagram} required/></span>
      <p>Snapchat</p>
      <span>@<input style={{width: "91%"}} type="text" placeholder="Snapchat" id="snapchatInput"defaultValue={profile.snapchat} required/></span>


      <textarea placeholder="Bio" id="bioInput" defaultValue={profile.bio}></textarea>
      <button type="submit" id="submitProfile" onClick={handleSubmit}>Submit Profile</button>
    </div>
  )
}

export default CreateProfile