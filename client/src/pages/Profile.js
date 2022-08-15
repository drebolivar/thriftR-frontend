import PostCard from '../components/PostCard'

export default function Profile(props) {
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
