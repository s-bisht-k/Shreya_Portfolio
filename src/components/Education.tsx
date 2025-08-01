import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card-gradient border-border hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/20 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-primary-glow" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Bachelor of Technology in Computer Science Engineering
                      </h3>
                      <p className="text-lg text-primary-glow font-semibold">
                        Devbhoomi Uttarakhand University
                      </p>
                    </div>
                    <div className="text-right mt-4 lg:mt-0">
                      <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-lg">
                        <Award className="w-5 h-5 text-primary-glow" />
                        <span className="text-lg font-bold text-primary-glow">8.68/10 GPA</span>
                      </div>
                      <p className="text-muted-foreground mt-2">2022 - 2026</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6 mt-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="w-5 h-5 text-accent-blue" />
                        <h4 className="text-lg font-semibold text-foreground">Key Subjects</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-secondary/30 px-4 py-3 rounded-lg border border-border">
                          <p className="font-medium text-foreground">Data Structures & Algorithms</p>
                          <p className="text-sm text-muted-foreground">DSA</p>
                        </div>
                        <div className="bg-secondary/30 px-4 py-3 rounded-lg border border-border">
                          <p className="font-medium text-foreground">Database Management Systems</p>
                          <p className="text-sm text-muted-foreground">DBMS</p>
                        </div>
                        <div className="bg-secondary/30 px-4 py-3 rounded-lg border border-border">
                          <p className="font-medium text-foreground">Design & Analysis of Algorithms</p>
                          <p className="text-sm text-muted-foreground">DAA</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
                      <p className="text-muted-foreground leading-relaxed">
                        Currently pursuing my degree with a strong focus on practical applications 
                        of theoretical concepts. Actively engaged in projects that bridge the gap 
                        between academic learning and real-world problem solving.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;