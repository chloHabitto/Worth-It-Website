import FloatingElements from "./FloatingElements";
import heroIllustration from "@/assets/mockup-home@3x.png";
import appStoreBadge from "@/assets/app-store-badge-black.svg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-hero-gradient overflow-hidden flex items-center pt-16">
      <FloatingElements variant="hero" />
      
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-coral-light/50 text-coral-dark rounded-full text-sm font-medium">
                Coming soon to iOS
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-tight">
                Worth It<span className="text-gradient">?</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-serif italic">
                Your past self has something to tell you
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A gentle reflection app that helps you remember how decisions really felt—so next time you're tempted, you'll know if it was worth it.
            </p>
            
            <a
              href="#"
              className="inline-flex justify-center lg:justify-start focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 rounded-lg transition-opacity hover:opacity-90"
              aria-label="Download on the App Store"
            >
              <img
                src={appStoreBadge}
                alt="Download on the App Store"
                className="h-12 md:h-14"
              />
            </a>

            <p className="text-sm text-muted-foreground">
              No judgment. Just honesty with yourself.
            </p>
          </div>
          
          {/* Right: Illustration */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up animation-delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-coral/10 rounded-full blur-3xl scale-110" />
              <img 
                src={heroIllustration} 
                alt="Person hugging themselves with love" 
                className="relative w-80 md:w-96 lg:w-[28rem] drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
