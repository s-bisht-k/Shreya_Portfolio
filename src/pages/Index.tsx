import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import Navigation from "@/components/Navigation";

const Index = () => {
  // Ink trail cursor effect
  useEffect(() => {
    const createInkTrail = (e: MouseEvent) => {
      const trail = document.createElement('div');
      trail.className = 'ink-trail';
      trail.style.left = `${e.clientX - 10}px`;
      trail.style.top = `${e.clientY - 10}px`;
      document.body.appendChild(trail);
      
      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      }, 800);
    };

    let lastTime = 0;
    const throttledCreateInkTrail = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime > 50) { // Throttle to every 50ms
        createInkTrail(e);
        lastTime = now;
      }
    };

    document.addEventListener('mousemove', throttledCreateInkTrail);
    
    return () => {
      document.removeEventListener('mousemove', throttledCreateInkTrail);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
