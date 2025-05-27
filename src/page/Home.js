import AboutSection from "../Component/HomePage/AboutSection";
import HeroSection from "../Component/HomePage/HeroSection";
import Highlights from "../Component/HomePage/Highlights";
import Testimonials from "../Component/HomePage/Testimonials";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <AboutSection />
    </div>
  );
};

export default Home;
