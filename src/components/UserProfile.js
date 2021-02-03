import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom';



const UserProfile = ({posts, setPosts, user, setUser, token}) => {
console.log('token:', token)
    

    const getUserData = async () => {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const {data} = await response.json();
        console.log('data:', data)
        console.log('data.posts:', data.posts);
        setUser(data.posts)
    }
    useEffect (() => {
        getUserData();
        
    }, [token]);

      return <>
        {
        posts.map(post => {
            return  <div key={post._id}>
                <h3>{post.title}</h3>
                <ul>
                    <li>What:{post.description}</li>
                    <li>Who: {post.author.username}</li>
                   <li>How much?:{post.price}</li>
                   <li>Where:{post.location}</li>
                </ul>
            </div>
            })
        }
    </>
}

export default UserProfile;