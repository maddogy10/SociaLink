import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import ProfileCard from '../components/ProfileCard'
import Footer from '../components/Footer'
const Discover = () => {
  const [profiles, setProfiles] = useState([]);
  
  useEffect(() => {
  const fetchProfiles = async() => {
    try {
      const res = await fetch('http://localhost:3002/api/users');
      const data = await res.json();
      setProfiles(data);
    } catch (e) {
      console.error("error getting products", e);
    }
  }
  fetchProfiles();
}, [profiles]);
  return (
    <>
      <div id="profilePage">
        <div id="profileTitle">
       <h2>Discover</h2>
      </div>
        <div id="profileSearch">
         <button id="searchBar"><img src="https://i.imgur.com/VeQLxPw.png" alt="search icon"/><input type="text" placeholder="Search"/></button>
        </div>
      <div id="profileTiles">
      {profiles.map((profile) => (
      <div className="profBlock" key={profile.id}>
       
        <ProfileCard name={profile.first_name + " " + profile.last_name} age={profile.grad_year} major={profile.major} image={profile.img_url} id={profile.id}/>
        </div>
       ))};
       </div>
    {/*} <ProfileCard name={"Maddy"} age={18} major={"Computer Science"} image={"https://media.licdn.com/dms/image/v2/D4E03AQFtxorU5afzzg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730741279966?e=1762992000&v=beta&t=SQVGzTxsL5_kNXnUCDKt1ZPdnJubP9rOrqvIvl091yI"}/>
     <ProfileCard name={"Maddy"} age={18} major={"Computer Science"} image={"https://media.licdn.com/dms/image/v2/D4E03AQFtxorU5afzzg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730741279966?e=1762992000&v=beta&t=SQVGzTxsL5_kNXnUCDKt1ZPdnJubP9rOrqvIvl091yI"}/>
      <ProfileCard name={"Maddy"} age={18} major={"Computer Science"} image={"https://media.licdn.com/dms/image/v2/D4E03AQFtxorU5afzzg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730741279966?e=1762992000&v=beta&t=SQVGzTxsL5_kNXnUCDKt1ZPdnJubP9rOrqvIvl091yI"}/>
      <ProfileCard name={"Maddy"} age={18} major={"Computer Science"} image={"https://media.licdn.com/dms/image/v2/D4E03AQFtxorU5afzzg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730741279966?e=1762992000&v=beta&t=SQVGzTxsL5_kNXnUCDKt1ZPdnJubP9rOrqvIvl091yI"}/>
      <ProfileCard name={"Maddy"} age={18} major={"Computer Science"} image={"https://media.licdn.com/dms/image/v2/D4E03AQFtxorU5afzzg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730741279966?e=1762992000&v=beta&t=SQVGzTxsL5_kNXnUCDKt1ZPdnJubP9rOrqvIvl091yI"}/>
      <ProfileCard name={"Maddy"} age={18} major={"Computer Science"} image={"https://media.licdn.com/dms/image/v2/D4E03AQFtxorU5afzzg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730741279966?e=1762992000&v=beta&t=SQVGzTxsL5_kNXnUCDKt1ZPdnJubP9rOrqvIvl091yI"}/>*/}
      </div>
      <Footer/>
      </>
  )
}

export default Discover