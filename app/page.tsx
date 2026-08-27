import HeroSection from "../components/general/HeroSection";
import TutorsSection from "../components/general/TutorsSection";
import RecentSection from "../components/general/RecentSection";
import CTA from "@/components/general/CTA";


const Home = async () => {
  
  return (
    <main className="page space-y-20 bg-background animate-in fade-in duration-500 sm:mt-14">
      <HeroSection />
      <TutorsSection />      
      <RecentSection />
      <CTA />
    </main>
  );
}

export default Home;
