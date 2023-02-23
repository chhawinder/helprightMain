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
       


     
        <section className="hero">
          <h1>Welcome to Our Website</h1>
          <p>Discover what we have to offer</p>
          <button>Learn More</button>
        </section>
        <section className="services">
          <h2>Our Services</h2>
          <ul>
            <li><span>Service 1</span></li>
            <li><span>Service 2</span></li>
            <li><span>Service 3</span></li>
          </ul>
        </section>
        <section className="testimonials">
          <h2>Testimonials</h2>
          <ul>
            <li>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <span>- John Doe, Client</span>
            </li>
            <li>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <span>- Jane Smith, Client</span>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Our Company</p>
      </footer>
    </div>
    </>
  );
}

export default HomePage;