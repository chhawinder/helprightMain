import './Homepage.css';


import React, { useState, useEffect } from 'react';
import Carousel from './carousel';
import Navbar from './Navbar';
import Tagline from './tagline';
import ButtonToTop from './buttontotop';

function HomePage() {

   
  return (
    <>
    <Navbar/>
    <ButtonToTop/>
    <div className="container">
        
      
      <main>
        <div className='container'>
          <Tagline/>
          
          <Carousel/>
       </div>
       

      </main>
      <footer>
        <p>&copy; 2023 Our Company</p>
      </footer>
    </div>
    </>
  );
}

export default HomePage;
