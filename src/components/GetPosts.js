import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const GetPosts = ({posts, setPosts}) => {
    
    const fetchPosts = async () => {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts')
        const data = await response.json();
        console.log(data.data.posts);
        setPosts(data.data.posts)
    }
    useEffect (() => {
        fetchPosts();
    }, []);
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


export default GetPosts;

// return <Card key={post._id}style={{ width: '18rem' }}>
// <Card.Body>
// <Card.Title>{post.title}</Card.Title>
// <Card.Text>{post.description}</Card.Text>
// <Card.Text>{post.author.username}</Card.Text>
// <Card.Text>{post.price}</Card.Text>
// <Card.Text>{post.location}</Card.Text>
// </Card.Body>
// </Card>