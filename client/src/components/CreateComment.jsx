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
    setNewCommentValues({ ...newPostValues, [e.target.name]: e.target.value })
    console.log(newCommentValues)
  }

  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    let res = await Client.post(`${BASE_URL}/comment`, newCommentValues)
    setNewCommentValues(initialCommentValues)
    // navigate('/feed')
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
          <button>
            Post Comment
          </button>
        </form>
    </div>
  )
}