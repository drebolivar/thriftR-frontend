export default function Register() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
