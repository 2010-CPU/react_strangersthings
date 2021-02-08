
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './styles.css'

import {
  Signin,
  GetPosts,
  AddPost,
  UserProfile,
  MessageList,
  Navbar,
} from './components';

const App =  () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([])
  
  return <>
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

