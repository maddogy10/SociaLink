//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../App.css'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import ProfileCard from '../components/ProfileCard'
import Discover from './Discover'
import About from './About'
import Profile from './Profile'
import Home from './Home'
import CreateProfile from './CreateProfile'
import SignUp from './SignUp'
import Login from './Login'
import AuthProvider from './AuthProvider'
import ViewProfile from './ViewProfile'
import SavedProfilesPage from './SavedProfilesPage'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/discover" element={<Discover/>} >
            <Route path="/discover/:id" element={<ProfileCard/>}/>
          </Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/profile" element={<Profile/>}>
          </Route>
          <Route path="/createprofile" element={<CreateProfile/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/profile/:id" element={<ViewProfile/>}/>
          <Route path="/savedprofiles" element={<SavedProfilesPage/>}/>
        </Routes>
        <Footer/>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
