import Navbar from '../components/Navbar';

const ProfilePage = ({user, users}) => {
    // console.log(user)
    return(
        <div>
            <Navbar/>
            <h1>{user.username}</h1>
        </div>  
    )
}

export default ProfilePage
    
