import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'; 


const AddPost = ({token, posts, setPosts}) => {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);
    const [location, setLocation] = useState([]);

    useEffect (() => {
        addPost();
        console.log('posts:', posts)
    }, []);

    const addPost = async () => {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                  title,
                  description,
                  price,
                  location,
                }
              })
          })
          console.log('token:', token)
          const {data} = await response.json();
          console.log('add-data:', data)
          setTitle('');
          setDescription('');
          setPrice('');
          setLocation('');
          setPosts(data)
        }

    
    const handleSubmit = async(e) => {
        e.preventDefault()
        addPost()
    }


    return <>
    <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}placeholder="title"></input>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}placeholder="description"></input>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}placeholder="price"></input>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}placeholder="location"></input>
        <button type="submit">Submit</button>
    </form>
     </>

}

export default AddPost