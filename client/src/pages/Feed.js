import PostCard from '../components/PostCard'

export default function Feed(props) {
  console.log(props.posts)

  return props.posts ? (
    <nav>
      <h1>I am the Feed</h1>
      <section>
        {props.posts.map((currentPost) => (
          <div key={currentPost.id} className="posts">
            <PostCard post={currentPost} />
          </div>
        ))}
      </section>
    </nav>
  ) : (
    <div className='feed'>
      <h1>Loading...</h1>
    </div>
  )
}
