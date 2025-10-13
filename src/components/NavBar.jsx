import React from 'react'

const NavBar = () => {
    function displayHome() {
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
}
  return (
        <nav className="navbar">
        <div className="navDiv">
        <div className="navLogoDiv">
        <img src="https://i.imgur.com/8pGQOQn.png" className="navImg" />
        <h2 className="navTitle">SociaLink</h2>
        </div>
        <div className="navLinks">
        <div className="home" onClick={displayHome}>
            <h2>Home</h2>
        </div>
        <div className="discover" onClick={displayProfiles}>
            <h2>Discover</h2>
        </div>
        <div className="about">
            <h2>About</h2>
        </div>
        <div className="profile">
            <h2>Profile</h2>
        </div>
        </div>
    </div>
    </nav>
  )
}

export default NavBar