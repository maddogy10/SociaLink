import React, {useEffect, useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import { AuthContext } from './AuthContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const Discover = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // set Search Term to current value of search bar
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }
  // tracks filtered profiles based on first name
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  const {isLoggedIn} = useContext(AuthContext);
  useEffect(() => {
    // fetches all user profiles
  const fetchProfiles = async() => {
    try {
      const res = await fetch('https://users-api-m07a.onrender.com/users');
      const data = await res.json();

      setProfiles(data);
    } catch (e) {
      console.error("error getting products", e);
    }
  }
  fetchProfiles();
  // filters the profiles by first name and only displays those that match
  const filteredItems = profiles.filter((profile) =>
    profile.first_name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProfiles(filteredItems);
}, [profiles]);
if (!isLoggedIn) {
  return <Navigate to="/login" />;
}
  return (
    <>
      <div id="profilePage">
        <div id="profileTitle">
       <h2>Discover</h2>
      </div>
        <div id="profileSearch">
         <button id="searchBar"><img src="https://i.imgur.com/VeQLxPw.png" alt="search icon"/><input type="text" placeholder="Search by first name" value={searchTerm} onChange={handleInputChange} id='searchProfBar'/></button>
        </div>
      <div id="profileTiles">
      {filteredProfiles.map((profile) => {
        return (
      <div className="profBlock" key={profile.user_id} >
       <div>
        <ProfileCard name={profile.first_name + " " + profile.last_name} age={profile.grad_year} major={profile.major} image={profile.img_url} id={profile.user_id}/>
       </div>
        

        </div>
        )})}
       </div>
      </div>
      </>
  )
}

export default Discover