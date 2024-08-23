import { useContext, useState } from "react";
import "./Navbar.scss";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";
import apiRequest from "../../lib/apiRequest";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  
  const { updateUser, currentUser } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  if(currentUser) fetch();

  const location = useLocation();

  const closeMenu = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      Navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo-3.png" alt="EstateEase" />
        </Link>
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        <Link to="/list" className={`nav-link ${location.pathname === '/list' ? 'active' : ''}`}>Explore</Link>
      </div>
      <div className="right">


{currentUser ? (
          <div
            className="profile-section"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="profile-button">
              {number > 0 && <div className="notification">{number}</div>}
              <img
                src={currentUser.avatar || "/No-avatar.png"}
                alt="user"
                className="avatar"
              />
              <span className="username">{currentUser.username}</span>
            </div>
            {dropdownOpen && (
              <div className="dropdown">
                <Link to="/profile">Profile</Link>
                <button onClick={handleLogout}><i className="fa-solid fa-arrow-right-from-bracket"></i>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login" className="signIn">
              <i className="fas fa-user"></i> Sign in
            </Link>
            <Link to="/register" className="register">
              <i className="fas fa-user-plus"></i> Sign up
            </Link>
          </>
        )}


        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>

        <div className={open ? "menu active" : "menu"}>
          {/* <Link to="/">Home</Link> */}
          <button className="closeMenu" onClick={closeMenu}>×</button>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/list" onClick={closeMenu}>Explore</Link>
          {!currentUser && (
            <>
              <Link to="/login" onClick={closeMenu}><i className="fas fa-user"></i>Sign in</Link>
              <Link to="/register" onClick={closeMenu}><i className="fas fa-user-plus"></i>Sign up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
