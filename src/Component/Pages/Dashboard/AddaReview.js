import React, { useRef, useState } from "react";
import "./AddaReview.css";
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const AddaReview = () => {
    const [rating, setRating] = useState(null);
    const handleReviewComment = useRef('');
    const [user] = useAuthState(auth);
    
  
const handleReviewSubmit = e =>{
    e.preventDefault();
    const email = user.email;
    const reviewerName = user.displayName;
    const feedback = handleReviewComment.current.value;
    const data = {rating, feedback, email, reviewerName};

    const url = `http://localhost:5000/reviews`;
    fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        e.target.reset();
        toast("Thank you for the feedback!");
    })

}

  return (
    <div className="review-container">
        <form onSubmit={handleReviewSubmit}>
        <div class="label">
            <span class="label-text">Please give us a star rating</span>
          </div>
      <div className="flex">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
                required
              />
              <FaStar
                className="all-stars"
                color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                size={40}
              ></FaStar>
            </label>
          );
        })}
      </div>
      
      <div className="review-comment mt-6">
        <label class="form-control">
          <div class="label">
            <span class="label-text">What would you tell others about your experience?</span>
          </div>
          <textarea
            ref={handleReviewComment}
            class="textarea textarea-bordered h-24"
            placeholder="Descripe about our product..."
            required
          ></textarea>
        </label>
      </div>
      <div className="button">
      <input     
          type="submit"
          name="submit"
          value="Submit Review"
          className="form-control w-full mt-4 btn bg-primary hover:text-white hover:bg-black"
        />
      </div>
        </form>
        <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddaReview;
