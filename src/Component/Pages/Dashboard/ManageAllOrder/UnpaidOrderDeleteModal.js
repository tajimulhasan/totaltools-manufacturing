import React from 'react';
import { toast } from 'react-toastify';

const UnpaidOrderDeleteModal = ({setUnpaidOrderDelete, refetch, unpaidOrderdelete}) => {
    const handleUnpaidOrderDelete = () =>{
        fetch(`https://totaltools-manufacturing-server-site.onrender.com/orders/${unpaidOrderdelete._id}`, {
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
        <input type="checkbox" id="unpaid-order-delete" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className=" text-lg text-secondary">Are your sure you want to delete the order: <span className="text-red-400 font-bold">{unpaidOrderdelete?.productName}</span>
            </h3>
            <div className="modal-action">
              <button onClick={() => handleUnpaidOrderDelete()} className="btn btn-error btn-xs">
                Confirm
              </button>
              <label for="unpaid-order-delete" className="btn btn-xs">
                Close!
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UnpaidOrderDeleteModal;