import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const { login, user, isLoggedIn } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    // handles login function
    const handleLogIn = async() => {
       const loggedUser = await login({ email, password });
       // if in database, log in, else alert user
       if (loggedUser) {
         console.log('loggedUser:', loggedUser);
       } else {
         console.log('login failed');
         alert('Incorrect user or password. Try again');
       }
    }
    // show updated user
    useEffect(() => {
      if (user) {
        console.log("user changed:", user);
        navigate("/");
      }
    }, [user]);
    if (isLoggedIn) {
      return <Navigate to="/" />;
    }
  return (
    <>
     <div className="loginImageDiv">
      <div className="loginImageTextDiv">
        <h2>Log In</h2>
        </div>
      </div>
      <div id="loginPage">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" id="signUpButton" onClick={handleLogIn}>Log In</button>
        <button id="redirectSignUp" onClick={() => navigate('/signup')}>Don't have an account? Sign Up</button>
    </div>
    </>
  )
}

export default Login