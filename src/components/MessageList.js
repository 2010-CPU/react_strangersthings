import React, { useState, useEffect } from 'react';


const MessageList = ({token, messages, setMessages, setUser}) => {

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

    
   
}
    useEffect (() => {
        getMessageList();   
    }, [token]);

    return <>
    {
        messages.map((message, idx)  => {
            return <div key={idx}>
                <p>{message.content}</p>
            </div>
        })
    }
    </>

}

export default MessageList;