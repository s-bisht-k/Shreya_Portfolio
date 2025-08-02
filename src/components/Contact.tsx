import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send, Linkedin, Github, Code, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/shreyabisht",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:text-accent-blue"
    },
    {
      name: "GitHub",
      url: "https://github.com/shreyabisht",
      icon: <Github className="w-5 h-5" />,
      color: "hover:text-foreground"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/shreyabisht",
      icon: <Code className="w-5 h-5" />,
      color: "hover:text-primary-glow"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-cyan bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Let's collaborate on exciting projects or discuss opportunities in tech
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card-gradient border-border hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Mail className="w-6 h-6 text-primary-glow" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a 
                      href="mailto:shreyabisht20092004@gmail.com"
                      className="text-muted-foreground hover:text-primary-glow transition-colors"
                    >
                      shreyabisht20092004@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent-blue/20 rounded-lg">
                    <Phone className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a 
                      href="tel:+917668148243"
                      className="text-muted-foreground hover:text-accent-blue transition-colors"
                    >
                      +91 7668148243
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Social Links */}
            <Card className="bg-card-gradient border-border hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="ghost"
                      size="icon"
                      className={`p-3 bg-secondary/50 hover:bg-primary/20 transition-all duration-300 ${link.color}`}
                      onClick={() => window.open(link.url, '_blank')}
                    >
                      {link.icon}
                    </Button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Follow my coding journey and connect professionally
                </p>
              </CardContent>
            </Card>
            
            {/* Resume Download */}
            <Card className="bg-card-gradient border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('https://drive.google.com/drive/folders/1M2w1B12Hei3AHXGINHLogJNd1TndXl_l', '_blank')}
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-card-gradient border-border hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="bg-secondary/50 border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-secondary/50 border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    required
                    className="bg-secondary/50 border-border focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;