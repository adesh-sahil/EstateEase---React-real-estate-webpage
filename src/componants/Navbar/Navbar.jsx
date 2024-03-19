import { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';
function Navbar() {
    const[open, setOpen] = useState(false);
    return (
        <nav>
            <div className="left">
                <a href="/" className='logo'>
                    <img src="/logo.png" alt="EstateEase" />
                </a>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/list">Explore</Link>
            </div>
            <div className="right">
                <Link to="/" className='signIn'>Sign in</Link>
                <Link to="/" className='register'>Sign up</Link>

                <div className="menuIcon">
                    <img src="/menu.png" alt="menu" onClick={() => setOpen((prev) => (!prev))}/>
                </div>

                <div className={open ? "menu active" : "menu"}>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Agents</Link>
                <Link to="/">Sign in</Link>
                <Link to="/">Sign up</Link>
                </div>
            </div>
        </nav>
    )  
}

export default Navbar