import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FloatingElements from "./FloatingElements";

const CTA = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-cream-dark overflow-hidden">
      <FloatingElements variant="section" />
      
      <div className="container mx-auto px-6">
        <div className="relative max-w-3xl mx-auto text-center animate-fade-in-up">
          <div className="absolute inset-0 bg-coral/5 rounded-[3rem] blur-3xl scale-110" />
          
          <div className="relative bg-card-gradient p-12 md:p-16 rounded-3xl border border-border/50 shadow-soft-lg">
            <span className="inline-block px-4 py-2 bg-coral-light/50 text-coral-dark rounded-full text-sm font-medium mb-6">
              Available on iOS
            </span>
            
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Next time you're tempted,<br />
              <span className="text-gradient">you'll know.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Worth It? is available now on the App Store. Absolutely free—no subscriptions, no ads.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Download
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Absolutely free. No credit card, no sign-up required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
