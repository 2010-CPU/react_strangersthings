import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const GetPosts = ({posts, setPosts}) => {
    
    useEffect (() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts')
        const data = await response.json();
        console.log(data.posts);
        setPosts(data.data.posts)
    }
      return <>
        {
        posts.map(post => {
            return  <div key={post._id}>
                <h3>{post.title}</h3>
                <ul>
                    <li>{post.description}</li>
                    <li>{post.isAuthor}</li>
                   {/* <li>{post.price}</li>
                   <li>{post.location}</li> */}
                </ul>
            </div>
            })
        }
    </>
}


export default GetPosts;