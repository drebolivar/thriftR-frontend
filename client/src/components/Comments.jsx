import { useState, useEffect } from "react"
import { BASE_URL } from "../services/api"
import Client from "../services/api"
import UpdateComment from "./UpdateComment"

export default function Comments (props) {
  let [currentComment, setCurrentComment] = useState(null)
  let [visible, setVisible] = useState(false)

  const updateComment = () => {
    setVisible(true)
  }

  const getComment = async () => {
    let res = await Client.get(`${BASE_URL}/comment/${props.comment.id}`)
    setCurrentComment(res.data)
  }
  const deleteComment = () => {
    Client.delete(`${BASE_URL}/comment/${currentComment.id}`)
    props.setUseEffectToggler(!props.setUseEffectToggler) 
  }


  useEffect(() => {
    getComment()
  }, [])


  return currentComment ? (
    <div>
      <div className='comment-header'>
        <img src={currentComment.User.profileImg} alt='profilepic' style={{height: '30px', width: '30px'}}></img>
        <h3>{currentComment.User.username}</h3>
      </div>
      <div className="comment-body">
        <p>{currentComment.comment}</p>
        <p>{currentComment.numLikes} likes</p>
      </div>
      <button onClick={deleteComment} style= {{display: currentComment.userId === props.userId ? 'block' : 'none'}}>Delete comment</button>
      <button onClick={updateComment} style= {{display: currentComment.userId === props.userId ? 'block' : 'none', }}>Update Comment</button>
      <UpdateComment commentId = {currentComment.id} comment={currentComment.comment} visible={visible} setVisible={setVisible} useEffectToggler={props.useEffectToggler} setUseEffectToggler={props.setUseEffectToggler}/>
    </div>
  ) : (
    <div>
      <h3>Loading...</h3>
    </div>
  )
  }