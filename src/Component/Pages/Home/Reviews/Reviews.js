import React from "react";
import Review from "../Review/Review";
import profile1 from "../../../images/boys.png";
import profile2 from "../../../images/girls.png";
import "./Reviews.css";

const Reviews = () => {
  const saw = "https://i.ibb.co/X2FQTVH/saw.jpg";
  const tape = "https://i.ibb.co/bdf2VdK/tape.jpg";
  const wrench = "https://i.ibb.co/5rvsyxR/fixed-wrench.jpg";

  const review1 = (
    <div class="rating">
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  </div>
  );
  const review2 = (
    <div class="rating">
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"  />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"  />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  </div>
  );
  const review3 = (
    <div class="rating">
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"  />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  </div>
  );
  
  return (
    <div className="review-main-parent">
      <h1 className="review mt-10">PEOPLE'S FEEDBACK</h1>
      <div className="review-parent flex justify-evenly">
        <Review
          img={saw}
          name="Saige Fuentes"
          comment="Awesome! This product I bought 45 pices for my shop. And all was sold out in short time. This porduct is amizing for all and they are trusted bro. You can take without any concern."
          profileImg={profile1}
          review={review1}
        ></Review>
        <Review
          img={wrench}
          name="Leighton Kramer"
          comment="Awesome! This product I bought 150 pices for my shop. And all was sold out in short time. This porduct is amizing for all and they are trusted bro. You can take without any concern."
          profileImg={profile1}
          review={review2}
        ></Review>
        <Review
          img={tape}
          name="Pepper"
          comment="Good! I bought 35 pices for my shop. And all was sold out in short time. This porduct is amizing for all and they are trusted. You can take without any concern."
          profileImg={profile2}
          review={review3}
        ></Review>
      </div>
    </div>
  );
};

export default Reviews;
