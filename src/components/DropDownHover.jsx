import React from 'react'
import { useState } from 'react'
import "../App.css"
import DropDownMenu from './DropDownMenu'
const DropDownHover = () => {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const handleMouseEnter = () => {
        setIsDropDownVisible(true);
    };
    const handleMouseLeave = () => {
        setIsDropDownVisible(false);
    };
  return (
    <div id="DropDownBlock" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isDropDownVisible && <DropDownHover/>}
    </div>
  )
}

export default DropDownHover