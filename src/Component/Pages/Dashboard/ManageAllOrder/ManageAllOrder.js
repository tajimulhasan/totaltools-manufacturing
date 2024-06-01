import ManageAllOrderChild from './ManageAllOrderChild';
import { useQuery } from 'react-query';
import Loading from '../../../Loading/Loading';
import { signOut } from 'firebase/auth';
import auth from '../../../../firebase.init';
import { Navigate } from 'react-router-dom';
import './ManageAllOrder.css';
import { ToastContainer } from 'react-toastify';
const ManageAllOrder = () => {
  const {data: ManageAllOrders, isLoading, refetch} = useQuery("ManageAllOrders", () =>  fetch('http://localhost:5000/allOrders', {
    method: "GET",
    headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
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
        <div className='manage-all-orders-container'>
            <h1 className='mao'>Manage All Orders</h1>
            <div class="overflow-x-auto">
  <table class="table table-container">
    <thead>
      <tr>
        <th></th>
        <th>Product name</th>
        <th>Email</th>
        <th className='text-center'>Quantity</th>
        <th>Place</th>
        <th>Phone number</th>
        <th>Total</th>
        <th className='text-center'>Status</th>
        <th className='text-center'>Remove/Shiped</th>
      </tr>
    </thead>
    <tbody>
      {
        ManageAllOrders?.map((manageOrder, index) => <ManageAllOrderChild key={manageOrder._id} manageOrder={manageOrder} index={index} refetch={refetch}></ManageAllOrderChild>)
      }
    </tbody>
  </table>
</div>     
<ToastContainer />
        </div>
    );
};

export default ManageAllOrder;