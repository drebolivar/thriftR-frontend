import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  return (
    <div className="home">
      <div>
        <img
          style={{ display: 'block', maxHeight: '50%' }}
          src="https://i.imgur.com/xyRphr0.png"
          alt="logo"
        />
      </div>
      <div>
        <h1>Welcome to thriftR!</h1>
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
