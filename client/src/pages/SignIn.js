import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = (props) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    console.log(payload)
    setFormValues({ email: '', password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    navigate('/feed')
    props.setUseEffectToggler(!props.useEffectToggler)
  }

  return (
    <div className="signin">
      <div className="brand-logo"></div>
      <div className="brand-title"></div>
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div>
            <label className="emailsignin" htmlFor="email">
              Email
            </label>
            <input
              className="emailsignintext"
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div>
            <label className="passwordsignin" htmlFor="password">
              Password
            </label>
            <input
              className="passwordsignintext"
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="createAccount">
            <p>
              Not registered? <a href="/register">Create an account</a>
            </p>
          </div>
          <button disabled={!formValues.email || !formValues.password}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
