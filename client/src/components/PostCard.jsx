export default function PostCard (props) {
  return (
    <div>
      <div className="post-header">
        <img src={props.user.profileImg} alt='profilepic' className='profile-pic' style={{height: '30px', width: '30px'}}/>
        <h1 className='username' style={{display: 'inline'}}>{props.user.username}</h1>
      </div>
      <div className="post-body">
        <img src='https://www.videostatic.com/sites/default/files/styles/post/public/macklemore_thirft.jpg?itok=jPb2MKSt' alt='post' className="post"/>
        <p className='caption'>I am the caption</p>
        <p>3 likes</p>
      </div>
    </div>
  )
  }