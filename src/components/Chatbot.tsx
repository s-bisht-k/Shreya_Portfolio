import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, Bot, User, Minimize2 } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm Shreya's AI assistant. Ask me anything about her skills, projects, experience, or contact information!"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const portfolioInfo = {
    skills: "Shreya specializes in Machine Learning, Computer Vision, Web Development, Python, JavaScript, TensorFlow, OpenCV, and more.",
    projects: "Key projects include Hyogen (emotion detection system) and SmartDerma (skin disease classifier using AI).",
    education: "B.Tech in CSE from Devbhoomi Uttarakhand University (2022-2026) with 8.12/10 GPA.",
    contact: "Email: shreyabisht20092004@gmail.com, Phone: +91 7668148243",
    interests: "Passionate about Generative AI, LLMs, Machine Learning, and building impactful tech solutions."
  };

  const generateResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("skill") || message.includes("technology") || message.includes("tech")) {
      return portfolioInfo.skills;
    } else if (message.includes("project") || message.includes("work") || message.includes("portfolio")) {
      return portfolioInfo.projects;
    } else if (message.includes("education") || message.includes("study") || message.includes("university") || message.includes("degree")) {
      return portfolioInfo.education;
    } else if (message.includes("contact") || message.includes("email") || message.includes("phone") || message.includes("reach")) {
      return portfolioInfo.contact;
    } else if (message.includes("interest") || message.includes("passion") || message.includes("like")) {
      return portfolioInfo.interests;
    } else if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! I'm here to help you learn more about Shreya Bisht. You can ask me about her skills, projects, education, or how to contact her.";
    } else {
      return "I can help you learn about Shreya's skills, projects, education, and contact information. What would you like to know?";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);

    setMessages(prev => [...prev, { role: "user", content: userMessage }]);

    // Simulate API delay
    setTimeout(() => {
      const response = generateResponse(userMessage);
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <div className="relative">
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 hover:from-blue-500 hover:via-blue-400 hover:to-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-blue-200 w-20 h-16 p-0"
            style={{
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
            }}
          >
            <Bot className="w-5 h-5 text-blue-800 group-hover:scale-110 transition-transform" />
          </Button>
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-[10px] font-semibold text-blue-800 shadow-sm border border-blue-200">
            Shreya's AI
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <Card className={`w-80 sm:w-96 bg-card-gradient border-border shadow-elegant transition-all duration-300 ${isMinimized ? 'h-16' : 'h-80 sm:h-96'}`}>
        <CardHeader className="p-3 sm:p-4 pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm sm:text-lg font-semibold text-foreground flex items-center gap-2">
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-primary-glow" />
              <span className="hidden sm:inline">Shreya's AI Assistant</span>
              <span className="sm:hidden">Shreya's AI</span>
            </CardTitle>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-6 w-6 sm:h-8 sm:w-8"
              >
                <Minimize2 className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 sm:h-8 sm:w-8"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-3 sm:p-4 pt-0 flex flex-col h-64 sm:h-80">
            <div className="flex-1 overflow-y-auto space-y-3 sm:space-y-4 mb-3 sm:mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-primary-glow" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-2 sm:p-3 rounded-lg text-xs sm:text-sm ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/50 text-foreground border border-border"
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.role === "user" && (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-3 h-3 sm:w-4 sm:h-4 text-accent-blue" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-primary-glow" />
                  </div>
                  <div className="bg-secondary/50 border border-border p-2 sm:p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Shreya's skills, projects..."
                className="flex-1 text-xs sm:text-sm bg-secondary/50 border-border"
              />
              <Button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                variant="hero"
                size="icon"
              >
                <Send className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default Chatbot;