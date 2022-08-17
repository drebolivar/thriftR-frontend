import Comments from "./Comments"


export default function PostCard (props) {

  

  return props.post ? (
    <div className="post">
      <div>
        <img src={props.post.User.profileImg} alt='profilepic' className='profile-pic' style={{height: '30px', width: '30px'}}/>
        <h1 className='username' style={{display: 'inline'}}>{props.post.User.username}</h1>
      </div>
      <div className="post-body">
        <img src={props.post.imgSrc} alt='post' className="post"/>
        <button className="likes">{props.post.numLikes}<br></br>Likes</button>
        <p className='caption'>{props.post.captions}</p>
      </div>
      {/* <section>Add comment</section> */}
      <section>
        {props.post.Comments.map((currentComment) => (
          <div key={currentComment.id}>
            <Comments comment={currentComment}/>
          </div>
        ))}
      </section>
    </div>
  ) : (
    <div>
      <h1>Loading</h1>
    </div>
  )
  }