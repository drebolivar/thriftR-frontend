import { useNavigate } from 'react-router-dom'
import LogoASCII from '../assets/thriftrlogoascii.png'

const Home = () => {
  let navigate = useNavigate()
  return (
    <div className="homepage">
      <div className="welcomescreen">
        <img src={LogoASCII} alt="ASCII Logo" />
        <h2>A place to peruse the pre-used!</h2>
        <h3>
          <a href="/signin">Sign in</a>
        </h3>
        <h3>
          <a href="/register">Create an account</a>
        </h3>
      </div>
    </div>
  )
}

export default Home
