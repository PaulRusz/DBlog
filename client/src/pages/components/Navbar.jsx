import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-brand">
        <Link to="/">DBlog</Link>
      </div>

      <button className="hamburger-menu" onClick={() => setShowMenu(!showMenu)}>
        &#9776;
      </button>

      <div className={`links ${showMenu ? "show" : ""}`}>
        <ul>
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/profile" className="links">
            Profile
          </Link>
          <Link to="/blog" className="links">
            Blog
          </Link>
          <Link to="/friends" className="links">
            Friends
          </Link>
          <Link to="/login" className="login">
            Login
          </Link>
          <Link to="/logout" className="links">
            Logout
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
