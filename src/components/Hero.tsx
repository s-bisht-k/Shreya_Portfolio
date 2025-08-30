import { Button } from "@/components/ui/button";
import { Download, Mail, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import profileImage from "@/assets/shreya-profile-new.jpg";

const Hero = () => {
  const titles = [
    "Software Developer",
    "Web Developer", 
    "Generative AI Explorer",
    "ML Enthusiast"
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentTitleIndex, titles]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden pt-16">
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent-blue/15"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/25 rounded-full blur-3xl opacity-30 float-animation"></div>
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-accent-blue/25 rounded-full blur-3xl opacity-30 float-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-gradient opacity-10 rounded-full blur-3xl pulse-glow"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-32 right-32 w-8 h-8 bg-accent-blue rounded-full opacity-60 float-animation" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-32 w-6 h-6 bg-primary rounded-full opacity-40 float-animation" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-accent-purple rounded-full opacity-50 float-animation" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground via-primary-glow to-accent-cyan bg-clip-text text-transparent tracking-wide">
              Shreya Bisht
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 sm:mb-6 h-16 sm:h-20 flex items-center justify-center lg:justify-start">
              <p className="text-primary-glow font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl leading-relaxed px-2 lg:px-0 mx-auto lg:mx-0">
              Passionate Computer Science student building innovative solutions with 
              Machine Learning, Web Development, and AI. Turning ideas into impactful 
              digital experiences through code and creativity.
            </p>
            
            {/* Cinematic Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 lg:px-0">
              <Button 
                variant="hero" 
                size="lg" 
                className="group relative overflow-hidden w-full sm:w-auto"
                onClick={() => window.open('https://drive.google.com/drive/folders/1M2w1B12Hei3AHXGINHLogJNd1TndXl_l', '_blank')}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                <span className="relative z-10">Download CV</span>
              </Button>
              <Button 
                variant="glow" 
                size="lg"
                className="glass-button w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact Me
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="glass-button border-primary/30 hover:border-primary/60 w-full sm:w-auto"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                View Projects
              </Button>
            </div>
          </div>
          
          {/* 3D Profile Image */}
          <div className="flex-shrink-0 order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative group perspective-1000">
              <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-card group mx-auto transform-3d hover:rotate-y-12 hover:rotate-x-6 transition-all duration-700 ease-cinematic shadow-3d">
                <img 
                  src={profileImage} 
                  alt="Shreya Bisht" 
                  className="w-full h-full object-cover object-center scale-110 transform group-hover:scale-125 transition-all duration-700 ease-cinematic filter brightness-110 contrast-110"
                />
                <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-500"></div>
              </div>
              {/* Enhanced 3D Glowing Effects */}
              <div className="absolute -inset-6 sm:-inset-10 bg-primary-gradient rounded-full opacity-20 blur-3xl pulse-glow transform-3d translate-z-[-50px]"></div>
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-accent-cyan/30 rounded-full blur-2xl float-animation transform-3d translate-z-[30px]"></div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-accent-purple/30 rounded-full blur-2xl float-animation transform-3d translate-z-[20px]" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;