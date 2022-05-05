import React from 'react';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
        </div>
    );
};

export default Home;