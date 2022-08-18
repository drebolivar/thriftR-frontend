import { useState, useEffect } from "react"
import { BASE_URL } from "../services/api"
import Client from "../services/api"

export default function Comments (props) {
  let [currentComment, setCurrentComment] = useState(null)

  const getComment = async () => {
    let res = await Client.get(`${BASE_URL}/comment/${props.comment.id}`)
    console.log(res.data)
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
    </div>
  ) : (
    <div>
      <h3>Loading...</h3>
    </div>
  )
  }