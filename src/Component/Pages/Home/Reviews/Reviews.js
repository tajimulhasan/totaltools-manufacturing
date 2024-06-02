import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import profile1 from "../../../images/boys.png";
import profile2 from "../../../images/girls.png";
import "./Reviews.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import Loading from "../../../Loading/Loading";
import NewReview from "../Review/NewReview";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`https://totaltools-manufacturing-server-site.vercel.app/reviews?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
        });
    }
  }, [reviews, user]);

  if (loading) {
    return <Loading></Loading>;
  }

  const saw = "https://i.ibb.co/X2FQTVH/saw.jpg";
  const tape = "https://i.ibb.co/bdf2VdK/tape.jpg";
  const wrench = "https://i.ibb.co/5rvsyxR/fixed-wrench.jpg";

const reviewParent = (
  <div className="flex">
  {[...Array(5)].map((star, index) => {
    return (
      <label>
        <input
          type="radio"
          name="rating"
          required
        />
        <FaStar
          className="all-stars"
          color={"#FFC107"}
          size={20}
        ></FaStar>
      </label>
    );
  })}
</div>
);
  return (
    <div className="review-main-parent">
      <h1 className="review mt-10">PEOPLE'S FEEDBACK</h1>
      <div className="review-parent">
        <Review
          img={saw}
          name="Saige Fuentes"
          comment="Awesome! This product I bought 45 pices for my shop. And all was sold out in short time. This porduct is amizing for all and they are trusted bro. You can take without any concern."
          profileImg={profile1}
          review={reviewParent}
        ></Review>
        <Review
          img={wrench}
          name="Leighton Kramer"
          comment="Awesome! This product I bought 150 pices for my shop. And all was sold out in short time. This porduct is amizing for all and they are trusted bro. You can take without any concern."
          profileImg={profile1}
          review={reviewParent}

        ></Review>
        <Review
          img={tape}
          name="Pepper"
          comment="Good! I bought 35 pices for my shop. And all was sold out in short time. This porduct is amizing for all and they are trusted. You can take without any concern."
          profileImg={profile2}
          review={reviewParent}

        ></Review>
          <div>
          {reviews?.map((r, index) => (
          <NewReview key={index || r._id} r={r} profileImg={profile2} />
        ))}
          </div>
      </div>
    </div>
  );
};

export default Reviews;
