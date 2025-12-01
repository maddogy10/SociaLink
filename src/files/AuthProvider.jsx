import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { useNavigate } from 'react-router-dom';


const AuthProvider = ({ children }) => {
  // tracks user login status and info
  const [user, setUser] = useState(null)
  // profile state to hold user profile info
  const [profile, setProfile] = useState({
      first_name: '',
      last_name: '',
      email: '',
      major: '',
      grad_year: '',
      img_url: '',
      date_of_birth: '',
      bio: '',
      instagram: '',
      snapchat: '',
    });
    // isLoggedIn state
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  // navigation
  const navigate = useNavigate();
  // token state
  const [token, setToken] = useState("");
  // avatar url state
  const [avatarUrl, setAvatarUrl] = useState("");
  // media state
  const [media, setMedia] = useState([]);
  // saved profiles state
  const [savedProfiles, setSavedProfiles] = useState([]);
  // saved state
  const [saved, setSaved] = useState(false);
  // saved profile pages state
  const [savedProfilePages, setSavedProfilePages] = useState([]);
  // loading state
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // On component load, check for existing session
    const checkSession = async () => {
      try {
        const res = await fetch('https://users-api-m07a.onrender.com/users/me', {
          method: 'GET',
          credentials: 'include', // include cookies for session
        });
        if (!res.ok) {
          throw new Error('No active session');
        }
        // If session exists, set user and isLoggedIn
        const userData = await res.json();
        setUser(userData);
        setIsLoggedIn(true);
        console.log('Session restored, user:', userData);
      } catch (err) {
        // If no session, ensure user is null and isLoggedIn is false
        setUser(null);
        setIsLoggedIn(false);
        console.log('No active session, error:', err.message);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);
  // function to get user profile
  const getUserProfile = async() => {
      try {
        const response = await fetch(`https://users-api-m07a.onrender.com/users/${user.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include' // include cookies for session
        });
        // sets profile state with user information
        const data = await response.json();
        console.log("Fetched user profile data:", data);
        setProfile(data);
        return data;
      } catch (e) {
        console.error("error fetching user profile", e);
      }
    }
    // login function
  const login = async ({email, password}) => {
     const response = await fetch('https://users-api-m07a.onrender.com/login', {
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
            setUser(null);
            setIsLoggedIn(false);
            return null;
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
  // sign up function
  const signUp = async ({email, password, first_name, last_name}) => {
    // fetch /signup to backend 
    // should return user info
    // setUser(userData), userData from response
     const response = await fetch('https://users-api-m07a.onrender.com/signup', {
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
            alert("Sign up failed: " + data.error + ". Try again");
        } else {
            console.error("Sign up successful! Please log in.");
        }
    setIsLoggedIn(false);
    // after sign up, redirect to login page
    navigate("/login");
  }
  // logout function
  const logout = async() => {
    await fetch('https://users-api-m07a.onrender.com/logout', {
      method: 'POST',
      credentials: 'include', // include cookies for session
    });
    
    setUser(null)
    setToken(null)
    setIsLoggedIn(false)
  }

  // update user profile function 
  const updateUser = async (updatedProfile) => {
    if (!user || !user.id) {
      console.error('User id not available for update');
      return;
    }
    const res = await fetch(`https://users-api-m07a.onrender.com/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }, 
        credentials: 'include',
        body: JSON.stringify(updatedProfile),
      });
      // After updating, fetch the updated user data
       const profData = await res.json();
       console.log("Updated user profile data:", profData);
    navigate("/profile");
  }
  // function to get user avatar
  const getUserAvatar = async () => {
    const res = await fetch(`https://users-api-m07a.onrender.com/users/${user.id}/avatar`, {
      method: 'GET',
      credentials: 'include',
    });
    // sets media state with user avatar information
    if (res.ok) {
      const data = await res.json();
      console.log("Fetched user avatar data:", data);
      setMedia(data);
    } else {
      console.error('Failed to fetch avatar');
    }
  }
  // function to save a post
  const savePost = async (postId) => {
    // Function to save a post for the user
    const res = await fetch(`https://users-api-m07a.onrender.com/user/updatesavedposts/${user.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ postId }),
      
    });
    // add the saved post to savedProfiles state
    if (res.ok) {
      const data = await res.json();
      setSavedProfiles(data);
    } else {
      console.error('Failed to save post');
    } 
  }
  // function to remove a saved post
  const removeSavedPost = async (postId) => {
    const res = await fetch(`https://users-api-m07a.onrender.com/user/removesavedposts/${user.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ postId }),
      
    });
    // remove the saved post from savedProfiles state
    if (res.ok) {
      const data = await res.json();
      setSavedProfiles(data);
    } else {
      console.error('Failed to remove saved post');
    } 
  }
  // function to get user's saved profiles
  const getUsersSavedProfiles = async() => {
    const res = await fetch(`https://users-api-m07a.onrender.com/user/savedprofiles/${user.id}`, {
      method: 'GET',
      credentials: 'include',
    });
    // sets savedProfiles state with user's saved profiles (array of profile ids)
    if (res.ok) {
      const data = await res.json();
      setSavedProfiles(data);
      console.log("Fetched user's saved profiles:", data);
    } else {
      console.error('Failed to fetch saved profiles');
    }
  }
  // return the provider with all states and functions
  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, signUp, updateUser, profile, setProfile, getUserProfile, token, setToken, avatarUrl, setAvatarUrl, getUserAvatar, media, setMedia, savedProfiles, setSavedProfiles, savePost, removeSavedPost, saved, setSaved, getUsersSavedProfiles, savedProfilePages, setSavedProfilePages }}>
      {loading ? <div>loading...</div> : children}
    </AuthContext.Provider>
  )
}

export default AuthProvider