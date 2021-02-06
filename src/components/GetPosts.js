import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { DeletePost, MessageForm } from './index';


const GetPosts = ({token, setToken, setUser, postId}) => {
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
                console.log(posts)
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
                
                const {title, price, location, description, createdAt, _id, author, isAuthor} = post;
                return  (
                    <div key={_id}>
                    <h3>{title}</h3>
                    <ul>
                        <li>Description: {description}</li>
                        <li>Price: {price}</li>
                       <li>Location: {location}</li>
                       <li>Created At: {createdAt}</li>
                       <li>Seller: {author.username}</li> 
 
                    {
                        isAuthor ?< DeletePost token={token} postList={postList} setPosts={setPosts} postId={_id}/> : ''
                    
                    } 
                    {
                       token && !isAuthor ? 
                        <MessageForm token={token} setUser={setUser} postId={_id} setPosts={setPosts}/> : ''
                    }
            
                    </ul>
                </div>
                )
                })
            }
        </>
    }

    
    








//     const fetchPosts = async () => {
//         const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts')
//         const data = await response.json();
//         console.log(data.data.posts);
//         setPosts(data.data.posts)
//     }
//     useEffect (() => {
//         fetchPosts();
//     }, []);
//       return <>
//         {
//         posts.map(post => {
//             return  <div key={post._id}>
//                 <h3>{post.title}</h3>
//                 <ul>
//                     <li>What:{post.description}</li>
//                     <li>Who: {post.author.username}</li>
//                    <li>How much?:{post.price}</li>
//                    <li>Where:{post.location}</li>
//                 </ul>
//             </div>
//             })
//         }
//     </>
// }


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