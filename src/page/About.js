import AboutHeroSection from "../Component/AboutPage/AboutHeroSection";
import HistorySection from "../Component/AboutPage/HistorySection";
import MissionSection from "../Component/AboutPage/MissionSection";
import TeamSection from "../Component/AboutPage/TeamSection";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <AboutHeroSection />
      <MissionSection />
      <TeamSection />
      <HistorySection />
    </div>
  );
};

export default About;
