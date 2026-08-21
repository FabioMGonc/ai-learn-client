import HeroSection from "../components/general/HeroSection";
import TutorsSection from "../components/general/TutorsSection";
import RecentSection from "../components/general/RecentSection";

const Home = () => {
  return (
    <main className="page space-y-20 bg-background animate-in fade-in duration-500 sm:mt-14">
      <HeroSection />
      <TutorsSection />      
      <RecentSection />
    </main>
  );
}

export default Home;
