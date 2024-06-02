import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Component/Pages/Home/Home";
import Blog from "./Component/Pages/Blog/Blog";
import Signup from "./Component/Pages/Auth/Signup/Signup";
import Login from "./Component/Pages/Auth/Login";
import NotFound from "./Component/NotFound/NotFound";
import Navbar from "./Component/Shared/Navbar";
import Footer from "./Component/Shared/Footer";
import DashBoard from "./Component/Pages/Dashboard/DashBoard";
import RequireAuth from "./Component/Pages/Auth/RequireAuth/RequireAuth";
import Purchase from "./Component/Pages/Home/purchase/Purchase";
import MyOrders from "./Component/Pages/Dashboard/MyOrders";
import AddaReview from "./Component/Pages/Dashboard/AddaReview";
import MyProfile from "./Component/Pages/Dashboard/MyProfile";
import AllUsers from "./Component/Pages/Dashboard/AllUsers";
import RequireAdmin from "./RequireAdmin/RequireAdmin";
import Payment from "./Component/Pages/Payment/Payment";
import useAdmin from "./hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import AddProduct from "./Component/Pages/Dashboard/AddaProduct/AddProduct";
import ManageProducts from "./Component/Pages/Dashboard/ManageProduct/ManageProducts";
import ManageAllOrder from "./Component/Pages/Dashboard/ManageAllOrder/ManageAllOrder";

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard></DashBoard>
            </RequireAuth>
          }
        >
          {admin ? (
             <Route
             index
             element={
               <RequireAdmin>
                 <AllUsers></AllUsers>
               </RequireAdmin>
             }
           ></Route>
            
          ) : (
            <Route index element={<MyOrders></MyOrders>}></Route>
          )}
          <Route path="addareview" element={<AddaReview></AddaReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageAllOrders"
            element={
              <RequireAdmin>
                <ManageAllOrder />
              </RequireAdmin>
            }
          ></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
