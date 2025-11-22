import React from 'react'
//import { UserContext } from './UserContext'

const Home = () => {
  
  return (
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
        <button id="getStarted">Get Started <img src="https://cdn-icons-png.flaticon.com/128/271/271226.png" alt="button that says Get Started and links to profile creation"/></button>
        <button id="contactMe">Contact Me</button>
      </div>
    </div>
    </div>

  )
}

export default Home