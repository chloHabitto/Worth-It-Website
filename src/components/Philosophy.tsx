import { Shield, Sparkles, RefreshCw } from "lucide-react";
import appMockup from "@/assets/mockup-did it again@3x.png";

const principles = [
  {
    icon: Shield,
    title: "No judgment, just honesty",
    description: "This isn't about being hard on yourself. It's about building a gentle, honest relationship with your patterns.",
  },
  {
    icon: Sparkles,
    title: "Past-self to future-self",
    description: "Every log is a message from you, to you. Written with compassion for the person you'll be tomorrow.",
  },
  {
    icon: RefreshCw,
    title: "Patterns reveal truths",
    description: "Over time, your library of experiences becomes a map of what truly matters to you—and what doesn't.",
  },
];

const Philosophy = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-cream-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: App Mockup */}
          <div className="relative flex justify-center animate-fade-in-up order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-coral/5 rounded-[3rem] blur-3xl scale-105" />
              <img 
                src={appMockup} 
                alt="Worth It? app interface" 
                className="relative w-72 md:w-80 lg:w-96 drop-shadow-2xl rounded-3xl"
              />
            </div>
          </div>
          
          {/* Right: Philosophy */}
          <div className="space-y-10 order-1 lg:order-2 animate-fade-in-up animation-delay-200">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-soft-pink/50 text-coral-dark rounded-full text-sm font-medium">
                Our Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
                Did it again?<br />
                <span className="text-gradient">That's okay.</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Worth It? isn't about perfection or punishment. It's a tool for gentle self-understanding.
              </p>
            </div>
            
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <div 
                  key={principle.title}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-coral-light/50 rounded-xl flex items-center justify-center group-hover:bg-coral-light transition-colors">
                    <principle.icon className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
