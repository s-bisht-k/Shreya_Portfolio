import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-background relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl float-animation"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-blue/10 rounded-full blur-2xl float-animation" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent-cyan bg-clip-text text-transparent animated-gradient">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full pulse-glow"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Computer Science explorer, driven by curiosity and a love for building impactful solutions. Proficient in the MERN stack and modern databases, I create full-stack applications that are both dynamic and efficient. My journey extends into Machine Learning, Generative AI, and Large Language Models where I enjoy experimenting with intelligent systems that solve real-world problems. I'm also skilled in transforming raw data into meaningful insights, using structured logic and analytical tools. With a strong foundation in DSA and an eagerness to stay ahead of the curve, I strive to code with purpose, creativity, and continuous growth in mind.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="glass-card hover-float border-primary/20 backdrop-blur-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/30 rounded-xl backdrop-blur-sm pulse-glow">
                      <Heart className="w-6 h-6 text-primary-glow" />
                    </div>
                    <h3 className="text-xl font-semibold">Interests</h3>
                  </div>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="hover:text-primary transition-colors">• Machine Learning & AI</li>
                    <li className="hover:text-primary transition-colors">• Web Development</li>
                    <li className="hover:text-primary transition-colors">• Generative AI & LLMs</li>
                    <li className="hover:text-primary transition-colors">• Computer Vision</li>
                    <li className="hover:text-primary transition-colors">• Data Science</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover-float border-accent-blue/20 backdrop-blur-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent-blue/30 rounded-xl backdrop-blur-sm pulse-glow" style={{animationDelay: '1s'}}>
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
          
          {/* Education Section */}
          <div className="space-y-6">
            <Card className="glass-card hover-float border-primary/20 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-primary-glow" />
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-foreground text-lg">
                      B.Tech in Computer Science
                    </h4>
                    <p className="text-primary-glow font-semibold">
                      Devbhoomi Uttarakhand University
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 gap-2">
                      <p className="text-muted-foreground text-sm">2022 - 2026</p>
                      <div className="inline-flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-lg">
                        <span className="text-sm font-bold text-primary-glow">8.12/10 GPA</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h5 className="font-semibold text-foreground text-sm">Key Subjects</h5>
                    <div className="space-y-2">
                      <div className="bg-secondary/30 px-3 py-2 rounded-lg border border-border text-sm">
                        <p className="font-medium text-foreground">Data Structures & Algorithms</p>
                      </div>
                      <div className="bg-secondary/30 px-3 py-2 rounded-lg border border-border text-sm">
                        <p className="font-medium text-foreground">Database Management Systems</p>
                      </div>
                      <div className="bg-secondary/30 px-3 py-2 rounded-lg border border-border text-sm">
                        <p className="font-medium text-foreground">Generative AI</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;