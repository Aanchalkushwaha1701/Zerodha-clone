import React from 'react';

import Awards from "./Award";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Statistics from "./Stats";
import Education from './Education';
import OpenAccount from '../OpenAccount';
import NavBar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
        
        <Hero/>
        <Awards/>
        <Statistics/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        

        </>
     );
}

export default HomePage;