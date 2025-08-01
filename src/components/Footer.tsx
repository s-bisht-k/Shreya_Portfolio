import { Button } from "@/components/ui/button";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Quote */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-foreground mb-2">
              "Driven by curiosity, powered by code."
            </p>
            <p className="text-muted-foreground text-sm">
              - Shreya Bisht
            </p>
          </div>
          
          {/* Quick Navigation */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary-glow transition-colors"
                >
                  {link.name}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button
              variant="glow"
              size="icon"
              onClick={scrollToTop}
              className="mb-4"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Back to top
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Shreya Bisht
            <span className="ml-4">© 2024 All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;