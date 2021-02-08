import React, { useReducer, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom';
import { MessageList, AddPost} from './index';

const UserNav = ({token, setUser, user, messages, setMessages, posts, setPosts}) => {
    return <>
    {
    <nav className="user-nav">
    <Route path='/messages'>
      <MessageList token={token} setUser={setUser} user={user} messages={messages} setMessages={setMessages}/>
    </Route>

    <Route path="/addposts">
        <AddPost setPosts={setPosts} token={token} posts={posts} user={user} setUser={setUser}/>
    </Route>

    </nav>

    }
    </>
}

export default UserNav