import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Computer Science Engineering student at 
              <span className="text-primary-glow font-semibold"> Devbhoomi Uttarakhand University</span> 
              (2022-2026), driven by curiosity and powered by code.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in technology spans across multiple domains, from crafting 
              intelligent machine learning models to building seamless web applications. 
              I specialize in emotion detection systems, computer vision, and modern 
              web development frameworks.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring the latest developments 
              in Generative AI and Large Language Models, always eager to learn and 
              implement cutting-edge technologies in real-world applications.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-card-gradient border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Heart className="w-6 h-6 text-primary-glow" />
                  </div>
                  <h3 className="text-xl font-semibold">Interests</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Machine Learning & AI</li>
                  <li>• Web Development</li>
                  <li>• Generative AI & LLMs</li>
                  <li>• Computer Vision</li>
                  <li>• Data Science</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-card-gradient border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent-blue/20 rounded-lg">
                    <Target className="w-6 h-6 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-semibold">Goals</h3>
                </div>
                <p className="text-muted-foreground">
                  To become a leading ML Engineer, building AI solutions that make 
                  a positive impact on society while continuously learning and 
                  growing in the ever-evolving tech landscape.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;