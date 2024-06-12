import React from "react";
import logo from "../../Component/images/ttm-logo.png";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { signOut } from "firebase/auth";
import menuIcon from "../images/list.svg";
import menuCancelIcon from "../images/x.svg";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div className="main">
      <nav>
        <input type="checkbox" id="check" />
        <div className="logo">
          <Link className="cus-ul" to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-elements">
          <ul>
            <Link className="cus-ul" to="/home">
              <li>Home</li>
            </Link>
            <Link className="cus-ul" to="/dashboard">
              {" "}
              <li>Dashboad</li>
            </Link>
            <Link className="cus-ul" to="/blog">
              <li>Blog</li>
            </Link>
            {user ? (
              <button onClick={handleLogout}>
                <li>Log out</li>
              </button>
            ) : (
              <li className="loginAndLogout">
                <Link to="/login">
                  <button className="login-button">Login</button>
                </Link>
                <Link to="/signup">
                  <button className="signup-button">Signup</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
        {(location.pathname === "/dashboard" ||
          location.pathname === "/dashboard/addareview" ||
          location.pathname === "/dashboard/myprofile" ||
          location.pathname === "/dashboard/addProduct" ||
          location.pathname === "/dashboard/manageProducts" ||
          location.pathname === "/dashboard/manageAllOrders") && (
          <div className="open-drawer23">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Options
            </label>
          </div>
        )}
        <label htmlFor="check" className="label-btn">
          <img src={menuIcon} id="list-btn" alt="" />
          <img src={menuCancelIcon} id="cancel" alt="" />
        </label>
      </nav>
    </div>
  );
};

export default Navbar;
