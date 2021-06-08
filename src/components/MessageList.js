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
                <div className="messages-container" key={idx}>
                    <div className="messages">
                        <p id="inbox-title">Re: {message.post.title}</p>
                        <p>Message: {message.content}</p>
                        <p>From: {message.fromUser.username}</p>
                    </div>
                </div>  
                : ''
           })}
            <h2>Messages From Me</h2>
            {messages.map((message, idx) => {
                return  message.fromUser.username == user ? 
                <div className="messagescontainer" key={idx}>
                <div className="messages">
                <p id="inbox-title">Re: {message.post.title}</p>
                <p>Message: {message.content}</p>
                <p>From: {message.fromUser.username}</p>
                </div>
            </div>
            : ''
            })}    
        </div>)
}

    // return <>
    //         <div className="message-box">  
    //         <h2>Messages To Me</h2>
    //     {
    //         messages.map((message, idx)  => {           
    //        if (message.fromUser.username !== user ){
    //             return <div className="messages-inbox-container" key={idx}>
    //                 <div className="messages-in">
    //             <h3>Message Inbox</h3>
    //             <p>Re: {message.post.title}</p>
    //             <p>Message:{message.content}</p>
    //             <p>From:{message.fromUser.username}</p>
    //             </div>
    //         </div>  
    //        }
    //         else {
    //             return <div className="messages-outbox-container" key={idx}>
    //             <div className="messages-out">
    //             <h3>Message Outbox</h3>
    //             <p>Re: {message.post.title}</p>
    //             <p>Message:{message.content}</p>
    //             <p>From:{message.fromUser.username}</p>
    //             </div>
    //         </div>
    //         }      
    //     })
    //     }
    // </div>
    // </> 
// }

export default MessageList;


