import { Heart, Star, Cloud, Sparkles } from "lucide-react";

interface FloatingElementsProps {
  variant?: "hero" | "section";
}

const FloatingElements = ({ variant = "hero" }: FloatingElementsProps) => {
  if (variant === "hero") {
    return (
      <>
        {/* Stars */}
        <Star className="absolute top-20 left-[10%] w-5 h-5 text-gold floating-element fill-gold/30" />
        <Star className="absolute top-32 right-[15%] w-4 h-4 text-gold-light floating-element-delayed fill-gold-light/40" />
        <Star className="absolute bottom-40 left-[20%] w-3 h-3 text-gold floating-element-slow fill-gold/20" />
        <Star className="absolute top-48 left-[5%] w-4 h-4 text-gold-light floating-element fill-gold-light/30" />
        
        {/* Hearts */}
        <Heart className="absolute top-24 right-[8%] w-6 h-6 text-coral floating-element-slow fill-coral/20" />
        <Heart className="absolute bottom-32 right-[25%] w-4 h-4 text-soft-pink floating-element fill-soft-pink/30" />
        <Heart className="absolute top-56 right-[5%] w-3 h-3 text-coral-light floating-element-delayed fill-coral-light/40" />
        
        {/* Clouds */}
        <Cloud className="absolute top-16 right-[20%] w-8 h-8 text-muted-foreground/20 floating-element-delayed" />
        <Cloud className="absolute bottom-48 left-[8%] w-6 h-6 text-muted-foreground/15 floating-element" />
        
        {/* Sparkles */}
        <Sparkles className="absolute bottom-24 right-[12%] w-5 h-5 text-gold floating-element fill-gold/20" />
      </>
    );
  }

  return (
    <>
      <Star className="absolute top-12 left-[5%] w-4 h-4 text-gold floating-element fill-gold/30" />
      <Star className="absolute bottom-20 right-[8%] w-3 h-3 text-gold-light floating-element-slow fill-gold-light/40" />
      <Heart className="absolute top-20 right-[5%] w-4 h-4 text-coral floating-element-delayed fill-coral/20" />
      <Heart className="absolute bottom-12 left-[10%] w-3 h-3 text-soft-pink floating-element fill-soft-pink/30" />
    </>
  );
};

export default FloatingElements;
