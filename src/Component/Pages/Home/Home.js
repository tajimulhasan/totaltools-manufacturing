import React from 'react';
import Banner from './Banner';
import Products from './Products/Products';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import ChooseUs from './ChooseUs/ChooseUs';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner><br />
            <Products></Products>
            <br />
            <BusinessSummery></BusinessSummery><br /><br />
            <ChooseUs></ChooseUs><br /><br />
              <Reviews></Reviews>
        </div>
    );
};

export default Home;