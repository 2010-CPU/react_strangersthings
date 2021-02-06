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
    // setPosts(posts)
    if (data.success){
        const newPosts = postList.filter(post => post._id !== postId);
        setPosts(newPosts)
    }
}



    return <>
         <button onClick={() => handleDelete(postId)}>DELETE</button>
    </>
}

export default DeletePost;

// const handleDelete = async (e) => {
//     e.preventDefault();
//     const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${post._id}`, {
//         method: "DELETE",
//         headers: {
//             'Content-Type' : 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     })
//     const {data} = await response.json();
//     console.log('data:', data)
//         const newPostList = postList.filter((post, _id) => {
//             console.log('post:', post)
//         })
//         setPosts(newPostList)
    
// }

