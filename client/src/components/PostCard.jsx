import Comments from "./Comments"


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
        <button className="likes">{props.post.numLikes}<br></br>Likes</button>
      </div>
      <section>
        {props.post.Comments.map((currentComment) => (
          <div>
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