import React, {useEffect, useState } from 'react'

const ProfileCard = ({name, age, major, image}) => {
   // const givenMajor = {major};
   //#0077B6
   const [color, setColor] = useState("#CAF0F8");
    const schoolMajor = major.toUpperCase();
    useEffect(() => {
      console.log("Color has changed");
    })
    return (
    <div className="profBlock" style={{ backgroundColor: color}} onMouseEnter={() => setColor("#0077B6")} onMouseLeave={() => setColor("#CAF0F8")}>
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