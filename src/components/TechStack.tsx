import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const technologies = [
    // Programming Languages
    { name: "C", category: "Programming", icon: "🔷" },
    { name: "C++", category: "Programming", icon: "🔶" },
    { name: "Java", category: "Programming", icon: "☕" },
    { name: "JavaScript", category: "Programming", icon: "🟨" },
    { name: "SQL", category: "Database", icon: "🗄️" },
    
    // Web Technologies
    { name: "HTML", category: "Web", icon: "🔴" },
    { name: "CSS", category: "Web", icon: "🔵" },
    { name: "React", category: "Web", icon: "⚛️" },
    { name: "Node.js", category: "Web", icon: "🟢" },
    { name: "Tailwind CSS", category: "Web", icon: "🌊" },
    { name: "Bootstrap", category: "Web", icon: "🎨" },
    
    // Tools & Version Control
    { name: "Git", category: "Tools", icon: "📦" },
    { name: "GitHub", category: "Tools", icon: "🐙" },
    { name: "VS Code", category: "Tools", icon: "💻" },
    { name: "Google Colab", category: "Tools", icon: "📊" },
    { name: "Excel", category: "Tools", icon: "📈" },
    
    // AI/ML Technologies
    { name: "Gen AI", category: "AI/ML", icon: "🤖" },
    { name: "OpenCV", category: "AI/ML", icon: "👁️" },
    { name: "DeepFace", category: "AI/ML", icon: "🎭" },
    { name: "TensorFlow", category: "AI/ML", icon: "🧠" },
    { name: "Keras", category: "AI/ML", icon: "🔥" },
    { name: "NumPy", category: "AI/ML", icon: "🔢" },
    { name: "Matplotlib", category: "AI/ML", icon: "📊" },
  ];

  const categories = [
    { name: "Programming", color: "bg-primary/20 text-primary-glow" },
    { name: "Web", color: "bg-accent-blue/20 text-accent-blue" },
    { name: "AI/ML", color: "bg-accent-purple/20 text-accent-purple" },
    { name: "Tools", color: "bg-muted text-muted-foreground" },
    { name: "Database", color: "bg-primary-glow/20 text-primary-glow" },
  ];

  return (
    <section id="tech-stack" className="py-12 sm:py-20 bg-secondary/20 relative overflow-hidden">
      {/* Floating tech elements */}
      <div className="absolute top-10 right-20 w-20 h-20 bg-accent-purple/10 rounded-full blur-xl float-animation"></div>
      <div className="absolute bottom-10 left-20 w-24 h-24 bg-primary/10 rounded-full blur-xl float-animation" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent-cyan to-accent-purple bg-clip-text text-transparent animated-gradient">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-4 pulse-glow"></div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.name} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`px-4 py-2 rounded-xl ${category.color} font-semibold backdrop-blur-sm glass-card border-0`}>
                  {category.name}
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
              </div>
              
                <div className="flex flex-wrap gap-3">
                {technologies
                  .filter((tech) => tech.category === category.name)
                  .map((tech, index) => (
                    <Badge 
                      key={tech.name} 
                      variant="tech" 
                      className="text-sm py-2 px-4 cursor-pointer glass-card transition-all duration-300"
                    >
                      <span className="text-lg mr-2">{tech.icon}</span>
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