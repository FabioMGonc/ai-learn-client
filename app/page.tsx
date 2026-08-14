import HeroSection from "../components/general/HeroSection";
import TutorsSection from "../components/general/TutorsSection";

const Home = () => {
  return (
    <main className="page space-y-20 bg-background animate-in fade-in duration-500 sm:mt-14">
      <HeroSection />
      <TutorsSection />      
    </main>
  );
}

export default Home;
