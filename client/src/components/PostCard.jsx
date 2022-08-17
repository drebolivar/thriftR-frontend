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
        <label class="like">
        <input type="checkbox"/>
        <div class="hearth"/>
        </label>
        <a class="hashflag" href="https://hashflaggallery.com" target="_blank" rel="noopener">
  <img src="https://hashflaggallery.com/favicon-96x96.png"/>
</a>
<a class="dribbble" href="https://dribbble.com/TaminoMartinius" target="_blank">
  <img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt=""/>
</a>
<a class="twitter" target="_top" href="https://twitter.com/TaminoMartinius">
  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"></svg></a>
        <button className="likes">{props.post.numLikes}<br></br>Likes</button>
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