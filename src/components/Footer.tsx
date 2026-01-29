import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif text-foreground">Worth It?</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Terms of Use</a>
            <a href="mailto:chloe@habitto.nl" className="hover:text-foreground transition-colors">Email: chloe@habitto.nl</a>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-coral fill-coral" /> for gentler self-reflection
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
