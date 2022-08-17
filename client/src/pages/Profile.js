import PostCard from '../components/PostCard'
// import { useParams } from 'react-router-dom'

export default function Profile(props) {
  // let {id} = useParams()

  return props.posts ? (
    <div>
      <section>
        {props.posts.map((currentPost) => (
          <div key={currentPost.id} className="posts">
            <PostCard post={currentPost} />
          </div>
        ))}
      </section>
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  )
}
