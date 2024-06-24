import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {
  const [ShowMenu, SetShowMenu] = useState(false);

  return (
    <nav className='Nav'>
      <div className='NavBrand'>
        <Link to='/'>DBlog</Link>
      </div>

      <button className='HamburgerMenu' onClick={() => SetShowMenu(!ShowMenu)}>
        &#9776;
      </button>

      <div className={`Links ${ShowMenu ? 'Show' : ''}`}>
        <ul>
          <Link to='/' className='Links'>
            Home
          </Link>
          <Link to='/Profile' className='Links'>
            Profile
          </Link>
          <Link to='/Post' className='Links'>
            Post
          </Link>
          <Link to='/Friends' className='Links'>
            Friends
          </Link>
          <Link to='/Login' className='login'>
            Login
          </Link>
          <Link to='/Logout' className='Links'>
            Logout
          </Link>
          <Link to='/SignUp' className='Links'>
            Create An Account
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;