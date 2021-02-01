import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const GetPosts = ({posts, setPosts}) => {
    

    useEffect (() => {
        fetchPosts();
        console.log('posts:', posts)
    }, []);

    const fetchPosts = async () => {

        const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts')
        const data = await response.json();
        console.log(data.data.posts);
        setPosts(data.data.posts)
    }
      return <>
            {
            posts.map(post => {
               return  <div key={`post-${post.id}`}>
                   <h3>{post.title}</h3>
                   <ul>
                    <li>{post.description}</li>
                   {/* <li>{post.author}</li> */}
                   {/* <li>{post.price}</li>
                   <li>{post.location}</li> */}
                   </ul>
               </div>
            })
        }
      </>
}


export default GetPosts;