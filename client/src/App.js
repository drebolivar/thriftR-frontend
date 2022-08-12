import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from './assets/thriftrlogo.png'
import Nav from './components/Nav.jsx'
import Feed from './pages/Feed'
import Profile from './pages/Profile'
import Register from './pages/Register'
import SignIn from './pages/SignIn'

function App() {
  const [signedIn, setSignIn] = useState(true)
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: ''
  })

  return (
    <div className="App">
      <Nav signedIn={signedIn} />
      <img src={logo} alt="logo" />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
