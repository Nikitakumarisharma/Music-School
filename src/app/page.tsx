import Featured from "@/components/featured";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Mentor from "@/components/Mentor";
import Movingcards from "@/components/movingcards";
import UpcomingWebinars from "@/components/upcomingWebinars";
import WhyChhoseUs from "@/components/whychhoseus";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02">
     
      <HeroSection/>
      <Featured />
      <WhyChhoseUs />
      <Movingcards />
      <UpcomingWebinars />
      <Mentor />
      <Footer />
    </main>
  );
}
