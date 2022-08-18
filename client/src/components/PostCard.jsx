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
        <div className="card-icons flex-container"> 
        <span className="card-icon card-icon-left"><i className="bi bi-heart"></i></span>
        <span className="card-icon card-icon-left"><i className="bi bi-chat"></i></span>
        <span className="card-icon card-icon-left"><i className="bi bi-send"></i></span>
        <span className="card-icon card-icon-right"><i className="bi bi-bookmark"></i></span>
      <div className="card-wrapper flex-container">
      <div className="card-header grid">
        <div className="header-img-container flex-container">
        <img src={props.post.User.profileImg} alt='profilepic' className='profilepicfeed' style={{height: '30px', width: '30px'}}/> 
        <span className="card-title">
        <h2 className='usernamefeed' style={{display: 'inline'}}>{props.post.User.username}</h2>
        </span>
        </div>
        </div>
        </div>
      </div>
      <div className="card-img-container">
      <div className="post-body">
        <img src={props.post.imgSrc} alt='post' className="post"/>
        
        <div className="likesedits">
        <button className="likes">{props.post.numLikes}<br></br>Likes</button>
        </div>
        <p className='caption'>{props.post.captions}</p>
      </div>
      <div className="card-opt-btn flex-container"><i class="bi bi-three-dots"></i>
      <button onClick={deletePost} style= {{display: props.post.authorId === props.user.id ? 'block' : 'none'}}>Delete</button>
      </div>
      </div>
      <span className="card-text"><span className="bold title-margin">
      {/* <section>Add comment</section> */}
      <CreateComment postId={props.post.id} userId={props.user.id} useEffectToggler={props.useEffectToggler} setUseEffectToggler={props.setUseEffectToggler}/>
      </span>
      </span>
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