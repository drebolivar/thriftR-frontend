export default function PostCard (props) {
  return props.post ? (
    <div>
      <div className="post-header">
        <img src={props.post.User.profileImg} alt='profilepic' className='profile-pic' style={{height: '30px', width: '30px'}}/>
        <h1 className='username' style={{display: 'inline'}}>{props.post.User.username}</h1>
      </div>
      <div className="post-body">
        <img src={props.post.imgSrc} alt='post' className="post"/>
        <p className='caption'>{props.post.captions}</p>
        <p>{props.post.numLikes} likes</p>
      </div>
      {/* <div className="comments">
        <p className='comment'>{props.post.Comment.comment}</p>
        <p>{props.post.Comment.numLikes} likes</p>
      </div> */}
    </div>
  ) : (
    <div>
      <h1>Loading</h1>
    </div>
  )
  }