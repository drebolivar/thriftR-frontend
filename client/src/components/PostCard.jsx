import Comments from "./Comments"
import CreateComment from "./CreateComment"
import Client from "../services/api"
import { BASE_URL } from "../services/api"


export default function PostCard (props) {

  const deletePost = () => {
    Client.delete(`${BASE_URL}/feed/${props.post.id}`)
    props.setUseEffectToggler(!props.setUseEffectToggler)
  }

  return props.post ? (
    <div className="post">
      <div>
        <img src={props.post.User.profileImg} alt='profilepic' className='profilepicfeed' style={{height: '30px', width: '30px'}}/>
        <h1 className='usernamefeed' style={{display: 'inline'}}>{props.post.User.username}</h1>
      </div>
      <div className="post-body">
        <img src={props.post.imgSrc} alt='post' className="post"/>
        <div className="likesedits">
        <button className="likes">{props.post.numLikes}<br></br>Likes</button>
        </div>
        <p className='caption'>{props.post.captions}</p>
      </div>
      <button onClick={deletePost} style= {{display: props.post.authorId === props.user.id ? 'block' : 'none'}}>Delete</button>
      {/* <section>Add comment</section> */}
      <CreateComment postId={props.post.id} userId={props.user.id} useEffectToggler={props.useEffectToggler} setUseEffectToggler={props.setUseEffectToggler}/>
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