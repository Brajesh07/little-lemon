import React from "react";

const AboutSection = () => {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>Adrian and Mario – Our passionate founders</p>
      <textarea
        placeholder="Written content coming soon..."
        rows={5}
      ></textarea>
      <div className="owners-photos">
        <img src="/Adrian.png" alt="Adrian" />
        <img src="/Mario.png" alt="Mario" />
      </div>
    </section>
  );
};

export default AboutSection;
