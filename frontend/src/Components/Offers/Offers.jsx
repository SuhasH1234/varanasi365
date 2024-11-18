import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/offers.png'

const Offers = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 800,
      behavior: 'smooth', // This will make the scrolling smooth
    });
  };
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SOLD PRODUCTS</p>
            <button className="cta-button" onClick={scrollToTop}>SHOP NOW</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt='' />
        </div>
    </div>
  )
}

export default Offers