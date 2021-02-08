import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';



const Searchbar = () => {
    const [posts, setPosts] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // const postMatches = (post, text) => {
    //     if (searchTerm === ''){
    //         return '';
    //     } else if (text.toLowerCase.includes(searchTerm.toLowerCase)) {
    //         console.log(post)
    //         return post;
    //     }
    // }
    // const onSubmit = async () => {

    // }
  
    return (
        <>
        <form onSubmit={onSubmit}>
         <input type="text" value={searchTerm} onChange={(event) => {
        setSearchTerm(event.target.value);
        }} placeholder="Search..."></input>
        <button type="submit">Search</button>
        </form>
        </>
       );

}

// export default Searchbar