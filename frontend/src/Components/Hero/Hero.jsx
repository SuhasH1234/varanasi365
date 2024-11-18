import React from "react";
import "./Hero.css";

const Hero = () => {
  const images = "heropng.png";

  const scrollToTop = () => {
    window.scrollTo({
      top: 800,
      behavior: 'smooth', // This will make the scrolling smooth
    });
  };

  return (
    <div className="welcome-banner">
      <div className="content">
        <h1 className="title">Empowering Artisans of Varanasi</h1>
        <p className="description">
        Handloom weavers of Varanasi, artisans preserving a timeless heritage. Join us in empowering their craft for global recognition
        </p>
        <button className="cta-button" onClick={scrollToTop}>
          Explore More
        </button>
      </div>
      <div className="hero-images">
      <img
          src={images}
          alt="Ganges"
          className="floating-image image-1"
        />
      </div>
    </div>
  );
};

export default Hero;
