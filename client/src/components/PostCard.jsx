export default function PostCard (props) {
  return (
    <div>
      <div className="post-header">
        <img src='https://camo.githubusercontent.com/56ac6d5b5595ca3fc6dd1f8c4dcad5e40284844e714c2dc4ca506f9908984779/68747470733a2f2f692e696d6775722e636f6d2f373469674a4b302e706e67' alt='profilepic' className='profile-pic' style={{height: '30px', width: '30px'}}/>
        <h1 className='username' style={{display: 'inline'}}>     MackleSm00r3z</h1>
      </div>
      <div className="post-body">
        <img src='https://www.videostatic.com/sites/default/files/styles/post/public/macklemore_thirft.jpg?itok=jPb2MKSt' alt='post' className="post"/>
        <p className='caption'>I am the caption</p>
        <p>3 likes</p>
      </div>
    </div>
  )
  }