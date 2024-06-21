import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import SearchFriends from "./SearchFriends";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav">
      <div className="navBrand">
        <Link to="/">DBlog</Link>
      </div>

      <button className="hamburgerMenu" onClick={() => setShowMenu(!showMenu)}>
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
          <Link to="/post" className="links">
            Post
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
          <SearchFriends />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
