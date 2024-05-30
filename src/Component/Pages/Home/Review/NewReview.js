import React from 'react';
import './NewReview.css';   
import { FaStar } from 'react-icons/fa';

const NewReview = ({r, profileImg}) => {
    const {reviewerName, feedback, rating} = r;
    return (
        <div className='profile-parent mt-12'>
              <div className='profile'>
                <img src={profileImg} alt="" />
            </div>
            <div className="review-details">
                <h1>{reviewerName}</h1>
                <div className='flex items-center justify-center'>
                  <p><FaStar size={20}   color={"#FFC107"} /></p>
                    <p className='ms-1'>{rating}/5</p>
                    </div>
                <p className='mt-4 text-center'>{feedback}</p>
            </div>
        </div>
    );
};

export default NewReview;