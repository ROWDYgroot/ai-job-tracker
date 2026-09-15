import AboutHero from "../components/About/AboutHero";
import ProblemSection from "../components/About/ProblemSection";
import SolutionSection from "../components/About/SolutionSection";
import HowItWorks from "../components/About/HowItWorks";
import AboutCTA from "../components/About/AboutCTA";

const About = () => {
  return (
    <main>
      <AboutHero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <AboutCTA />
    </main>
  );
};

export default About;