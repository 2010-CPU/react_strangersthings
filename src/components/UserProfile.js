import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom';
import AddPost from './AddPost';
import DeletePost from './DeletePost';
import EditPost from './EditPost';



const UserProfile = ({token, setUser}) => {
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
            <h3>Your Posts</h3>
        {
        postList.map((post, idx) => {
            const {title, price, location, description, _id, createdAt,  author, isAuthor} = post;
            return  <div key={idx}>
                <h3>{title}</h3>
                <ul>
                    <li>What:{description}</li>
                    <li>Who: {author.username}</li>
                   <li>How much?:{price}</li>
                   <li>Where:{location}</li>
                </ul>
                <DeletePost token={token} setPosts={setPosts} postList={postList} postId={_id}/>
              
            </div>
            })
        }
    </>
}

export default UserProfile;