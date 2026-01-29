import { MessageSquare, Clock, Heart, HelpCircle } from "lucide-react";
import FloatingElements from "./FloatingElements";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "What did you do?",
    description: "Record the action or behavior you want to remember—eating late, skipping the gym, or saying yes when you meant no.",
  },
  {
    icon: Clock,
    step: "02",
    title: "When was this?",
    description: "Add temporal context to your experience. Was it late at night? After a stressful day? Context matters.",
  },
  {
    icon: Heart,
    step: "03",
    title: "How did it feel after?",
    description: "Capture the physical and emotional aftermath. The regret, the stomach ache, or maybe the unexpected joy.",
  },
  {
    icon: HelpCircle,
    step: "04",
    title: "Was it worth it?",
    description: "Reflect on the overall value. Your honest answer becomes a message to your future self.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <FloatingElements variant="section" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-gold-light/30 text-gold-light rounded-full text-sm font-medium mb-4" style={{ color: 'hsl(var(--coral-dark))' }}>
            Simple & Thoughtful
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            One minute now.<br />
            <span className="text-gradient">Better decisions later.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A gentle 4-step flow that takes less than a minute but creates lasting self-awareness.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.step}
              className="group relative bg-card-gradient p-8 rounded-3xl border border-border/50 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-6 right-6 text-5xl font-serif text-coral/10 group-hover:text-coral/20 transition-colors">
                {step.step}
              </div>
              
              <div className="mb-6">
                <div className="w-14 h-14 bg-coral-light/50 rounded-2xl flex items-center justify-center group-hover:bg-coral-light transition-colors">
                  <step.icon className="w-7 h-7 text-coral" />
                </div>
              </div>
              
              <h3 className="text-xl font-serif text-foreground mb-3">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
