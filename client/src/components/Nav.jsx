import {Link} from 'react-router-dom'

export default function Nav (props) {
return props.signedIn && props.user ? (
  <header className="wrapper">
  <nav className="nav">
    <ul className="mainnav">
    <Link  to='/feed'><button className="icon">Feed</button></Link>
    <Link to='/myprofile'><button className="icon">Profile</button></Link>
    <Link  to='/newpost'><button className="icon">New Post</button></Link>
    <button className="logout icon" onClick={props.handleLogOut}>Log Out</button>
    {/* <h1 className="welcome"> Welcome {props.user.username}</h1> */}
    </ul>
  </nav>
  </header>
) : (
  <nav>
   {/* <Link to='/register'>
    <button className="icon">Register</button>
   </Link>
    <Link to='/signin'>
      <button className="icon">Sign In</button>
    </Link> */}
  </nav>
)
}