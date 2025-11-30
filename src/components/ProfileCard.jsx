import {useContext, useEffect, useState } from "react";
import { AuthContext } from '../files/AuthContext';
import { useNavigate } from "react-router-dom";
//import { useParams } from "react-router-dom";
const ProfileCard = ({name, age, major, image, id}) => {
 
  
  const {savePost, removeSavedPost, getUsersSavedProfiles, savedProfiles } = useContext(AuthContext);

  const navigate = useNavigate();
  useEffect(() => {
    getUsersSavedProfiles();

  }, []);
  // remove duplicates (reset), and create saveProfile
  const isSavedValue = savedProfiles?.saved_profiles?.includes(id); 
  const [isSaved, setIsSaved] =  useState(isSavedValue);

  useEffect(() => {
    setIsSaved(savedProfiles?.saved_profiles?.includes(id));
  }, [savedProfiles, id]);
  const handleSaveProfile = async () => {
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
    getUsersSavedProfiles();

  };
   // const givenMajor = {major};
   //#0077B6
  /*const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async() => {
      setLoading(true);
      try {
        const res = await fetch(`https://disc-assignment-5-users-api-iyct.onrender.com/api/users/${id}`);
        const data = await res.json();
        setProfile(data);
      } catch (e) {
        console.error("error getting products", e);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, [id])

  if (loading) return <h1>We are loading!!!</h1>
  if (!profile) return <h1>No product found with {id}</h1>*/
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