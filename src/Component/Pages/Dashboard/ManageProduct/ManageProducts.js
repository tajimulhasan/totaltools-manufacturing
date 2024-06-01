import { useQuery } from "react-query";
import ManageProductChild from "./ManageProductChild";
import Loading from "../../../Loading/Loading";
import './ManageProducts.css';
import { ToastContainer } from "react-toastify";

const ManageProducts = () => {
  const {data: allProducts, isLoading, refetch} = useQuery("allProducts", () => fetch(`http://localhost:5000/products`).then(res => res.json()));

  
 if(isLoading){
  return <Loading></Loading>
 }

  return (
    <div className="manageProducts">
      <h1 className="mp">Manage product</h1>
      <div class="overflow-x-auto manageProducts-primary-conatiner text-center">
        <table class="table">
          <thead>
            <tr className="text-center">
              <th className="text-start ps-24">Products</th>
              <th className="text-start">Total price</th>
              <th className="">Add quantity</th>
              <th className="text-center">Update</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              allProducts.map((allProduct, index) => <ManageProductChild key={allProduct._id} allProduct={allProduct} index={index} refetch={refetch}></ManageProductChild>)
            }
          </tbody>
        </table>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ManageProducts;
