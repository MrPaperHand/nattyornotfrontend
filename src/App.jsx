import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'

// Components
import Post from './components/Post'
import RegistrationPage from './components/RegistrationPage'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import PostsPage from './components/PostsPage'
import ProfilePage from './components/ProfilePage'
import NewPostPage from './components/NewPostPage'

// Services
import postService from './services/posts'
import loginService from './services/login'
import userService from './services/users'

const App = () => {
  const [posts, setPosts] = useState([])

  const [message, setMessage] = useState(null)

  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 

  // user is the logged in user thats stored in the local storage
  const [user, setUser] = useState(null)
  // users is the list of users in the database
  const [users, setUsers] = useState([])

  useEffect(() => {
    postService.getAll().then(posts =>
      setPosts( posts )
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNattyAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      postService.setToken(user.token)
    }
    userService.getAll().then(users => 
      setUsers( users )
    )
  }, [])

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<RegistrationPage 
              username={username}
              password={password}
              setUsername={setUsername} 
              setPassword={setPassword}
            />}/>
          <Route path="/login" element={<LoginPage 
              message={message}
              setMessage={setMessage}
              user={user}
              setUser={setUser}
              username={username}
              password={password}
              setUsername={setUsername} 
              setPassword={setPassword}
            />} />
          <Route path="/" element={<HomePage/>}/>
          <Route path="/profile" element={<ProfilePage user={user} users={users}/>}/>
          <Route path="/posts" element={<PostsPage posts={posts}/>}/>
          <Route path="/upload" element={<NewPostPage/>}/>
        </Routes>
      </Router>


      {/* <h2>posts</h2>
      {posts.map(post =>
        <Post key={post.id} post={post} />
      )} */}
    </div>
  )
}

export default App