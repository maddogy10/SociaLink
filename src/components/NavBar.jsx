import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../files/AuthContext';
import { useState } from 'react';
import DropDownMenu from './DropDownMenu';
import "../App.css"
const NavBar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  // show dropdown menu on hover
      const handleMouseEnter = () => {
          setIsDropDownVisible(true);
      };
      const handleMouseLeave = () => {
          setIsDropDownVisible(false);
      };
  useEffect(() => {
    // This effect could be used to perform actions based on login status changes
    console.log("Login status changed: ", isLoggedIn);
  }, [isLoggedIn]);
  return (
        <nav className="navbar">
        <div className="navDiv">
        <div className="navLogoDiv">
        <img src="https://i.imgur.com/8pGQOQn.png" className="navImg" />
        <h2 className="navTitle" >SociaLink</h2>
        </div>
        <div className="navLinks">
        <div className="home">
           <NavLink to="/" style={{color: "#03045E"}}> <h2>Home</h2></NavLink>
        </div>
        <div className="discover">
            <NavLink to="/discover" style={{color: "#03045E"}}><h2>Discover</h2></NavLink>
        </div>
        <div className="about">
            <NavLink to="/about" style={{color: "#03045E"}}><h2>About</h2></NavLink>
        </div>
        <div className="profile">
            {isLoggedIn ? 
            <h2 id="dropdownbox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <NavLink to={isLoggedIn ? "/profile" : "/login"} style={{color: "#03045E"}}>
            <div>Profile</div>
            </NavLink>
            <div id="DropDownBlock" >
                {isDropDownVisible && <DropDownMenu/>}
            </div>
            </h2>
            : 
            <NavLink to="/login" style={{color: "#03045E"}}><h2>Log In</h2></NavLink>}
        </div>
        </div>
    </div>
    </nav>
  )
}

export default NavBar