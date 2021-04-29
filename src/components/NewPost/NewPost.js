import { useState } from 'react'
import './newPost.css';

function NewPost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  
  const handleSubmit = (ev) => {
    ev.preventDefault()
    
    fetch('http://localhost:3001/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  
  return (
    <div className='form-new-post'>
      <h1>Create a new post</h1>
      <form onSubmit={ (ev) => handleSubmit(ev) }>
        <div>
          <label htmlFor='title'>
            Title:
          </label>
          <input type='text' id='title' name='title' onChange={ (ev) => setTitle(ev.target.value) } value={ title }/>

        </div>
        <div>
          <textarea id="contentt" name="content" rows="4" cols="50" onChange={ (ev) => setContent(ev.target.value) } value={ content }>
          </textarea>
        </div>
        <input type="submit" value="Submit" />
      </form> 
    </div>
  );
}

export default NewPost;
