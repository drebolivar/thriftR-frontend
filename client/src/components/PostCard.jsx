import Comments from "./Comments"
import CreateComment from "./CreateComment"
import Client from "../services/api"
import { BASE_URL } from "../services/api"
import UpdatePost from "./UpdatePost"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function PostCard (props) {

  let navigate = useNavigate()
  let [visible, setVisible] = useState(false)
  let [numOfLikes, setNumOfLikes] = useState({numLikes: props.post.numLikes})
  let [liked, setLiked] = useState(false)

  const deletePost = () => {
    Client.delete(`${BASE_URL}/feed/${props.post.id}`)
    props.setUseEffectToggler(!props.useEffectToggler) 
    navigate('/feed')
  }

  const updatePost = () => {
    setVisible(true)
  }

  const updateLikes = () => {
    let likes = props.post.numLikes
    // liked ? likes++ : likes--
    // console.log(likes)
    // console.log(liked)
    likes++
    setNumOfLikes({numLikes: likes})
    let res = Client.put(`${BASE_URL}/feed/${props.post.id}`, numOfLikes)
    setLiked(!liked)
    console.log(likes)
    console.log(numOfLikes)
    props.setUseEffectToggler(!props.useEffectToggler) 
    navigate('/feed')
  }

  return props.post ? (
    <div>
      <div className="header-img-container">
        <img src={props.post.User.profileImg} alt='profilepic' className='profilepic' style={{height: '30px', width: '30px'}}/>
        <span className="username-container">
        <h2 className='usernamefeed' style={{display: 'inline'}}>{props.post.User.username}</h2>
        </span>
      </div>
      <div className="card-img-container">
        <img src={props.post.imgSrc} alt='post' className='post-image'/>
        <div className="caption-container">
        <p className='caption'>{props.post.User.username}:<br></br>{props.post.captions}</p>
        </div>
      </div>
      <div className="button-container">
        <button className="likes" onClick={updateLikes}>{props.post.numLikes}<br></br>Likes</button>
      
      <button className="likes"onClick={deletePost} style= {{display: props.post.authorId === props.user.id ? 'block' : 'none'}}>Delete</button>
      
      <button className="likes"src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" onClick={updatePost} style= {{display: props.post.authorId === props.user.id ? 'block' : 'none'}}>Update Post</button>
      </div>
      <UpdatePost post={props.post} visible={visible} setVisible={setVisible}/>
    


      <CreateComment postId={props.post.id} userId={props.user.id} useEffectToggler={props.useEffectToggler} setUseEffectToggler={props.setUseEffectToggler}/>
      <section className="card-text">
        {props.post.Comments.map((currentComment) => (
          <div className="comments" key={currentComment.id}>
            <Comments comment={currentComment} userId={props.user.id} useEffectToggler={props.useEffectToggler} setUseEffectToggler={props.setUseEffectToggler}/>
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