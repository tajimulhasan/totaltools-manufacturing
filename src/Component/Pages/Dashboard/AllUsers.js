import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import User from './User';
import Modal from './Modal';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { Navigate } from 'react-router-dom';
import './AllUsers.css';
const AllUsers = () => {
  const [userRemove, setUserRemove] = useState(null);    
  const {data: users, isLoading, refetch} = useQuery('users', () => fetch(`https://totaltools-manufacturing.vercel.app/users`, {
    method: "GET", 
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      }).then(res => {
        if(res.status === 401 || res.status === 403){
          signOut(auth);
          Navigate('/login')
        }
        return res.json();
      }));
      
      if(isLoading){
        return <Loading></Loading>
      }
      
    return (
        <div className='allUsers'>
            <h1>Here is all users: {users?.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">

    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Admin</th>
        <th>Remove user</th>
      </tr>
    </thead>
    <tbody>
      {
        users?.map((user, index) => <User key={user._id} index={index} user={user} setUserRemove={setUserRemove} refetch={refetch} ></User>)
      }
    </tbody>
  </table>
</div>
{userRemove && <Modal userRemove={userRemove} setUserRemove={setUserRemove} refetch={refetch}></Modal>}
        </div>
    );
};

export default AllUsers;