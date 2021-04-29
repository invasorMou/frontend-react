import { Link } from 'react-router-dom'
import './postPreview.css'

function PostPreview(props){
  return (
    <Link to={ `/show/${ props.data._id}` }>
      <div className='post-preview'>
        <h3 className='post-preview--title'> 
          { props.data.title }
        </h3>
        <img className='post-preview--cover' src='./test.png' alt='post cover'/>
      </div>
    </Link>
  );
}

export default PostPreview;
