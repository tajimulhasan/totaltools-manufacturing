import { useQuery } from "react-query";
import ManageProductChild from "./ManageProductChild";
import Loading from "../../../Loading/Loading";
import './ManageProducts.css';
import { ToastContainer } from "react-toastify";

const ManageProducts = () => {
  const {data: allProducts, isLoading, refetch} = useQuery("allProducts", () => fetch(`https://totaltools-manufacturing-server-site.onrender.com/products`).then(res => res.json()));


 if(isLoading){
  return <Loading></Loading>
 }

  return (
    <div className="manageProducts">
      <h1 className="mp">Manage product</h1>
      <div className="overflow-x-auto manageProducts-primary-conatiner text-center">
        <table className="table">
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
