import {Link} from 'react-router-dom'
import Felix from '../assets/felixbar.png'
import Logo from '../assets/thriftrlogobar.png'

export default function Nav (props) {
return props.signedIn && props.user ? (
  <header>
  <nav className="nav">
    <ul className="mainnav">
    <img src={ Felix }/> 
    <button className="logout icon" onClick={props.handleLogOut}>Log Out</button>
    <Link  to='/newpost'><button className="icon">New Post</button></Link>
    <Link to='/myprofile'><button className="icon">Profile</button></Link>
    <Link  to='/feed'><button className="icon">Feed</button></Link>
    <img src={ Logo }/>
    </ul>
    <h1 className="welcome"> Welcome {props.user.username}</h1>
    
    
  </nav>
  </header>
) : null
}