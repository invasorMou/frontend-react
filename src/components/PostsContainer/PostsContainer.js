import PostPreview from '../PostPreview/PostPreview.js'

function PostsContainer(props) {
  return (
      <div className='posts-container'>
      
        { 
          props.posts.map((post, idx) => {
            return <PostPreview data={ post } key={ idx } />
          })
        }
      </div>
  );
}

export default PostsContainer;

