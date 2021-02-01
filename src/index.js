
import React, { useReducer, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, useHistory} from 'react-router-dom';

import './style.css';

import {
  Signin,
  // Profile,
  GetPosts,
} from './components';

const App =  () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  
  return <>
  <div>
   <nav className="navbar">
      <div>Strangers Things</div>
      {user.username && <div>Hello {user.username}!!</div>}
        <a href="/">Home</a>
        <a href="/login">Sign In</a>
        <a href="/register">Register</a>
   </nav>
    </div>
  <Route path = "/"></Route>
    <Route path="/register">
        <Signin type={'register'} setToken={setToken} setUser={setUser}/>
        <Link to="/register"></Link>
     </Route>
    <Route path="/login">
        <Signin type={'login'} setToken={setToken} setUser={setUser}/>
        <Link to={"/login"}></Link>
    </Route>
    {/* <Route path="/users/me">
        <Profile />
    </Route> */}
    <Route path="/posts">
        <GetPosts setPosts={setPosts} posts={posts}/>
    </Route>
  </>
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);

