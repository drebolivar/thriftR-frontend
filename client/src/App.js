import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from './assets/thriftrlogo.png'
import Nav from './components/Nav.jsx'
import Feed from './pages/Feed'
import Profile from './pages/Profile'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import CreatePost from './components/CreatePost'
import Client from './services/api'
import { BASE_URL } from './services/api'
import axios from 'axios'
import { CheckSession } from './services/Auth'
import { useNavigate } from 'react-router-dom'

function App() {
  let navigate = useNavigate()

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [allPosts, setAllPosts] = useState(null)
  const [allUserPosts, setAllUserPosts] = useState([])
  const [useEffectToggler, setUseEffectToggler] = useState(false)
  const [tokenString, setTokenString] = useState('')

  //gets full user data including prof pic from the user variable(which is just payload)
  const getUserData = async () => {
    const res = await Client.get(`${BASE_URL}/users/${user.id}`)
    setUserData(res.data)
  }

  //gets all posts regardless of user
  const getAllPosts = async () => {
    const res = await Client.get(`${BASE_URL}/feed/`)
    let posts = res.data
    posts.sort((a, b) => {
      return b.id - a.id
    })
    setAllPosts(posts)
  }
  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  //checks to see if there is a valid token in the local storage and if so sets user to the token
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  //gets all posts of the currently logged in user
  const getUserPosts = async () => {
    const result = await Client.get(`${BASE_URL}/feed/profile/${user.id}`)
    let posts = result.data
    posts.sort((a, b) => {
      return b.id - a.id
    })
    setAllUserPosts(posts)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    setTokenString(token)
    if (token) {
      checkToken()
      if (user) {
        getUserData()
        getAllPosts()
        getUserPosts()
      }
    }
  }, [useEffectToggler, authenticated])

  return (
    <div className="App">
      <Nav
        signedIn={authenticated}
        user={userData}
        handleLogOut={handleLogOut}
      />
      {/* <div className="logo">
        <img src={logo} alt="logo" />
      </div> */}
      <Routes>
        <Route
          path="/signin"
          element={
            <SignIn
              setUser={setUser}
              toggleAuthenticated={toggleAuthenticated}
              setUseEffectToggler={setUseEffectToggler}
              useEffectToggler={useEffectToggler}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/newpost"
          element={
            <CreatePost
              user={userData}
              token={tokenString}
              useEffectToggler={useEffectToggler}
              setUseEffectToggler={setUseEffectToggler}
            />
          }
        />
        <Route
          path="/feed"
          element={
            <Feed
              user={userData}
              posts={allPosts}
              authenticated={authenticated}
              useEffectToggler={useEffectToggler}
              setUseEffectToggler={setUseEffectToggler}
            />
          }
        />
        <Route
          path="/myprofile"
          element={
            <Profile
              user={userData}
              authenticated={authenticated}
              posts={allUserPosts}
            />
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
export default App
