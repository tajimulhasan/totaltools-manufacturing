import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './DashBoard.css';
import useAdmin from '../../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user); 
    return (
        <div class="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ms-3">
          {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>         */}
          <h3 className='text-primary text-2xl dashboard-title'>Dashboard</h3>
          <Outlet></Outlet>
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 w-64 min-h-full bg-primary text-base-content dashboard-menu">
            <li><Link to="/dashboard"><a className='text-center'>My Orders</a></Link></li>
            { !admin &&  <li><Link to="/dashboard/addareview"><a>Add A Review</a></Link></li>}
            <li><Link to="/dashboard/myprofile"><a>My Profile</a></Link></li>
            { admin && <li><Link to="/dashboard/allusers"><a>All Users</a></Link></li>}
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;