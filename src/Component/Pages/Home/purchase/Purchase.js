import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Purchase.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const Purchase = () => {
  const [orderQuantity, setOrderQuantity] = useState(0);
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

  const {
    name,
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
    } else if (value > availableQuantity) {
      setError(`*Quantity has exceed the available quantity`);
    } else {
      setError("");
      setOrderQuantity(value);
    }
  };

  return (
    <div className="purchase-container">
      <div className="purchase-card">
        <div className="purchase-img">
          <img src={picture} alt="" />
        </div>
        <div className="purchase-details">
          <h1>{name}</h1>
          <p className="description">{shortDescription}</p>{" "}
          <p className="quantity">Available: {availableQuantity}</p>
          <p className="quantity">Minimum order quantity: {moQuantity}</p>
          <p className="price">Price: ${price} (per)</p>
        </div>
      </div>

      <div className="input-filed-of-puchase">
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
            type="number"
            placeholder="Quantity"
            class="input input-bordered input-md  w-full max-w-xs "
            required
          />
          {error && <p className="text-red-500 text-sm py-1">{error}</p>}
        </label>

        <label class="form-control w-full max-w-xs my-2">
          <span class="label-text mb-1">Address</span>
          <input
            type="text"
            placeholder="Address"
            class="input input-bordered input-md  w-full max-w-xs "
            required
          />
        </label>
        <label class="form-control w-full max-w-xs my-2">
          <span class="label-text mb-1">Contact</span>
          <input
            type="number"
            placeholder="phone number"
            class="input input-bordered input-md  w-full max-w-xs "
            required
          />
        </label>
        <label class="form-control w-full max-w-xs mt-4">
        <button class="btn bg-primary hover:text-white hover:bg-black">Payment Gateway</button>
        </label>
      </div>
    </div>
  );
};

export default Purchase;
