
import React, { useReducer, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom';

import './style.css';

import {
  Signin,
  // Profile,
  GetPosts,
  AddPost,
} from './components';

const App =  () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  
  return <>
  <div>
   <nav className="navbar">
      <h3>Strangers Things</h3>

      {user.username && <div>Hello {user.username}!!</div>}

        <Link to="/">Home</Link>
        <Link to="/login">Sign In</Link>
        <Link to="/register">Register</Link>
        <Link to="/posts">View Posts</Link>
        <Link to="/addposts">Add a Post</Link>
   </nav>
    </div>
    {/* <Route path = "/"></Route> */}
    <Route path="/posts">
        <GetPosts setPosts={setPosts} posts={posts}/>
    </Route>
    <Route path="/register">
        <Signin type={'register'} setToken={setToken} setUser={setUser}/>
        <Link to="/register"></Link>
     </Route>
    <Route path="/login">
        <Signin type={'login'} setToken={setToken} setUser={setUser}/>
        <Link to={"/login"}></Link>
    </Route>
    <Route path="/addposts">
        <AddPost setPosts={setPosts} token={token} posts={posts}/>
        </Route>
  </>
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);

