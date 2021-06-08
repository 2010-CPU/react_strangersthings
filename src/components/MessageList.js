import React, { useEffect } from 'react';
import './style/messageList.css'


const MessageList = ({token, messages, setMessages, user, setUser}) => {

    const getMessageList = async () => {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me', { 
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json();
        setMessages(data.data.messages) 
        setUser(data.data.username) 
    }
    useEffect (() => {
        if (token){
        getMessageList()
        }
    }, []);

    return (
        <div className="message-list">
            <h2 className="messages-to-from">Messages to Me</h2>
            {messages.map((message, idx)  => {           
           return message.fromUser.username !== user ? 
                    <div className="messages" key={idx}>
                        <p id="inbox-title">Re: {message.post.title}</p>
                        <p>Message: {message.content}</p>
                        <p>From: {message.fromUser.username}</p>
                    </div>
                : ''
           })}
            <h2 className="messages-to-from">Messages From Me</h2>
            {messages.map((message, idx) => {
                return  message.fromUser.username == user ? 
                <div className="messages" key={idx}>
                <p id="inbox-title">Re: {message.post.title}</p>
                <p>Message: {message.content}</p>
                <p>From: {message.fromUser.username}</p>
                </div>
            : ''
            })}    
        </div>)
}


export default MessageList;


