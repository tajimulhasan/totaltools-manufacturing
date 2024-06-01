import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./Purchase.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const Purchase = () => {
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [agree, setAgree] = useState(true);
  const [error, setError] = useState("");
  const [product, setProduct] = useState({});
  const [user] = useAuthState(auth);
  const { id } = useParams();
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setOrderQuantity(data.moQuantity);
      });
  }, [id]);

  //   const {
  //     register,
  //     handleSubmit,
  //     reset,
  //     formState: { errors },
  //   } = useForm();

  const {
    productName,
    shortDescription,
    moQuantity,
    availableQuantity,
    price,
    picture,
  } = product;
  const { displayName, email } = user;

  const handleOrderQuantity = (e) => {
    const value = parseInt(e.target.value);
    if (value < moQuantity) {
      setError(`*Minimum order quantity is ${moQuantity}`);
      setAgree(true);
    } else if (value > availableQuantity) {
      setError(`*Quantity has exceed the available quantity`);
      setAgree(true);
    } else {
      setError("");
      setOrderQuantity(value);
      setAgree(false);
    }
  };
  // //submition
  // const onSubmit = async (data) => {

  //     console.log(data);
  //     reset();
  //   };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const clientName = displayName;
    const orderQuantity = e.target.orderQuantity.value;
    const address = e.target.address.value;
    const phoneNumber = e.target.phoneNumber.value;
    const totalPrice = parseInt(orderQuantity) * price; 
    const status = 'unpaid';
    const data = { clientName, productName, email, orderQuantity, address, phoneNumber,  totalPrice, status};

    const url = `http://localhost:5000/orders`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        e.target.reset();
        toast.success("Order place successfully! Go to dashboard and pay the bill.");
      });
      const newQuantity = availableQuantity - parseInt(orderQuantity);  

      setProduct((preQuantity) => ({...preQuantity, availableQuantity: newQuantity}));

      const url1 = `http://localhost:5000/products/${id}`;
      fetch(url1, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({availableQuantity: newQuantity})
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  };

  return (
    <div className="purchase-container">
      <div className="purchase-card">
        <div className="purchase-img">
          <img src={picture} alt="" />
        </div>
        <div className="purchase-details">
          <h1 className="product-name">{productName}</h1>
          <p className="description">{shortDescription}</p>{" "}
          <p className="quantity">Available: {availableQuantity}</p>
          <p className="quantity">Minimum order quantity: {moQuantity}</p>
          <p className="price">Price: ${price} (per)</p>
        </div>
      </div>

      <form onSubmit={handleSubmitOrder} className="input-filed-of-puchase">
        <label class="form-control w-full max-w-xs my-2">
          <span class="label-text mb-1">Name</span>
          <input
            type="text"
            value={displayName}
            readOnly
            disabled
            class="input input-bordered input-md  w-full max-w-xs "
          />
        </label>
        <label class="form-control w-full max-w-xs my-2">
          <span class="label-text mb-1">Email</span>
          <input
            type="email"
            value={email}
            readOnly
            disabled
            class="input input-bordered input-md  w-full max-w-xs "
          />
        </label>
        <label class="form-control w-full max-w-xs my-2">
          <span class="label-text mb-1">Quantity</span>
          <input
            onChange={handleOrderQuantity}
            name="orderQuantity"
            type="number"
            placeholder="Quantity"
            class="input input-bordered input-md  w-full max-w-xs "
            required
            // {...register("quantityNumber", {
            //     required: {
            //         value: true,
            //         message: "Quantity is required"
            //     }
            // })}
          />
          {/* {errors.quantityNumber?.type === "required" && (
            <small className="text-red-500 text ">{errors.quantityNumber.message}</small>
           )} */}
          {error && <p className="text-red-500 text-sm py-1">{error}</p>}
        </label>

        <label class="form-control w-full max-w-xs my-2">
          <span class="label-text mb-1">Address</span>
          <input
            name="address"
            type="text"
            placeholder="Address"
            class="input input-bordered input-md  w-full max-w-xs "
            required
          />
        </label>
        <label class="form-control w-full max-w-xs my-2">
          <span class="label-text mb-1">Contact</span>
          <input
            name="phoneNumber"
            type="number"
            placeholder="phone number"
            class="input input-bordered input-md  w-full max-w-xs "
            required
          />
        </label>

        {/* <input
          disabled={agree}
          type="submit"
          class="form-control w-full max-w-xs mt-4 btn bg-primary hover:text-white hover:bg-black"
        >
          Payment Gateway
        </input> */}
        <input
          disabled={agree}
          type="submit"
          name="submit"
          value="Place Order"
          className="form-control w-full max-w-xs mt-4 btn bg-primary hover:text-white hover:bg-black"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Purchase;
