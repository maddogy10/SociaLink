import React, {useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import ProfileCard from '../components/ProfileCard'
import Footer from '../components/Footer'
import { AuthContext } from './AuthContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const Discover = () => {
  const [profiles, setProfiles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  //const {media, user, getUserAvatar} = useContext(AuthContext);
  const {isLoggedIn} = useContext(AuthContext);
  useEffect(() => {
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
  const filteredItems = profiles.filter((profile) =>
    profile.first_name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProfiles(filteredItems);
  // for each profile, get the image url
  // connect the image url to the users table
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
         <button id="searchBar"><img src="https://i.imgur.com/VeQLxPw.png" alt="search icon"/><input type="text" placeholder="Search by name" value={searchTerm} onChange={handleInputChange} id='searchProfBar'/></button>
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
    {/*} <ProfileCard name={"Maddy"} age={18} major={"Computer Science"} image={"https://media.licdn.com/dms/image/v2/D4E03AQFtxorU5afzzg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730741279966?e=1762992000&v=beta&t=SQVGzTxsL5_kNXnUCDKt1ZPdnJubP9rOrqvIvl091yI"}/>
     <ProfileCard name={"Maddy"} age={18} major={"Computer Science"} image={"https://media.licdn.com/dms/image/v2/D4E03AQFtxorU5afzzg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730741279966?e=1762992000&v=beta&t=SQVGzTxsL5_kNXnUCDKt1ZPdnJubP9rOrqvIvl091yI"}/>
      <ProfileCard name={"Maddy"} age={18} major={"Computer Science"} image={"https://media.licdn.com/dms/image/v2/D4E03AQFtxorU5afzzg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730741279966?e=1762992000&v=beta&t=SQVGzTxsL5_kNXnUCDKt1ZPdnJubP9rOrqvIvl091yI"}/>
      <ProfileCard name={"Maddy"} age={18} major={"Computer Science"} image={"https://media.licdn.com/dms/image/v2/D4E03AQFtxorU5afzzg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730741279966?e=1762992000&v=beta&t=SQVGzTxsL5_kNXnUCDKt1ZPdnJubP9rOrqvIvl091yI"}/>
      <ProfileCard name={"Maddy"} age={18} major={"Computer Science"} image={"https://media.licdn.com/dms/image/v2/D4E03AQFtxorU5afzzg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730741279966?e=1762992000&v=beta&t=SQVGzTxsL5_kNXnUCDKt1ZPdnJubP9rOrqvIvl091yI"}/>
      <ProfileCard name={"Maddy"} age={18} major={"Computer Science"} image={"https://media.licdn.com/dms/image/v2/D4E03AQFtxorU5afzzg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730741279966?e=1762992000&v=beta&t=SQVGzTxsL5_kNXnUCDKt1ZPdnJubP9rOrqvIvl091yI"}/>*/}
      </div>
      </>
  )
}

export default Discover