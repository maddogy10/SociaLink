//import React, {useEffect, useState } from 'react'
//import { useParams } from "react-router-dom";
const ProfileCard = ({name, age, major, image}) => {
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
    <div/*id={id}*/>
      
      <div className="profImg">
        <img src={image} alt="profile icon"/>
      </div>
      <div className="profName">
        <h5>{name}</h5>
      </div>
      <div className="profInfo">
        <h6>{age} | {major}</h6>
      </div>
    </div>
  )
}

export default ProfileCard