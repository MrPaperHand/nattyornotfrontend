import Navbar from '../components/Navbar';
import Post from '../components/Post'

const PostsPage = ({posts}) => {
    // console.log(posts)
    return(
        <div>
            <Navbar/>
            <h2>posts</h2>
            {posts.map(post =>
                <Post key={post.id} post={post} />
            )}
        </div>  
    )
}

export default PostsPage
    
