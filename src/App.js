import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Header from './components/Header/Header.js' 
import MainPost from './components/MainPost/MainPost.js' 
import PostsContainer from './components/PostsContainer/PostsContainer.js' 
import About from './components/About/About.js' 
import Post from './components/Post/Post.js' 
import NewPost from './components/NewPost/NewPost.js' 

import './App.css';

function App() {
  const [mainPost, setMainPost] = useState({ title: '', content: '' })
  const [posts, setPosts] = useState([])

  const splitPosts = (posts) => {
    setMainPost(posts[0])
    setPosts(posts.slice(1))
  }
  
  useEffect(
    () => {
      fetch('http://localhost:3001/posts')
        .then(response => response.json())
        .then(posts => splitPosts(posts))
        .catch(err => console.log(err))
    },
    []
  )
  
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>

          <Route exact path='/'>
            <MainPost post={ mainPost }/>
            <PostsContainer posts={ posts }/>
            <About /> 
          </Route>

          <Route exact path='/posts/:id'>
            <Post /> 
          </Route>

          <Route exact path='/posts/new'>
            <NewPost />
          </Route>
          
          <Route path='*'>
            <h1>Error 404 Element not found </h1>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
