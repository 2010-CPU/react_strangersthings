import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom';



const UserProfile = ({user, setUser, token}) => {

    useEffect (() => {
        getUserData();
        // console.log('posts:', posts)
    }, [token]);

    const getUserData = async () => {
        console.log('token:', token)
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
        })
        const data= await response.json()
        console.log('data:', data)
        // setUser(data.data.user)
    }  

    return <>
        <header>
            <div>Posts</div>
            <div>Messages</div>
        </header>
    </>
}
export default UserProfile;