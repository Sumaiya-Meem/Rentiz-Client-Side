import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import FAQ from './FAQ/FAQ';
import Property from './Property/Property';

const Home = () => {
    return (
        <div>
            <Banner></Banner>  
            <Property></Property>
            <FAQ></FAQ>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;