import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const User = ({user, index, setUserRemove, refetch}) => {
    const {email, role} = user;
         const handleMakeAdmin = () =>{
            fetch(`http://localhost:5000/users/admin/${email}`, {
                method: "PUT",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
            .then(res => {
                       if(res.status === 403){
                        toast.error("Faild to make an admin")
                       }      
                return res.json()
            })
            .then(data => {
                console.log(data);
               if(data.modifiedCount > 0){
                refetch();
                toast.success('Successfully made an admin')
               }

            })
         }
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>{ role !== 'admin' && <button onClick={handleMakeAdmin} class="btn btn-xs bg-primary">Make admin</button>}</td>
        <td><label
         htmlFor='remove-user'
        onClick={() => setUserRemove(user)} class="btn btn-xs bg-red-400">Remove</label></td>
        <ToastContainer/>
      </tr>    
    );
};

export default User;