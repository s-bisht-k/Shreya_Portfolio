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
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center">
          {/* Quick Navigation */}
          <div className="mb-6 sm:mb-8">
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
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
          <div>
            <Button
              variant="glow"
              size="icon"
              onClick={scrollToTop}
              className="mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Back to top
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;