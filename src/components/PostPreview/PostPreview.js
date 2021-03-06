import { Link } from 'react-router-dom'
import './postPreview.css'

function PostPreview({ title, content }){
  return (
    <Link to='/show/1'>
      <div className='post-preview'>
        <h3 className='post-preview--title'> 
          Long title blog long title blog long title blog
        </h3>
        <img className='post-preview--cover' src='./test.png' />
      </div>
    </Link>
  );
}

export default PostPreview;
