import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

import Header from './components/Header/Header.js' 
import MainPost from './components/MainPost/MainPost.js' 
import PostsContainer from './components/PostsContainer/PostsContainer.js' 
import About from './components/About/About.js' 
import Post from './components/Post/Post.js' 
import NewPost from './components/NewPost/NewPost.js' 
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>

          <Route exact path='/'>
            <MainPost />
            <PostsContainer />
            <About /> 
          </Route>

          <Route exact path='/show/1'>
            <Post /> 
          </Route>

          <Route exact path='/posts/new'>
            <NewPost />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
