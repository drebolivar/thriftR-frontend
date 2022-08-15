import React, { useState, useEffect } from 'react';

function LoginForm() {
  const initialState = { username: '', password: '' };

  const [formState, setFormState] = useState(initialState);
  const [submitted, setSubmitted] = useState(true);

  useEffect(() => {
    const getBooking = async () => {
      try {
        if (submitted) {
          let res = await axios.get("http://localhost:3001/");

          setBooking(res.data.bookings);
          setSubmitted(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBooking();
  }, [submitted]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        onChange={handleChange}
        value={formState.username}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        onChange={handleChange}
        value={formState.password}
      />
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginForm;