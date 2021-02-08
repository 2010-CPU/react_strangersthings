import { Link} from 'react-router-dom';


const Navbar = ({token, setToken, user, setUser}) => {
    return <>
    {
    <nav className="nav-bar">
        {user.username && <div className="logged-in">Hello {user.username}</div> }
        <div className="links">Strangers Things</div>

        <Link to="/" className="links">Home</Link>
        <Link to="/login" onClick={() => {
            if (token) {
            setToken('')
            setUser({})
            }
            }} className="login-link">{token ? 'Logout' : 'Sign in'}  </Link> 
        <Link to="users/me" className="user-link">{token ? 'User Profile' : ''}</Link> 
        <Link path to="/messages" className="links">{token ? 'Messages' : ''}</Link>
        <Link path to="/addposts" className="links">{token ? 'Create Post' : ''}</Link>
    </nav>
    }
    </>
}

export default Navbar