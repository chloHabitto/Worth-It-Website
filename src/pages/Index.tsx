import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Philosophy from "@/components/Philosophy";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="philosophy">
          <Philosophy />
        </div>
        <div id="features">
          <Features />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
