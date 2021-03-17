import { useState } from 'react'
import './newPost.css';

function NewPost() {
  const [title, setTitle] = useState('')
  return (
    <div class='form-new-post'>
      <h1>Create a new post</h1>
      <form>
        <div>
          <label for='title'>
            Title:
          </label>
          <input type='text' id='title' name='title' onChange={ (ev) => setTitle(ev.target.value) } value={ title }/>

        </div>
        <div>
          <textarea id="contentt" name="content" rows="4" cols="50">
          </textarea>
        </div>
        <input type="submit" value="Submit" />
      </form> 
    </div>
  );
}

export default NewPost;
