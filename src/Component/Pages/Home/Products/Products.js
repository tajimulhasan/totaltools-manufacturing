import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Loading/Loading";
import Product from "./Product";
import './Products.css';
const Products = () => {
  const {data: products, isLoading, error } = useQuery("productsDoc", () =>
    fetch("products.json").then((res) => res.json())
  );
  if(isLoading){
    return <Loading></Loading>
  }
  if (error) return 'An error has occurred: ' + error.message
  
  
  return (
    
      <div  className="mt-14 max-w-max mx-auto"> 
      <h1 className="text-center text-4xl tagProduct"><span className="text-primary">HAND TOOLS</span> MANUFACTURER</h1>
      <div className="products">
        {
            products?.map(product => <Product key={product.id} product={product}></Product>)
        }
      </div>
      </div>

  );
};

export default Products;
