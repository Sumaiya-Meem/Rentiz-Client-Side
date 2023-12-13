import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import FAQ from './FAQ/FAQ';
import Property from './Property/Property';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>  
            <Property></Property>
            <FAQ></FAQ>
            <Review></Review>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;