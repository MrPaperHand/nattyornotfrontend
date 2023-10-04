import React, { useState } from 'react'
import Navbar from './Navbar';
import postService from '../services/posts';

const NewPostPage = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [likes, setLikes] = useState('')
    const [file, setFile] = useState(null)

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]
        setFile(selectedFile)
      }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', title)
        formData.append('author', author)
        formData.append('likes', likes)
    
        try {
          await postService.create(formData)

        } catch (error) {
          console.error('Error creating post:', error)
        }
      }

    return(
      <div>
        <Navbar />
        <h1>Create a New Post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <label>Author:</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
          </div>
          <div>
            <label>Likes:</label>
            <input type="number" value={likes} onChange={(e) => setLikes(e.target.value)} />
          </div>
          <div>
            <label>Upload File:</label>
            <input type="file" accept="image/*" onChange={handleFileChange} required />
          </div>
          <button type="submit">Create Post</button>
        </form>
      </div>
    )
}

export default NewPostPage
    
