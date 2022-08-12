import {Link} from 'react-router-dom'

export default function Nav (props) {
return props.signedIn ? (
  <nav>
    <Link to='/'>Feed</Link>
    <Link to='/profile'>Profile</Link>
    <Link to='/logout'>Log Out</Link>
  </nav>
) : (
  <nav>
    <Link to='/register'>Sign Up</Link>
    <Link to='/signin'>Sign In</Link>
  </nav>
)
}