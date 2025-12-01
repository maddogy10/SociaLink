import {useContext, useEffect, useState } from "react";
import { AuthContext } from '../files/AuthContext';
import { useNavigate } from "react-router-dom";
const ProfileCard = ({name, age, major, image, id}) => {
 
  
  const {savePost, removeSavedPost, getUsersSavedProfiles, savedProfiles } = useContext(AuthContext);

  const navigate = useNavigate();
  // on load, get saved profiles
  useEffect(() => {
    getUsersSavedProfiles();

  }, []);
  // remove duplicates (reset), and create saveProfile
  const isSavedValue = savedProfiles?.saved_profiles?.includes(id); 
  const [isSaved, setIsSaved] =  useState(isSavedValue);
  // update isSaved when savedProfiles or id changes
  useEffect(() => {
    // checks if savedProfiles and .saved_profiles exist and includes the id
    setIsSaved(savedProfiles?.saved_profiles?.includes(id));
  }, [savedProfiles, id]);
  const handleSaveProfile = async () => {
    // if already saved, remove it
    if (isSaved) {
      await removeSavedPost(id);
      console.log("Removed saved profile with id:", id);
      setIsSaved(false);
    } else {
 // prevent multiple saves
    console.log("Saving profile with id:", id);
    await savePost(id);
    setIsSaved(true);
    }
    // refresh saved profiles
    getUsersSavedProfiles();

  };
 
    return (
      <>
    <div onClick={() => navigate(`/profile/${id}`)}>
      
      <div className="profImg" >
        <img src={image? image : 'https://ypxjrbesbjcwphekeaky.supabase.co/storage/v1/object/public/useravatars/avatars/user.png'} alt="profile icon"/>
      </div>
      <div className="profName">
        <h5>{name}</h5>
      </div>
      <div className="profInfo">
        <h6>{age} | {major}</h6>
      </div>
      
    </div>
    <div>
              <button className="saveProfButton" onClick={handleSaveProfile}>{isSaved ? "Saved" : "Save Profile"}</button>

    </div>
    </>
  )
}

export default ProfileCard