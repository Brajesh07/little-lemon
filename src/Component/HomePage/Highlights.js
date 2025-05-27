import React from "react";

const Highlights = () => {
  return (
    <section className="highlights">
      <h2>Highlights</h2>
      <div className="highlight-item">
        <h3>Online Menu</h3>
        <button>View Menu</button>
      </div>
      <div className="highlight-item">
        <h3>This Week’s Specials</h3>
        <div className="specials-grid">
          <div className="special">
            <img src="https://via.placeholder.com/200" alt="Special 1" />
            <p>
              Grilled Halloumi Salad - Fresh greens with grilled halloumi and
              house vinaigrette.
            </p>
          </div>
          <div className="special">
            <img src="https://via.placeholder.com/200" alt="Special 2" />
            <p>
              Lemon Herb Chicken - Juicy chicken breast with zesty lemon-herb
              sauce.
            </p>
          </div>
          <div className="special">
            <img src="https://via.placeholder.com/200" alt="Special 3" />
            <p>
              Baklava - Classic Mediterranean dessert with layers of nuts and
              honey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
