import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom';

const MessageList = ({token, messages, setMessages, user, setUser}) => {

    const getMessageList = async () => {
        console.log('token:', token)
        const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me', { 
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json();
        console.log('data-object:', data)
        console.log(data.data.messages)
        setMessages(data.data.messages)  
        console.log(data.data.username)
        setUser(data.data.username)
    }
    useEffect (() => {
        getMessageList();   
    }, [token]);

    return <>

    {
            messages.map((message, idx)  => {
           if (message.fromUser.username !== user ){
                return <div className="messages-to-me-container" key={idx}>
                    <div className="messages-to">
                <h3>Message Inbox</h3>
                <p>Re: {message.post.title}</p>
                <p>Message:{message.content}</p>
                <p>From:{message.fromUser.username}</p>
                </div>
            </div>
           }
            else {
                return <div className="messages-from-me-container" key={idx}>
                <div className="messages-from">
                <h3>Message Outbox</h3>
                <p>Re: {message.post.title}</p>
                <p>Message:{message.content}</p>
                <p>From:{message.fromUser.username}</p>
                </div>
            </div>
            }      
        })
    }
</>
}

export default MessageList;


