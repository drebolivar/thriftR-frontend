import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from './assets/thriftrlogo.png'
import Nav from './components/Nav.jsx'
import Feed from './pages/Feed'
import Profile from './pages/Profile'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Client from './services/api'
import { BASE_URL } from './services/api'
import axios from 'axios'

function App() {
  const [signedIn, setSignIn] = useState(true)
  const [allPosts, setAllPosts] = useState(null)
  const [user, setUser] = useState({
    username: '',
    profilePicture: '',
    password: '',
    email: ''
  })

  const getUser = async () => {
    const res = await axios.get(`${BASE_URL}/users/1`)
    console.log(res.data)
    setUser(res.data)
  }

  const getAllPosts = async () => {
    const res = await axios.get(`${BASE_URL}/feed/`)
    console.log(res.data)
    setAllPosts(res.data)
  }

  useEffect(() => {
    getUser()
    getAllPosts()
  }, [])

  return (
    <div className="App">
      <Nav signedIn={signedIn} />
      <img src={logo} alt="logo" />
      <Routes>
        <Route path="/" element={<Feed posts={allPosts} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<Profile user={user} />} />
      </Routes>
    </div>
  )
}

export default App
