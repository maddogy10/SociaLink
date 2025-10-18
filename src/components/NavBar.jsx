import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  /*  function displayHome() {
  var profile = document.getElementById('profilePage');
  profile.style.display = 'none';
 var home = document.getElementById('mainBody');
 home.style.display = 'flex';
}
function displayProfiles() {
  var profile = document.getElementById('profilePage');
  profile.style.display = 'flex';
 var home = document.getElementById('mainBody');
 home.style.display = 'none';
}*/
  return (
        <nav className="navbar">
        <div className="navDiv">
        <div className="navLogoDiv">
        <img src="https://i.imgur.com/8pGQOQn.png" className="navImg" />
        <h2 className="navTitle" >SociaLink</h2>
        </div>
        <div className="navLinks">
        <div className="home" /*onClick={displayHome}*/>
           <NavLink to="/" style={{color: "#03045E"}}> <h2>Home</h2></NavLink>
        </div>
        <div className="discover" /*onClick={displayProfiles}*/>
            <NavLink to="/discover" style={{color: "#03045E"}}><h2>Discover</h2></NavLink>
        </div>
        <div className="about">
            <NavLink to="/about" style={{color: "#03045E"}}><h2>About</h2></NavLink>
        </div>
        <div className="profile">
            <NavLink to="/profile" style={{color: "#03045E"}}><h2>Profile</h2></NavLink>
        </div>
        </div>
    </div>
    </nav>
  )
}

export default NavBar