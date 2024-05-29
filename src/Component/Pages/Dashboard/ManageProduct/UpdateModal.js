import React from "react";
import { toast } from "react-toastify";

const UpdateModal = ({setAvailableQuantityUpdate, id, availableQuantityUpdate, name, refetch}) => {

    const handleAvailableQuantitySubmit = (e) =>{
        e.preventDefault();
        const newQuantity = parseInt(e.target.availablequantity.value);
        const upadatedQuantity = availableQuantityUpdate + newQuantity;
        const url = `http://localhost:5000/products/${id}`;
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
      <input type="checkbox" id="update-quantity" class="modal-toggle" />
      <div class="modal" role="dialog">
        <div class="modal-box">
          <p className="text-xl mb-5">Update available quantity of <span className="text-primary">{name}</span></p>
          <form method="dialog">
            <label
              for="update-quantity"
              class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
          </form>
          <form onSubmit={handleAvailableQuantitySubmit}>
            <input
              type="number"
              name="availablequantity"
              placeholder="New addable number.."
              class="input input-bordered w-full max-w-xs"
              required
            />
            <input
              type="submit"
              class="input input-bordered btn bg-primary w-full max-w-xs mt-3"
            />
          </form>
        </div>
      </div>

    </div>
  );
};

export default UpdateModal;
