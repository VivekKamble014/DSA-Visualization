// Home.js
import React from 'react';
import Navigation from '../Navigation/Navigation'
import Navbar from '../Navigation/Navbar';
import Home_Section_1 from './Home_Section_1';
import Home_Section_2 from './Home_Section_2';
import Home_Section_3 from './Home_Section_3';
import Home_Section_4 from './Home_Section_4';
export default function Home() {
    return (
        <div >
        <Navigation/>
        <Navbar/>
        <Home_Section_1/>
        <Home_Section_2/>
        <Home_Section_3/>
        <Home_Section_4/>
        
        
        </div>
    );
}