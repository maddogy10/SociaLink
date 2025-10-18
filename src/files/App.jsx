//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import '../App.css'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import ProfileCard from '../components/ProfileCard'
import Discover from './Discover'
import About from './About'
import Profile from './Profile'
import Home from './Home'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/discover" element={<Discover/>} />
      <Route path="/about" element={<About/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
