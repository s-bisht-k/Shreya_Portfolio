import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const technologies = [
    // Programming Languages
    { name: "C++", category: "Programming" },
    { name: "Java", category: "Programming" },
    { name: "JavaScript", category: "Programming" },
    { name: "SQL", category: "Database" },
    
    // Web Technologies
    { name: "HTML", category: "Web" },
    { name: "CSS", category: "Web" },
    { name: "Bootstrap", category: "Web" },
    
    // Tools & Version Control
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "VS Code", category: "Tools" },
    { name: "Google Colab", category: "Tools" },
    { name: "Excel", category: "Tools" },
    
    // AI/ML Technologies
    { name: "OpenCV", category: "AI/ML" },
    { name: "DeepFace", category: "AI/ML" },
    { name: "TensorFlow", category: "AI/ML" },
    { name: "Keras", category: "AI/ML" },
    { name: "NumPy", category: "AI/ML" },
    { name: "Matplotlib", category: "AI/ML" },
  ];

  const categories = [
    { name: "Programming", color: "bg-primary/20 text-primary-glow" },
    { name: "Web", color: "bg-accent-blue/20 text-accent-blue" },
    { name: "AI/ML", color: "bg-accent-purple/20 text-accent-purple" },
    { name: "Tools", color: "bg-muted text-muted-foreground" },
    { name: "Database", color: "bg-primary-glow/20 text-primary-glow" },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.name} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`px-4 py-2 rounded-lg ${category.color} font-semibold`}>
                  {category.name}
                </div>
                <div className="flex-1 h-px bg-border"></div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {technologies
                  .filter((tech) => tech.category === category.name)
                  .map((tech) => (
                    <Badge 
                      key={tech.name} 
                      variant="tech" 
                      className="text-sm py-2 px-4 cursor-pointer hover:shadow-md"
                    >
                      {tech.name}
                    </Badge>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Always learning and exploring new technologies to stay current with industry trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;