import React from 'react';
import './Product.css';
import { useNavigate } from 'react-router-dom';
const Product = ({product}) => {
            const {_id, name, picture, moQuantity, availableQuantity, price, shortDescription} = product;
            const navigate = useNavigate();
            const handlePurchase = id =>{
                navigate(`/purchase/${id}`)
            }
    return (
        <div className='product'>
            <img src={picture} alt="" />
           <h2 className='text-2xl font-bold'>{name}</h2> 
           <div className="product-details">
           <p className='description'>{shortDescription.slice(0, 50)}...</p>
           <p>Maximum order quantity: <span>{moQuantity}</span></p>
           <p>Available quantity: <span>{availableQuantity}</span></p>
           <p>Price: <span className='font-bold'>${price}</span></p>
           <button onClick={() => handlePurchase(_id)} className='btn btn-primary  text-md w-full mx-auto mt-2 purchase-button'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path></svg> Purchase</button>
           </div>
        </div>
    );
};

export default Product;