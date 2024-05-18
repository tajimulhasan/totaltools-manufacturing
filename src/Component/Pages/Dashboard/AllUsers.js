import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import User from './User';

const AllUsers = () => {
            
    const {data: users, isLoading, error, refetch} = useQuery('users', () => fetch(`http://localhost:5000/users`, {
        method: "GET", 
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
      if(isLoading){
        return <Loading></Loading>
      }

    return (
        <div>
            <h1>Here is all users: {users.length}</h1>
            <div class="overflow-x-auto">
  <table class="table">

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
        users.map((user, index) => <User key={user._id} index={index} user={user} refetch={refetch}></User>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;