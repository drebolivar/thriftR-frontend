import PostCard from '../components/PostCard'
import { useNavigate } from 'react-router-dom'

export default function Feed(props) {
  let navigate = useNavigate()
  return props.user && props.authenticated ? (
    props.posts ? ( 
      <div className="feedpost">
        <h1>I am the Feed</h1>
        <div class="card"></div>
        <div class="card-content"></div>
        <header class="card-content_header"></header>
        <section className="postcard-container">
          {props.posts.map((currentPost) => (
            <div key={currentPost.id} className="posts">
              <PostCard
                post={currentPost}
                user={props.user}
                useEffectToggler={props.useEffectToggler}
                setUseEffectToggler={props.setUseEffectToggler}
              />
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
    <div className="feederror">
      <div>
        <h3 className="protected">Oops! All errors!</h3>
        <button className="signinfeed" onClick={() => navigate('/signin')}>
          Sign In
        </button>
      </div>
    </div>
  )
}
