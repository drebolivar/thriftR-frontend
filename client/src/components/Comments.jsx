import { useState, useEffect } from "react"
import { BASE_URL } from "../services/api"
import Client from "../services/api"
import UpdateComment from "./UpdateComment"
import { useNavigate } from "react-router-dom"

export default function Comments (props) {

  let navigate = useNavigate()
  let [currentComment, setCurrentComment] = useState(null)
  let [visible, setVisible] = useState(false)
  let [numOfLikes, setNumOfLikes] = useState({numLikes: props.comment.numLikes})

  //ability to toggle the update comment form to be visible or not
  const updateComment = () => {
    setVisible(!visible)
  }

  //gets the comment data so that we can properly display user and post
  const getComment = async () => {
    let res = await Client.get(`${BASE_URL}/comment/${props.comment.id}`)
    setCurrentComment(res.data)
  }
  //deletes comment
  const deleteComment = () => {
    Client.delete(`${BASE_URL}/comment/${currentComment.id}`)
    props.setUseEffectToggler(!props.useEffectToggler) 
    navigate('/feed')
  }

  //function that handles the functionality of the like button (this is a work in progress)
  const updateLikes = () => {
    let likes = currentComment.numLikes
    // liked ? likes++ : likes--
    // console.log(likes)
    // console.log(liked)
    likes++
    setNumOfLikes({numLikes: likes})
    let res = Client.put(`${BASE_URL}/comment/${currentComment.id}`, numOfLikes)
    props.setUseEffectToggler(!props.useEffectToggler) 
    navigate('/feed')
  }

  useEffect(() => {
    getComment()
  }, [])


  return currentComment ? (
    <div>
      <div className='comment-header'>
        <img className='profilepic' src={currentComment.User.profileImg} alt='profilepic' style={{height: '30px', width: '30px'}}></img>
        <h3>{currentComment.User.username}</h3>
      </div>
      <div className="comment-body">
        <p>{currentComment.comment}</p>
      <div className="ud-container">
      {/* <button className="likes" onClick={updateLikes}>{currentComment.numLikes} likes</button> */}
      <button className="likes" onClick={deleteComment} style= {{display: currentComment.userId === props.userId ? 'block' : 'none'}}>Delete comment</button>
      <button className="likes" onClick={updateComment} style= {{display: currentComment.userId === props.userId ? 'block' : 'none', }}>Update Comment</button>
      </div>
      <UpdateComment commentId = {currentComment.id} comment={currentComment.comment} visible={visible} setVisible={setVisible} useEffectToggler={props.useEffectToggler} setUseEffectToggler={props.setUseEffectToggler}/>
      </div>
    </div>
  ) : (
    <div>
      <h3>Loading...</h3>
    </div>
  )
  }