import React from 'react';
import './Banner.css';


function Banner() {
  return (
    <>
    <div className='banner-container'>
      <div className='banner'>
        <img 
          src="https://www.homelane.com/blog/wp-content/uploads/2022/11/box-house-design.jpg" 
          alt="Banner " 
          className='banner-image'
        />
        <div className='banner-text-container'>
          <h1 className='banner-text'>Not sure where to go? Perfect.</h1>
          <button className='banner-text-button'>I'm flexible</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Banner;