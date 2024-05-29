import React from 'react';
import { toast } from 'react-toastify';

const UnpaidOrderDeleteModal = ({setUnpaidOrderDelete, refetch, unpaidOrderdelete}) => {
    const handleUnpaidOrderDelete = () =>{
        fetch(`http://localhost:5000/orders/${unpaidOrderdelete._id}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              },
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount){
                toast.success("Successfully deleted");
                setUnpaidOrderDelete(null);
                refetch()
            }
          })
    }
    return (
        <div>
        <input type="checkbox" id="unpaid-order-delete" class="modal-toggle" />
        <div class="modal" role="dialog">
          <div class="modal-box">
            <h3 class=" text-lg text-secondary">Are your sure you want to cancel your order: <span className="text-red-400 font-bold">{unpaidOrderdelete?.productName}</span>
            </h3>
            <div class="modal-action">
              <button onClick={() => handleUnpaidOrderDelete()} class="btn btn-error btn-xs">
                Confirm
              </button>
              <label for="unpaid-order-delete" class="btn btn-xs">
                Close!
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UnpaidOrderDeleteModal;