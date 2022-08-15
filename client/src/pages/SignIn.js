import React, { useState, useEffect } from "react";
import axios from "axios";

function SignIn() {
  // const [profile, setProfile] = useState([]);
  // const initialState = {
  //   username: "",
  //   password: "",
  // };
  // const [formState, setFormState] = useState(initialState);
  // const [submitted, setSubmitted] = useState(true);

  // const handleChange = (event) => {
  //   setFormState({ ...formState, [event.target.id]: event.target.value });
  // };

  // useEffect(() => {
  //   const getProfile = async () => {
  //     try {
  //       if (submitted) {
  //         let res = await axios.get("http://localhost:3001/auth/login");

  //         setProfile(res.data.profile);
  //         setSubmitted(false);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getProfile();
  // }, [submitted]);

  // const handlesubmit = async (e) => {
  //   e.preventDefault();
  //   let res = await axios.post("http://localhost:3001/auth/login", formState);
  //   console.log(res.data.profile);
  //   console.log(formState);
  //   setFormState(initialState);
  //   setSubmitted(true);
  //   e.target.reset();
  // };

  return (
    <div className="signIn">
      <h1>Login</h1>
      <form>
        <label htmlFor="usernameSignIn">Username:</label>
        <input id="usernameSignIn" type="text" />
        <label htmlFor="passwordSignIn">Password:</label>
        <input id="passwordSignIn" type="password" />
        <button type="submitSignIn">Login</button>
      </form>
    </div>
  );
}
export default SignIn;
