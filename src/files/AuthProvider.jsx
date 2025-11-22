import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
//import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
//import { useEffect } from 'react';


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState({
      first_name: '',
      last_name: '',
      email: '',
      major: '',
      grad_year: '',
      img_url: '',
      date_of_birth: '',
      bio: '',

    });
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch('http://localhost:5432/users/me', {
          method: 'GET',
          credentials: 'include', // include cookies for session
        });
        if (!res.ok) {
          throw new Error('No active session');
        }
        const userData = await res.json();
        setUser(userData);
        setIsLoggedIn(true);
        console.log('Session restored, user:', userData);
      } catch (err) {
        setUser(null);
        setIsLoggedIn(false);
        console.log('No active session, error:', err.message);
      }};
    checkSession();
  }, []);
  /*useEffect(() => {
   // const hashParams = new URLSearchParams(window.location.hash.substring(1));
   // const accessToken = hashParams.get("access_token");

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
        setIsLoggedIn(true);
        setToken(session.access_token);
      } else {
        setUser(null);
        setIsLoggedIn(false);
        setToken("");
      }
    });
    return () => {
      listener.unsubscribe();
    }
  }, [])*/
  const getUserProfile = async() => {
      try {
        const response = await fetch(`http://localhost:5432/users/${user.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log("Fetched user profile data:", data);
        setProfile(data);
        return data;
      } catch (e) {
        console.error("error fetching user profile", e);
      }
    }
  const login = async ({email, password}) => {
     const response = await fetch('http://localhost:5432/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({email, password}),
        credentials: 'include' // include cookies for session
        });
        const data = await response.json();
        if (data.error) {
            console.error("Login failed: " + data.error);
        } else {
            console.log("Login successful! Welcome back " + data.first_name + "!");
        }
        console.log("login data:", data.user);
    // fetch /login to backend 
    // should return user info
    // setUser(userData), userData from response
    setUser(data.user);
    console.log('AuthProvider setUser called, new user:', data.user);
    setIsLoggedIn(true)
    localStorage.setItem('user', JSON.stringify(data))
    return data.user;
  }

  const signUp = async ({email, password, first_name, last_name}) => {
    // fetch /signup to backend 
    // should return user info
    // setUser(userData), userData from response
     const response = await fetch('http://localhost:5432/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({email, password, first_name, last_name}),
         credentials: 'include' // include cookies for session
        });
        const data = await response.json();
        
        if (data.error) {
            console.error("Sign up failed: " + data.error);
        } else {
            console.error("Sign up successful! Please log in.");
        }
    setUser(data.user)
    console.log(user);
    setIsLoggedIn(true)
   // await getUserProfile();
   navigate("/login")
    return data.user;
  }

  const logout = async() => {
    await fetch('http://localhost:5432/logout', {
      method: 'POST',
      credentials: 'include', // include cookies for session
    });
    setUser(null)
    setToken(null)
    setIsLoggedIn(false)
  }

  // TODO: update(?) 
  const updateUser = async (updatedProfile) => {
    if (!user || !user.id) {
      console.error('User id not available for update');
      return;
    }
    const res = await fetch(`http://localhost:5432/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(updatedProfile),
      });
       const profData = await res.json();
       console.log("Updated user profile data:", profData);
    //setUser(profData.user);
   // localStorage.setItem('user', JSON.stringify(profData));
    navigate("/profile");
    //return profData.user;
  }
  // 

  /*const getUserAvatar = async() => {
    const res = await fetch(`http://localhost:5432/users/${user.id}/uploadavatar`, {
      credentials: 'include',
    });
    if (res.ok) {
    const data = await res.json();
    setAvatarUrl(data.img_url);
    return data.img_url;
    } else {
      console.error('Failed to fetch avatar');
    }
  }*/
  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, signUp, updateUser, profile, setProfile, getUserProfile, token, setToken, avatarUrl, setAvatarUrl }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider