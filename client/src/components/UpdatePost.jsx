import Client from "../services/api"
import { useState } from "react"
import { BASE_URL } from "../services/api"
import { useNavigate } from "react-router-dom"

export default function UpdatePost (props) {

  let navigate = useNavigate()

  let initialPostValues = {
    imgSrc: props.post.imgSrc,
    captions: props.post.captions,
    location: props.post.location,
  }

  let [updatedPost, setUpdatedPost] = useState(initialPostValues)

  const handlePostChange = (e) => {
    setUpdatedPost({ ...updatedPost, [e.target.name]: e.target.value })
  }

  const handlePostUpdate = async (e) => {
    e.preventDefault()
    let res = await Client.put(`${BASE_URL}/feed/${props.post.id}`, updatedPost)
    console.log(res)
    setUpdatedPost(initialPostValues)
    props.setUseEffectToggler(!props.useEffectToggler)
    props.setVisible(false)
    navigate('/myprofile')
  }
  
  return (
  <div className='updatepostpage' style={{display: props.visible ? 'block' : 'none'}}>
  <form className="createpost" onSubmit={handlePostUpdate}>
      <div className="input-wrapper">
        <label htmlFor="image">Image</label>
        <input
          onChange={handlePostChange}
          name="imgSrc"
          type="text"
          placeholder="image URL"
          value={updatedPost.imgSrc}
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
          value={updatedPost.captions}
          required
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="location">Location</label>
        <input
          onChange={handlePostChange}
          type="text"
          name="location"
          value={updatedPost.location}
          required
        />
      </div>
      <button
      >
        Update Post
      </button>
    </form>
</div>
)
}



