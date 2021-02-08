import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom';
import AddPost from './AddPost';
import DeletePost from './DeletePost';
// import Navbar from './Navbar'
import MessageList from './MessageList'
// import UserNav from './UserNav';


const UserProfile = ({token, setUser, messages, setMessages, user, posts}) => {
    
    const[postList, setPosts] = useState([])   
    const getUserData = async () => {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json();
        console.log(data)
        console.log(data.data.posts)
        setUser(data.data.posts)
        setPosts(data.data.posts)
    }
    useEffect (() => {
        getUserData();   
    }, [token]);

      return <>
      <div className="your-posts">Your Posts</div>
        {
        postList.map((post, idx) => {
            const {title, price, location, description, _id, createdAt,  author, isAuthor} = post;
            return  <div className="post-container" key={idx}>
                <div className="post">
                <span className="post-info">
                <div className="post-title">{title}</div>
                    <div>Description:  {description}</div>
                   <div>Price: {price}</div>
                   <div>Location: {location}</div>
                    <div>Seller: {author.username}</div>
                </span>
            </div>
            <DeletePost token={token} setPosts={setPosts} postList={postList} postId={_id}/>
            </div>
            })
        }
    </>
}

export default UserProfile;