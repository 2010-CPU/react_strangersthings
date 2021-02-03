import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom';



const DeletePost = ({token}) => {


    
    const handleDelete = async (e) => {
        e.preventDefault();
        const response = fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${post._id}`, {
            method: "DELETE",
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json();
        console.log('data:', data)
    }


    return <>
          {
        posts.map(post => {
            return  <div key={post._id}>
            <form onSubmit={handleDelete}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}placeholder="title"></input>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}placeholder="description"></input>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}placeholder="price"></input>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}placeholder="location"></input>
            <button type="submit">Submit</button>
            </form>
            </div>
        })
        }

    </>
}

export default DeletePost;