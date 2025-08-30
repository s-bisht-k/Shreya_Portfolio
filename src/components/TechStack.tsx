import { Badge } from "@/components/ui/badge";
import githubLogo from "@/assets/github-logo-charismatic.png";

const TechStack = () => {
  const technologies = [
    // Programming Languages
    { name: "C", category: "Programming", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", category: "Programming", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", category: "Programming", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "JavaScript", category: "Programming", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "SQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    
    // Web Technologies
    { name: "HTML", category: "Web", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", category: "Web", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "React", category: "Web", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", category: "Web", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    
    { name: "Tailwind CSS", category: "Web", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    
    // Tools & Version Control
    { name: "GitHub", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Git", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "VS Code", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Google Colab", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    { name: "Excel", category: "Tools", icon: "https://img.icons8.com/color/48/microsoft-excel-2019.png" },
    
    // AI/ML Technologies
    { name: "TensorFlow", category: "AI/ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "OpenCV", category: "AI/ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "NumPy", category: "AI/ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Python", category: "AI/ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Pandas", category: "AI/ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "Matplotlib", category: "AI/ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
  ];

  const categories = [
    { name: "Programming", color: "bg-primary/20 text-primary" },
    { name: "Web", color: "bg-primary/20 text-primary" },
    { name: "AI/ML", color: "bg-primary/20 text-primary" },
    { name: "Tools", color: "bg-primary/20 text-primary" },
    { name: "Database", color: "bg-primary/20 text-primary" },
  ];

  return (
    <section id="tech-stack" className="py-12 sm:py-20 bg-secondary/20 relative overflow-hidden">
      {/* Floating tech elements */}
      <div className="absolute top-10 right-20 w-20 h-20 bg-accent-purple/10 rounded-full blur-xl float-animation"></div>
      <div className="absolute bottom-10 left-20 w-24 h-24 bg-primary/10 rounded-full blur-xl float-animation" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-accent-cyan to-accent-purple bg-clip-text text-transparent animated-gradient">
            Tech Stack
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-3 sm:mb-4 pulse-glow"></div>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2 sm:px-4">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="space-y-8 sm:space-y-12">
          {categories.map((category) => (
            <div key={category.name} className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-4">
                <div className={`px-3 sm:px-4 py-2 rounded-xl ${category.color} font-semibold backdrop-blur-sm glass-card border-0 text-sm sm:text-base`}>
                  {category.name}
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
              </div>
              
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                  {technologies
                    .filter((tech) => tech.category === category.name)
                    .map((tech, index) => (
                      <div
                        key={tech.name}
                        className="group flex flex-col items-center p-4 sm:p-6 glass-card rounded-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                      >
                        <img 
                          src={tech.icon} 
                          alt={tech.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <span className="text-xs sm:text-sm font-medium text-center group-hover:text-primary transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-muted-foreground text-sm sm:text-base">
            Always learning and exploring new technologies to stay current with industry trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;