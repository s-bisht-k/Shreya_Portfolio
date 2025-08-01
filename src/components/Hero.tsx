import { Button } from "@/components/ui/button";
import { Download, Mail, ExternalLink } from "lucide-react";
import profileImage from "@/assets/shreya-profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-blue/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary-glow to-accent-blue bg-clip-text text-transparent">
              Shreya Bisht
            </h1>
            <div className="text-xl lg:text-2xl text-muted-foreground mb-6 space-y-2">
              <p className="text-primary-glow font-semibold">Software Developer</p>
              <p className="text-accent-blue font-semibold">Machine Learning Engineer</p>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Passionate Computer Science student building innovative solutions with 
              Machine Learning, Web Development, and AI. Turning ideas into impactful 
              digital experiences through code and creativity.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://drive.google.com/drive/folders/1M2w1B12Hei3AHXGINHLogJNd1TndXl_l', '_blank')}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button 
                variant="glow" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="w-5 h-5" />
                View Projects
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant">
                <img 
                  src={profileImage} 
                  alt="Shreya Bisht" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -inset-4 bg-primary-gradient rounded-full opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;