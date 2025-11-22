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
  return (
    <div id="dropdown-menu">
        <ul>
            <li onClick={handleLogout}>logout</li>
        </ul>
    </div>
  )
}

export default DropDownMenu