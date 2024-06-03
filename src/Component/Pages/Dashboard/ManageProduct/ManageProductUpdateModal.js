import React from 'react';
import { toast } from 'react-toastify';

const ManageProductUpdateModal = ({productUpdate, setProductUpdate, refetch}) => {

    const handleUpdateProductSubmit = (event) =>{
        event.preventDefault();
        const productName = event.target.name.value;
    const shortDescription = event.target.shortdescription.value;
    const moQuantity = parseInt(event.target.moquantity.value);
    const availableQuantity = parseInt(event.target.availablequantity.value);
    const price = parseInt(event.target.price.value);
    const picture = event.target.picture.value;
        const data = {productName, shortDescription, moQuantity, availableQuantity, price, picture};

    const url = `https://totaltools-manufacturing.vercel.app/product/${productUpdate._id}`;
        fetch(url, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
           body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                toast.success("Product update successfully");
                refetch()
                setProductUpdate(null)
            }
        })
    }
    return (
        <div className="add-info-parent">
        <input type="checkbox" id="product-update" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box myProfileAnd-update-modal-width-common">
            <p className="text-xl text-center">Update info</p>
            <form method="dialog">
              <label
                for="product-update"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </label>
            </form>
            <form onSubmit={handleUpdateProductSubmit}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Product name:</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>
       <div className="quantity-manage-container flex justify-between">
        <label className="form-control w-36 max-w-xs">
          <div className="label">
            <span className="label-text">Available quantity:</span>
          </div>
          <input
            type="number"
            name="availablequantity"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control w-36 max-w-xs">
          <div className="label">
            <span className="label-text">Minimum order qua: </span>
          </div>
          <input
            type="number"
            name="moquantity"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>
       </div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Price:</span>
          </div>
          <input
            type="number"
            name="price"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Short description:</span>
          </div>
          <textarea
            type="text"
            name="shortdescription"
            placeholder="Type here"
            className="textarea textarea-bordered w-full max-w-xs "
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Product image link:</span>
          </div>
          <input
            type="text"
            name="picture"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>
        <input
          type="submit"
          value="Update"
          className="input input-bordered w-full max-w-xs btn bg-primary mt-3 hover:bg-black hover:text-white"
          required
        />
      </form>
          </div>
        </div>
      </div>
    );
};

export default ManageProductUpdateModal;