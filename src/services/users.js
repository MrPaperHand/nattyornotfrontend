import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/users'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

  const userService = {
    getAll
}

export default userService