import { Button } from "@/components/ui/button";
import { Download, Mail, ExternalLink } from "lucide-react";
import profileImage from "@/assets/shreya-profile-new.jpg";

const Hero = () => {
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
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary-glow to-accent-cyan bg-clip-text text-transparent">
              Shreya Bisht
            </h1>
            <div className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 space-y-2">
              <p className="text-primary-glow font-semibold">Software Developer</p>
              <p className="text-accent-cyan font-semibold">Machine Learning Engineer</p>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed px-4 lg:px-0">
              Passionate Computer Science student building innovative solutions with 
              Machine Learning, Web Development, and AI. Turning ideas into impactful 
              digital experiences through code and creativity.
            </p>
            
            {/* Cinematic Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 lg:px-0">
              <Button 
                variant="hero" 
                size="lg" 
                className="group hover-glow relative overflow-hidden"
                onClick={() => window.open('https://drive.google.com/drive/folders/1M2w1B12Hei3AHXGINHLogJNd1TndXl_l', '_blank')}
              >
                <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Download className="w-5 h-5 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Download CV</span>
              </Button>
              <Button 
                variant="glow" 
                size="lg"
                className="hover-float glass-button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="hover-float glass-button border-primary/30 hover:border-primary/60"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="w-5 h-5" />
                View Projects
              </Button>
            </div>
          </div>
          
          {/* Cinematic Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-card hover-float group mx-auto">
                <img 
                  src={profileImage} 
                  alt="Shreya Bisht" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-cinematic"
                />
                <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
              {/* Glowing orbs around image */}
              <div className="absolute -inset-4 sm:-inset-8 bg-primary-gradient rounded-full opacity-30 blur-2xl pulse-glow"></div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-accent-cyan/40 rounded-full blur-xl float-animation"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-accent-purple/40 rounded-full blur-xl float-animation" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;