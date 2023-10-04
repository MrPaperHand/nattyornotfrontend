import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import loginService from '../services/login'
import postService from '../services/posts'

const LoginPage = ({message, setMessage, user, setUser, username, password, setUsername, setPassword}) => {
  // console.log("SOJFEI")
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
          const user = await loginService.login({
            username, password,
          })
    
          window.localStorage.setItem(
            'loggedNattyAppUser', JSON.stringify(user)
          )
          postService.setToken(user.token)
          setUser(user)
          setUsername('')
          setPassword('')
          
          navigate('/')
        } catch (exception) {
          setMessage('Wrong credentials')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        }
      }

    return(
        <div>
            <form onSubmit={(event) => handleLogin(event)}>
            <h1>Login Form</h1>
            <div>
                username
                <input
                type="text"
                value={username}
                name="Username"
                onChange={({ target }) => setUsername(target.value)}
                />
            </div>
            <div>
                password
                <input
                type="password"
                value={password}
                name="Password"
                onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button onSubmit={(event) => handleLogin(event)}>submit</button>
            <button>cancel</button>
            <button><Link to="/register">Don't have an account? Register here!</Link></button>
            </form>
        </div>  
    )
}

export default LoginPage
    
