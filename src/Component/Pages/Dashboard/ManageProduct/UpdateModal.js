import React from "react";
import { toast } from "react-toastify";

const UpdateModal = ({setAvailableQuantityUpdate, id, availableQuantityUpdate, name, refetch}) => {

    const handleAvailableQuantitySubmit = (e) =>{
        e.preventDefault();
        const newQuantity = parseInt(e.target.availablequantity.value);
        const upadatedQuantity = availableQuantityUpdate + newQuantity;
        const url = `https://totaltools-manufacturing-server-site.onrender.com/products/${id}`;
        fetch(url, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({availableQuantity: upadatedQuantity})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                toast.success("Available quantity updated");
                e.target.reset();
                refetch();
                setAvailableQuantityUpdate(null);
            }
            else{
              toast.error("Failed to update quantity")
            }
           
        })

    }
  return (
    <div>
      <input type="checkbox" id="update-quantity" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <p className="text-xl mb-5">Update available quantity of <span className="text-primary">{name}</span></p>
          <form method="dialog">
            <label
              for="update-quantity"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
          </form>
          <form onSubmit={handleAvailableQuantitySubmit}>
            <input
              type="number"
              name="availablequantity"
              placeholder="New addable number.."
              className="input input-bordered w-full max-w-xs"
              required
            />
            <input
              type="submit"
              className="input input-bordered btn bg-primary w-full max-w-xs mt-3"
            />
          </form>
        </div>
      </div>

    </div>
  );
};

export default UpdateModal;
