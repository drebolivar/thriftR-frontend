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
import CreatePost from './components/CreatePost'
import { BASE_URL } from './services/api'
import axios from 'axios'
import { CheckSession } from './services/Auth'
import { useNavigate } from 'react-router-dom'

function App() {
  let navigate = useNavigate()

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [signedIn, setSignIn] = useState(false)
  const [allPosts, setAllPosts] = useState(null)
  const [allUserPosts, setAllUserPosts] = useState([])

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

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  const getUserPosts = async () => {
    const res = await axios.get(`${BASE_URL}/feed/profile/1`)
    setAllUserPosts(res.data)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
      getUser()
      getAllPosts()
      getUserPosts()
    }
  }, [])

  return (
    <div className="App">
      <Nav signedIn={signedIn} />
      <img src={logo} alt="logo" />
      <Routes>
        <Route path="/" element={<Feed posts={allPosts} />} />
        <Route
          path="/signin"
          element={
            <SignIn
              setUser={setUser}
              toggleAuthenticated={toggleAuthenticated}
              setSignIn={setSignIn}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/newpost" element={<CreatePost />} />
        <Route
          path="/feed"
          element={
            <Feed user={user} posts={allPosts} authenticated={authenticated} />
          }
        />
        <Route path="/profile/:id" element={<Profile posts={allUserPosts} />} />
      </Routes>
    </div>
  )
}

export default App
