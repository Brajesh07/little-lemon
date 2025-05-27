import "./App.css";
import NavBar from "./Component/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import BookingPage from "./page/BookingPage";
import Contact from "./page/Contact";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
