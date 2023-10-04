  const Post = ({ user }) => (
      <div>
        {user.username} {post.author} 
        <br></br>
        <img src={post.filekey} style={imgStyles}/>
      </div>
    )
    
    export default Post