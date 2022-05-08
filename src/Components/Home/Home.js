import React from 'react';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner2/Banner2';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
             <Banner2></Banner2>
            <Products></Products>
            <Review></Review>
        </div>
    );
};

export default Home;