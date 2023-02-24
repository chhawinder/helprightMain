import React from 'react';


import './tagline.css';

function Tagline() {
  function handleClick(){
    window.location.href='https://chhawinder.github.io/helprightFeed/';
  }

  
  return (
    <>
    <div className='tag'>
      <h1>HELP FOR <br /> BETTER FUTURE</h1>
      <p>YOUR HELP CAN CHANGE SOMEONE’S LIFE</p>

      <button className="button" onClick={handleClick}>VOUNTEAR <br /> NOW</button>


    </div>
      
    </>
  );
}
export default Tagline;
