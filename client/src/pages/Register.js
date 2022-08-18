import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    profileImg: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: formValues.username,
      email: formValues.email,
      profileImg: formValues.profileImg,
      password: formValues.password
    })
    setFormValues({
      username: '',
      emial: '',
      profileImg: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/signin')
  }

  return (
    <div className="registerpage">
      <div className="register">
        <h1>Register</h1>
        <div className="card-overlay centered">
          <form className="col" onSubmit={handleSubmit}>
            <div>
              <label className="username" htmlFor="username">
                Username
              </label>
              <input
                className="usernameText"
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="username"
                value={formValues.username}
                required
              />
            </div>
            <div>
              <label className="email" htmlFor="email">
                Email
              </label>
              <input
                className="emailText"
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required
              />
            </div>
            <div>
              <label className="profileImg" htmlFor="profileImg">
                Profile Image Link:
              </label>
              <input
                className="profileImgText"
                onChange={handleChange}
                type="text"
                name="profileImg"
                value={formValues.profileImg}
                required
              />
            </div>
            <div>
              <label className="password" htmlFor="password">
                Password
              </label>
              <input
                className="passwordText"
                onChange={handleChange}
                type="password"
                name="password"
                value={formValues.password}
                required
              />
            </div>
            <div>
              <label className="confirmPassword" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="passwordConfirmText"
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                required
              />
            </div>
            <div className="createAccount">
              <p>
                registered? <a href="/signin">Sign In</a>
              </p>
            </div>
            <button
              className="signupbutton"
              disabled={
                !formValues.email ||
                (!formValues.password &&
                  formValues.confirmPassword === formValues.password)
              }
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
