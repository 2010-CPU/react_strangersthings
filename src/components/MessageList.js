import React, { useEffect } from 'react';


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
        setMessages(data.data.messages)  
        setUser(data.data.username)
    }
    useEffect (() => {
        getMessageList();   
    }, [token]);

    return <>
            <div className="message-box">       
        {
            messages.map((message, idx)  => {           
           if (message.fromUser.username !== user ){
                return <div className="messages-inbox-container" key={idx}>
                    <div className="messages-in">
                <h3>Message Inbox</h3>
                <p>Re: {message.post.title}</p>
                <p>Message:{message.content}</p>
                <p>From:{message.fromUser.username}</p>
                </div>
            </div>  
           }
            else {
                return <div className="messages-outbox-container" key={idx}>
                <div className="messages-out">
                <h3>Message Outbox</h3>
                <p>Re: {message.post.title}</p>
                <p>Message:{message.content}</p>
                <p>From:{message.fromUser.username}</p>
                </div>
            </div>
            }      
        })
        }
    </div>
</>
}

export default MessageList;


