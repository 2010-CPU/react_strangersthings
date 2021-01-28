import React, { useState } from 'react';

const URL = 'https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT'


const Signup = ({setToken}) => {
 
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('username: ', username);
    console.log('password: ', password);
    const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/register', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    });
    console.log('response:', response)
    const {data} = await response.json()
    console.log('{data}:', {data});
    const token = data?.token
    console.log('token:', token);
    localStorage.setItem('token', )
    setToken(token)
    setUsername('');
    setPassword('');
} 
    return <>
    <form onSubmit={handleSubmit}>
    <input type="text" value={username} placeholder="username" onChange={(event) => setUsername(event.target.value)}></input>
    <input type="password" value={password} placeholder="password" onChange={(event) => setPassword(event.target.value)}></input>
    <button type="submit">Sign Up!</button>
    </form>
    </>
}



export default Signin;