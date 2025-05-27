import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/LittleLemon.png" alt="Little Lemon Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/booking">Book a Table</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
