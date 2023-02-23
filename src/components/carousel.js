
import React, { useState, useEffect } from 'react';
import './carousel.css';

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
      {
        id: 1,
        imgUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 
        caption: 'Slide 1',
      },
      {
        id: 2,
        imgUrl: 'https://images.unsplash.com/photo-1494386346843-e12284507169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        caption: 'Slide 2',
      },
      {
        id: 3,
        imgUrl: 'https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        caption: 'Slide 3',
      },
    ];
  
    const handlePrev = () => {
      setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
    };
  
    const handleNext = () => {
      setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
    };

    return(
        <div className="carousel">
        <img src={slides[activeIndex].imgUrl} alt={slides[activeIndex].caption} />
        <button className="prev" onClick={handlePrev}>&#10094;</button>
        <button className="next" onClick={handleNext}>&#10095;</button>
      </div>
    );


}
export default Carousel;