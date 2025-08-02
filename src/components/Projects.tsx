import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Hyogen",
      description: "An advanced emotion detection system using DeepFace and OpenCV for real-time facial emotion recognition. The system can accurately identify and classify multiple emotions from live video feeds or static images.",
      technologies: ["Python", "OpenCV", "DeepFace", "Computer Vision", "Machine Learning"],
      github: "https://github.com/shreyabisht",
      demo: "#",
      icon: <Eye className="w-8 h-8" />,
      gradient: "from-accent-blue to-accent-purple"
    },
    {
      title: "SmartDerma",
      description: "A sophisticated skin disease classification system built with MobileNetV2 and Flask. This AI-powered application helps in early detection and classification of various skin conditions using advanced deep learning techniques.",
      technologies: ["Python", "TensorFlow", "MobileNetV2", "Flask", "Deep Learning", "Medical AI"],
      github: "https://github.com/shreyabisht",
      demo: "#",
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-primary to-primary-glow"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 bg-secondary/20 relative overflow-hidden">
      {/* Floating project elements */}
      <div className="absolute top-16 left-16 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl float-animation"></div>
      <div className="absolute bottom-16 right-16 w-40 h-40 bg-primary/10 rounded-full blur-2xl float-animation" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent-cyan to-accent-purple bg-clip-text text-transparent animated-gradient">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-4 pulse-glow"></div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Innovative solutions combining AI, Machine Learning, and modern web technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="glass-card hover-float border-primary/20 backdrop-blur-xl group overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-xl text-white shadow-lg`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary-glow transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="tech" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button 
                    variant="hero" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </Button>
                  <Button 
                    variant="glow" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="glow" 
            size="lg"
            onClick={() => window.open('https://github.com/shreyabisht', '_blank')}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;