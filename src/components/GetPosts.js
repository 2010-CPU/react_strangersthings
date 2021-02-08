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
                    const {title, price, location, description,  _id, author, isAuthor} = post;
                    return  (
                        <div className="post-container">
                        <div className="post" key={_id}>
                                <div className="post-title">{title}</div>
                                <div className="post-description">Description:  {description}</div>
                                <div className="price">Price:  {price}</div>
                                <div className="location">Location:  {location}</div>
                                <div className="seller">Seller:  {author.username}</div> 
                            </div>
                {
                    isAuthor ?< DeletePost token={token} postList={postList} setPosts={setPosts} postId={_id}/> : ''
                
                } 
                {
                token && !isAuthor ? 
                    <MessageForm token={token} setUser={setUser} postId={_id} setPosts={setPosts}/> : ''
                }
                </div>
                )
            })
        }
                
                </>
            }

            





// return  (
//     <div key={_id}>
//     <h3>{title}</h3>
//     <ul>
//         <li>Description: {description}</li>
//         <li>Price: {price}</li>
//        <li>Location: {location}</li>
//        <li>Created At: {createdAt}</li>
//        <li>Seller: {author.username}</li> 

//     {
//         isAuthor ?< DeletePost token={token} postList={postList} setPosts={setPosts} postId={_id}/> : ''
    
//     } 
//     {
//        token && !isAuthor ? 
//         <MessageForm token={token} setUser={setUser} postId={_id} setPosts={setPosts}/> : ''
//     }

//     </ul>
// </div>
// )


export default GetPosts;

// return  (
                    
//     <div className="card" key={_id} >
//         <div className="card-body" >
//             <h5 className="card-title">{title}</h5>
//             <h6 className="card-subtitle mb-2 text-muted">Location: {location}</h6>
//             <p className="card-text">{description}</p>
//             <p className="card-text">Seller: {author.username}</p>
//             <p className="card-text">Price: {price}</p>
//             {/* <Link path="/messages">Send a Message</Link> */}
    
//     {
//         isAuthor ?< DeletePost token={token} postList={postList} setPosts={setPosts} postId={_id}/> : ''
    
//     } 
//     {
//        token && !isAuthor ? 
//         <MessageForm token={token} setUser={setUser} postId={_id} setPosts={setPosts}/> : ''
//     }
//     </div>
//     </div>
// )
// })
// }

// </>