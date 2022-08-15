import PostCard from '../components/PostCard'

export default function Feed(props) {
  return (
    <nav>
      <h1>I am the Feed</h1>
      <section>
        {/* {props.posts.map((currentPlayer) => (
          <div key={props.posts.id} className="posts"> */}
        <PostCard user={props.user} />
        {/* </div>
        ))} */}
      </section>
    </nav>
  )
}
