import PostPreview from '../PostPreview/PostPreview.js'

function PostsContainer() {
  let postData = [1, 2, 3, 4, 5]
  return (
      <div className='posts-container'>
        { 
          postData.map((data, idx) => {
            return <PostPreview key={ idx } />
          })
        }
      </div>
  );
}

export default PostsContainer;
