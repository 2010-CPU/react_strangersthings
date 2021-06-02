import React, { useState, useEffect } from 'react';
import { DeletePost, MessageForm } from './index';
import './style/post.css'

const GetPosts = ({token, setToken, setUser}) => {
    const [postList, setPosts] = useState([])

    const fetchPosts = async () => {
        if (token) {
            setToken(token)
                const reponse = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts', {
                    headers: {
                    'Authorization': `Bearer ${token}`
                    }
                })
                const {data: {posts}} = await reponse.json()
                setPosts(posts)
            }
                else {
                const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts')
                const {data: {posts}} = await response.json();
                setPosts(posts)
                }
        }
    
        useEffect (() => {
            fetchPosts();
        }, []);

          return <>
            {
            postList.map(post => {
                const {title, price, location, description,  _id, author, isAuthor} = post;
                return  (
                    <div className="post-container" key={_id}>
                    <div className="post">
                            <div className="post-title"><strong>{title}</strong></div>
                            <div className="post-description"><strong>Description:</strong>  {description}</div>
                            <div className="price"><strong>Price:</strong>  {price}</div>
                            <div className="location"><strong>Location:</strong>  {location}</div>
                            <div className="seller"><strong>Seller:</strong>  {author.username}</div> 
                {
                    isAuthor ?< DeletePost token={token} postList={postList} setPosts={setPosts} postId={_id}/> : ''
                } 
                {
                    token && !isAuthor ? 
                    <MessageForm token={token} setUser={setUser} postId={_id} setPosts={setPosts}/> : ''
                }
                </div>
                </div>
                )
            })
        }
    </>
}

        
export default GetPosts;
