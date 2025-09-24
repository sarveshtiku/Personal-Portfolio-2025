import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Send, X, Bot, User, ExternalLink } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const chatbotResponses = {
  "who are you": "I'm Sarvesh Tiku! I'm a software developer and researcher passionate about AI, machine learning, and computational biology. I love building technology that solves real-world problems.",
  "what do you do": "I'm a software developer and researcher with over 5 years of experience in full-stack development. I work on projects ranging from consumer applications to research tools used by academic institutions.",
  "what are your skills": "My key skills include React, TypeScript, Node.js, Python, PostgreSQL, AWS, Docker, GraphQL, Next.js, TailwindCSS, Machine Learning, and Research. I'm also AWS Certified Cloud Practitioner and Solutions Architect!",
  "where do you work": "I'm currently a Software Engineering Intern at Salesforce, where I'm building and deploying full-stack sandbox platforms for AgentForce agents. I've also worked on various research projects and open-source contributions.",
  "what's your education": "I'm studying at Georgia Tech, focusing on computer science and research. I'm passionate about the intersection of technology and human behavior.",
  "what projects have you worked on": "I've worked on several exciting projects including Trading-GT Market Analysis, Travel Buddy Android Application, and various research projects in AI and computational biology. Check out my Projects page for more details!",
  "what research do you do": "My research focuses on AI, machine learning, and computational biology. I've published papers on topics like bias mitigation in large language models and AI-induced labor market shifts. You can see my publications on the Research page.",
  "how can i contact you": "You can reach me through the Contact page on this website, or connect with me on LinkedIn, GitHub, or Twitter. I'm always interested in discussing new opportunities and collaborations!",
  "what certifications do you have": "I have several certifications including AWS Certified Cloud Practitioner, AWS Certified Solutions Architect, GitHub Foundations, Meta Front-End Developer Certificate, and AI Safety and Governance from BlueDot Impact.",
  "what's your experience": "I have over 5 years of experience in full-stack development, with recent experience at Salesforce as a Software Engineering Intern. I've worked on projects ranging from consumer applications to research tools used by academic institutions.",
  "hello": "Hello! I'm Sarvesh's AI assistant. I can answer questions about his background, skills, projects, research, and experience. What would you like to know?",
  "hi": "Hi there! I'm here to help you learn more about Sarvesh. Feel free to ask me anything about his work, background, or interests!",
  "help": "I can help you learn about Sarvesh! Try asking about his background, skills, projects, research, experience, education, or certifications. You can also ask general questions like 'who are you' or 'what do you do'.",
  "default": "That's an interesting question! I'm Sarvesh's AI assistant and I can help you learn about his background, skills, projects, research, and experience. Try asking something like 'what do you do' or 'what are your skills'."
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Sarvesh's AI assistant, powered by OpenAI. I know everything about his work, research, projects, and experience. Ask me anything about Sarvesh!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase().trim();
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(chatbotResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return chatbotResponses.default;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/chatbot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        const botMessage: Message = {
          id: Date.now() + 1,
          text: data.response,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting right now. Please try again later!",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button - only show when popup is closed */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 group">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full shadow-lg hover:opacity-80 transition-all duration-300 group-hover:w-48 group-hover:rounded-full relative overflow-hidden"
            style={{ backgroundColor: '#2B5BC7' }}
            size="icon"
          >
            {/* Default centered image */}
            <img 
              src="/chatbot.png" 
              alt="Chat with Sarvesh" 
              className="w-8 h-8 rounded-full border-2 border-blue-300 absolute inset-0 m-auto group-hover:opacity-0 transition-opacity duration-300"
            />
            
            {/* Hover state with image and text */}
            <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img 
                src="/chatbot.png" 
                alt="Chat with Sarvesh" 
                className="w-8 h-8 rounded-full border-2 border-blue-300 flex-shrink-0"
              />
              <span className="text-white font-medium text-sm whitespace-nowrap">
                Learn about me!
              </span>
            </div>
          </Button>
        </div>
      )}

      {/* Chatbot Popup */}
      {isOpen && (
        <Card className="fixed bottom-20 right-6 z-50 w-80 h-96 shadow-2xl border-0 bg-white flex flex-col">
          <CardHeader className="bg-blue-600 text-white rounded-t-lg pb-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <CardTitle className="text-lg font-semibold">Learn about Sarvesh</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex justify-start">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('/chat', '_blank')}
                className="h-6 text-white/80 hover:text-white hover:bg-white/10 text-xs px-2 py-1"
                title="Open full chat in new tab"
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                open in new page
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col flex-1 min-h-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 pt-4 space-y-3 min-h-0">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 ${
                      message.isUser
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {!message.isUser && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      {message.isUser && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg px-3 py-2">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input - Fixed at bottom */}
            <div className="px-4 pb-4 pt-2 flex-shrink-0">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Sarvesh..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  size="icon"
                  className="h-10 w-10 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
