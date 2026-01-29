import { Button } from "@/components/ui/button";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import appIcon from "@/assets/WorthIt-appIcon-iOS-Default-1024x1024@1x.png";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "how-it-works", label: "How It Works" },
  { id: "philosophy", label: "Philosophy" },
  { id: "features", label: "Features" },
];

const Header = () => {
  const activeSection = useScrollSpy(navItems.map(item => item.id), 150);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-2xl font-serif text-foreground hover:opacity-80 transition-opacity"
          >
            <img 
              src={appIcon} 
              alt="" 
              className="w-8 h-8 rounded-xl"
            />
            Worth It<span className="text-gradient">?</span>
          </button>
          
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-4 py-2 text-sm rounded-lg transition-all duration-300",
                  activeSection === item.id
                    ? "text-primary font-medium bg-coral-light/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <Button variant="hero" size="default" className="hidden sm:flex">
            Download
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
