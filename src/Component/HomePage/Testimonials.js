import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Guests Say</h2>
      <div className="testimonial">
        <img src="/user-one.png" alt="User" className="user-photo" />
        <div>
          <p>⭐⭐⭐⭐⭐</p>
          <p>"The food is absolutely delicious and the ambiance is so cozy!"</p>
          <p>
            <strong>- Sarah</strong>
          </p>
        </div>
      </div>
      <div className="testimonial">
        <img src="/user-2.png" alt="User" className="user-photo" />
        <div>
          <p>⭐⭐⭐⭐</p>
          <p>"Great service and even better lemon tart. Will come again!"</p>
          <p>
            <strong>- John</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
