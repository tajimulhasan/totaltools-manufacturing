import React from "react";
import Banner from "./Banner";
import Products from "./Products/Products";
import BusinessSummery from "./BusinessSummery/BusinessSummery";
import ChooseUs from "./ChooseUs/ChooseUs";
import Reviews from "./Reviews/Reviews";
import ContactUs from "./ContactUs/ContactUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <br />
      <Products />
      <br />
      <BusinessSummery />
      <br />
      <br />
      <ChooseUs />
      <br />
      <br />
      <Reviews />
      <ContactUs />
    </div>
  );
};

export default Home;
