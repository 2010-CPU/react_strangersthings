
import React, { useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './style.css';

import {
  Signin,

} from './components';

const App = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
 
  console.log('token: ', token);
  

  return <>
    <h1>
      Strangers Things
    </h1>
  <Route path="/register">
      <Signin type={'register'} setToken={setToken} setUser={setUser}/>
  </Route>
    <Route path="/login">
      <Signin type={'login'} setToken={setToken} setUser={setUser}/>
      { console.log('i work')}
      </Route>
  </>
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);

