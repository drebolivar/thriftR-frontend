import { useState } from "react";
import { RegisterUser } from "../services/Auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.username]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await RegisterUser({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
    });
    setFormValues({
      username: "",
      emial: "",
      password: "",
      confirmPassword: "",
    });
    navigate("/signin");
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div>
            <label className="username" htmlFor="username">Username</label>
            <input
              className="usernameText"
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="John Smith"
              value={formValues.username}
              required
            />
          </div>
          <div>
            <label className="email" htmlFor="email">Email</label>
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
            <label className="password" htmlFor="password">Password</label>
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
            <label className="confirmPassword" htmlFor="confirmPassword">Confirm Password</label>
            <input
            className="passwordConfirmText"
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
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
  );
};

export default Register;
