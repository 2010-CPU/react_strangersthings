import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom';

const MessageForm = ({token, postId}) => {
    const [content, setContent] =useState('');


        const onSubmit = async (event) => {
            console.log('hi')
        event.preventDefault()
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${postId}/messages`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                content
                }
            })
        })
        const data = await response.json()
        console.log('data', data)
        setContent('');

    }
   
    return <>
        <form onSubmit={onSubmit}>
        <input type="text" value={content} onChange={(event) => {
            setContent(event.target.value);
        }} placeholder="Type message here"></input>
        <button type="submit">SEND MESSAGE</button>
        </form>
        </>
}
export default MessageForm;