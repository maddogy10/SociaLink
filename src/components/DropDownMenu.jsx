import React, { useContext } from 'react'
import "../App.css"
import { AuthContext } from '../files/AuthContext';
import { useNavigate } from 'react-router-dom';

const DropDownMenu = () => {
    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        // Implement logout functionality here
       logout();
        navigate('/');
    }
    const handleviewSavedProfiles = () => {
        navigate('/savedprofiles');
    }
    
  return (
    <div id="dropdown-menu">
        <ul>
            <li onClick={handleviewSavedProfiles}>Saved Profiles</li>
            <li onClick={handleLogout}>Logout</li>
        </ul>
    </div>
  )
}

export default DropDownMenu