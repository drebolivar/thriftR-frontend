import Client from "../services/api"
import { useState } from "react"
import { BASE_URL } from "../services/api"
import { useNavigate } from "react-router-dom"

export default function UpdateComment (props) {

  let navigate = useNavigate()

  let initialCommentValues = {
    comment: props.comment
  }

  let [updatedComment, setUpdatedComment] = useState(initialCommentValues)

  const handleCommentChange = (e) => {
    setUpdatedComment({[e.target.name]: e.target.value})
  }

  const handleCommentUpdate = async (e) => {
    e.preventDefault()
    let res = await Client.put(`${BASE_URL}/comment/${props.commentId}`, updatedComment)
    setUpdatedComment(initialCommentValues)
    props.setUseEffectToggler(!props.useEffectToggler)
    props.setVisible(false)
    navigate('/feed')
  }
  
  return (
  <div className='updatecommentpage' style={{display: props.visible ? 'block' : 'none'}}>
      <form className="col" onSubmit={handleCommentUpdate}>
          <div className="input-wrapper">
            <label htmlFor="comment"></label>
            <input
              onChange={handleCommentChange}
              name="comment"
              type="text"
              placeholder="comment"
              value={updatedComment.comment}
              required
            />
          </div>
          <button>
            Update Comment
          </button>
        </form>
    </div>
)
}