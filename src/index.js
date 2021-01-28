import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style.css';

import {
  Signin,
} from './components';

const URL = 'https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/'
const App = () => {

  const [token, setToken] = useState('');




  return <>
    <h1>Strangers Things</h1>

  <Route path="/register">
    <Signin type={'register'} setToken={setToken}/>
  </Route>

  <Route path="/login">
    <Signin type={'login'} setToken={setToken}/>
  </Route>
   
  </>
}

ReactDOM.render(
  <Router>
  <App />
  </Router>,
  document.getElementById('app'),
);