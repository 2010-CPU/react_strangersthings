import React, { useState, useEffect, useReducer } from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'; 


const AddPost = ({token}) => {

    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);
    const [location, setLocation] = useState([]);
    const [isAuthor, setIsAuthor] = useState(false)
    const [posts, setPosts] = useState([])


    const addPost = async () => {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                  title: title,
                  description: description,
                  price: price,
                  location: location,
                  isAuthor: isAuthor,
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
          setIsAuthor(true)
          setPosts([...posts, data.post])
        }

    const handleSubmit = async(e) => {
        e.preventDefault()
        addPost()
    };
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