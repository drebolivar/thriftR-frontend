import {useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function CreatePost (props) {
  
  let navigate = useNavigate()
  let initialPostValues = { 
    authorId: props.user.id, 
    imgSrc: '',
    captions: '',
    location: '',
    numLikes: 0
  }
  const [newPostValues, setNewPostValues] = useState(initialPostValues)

  const handlePostChange = (e) => {
    setNewPostValues({ ...newPostValues, [e.target.name]: e.target.value })
    console.log(newPostValues)
  }

  const handlePostSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.post(`${BASE_URL}/feed`, newPostValues, {
      headers: {
        'authorization': `Bearer ${props.token}`
      }
    })
    setNewPostValues(initialPostValues)
    props.setUseEffectToggler(!props.setUseEffectToggler)
    navigate('/feed')
  }

  return (
    <div>
      <form className="col" onSubmit={handlePostSubmit}>
          <div className="input-wrapper">
            <label htmlFor="image">Image:</label>
            <input
              onChange={handlePostChange}
              name="imgSrc"
              type="text"
              placeholder="Img URL"
              value={newPostValues.imgSrc}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="caption">Caption</label>
            <input
              onChange={handlePostChange}
              name="captions"
              type="text"
              placeholder="caption"
              value={newPostValues.captions}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="location">Location</label>
            <input
              onChange={handlePostChange}
              type="text"
              name="location"
              value={newPostValues.location}
              required
            />
          </div>
          <button
          >
            Create Post
          </button>
        </form>
    </div>
  )
}