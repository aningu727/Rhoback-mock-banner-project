import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url("/assets/golf-hero-img.jpg")` }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Our Newest Golf Collection</h1>
        <p className="hero-subtitle">
          Perfectly styled for every occasion.
        </p>
        <div className="hero-buttons">
          <a href="/shop-men" className="hero-button">SHOP MEN →</a>
          <a href="/shop-women" className="hero-button">SHOP WOMEN →</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
