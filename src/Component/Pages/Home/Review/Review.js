import React, { useState } from 'react';
import './Review.css';
const Review = ({ comment, name, profileImg, review}) => {
    const [showMore, setShowmore] = useState(false);

    return (
        <div className='profile-parent mt-12'>
            <div className='profile'>
                <img src={profileImg} alt="" />
            </div>
            <div className="review-details">
                <h1>{name}</h1>
                <p className='stars-all'>{review}</p>
                <p className='mt-4 text-justify'>{showMore ? comment : `${comment.slice(0, 70)}`}
                <button className='ms-2 underline text-sm opacity-80' onClick={() => setShowmore(!showMore)}>
                    {showMore ? "See less" : "See more"}
                </button>
                </p>
            </div>
        </div>
    );
};

export default Review;