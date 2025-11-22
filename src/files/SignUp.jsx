import React from 'react'
import { useState } from 'react'
//import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'

const SignUp = () => {
    const { user, signUp } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
   // const navigate = useNavigate();
    // TODO
    // create userContext via useContext to manage user state globally
    // 
    const handleSignUp = async() => {
        // signUp(first_name, last_name, email, password);
       signUp({email, password, first_name, last_name});
        console.log(user)
    }
  
  return (
    <div id="SignUpPage">
        <h2>Sign Up</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder="First Name" value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
        <input type="text" placeholder="Last Name" value={last_name} onChange={(e) => setLastName(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" id="signUpButton" onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}

export default SignUp