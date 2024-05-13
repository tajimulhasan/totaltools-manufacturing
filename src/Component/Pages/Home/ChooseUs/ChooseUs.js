import React from 'react';
import imgSec from '../../../images/docImage.png';
import './ChooseUs.css';
const ChooseUs = () => {
    return (
        <div className='ourTools-p '>
            <div className="imgSec">
                <img src={imgSec} alt="" />
            </div>

            <div className="chooseDetails">
                <h2><span className='text-primary'>OUR</span> TOOLS</h2>
                <p>At TotalTools, we take immense pride in crafting high-quality tools that are essential for professionals and enthusiasts alike We product has Precision Engineering, durability, versatility, ergonomic design, innovation. Built to withstand the rigors of daily use, our tools are constructed from high-quality materials that are chosen for their durability and longevity. </p>
            </div>
        </div>
    );
};

export default ChooseUs;