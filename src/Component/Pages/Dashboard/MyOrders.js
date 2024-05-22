import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './MyOrder.css';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if(user){
            const url = `http://localhost:5000/orders?email=${user.email}`;
            fetch(url, {
                method: "GET",
                headers: {
                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
            .then(res => {
               console.log('res', res);
               if(res.status === 401 || res.status === 403){
                signOut(auth)
                localStorage.removeItem("accessToken")
                navigate('/');
               }
             return res.json()
            })
            .then(data => {
              if(data.length === 0){
                setMessage("No item added (empty)")
              }
              else{
                setOrders(data)
              }
            })
        }
    }, [])

    return (
        <div class="overflow-x-auto table-container">
          <h1>Hi, {user.displayName} {orders.length > 1 ? "your orders" : "your order"}: {orders.length}</h1>
  <table class="table text-center table-container">
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th>Email</th>
        <th>Order Quantity</th>
        <th>Address</th>
        <th>Phone number</th>
        <th>Total amount</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>

        {
            orders.map((order, index) => <tr>
                <th>{index + 1}</th>
                <td>{order.productName}</td>
                <td>{order.email}</td>
                <td>{order.orderQuantity}</td>
                <td>{order.address}</td>
                <td>{order.phoneNumber}</td>
                <td>${order.totalPrice}</td>
                <td>
                  {(order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm bg-green-600 text-white'>Pay</button></Link>}
                  {(order.totalPrice && order.paid) && <span className='text-success'>paid</span>}
                  </td>
                <td></td>
              </tr>)
        }
    </tbody>
  </table>
  <p className='text-3xl text-center mt-6' style={{color: "gray"}}>{message}</p>
</div>
    );
};

export default MyOrders;