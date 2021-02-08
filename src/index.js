
import React, { useReducer, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom';
// import './bootstrap.css';
import './styles.css'

import {
  Signin,
  GetPosts,
  AddPost,
  DeletePost,
  UserProfile,
  MessageForm,
  MessageList,
  Navbar,
  // UserNav,
  // SearchBar,
} from './components';

const App =  () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([])
  
  return <>

    {/* <nav className="nav-bar">
      {user.username && <div className="logged-in">Hello {user.username}</div> }
      <div className="links">Strangers Things</div>
          <Link to="/" className="links">Home</Link>
  {/*         <Link className="links"to="/login">Sign In</Link> */}
          {/* <Link to="/login" onClick={() => {
              if (token) {
              setToken('')
              setUser({})
              }
              }} className="links">{token ? 'Logout' : 'Sign in'}  </Link> 
          {/* <Link to="/users/me" className="links">User Profile</Link> */}
          {/* <Link to="users/me" className="links">{token ? 'User Profile' : ''}</Link> 
    </nav>  */}
         
    <Navbar token={token} setToken={setToken} messages={messages} setMessages={setMessages} user={user}  setUser={setUser} />
   
    <Route exact path="/">
        <GetPosts setPosts={setPosts} posts={posts} token={token} setToken={setToken}/>
    </Route>

    <Route path="/register">
        <Signin type={'register'} setToken={setToken} token={token} setUser={setUser}/>
     </Route>

    <Route path="/login">
        <Signin type={'login'} setToken={setToken} setUser={setUser}/>
    </Route>

    <Route path="/addposts">
        <AddPost setPosts={setPosts} token={token} posts={posts} user={user} setUser={user}/>
    </Route>
    <Route path='/users/me'>
        <UserProfile user={user} setUser={setUser} setPosts={setPosts} token={token} posts={posts} messages={messages} setMessages={setMessages}/>
    </Route>
    
    <Route path='/messages'>
      <MessageList token={token} setUser={setUser} user={user} messages={messages} setMessages={setMessages}/>
     </Route>

  </>
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);

