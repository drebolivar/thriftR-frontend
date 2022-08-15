export default function Register(props) {
  const newProfile = props.user;
  return (
    <div className="register">
      <h1>Register</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" />
        <label htmlFor="email">Email:</label>
        <input id="email" type="text" />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" />
        {/* <label htmlFor="profilePicture">Profile Picture:</label>
        <input type="text" value={newProfile.profilePicture} /> */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
