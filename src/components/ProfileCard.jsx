import React from 'react'

const ProfileCard = ({name, age, major, image}) => {
   // const givenMajor = {major};
    const schoolMajor = major.toUpperCase();
    return (
    <div className="profBlock">
      <div className="profImg">
        <img src={image} alt="profile icon"/>
      </div>
      <div className="profName">
        <h5>{name}</h5>
      </div>
      <div className="profInfo">
        <h6>{age} | {schoolMajor}</h6>
      </div>
    </div>
  )
}

export default ProfileCard