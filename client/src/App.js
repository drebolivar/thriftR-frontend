import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from './assets/thriftrlogo.png'
import Nav from './components/Nav.jsx'
import Feed from './pages/Feed'
import Profile from './pages/Profile'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import CreatePost from './components/CreatePost'
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

  //gets full user data including prof pic from the user variable(which is just payload)
  const getUserData = async () => {
    console.log(user)
    const res = await axios.get(`${BASE_URL}/users/${user.id}`)
    console.log(res.data)
    setUserData(res.data)
    const result = await axios.get(`${BASE_URL}/feed/profile/${user.id}`)
    setAllUserPosts(result.data)
  }

  //gets all posts regardless of user
  const getAllPosts = async () => {
    const res = await axios.get(`${BASE_URL}/feed/`)
    console.log(res.data)
    console.log(user)
    setAllPosts(res.data)
  }
  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    console.log(user)
    console.log(authenticated)
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  //checks to see if there is a valid token in the local storage and if so sets user to the token
  const checkToken = async () => {
    const tokenUser = await CheckSession()
    console.log(tokenUser)
    setUser(tokenUser)
    console.log(user)
    toggleAuthenticated(true)
  }

  //gets all posts of the currently logged in user
  const getUserPosts = async () => {
    console.log(userData)
    console.log(user)
    const res = await axios.get(`${BASE_URL}/feed/profile/${user.id}`)
    console.log(res.data)
    setAllUserPosts(res.data)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
      getUserData()
      getAllPosts()
      if (userData) {
        getUserPosts()
      }
    }
  }, [useEffectToggler])

  return (
    <div className="App">
      <Nav
        signedIn={authenticated}
        user={userData}
        handleLogOut={handleLogOut}
      />
      <img src={logo} alt="logo" />
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
        <Route path="/newpost" element={<CreatePost user={userData} />} />
        <Route
          path="/feed"
          element={
            <Feed
              user={userData}
              posts={allPosts}
              authenticated={authenticated}
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
      </Routes>
    </div>
  )
}
export default App
