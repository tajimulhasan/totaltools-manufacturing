import React from 'react';
import {toast} from 'react-toastify';

const ManageDeleteModal = ({setProductDelete, productDelete, refetch}) => {
    const handleRemoveProduct = (e) =>{
       fetch(`http://localhost:5000/products/${productDelete._id}`, {
        method: "DELETE",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
       })
       .then(res => res.json())
       .then(data => {
        if(data.deletedCount){
          toast.success("Product delete successfully");
          refetch();
          setProductDelete(null)
         }
       })
    }
    return (
        <div>
                <input type="checkbox" id="product-delete" class="modal-toggle" />
      <div class="modal" role="dialog">
        <div class="modal-box">
          <p className="text-xl mb-5">Are you sure you want to delete this product?<span className="text-primary"></span></p>
          <form method="dialog">
            <label
              for="product-delete"
              class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
          </form>
          <div class="modal-action">
          <button onClick={() => handleRemoveProduct()} class="btn btn-error btn-xs">
            Confirm
          </button>
          <label for="product-delete" class="btn btn-xs">
            Cancel
          </label>
        </div>
        </div>
      </div>
        </div>
    );
};

export default ManageDeleteModal;