import { Search, Lock, Smartphone, Cloud } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Search & Browse",
    description: "Find past experiences by category, emotion, or keyword when you need them most.",
  },
  {
    icon: Lock,
    title: "Your reflections stay private",
    description: "End-to-end encryption ensures your personal insights remain yours alone.",
  },
  {
    icon: Cloud,
    title: "Sync across devices",
    description: "iCloud integration keeps your library accessible wherever you are.",
  },
  {
    icon: Smartphone,
    title: "Beautiful day and night",
    description: "A carefully crafted interface that's gentle on the eyes, any time.",
  },
];

const Features = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-coral-light/50 text-coral-dark rounded-full text-sm font-medium mb-4">
            Thoughtfully Built
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Start understanding<br />
            <span className="text-gradient">yourself</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group flex gap-5 p-6 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gold-light/30 rounded-xl flex items-center justify-center group-hover:bg-gold-light/50 transition-colors">
                <feature.icon className="w-6 h-6 text-coral" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
