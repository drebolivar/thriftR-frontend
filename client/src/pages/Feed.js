import PostCard from '../components/PostCard'
import { useNavigate } from 'react-router-dom'

export default function Feed(props) {
  let navigate = useNavigate()
  console.log(props.user)
  console.log(props.authenticated)
  return props.user && props.authenticated ? (
    props.posts ? (
      <div>
        <h1>I am the Feed</h1>
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
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}
