import {Link} from 'react-router-dom'

export default function Nav (props) {
return props.signedIn && props.user ? (
  <header className="header">
  <nav className="navbar">
    <ul className="mainnav">
    <Link className="nav-item active" to='/feed'>Feed</Link>
    <Link className="nav-item active" to='/myprofile'>Profile</Link>
    <Link className="nav-item active" to='/newpost'>New Post</Link>
    <button className="nav-item active" onClick={props.handleLogOut}>Log Out</button>
    <h1 className="nav-item active"> Welcome {props.user.username}</h1>
    </ul>
  </nav>
  </header>
) : (
  <nav>
    <Link className="nav-item active" to='/register'>Sign Up</Link>
    <Link className="nav-item active" to='/signin'>Sign In</Link>
  </nav>
)
}