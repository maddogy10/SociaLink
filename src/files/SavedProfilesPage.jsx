import React, { useEffect } from 'react'
import {useContext} from 'react'
import { AuthContext } from './AuthContext'

import ProfileCard from '../components/ProfileCard'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
const SavedProfilesPage = () => {
    const {savedProfiles, setSavedProfiles, user, savedProfilePages, setSavedProfilePages, isLoggedIn} = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    console.log(user);
    useEffect(() => {
      if (!user) return;
    const fetchSavedProfiles = async() => {
      try {
        setLoading(true);
        const res = await fetch(`https://users-api-m07a.onrender.com/user/savedprofiles/${user.id}`, {
            method: 'GET',
            credentials: 'include',
        });
        const data = await res.json();
        console.log("Fetched saved profiles IDs:", data);
        setSavedProfiles(data);
        const postIds = data?.saved_profiles || [];
        if (postIds.length === 0) return;
        const res2 = await fetch(`https://users-api-m07a.onrender.com/users/savedprofilespages`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ postIds }),
      });
      const data2 = await res2.json();
      console.log("Fetched saved profiles pages data:", data2);
      setSavedProfilePages(data2);
      console.log(savedProfilePages);
      
      }catch (e) {
        console.error("error getting products", e);
      } finally {
        setLoading(false);
      }
      
    }
    if (user && user.id) {
      fetchSavedProfiles();
    }
    console.log(savedProfiles);
    }, [user]);
    if (!isLoggedIn) {
      return <Navigate to="/login"/>;
    }

  return (
    <>
      <div id="profilePage">
        <div id="profileTitle">
       <h2>Discover</h2>
      </div>
      <div id="profileTiles">
        
      {loading ? (
        <p>Loading saved profiles...</p>
      ) :
      savedProfilePages && savedProfilePages.length > 0 ? (
      savedProfilePages.map((profile) => {
        return (
      <div className="profBlock" key={profile.user_id} >
       <div>
        <ProfileCard name={profile.first_name + " " + profile.last_name} age={profile.grad_year} major={profile.major} image={profile.img_url} id={profile.user_id}/>
       </div>
        </div>
        )})
      ) : (
        <p>No saved profiles yet.</p>
      )}
       </div>
       </div>
       </>
  )
}

export default SavedProfilesPage