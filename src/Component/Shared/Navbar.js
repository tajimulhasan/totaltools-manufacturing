import React from "react";
import logo from "../../Component/images/ttm-logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
const handleLogout = () =>{
    signOut(auth);
    localStorage.removeItem('accessToken')
}
  return (
    <div class="main">
      <nav>
        <div className="logo">
         <Link to='/'><img src={logo} alt="" /></Link>
        </div>
        <div className="nav-elements">
          <ul>
            <Link to="/home">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to='/dashboard'> <li>
                <a>Dashboard</a>
              </li></Link>
            <Link to="/blog">
              <li>
                <a>Blog</a>
              </li>
            </Link>
            {user ? (
              <button onClick={handleLogout}><li>
              <a>Log out</a>
            </li></button>
            ) : (
              <Link to="/login">
                <li>
                <a href=""><button class="login-button">Login</button></a>
                </li>
              </Link>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
