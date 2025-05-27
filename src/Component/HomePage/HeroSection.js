import React from "react";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <p>Experience authentic Mediterranean cuisine with a modern twist.</p>
        <button>Reserve a Table</button>
      </div>
      <img
        src="/hero-section.jpg"
        alt="Restaurant Hero"
        className="hero-image"
      />
    </section>
  );
};

export default HeroSection;
