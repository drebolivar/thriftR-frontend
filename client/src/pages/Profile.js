import PostCard from '../components/PostCard'
import { useNavigate } from 'react-router-dom'
export default function Profile(props) {
  let navigate = useNavigate()
  console.log(props.user)
  console.log(props.authenticated)
  return props.user && props.authenticated ? (
    props.posts ? (
      <div>
        <h1>I am your profile</h1>
        <section>
          {props.posts.map((currentPost) => (
            <div key={currentPost.id} className="posts">
              <PostCard post={currentPost} user={props.user} />
            </div>
          ))}
        </section>
      </div>
    ) : (
      <div className="feed">
        <h1>Loading...</h1>
      </div>
    )
  ) : (
    <div className="protected">
      <h3>Oops! All errors!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}
