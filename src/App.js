import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Component/Pages/Home/Home';
import Blog from './Component/Pages/Blog/Blog';
import Signup from './Component/Pages/Auth/Signup/Signup';
import Login from './Component/Pages/Auth/Login';
import NotFound from './Component/NotFound/NotFound';
import Navbar from './Component/Shared/Navbar';
import Footer from './Component/Shared/Footer';
import DashBoard from './Component/Pages/Dashboard/DashBoard';
import RequireAuth from './Component/Pages/Auth/RequireAuth/RequireAuth';
import Purchase from './Component/Pages/Home/purchase/Purchase';

function App() {
  return (
    <>
    <Navbar></Navbar>
       <Routes>
         <Route path='/'element={<Home></Home>}></Route>
         <Route path='/home'element={<Home></Home>}></Route>
         <Route path='/dashboard'element={
         <RequireAuth>
          <DashBoard></DashBoard>
         </RequireAuth>
         }></Route>
         <Route path='/purchase/:id'element={
         <RequireAuth>
          <Purchase></Purchase>
         </RequireAuth>
         }></Route>
         <Route path='/blog'element={<Blog></Blog>}></Route>
         <Route path='/signup'element={<Signup></Signup>}></Route>
         <Route path='/login'element={<Login></Login>}></Route>
         <Route path='*'element={<NotFound></NotFound>}></Route>
        </Routes>  
        <Footer></Footer>      
        
    </>
  );
}

export default App;
