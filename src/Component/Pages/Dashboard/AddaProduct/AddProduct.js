import React from "react";
import "./AddProduct.css";
import { ToastContainer, toast } from "react-toastify";
const AddProduct = () => {
  const imgageStorageKey = "a6b38fffe0cce648c493ea2e121f1977";

  const handleAddProductSubmit = (event) => {
    event.preventDefault();
    const productName = event.target.name.value;
    const shortDescription = event.target.shortdescription.value;
    const moQuantity = parseInt(event.target.moquantity.value);
    const availableQuantity = parseInt(event.target.availablequantity.value);
    const price = parseInt(event.target.price.value);
    const picture = event.target.picture.files[0];
    const formData = new FormData();
    formData.append("image", picture);
    const imgUrl = `https://api.imgbb.com/1/upload?key=${imgageStorageKey}`;
    fetch(imgUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const pictureUrl = imgData.data.url;
          const data = {
            productName,
            shortDescription,
            moQuantity,
            availableQuantity,
            price,
            picture: pictureUrl,
          };


          const url = "https://totaltools-manufacturing.vercel.app/products";
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result) {
                toast.success("Product added successful");
              } else {
                toast.error("Failed to add product");
              }
              event.target.reset();
            });
        }
      });
  };
  return (
    <div className="addProduct-container">
      <form onSubmit={handleAddProductSubmit}>
        <h1>Add Product</h1>
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
            <span className="label-text">Product image:</span>
          </div>
          <input
            type="file"
            name="picture"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>
        <input
          type="submit"
          value="Add a product"
          className="input input-bordered w-full max-w-xs btn bg-primary mt-3 hover:bg-black hover:text-white"
          required
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
