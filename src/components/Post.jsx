const imgStyles = {
  width: '500px',
  height: 'auto',
}

const Post = ({ post }) => (
    <div>
      {post.title} {post.author} 
      <br></br>
      <img src={post.filekey} style={imgStyles}/>
    </div>
  )
  
  export default Post