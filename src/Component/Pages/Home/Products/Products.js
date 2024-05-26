import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../Loading/Loading";
import Product from "./Product";
import './Products.css';
const Products = () => {
  const [showAllProduct, setShowAllProduct] = useState(false);
  const {data: products, isLoading, error } = useQuery("productsDoc", () =>
    fetch("http://localhost:5000/products").then((res) => res.json())
  );
  if(isLoading){
    return <Loading></Loading>
  }
  if (error) return 'An error has occurred: ' + error.message;


  const showProducts = showAllProduct ? products : products.slice(0, 6);
  
  return (
    
      <div  className="mt-14 max-w-max mx-auto"> 
      <h1 className="text-center text-4xl tagProduct"><span className="text-primary">HAND TOOLS</span> MANUFACTURER</h1>
      <div className="products">
       
        {
            showProducts?.map(product => <Product key={product._id} product={product}></Product>)
        }
      </div>
      <div className="flex justify-center my-10">
      <button onClick={() => setShowAllProduct(!showAllProduct)} className="text-center btn btn-sm bg-primary">{showAllProduct ? "Show less" : "Show more"}</button>
      </div>
      </div>

  );
};

export default Products;
