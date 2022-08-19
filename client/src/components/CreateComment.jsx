import {useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'


export default function CreateComment (props) {

  let navigate = useNavigate()
  let initialCommentValues = { 
    userId: props.userId, 
    postId: props.postId,
    comment: '',
    numLikes: 0
  }
  const [newCommentValues, setNewCommentValues] = useState(initialCommentValues)

  const handleCommentChange = (e) => {
    setNewCommentValues({ ...newCommentValues, [e.target.name]: e.target.value })
  }

  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    let res = await Client.post(`${BASE_URL}/comment`, newCommentValues)
    setNewCommentValues(initialCommentValues)
    props.setUseEffectToggler(!props.useEffectToggler)
    navigate('/feed')
  }

  return (
    <div>
      <form className="col" onSubmit={handleCommentSubmit}>
          <div className="input-wrapper">
            <label htmlFor="comment"></label>
            <input
              onChange={handleCommentChange}
              name="comment"
              type="text"
              placeholder="comment"
              value={newCommentValues.comment}
              required
            />
          </div>
          <div className='postcomment-container'>
          <button className='likes'>
            Post Comment
          </button>
          </div>
        </form>
    </div>
  )
}