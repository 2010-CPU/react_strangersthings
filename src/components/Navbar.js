import { Link} from 'react-router-dom';

import './style/nav.css'
const Navbar = ({token, setToken, user, setUser}) => {
    return <>
    {
        <nav className="nav-bar">
        <div id="link-title">Strangers Things</div>
        {user.username && <div className="logged-in">Hello {user.username.toUpperCase()}</div> }
        <div className="link-container">
        <Link to="users/me" className="links">{token ? 'User Profile' : ''}</Link> 
        <Link to="/messages" className="links">{token ? 'Messages' : ''}</Link>
        <Link to="/addposts" className="links">{token ? 'Create Post' : ''}</Link>
        <Link to="/login" onClick={() => {
            if (token) {
                setToken('')
                setUser({})
            }
        }} className="links">{token ? 'Logout' : 'Sign in'}  </Link> 
         <Link path to="/" className="links">Home</Link>
        </div>
    </nav>
    }
    </>
}

export default Navbar