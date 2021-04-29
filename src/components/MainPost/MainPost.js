import './mainPost.css'

function MainPost(props) {
  return (
    <div className='main-post'>
      <img className='main-post--image' src='./test.png'/>
      <h2>{ props.post.title }</h2>
      <p>
        { props.post.content }
      </p>
    </div>
  );
}

export default MainPost;
