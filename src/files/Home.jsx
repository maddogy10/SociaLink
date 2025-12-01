import React, { useContext } from 'react'
//import { UserContext } from './UserContext'
import {useNavigate} from 'react-router-dom'  
import { AuthContext } from './AuthContext'
const Home = () => {
  const navigate = useNavigate();
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <>
    <div id="mainBody">
    <div id="frontImgDiv">
      <img src="https://t4.ftcdn.net/jpg/09/02/53/81/360_F_902538150_JCEcejSQkRHHR7d5jE1nbmfhXHdcd9E3.jpg" alt="image representing connect with lines between people and a city in the background." id="frontImage"/>
    </div>
    <div id="frontText">
      <div id="frontTitle">
        <h1>
          A passionate developer who will bring your relationships to life
        </h1>
      </div>
      <div id="frontSub">
        <p>Struggling to find the people for you? Click below to connect with people with similar interests, backgrounds, and characteristics!</p>
      </div>
      <div id="frontButtons">
        <button id="getStarted" onClick={() => {isLoggedIn? navigate('/discover') : navigate('/signup'); console.log("To sign up")}}>Get Started <img src="https://cdn-icons-png.flaticon.com/128/271/271226.png" alt="button that says Get Started and links to profile creation"/></button>
        <button id="contactMe" onClick={() => {window.location.href = 'mailto:madeleineyoung2029@u.northwestern.edu'; console.log("hello");}}>Contact Me</button>
      </div>
    </div>
    </div>
    <div id="FeaturesSection">
      <h1>Features</h1>
      <div id="featureCards">
        <div className="featureCard">
          <h2>Discover Students</h2>
          <p>Browse verified profiles with shared majors, interests, or activities.</p>
        </div>
        <div className="featureCard">
          <h2>Save Profiles</h2>
          <p>Keep track of the people you want to connect with.</p>
        </div>
        <div className="featureCard">
          <h2>Reach Out</h2>
          <p>Reach out to people on social media that you're interested in.</p>
        </div>
      </div>
    </div>
    </>

  )
}

export default Home