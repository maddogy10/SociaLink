import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'


const Login = () => {
    const { login, user } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleLogIn = async() => {
       const loggedUser = await login({ email, password });
       if (loggedUser) {
         console.log('loggedUser:', loggedUser);
       } else {
         console.log('login failed');
       }
    }
    useEffect(() => {
      if (user) {
        console.log("user changed:", user);
        navigate("/");
      }
    }, [user]);
  return (
    <div id="loginPage">
        <h1> Hello</h1>
        <h2>Log In</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" id="signUpButton" onClick={handleLogIn}>Log In</button>
    </div>
  )
}

export default Login