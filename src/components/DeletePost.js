import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom';

const DeletePost = ({token, postId, setPosts, postList}) => {

    const handleDelete = async (id) => {
        console.log('id:', id)
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    const data  = await response.json();
    console.log('data:', data)
    if (data.success){
        const newPosts = postList.filter(post => post._id !== postId);
        setPosts(newPosts)
    }
    }
    return <>
        <button className="button-delete" onClick={() => handleDelete(postId)}>DELETE</button>
    </>
}

export default DeletePost;


