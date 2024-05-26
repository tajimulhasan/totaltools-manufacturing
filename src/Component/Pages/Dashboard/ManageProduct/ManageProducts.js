import React, { useState } from "react";
import { useQuery } from "react-query";
import ManageProductChild from "./ManageProductChild";
import Loading from "../../../Loading/Loading";
import './ManageProducts.css';

const ManageProducts = () => {
  const {data: allProducts, isLoading, refetch} = useQuery("allProducts", () => fetch(`http://localhost:5000/products`).then(res => res.json()));
 if(isLoading){
  return <Loading></Loading>
 }

  return (
    <div className="manageProducts">
      <h1>Manage product</h1>
      <div class="overflow-x-auto manageProducts-primary-conatiner text-center">
        <table class="table">
          <thead>
            <tr>
              <th>Products</th>
              <th>Total price</th>
              <th>Add quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              allProducts.map((allProduct, index) => <ManageProductChild key={allProduct._id} allProduct={allProduct} index={index} refetch={refetch}></ManageProductChild>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
