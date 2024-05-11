import React from 'react';
import logo from '../../Component/images/ttm-logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div class="main">
           <nav>
               <div className="logo">
                        <img src={logo} alt="" />
               </div>
               <div className="nav-elements">
                     <ul>
                        <Link to='/home'><li><a>Home</a></li></Link>
                        <Link to='/signup'><li><a>Sign up</a></li></Link>
                        <Link to='/login'><li><a>Login</a></li></Link>
                        <Link to='/blog'><li><a>Blog</a></li></Link>
                     </ul>
               </div>
           </nav>
      </div>
    );
};

export default Navbar;