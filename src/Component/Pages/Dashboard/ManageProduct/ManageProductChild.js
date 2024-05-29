import React, { useState } from "react";
import './ManageProductChild.css';
import UpdateModal from "./UpdateModal";
import ManageDeleteModal from "./ManageDeleteModal";
import ManageProductUpdateModal from "./ManageProductUpdateModal";

const ManageProductChild = ({ allProduct, index, refetch }) => {
  const [availableQuantityUpdate, setAvailableQuantityUpdate] = useState(null);
  const [productUpdate, setProductUpdate] = useState(null);
  const [productDelete, setProductDelete] = useState(null);
  const {_id, picture, productName, availableQuantity, price } = allProduct;
  const allProductPrice = availableQuantity * price;
  return (
    <tr>
      <td className="">
        <div class="flex items-center gap-3">
          <div class="avatar">
            <div class=" w-12 h-12">
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div class="font-bold">{productName}</div>
            <div class="text-sm opacity-50">Available: {availableQuantity}</div>
          </div>
        </div>
      </td>
      <td>${allProductPrice}</td>
      <td className=" flex justify-center"> 
       <label
       onClick={() => setAvailableQuantityUpdate(availableQuantity)}
        htmlFor="update-quantity"
        className=""
       >
       <svg
         className="update-available-quantity flex flex-center"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M230.91,124A8,8,0,0,1,228,134.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,121.09l92,53.65,92-53.65A8,8,0,0,1,230.91,124ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26ZM232,192H216V176a8,8,0,0,0-16,0v16H184a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V208h16a8,8,0,0,0,0-16Zm-92,23.76-12,7L36,169.09A8,8,0,0,0,28,182.91l96,56a8,8,0,0,0,8.06,0l16-9.33A8,8,0,1,0,140,215.76Z"></path>
        </svg>
       </label>
      </td>
      <td className="w-10">
        <label 
        onClick={() => setProductUpdate(allProduct)}
        htmlFor="product-update"
        class="btn btn-sm bg-primary"
        >Edit</label>
      </td>
      <td className="w-10">
        <label 
        onClick={() => setProductDelete(allProduct)}
        htmlFor="product-delete"
        class="btn btn-sm bg-red-500"
        >Delete</label>
      </td>
    {availableQuantityUpdate && <UpdateModal availableQuantityUpdate={availableQuantityUpdate} setAvailableQuantityUpdate={setAvailableQuantityUpdate} id={_id} name={productName} refetch={refetch}></UpdateModal>}
    {productDelete && <ManageDeleteModal setProductDelete={setProductDelete} productDelete={productDelete} refetch={refetch}></ManageDeleteModal>}
    {productUpdate && <ManageProductUpdateModal productUpdate={productUpdate} setProductUpdate={setProductUpdate} refetch={refetch}/>}
    </tr>
  );
};

export default ManageProductChild;
