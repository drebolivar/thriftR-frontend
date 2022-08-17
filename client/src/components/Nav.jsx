import {Link} from 'react-router-dom'

export default function Nav (props) {
return props.signedIn && props.user ? (
  <nav className="navbar">
    <Link to='/'>Feed</Link>
    <Link to='/myprofile'>Profile</Link>
    <Link to='/newpost'>New Post</Link>
    <button onClick={props.handleLogOut}>Log Out</button>
    <h1> Welcome {props.user.username}</h1>
  </nav>
) : (
  <nav>
    <Link to='/register'>Sign Up</Link>
    <Link to='/signin'>Sign In</Link>
  </nav>
)
}