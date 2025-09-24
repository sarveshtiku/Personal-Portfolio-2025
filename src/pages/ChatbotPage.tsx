import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Send, Bot, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import VantaNetBackground from '@/components/VantaNetBackground';

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

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Sarvesh's AI assistant. I can answer questions about his background, skills, projects, research, and experience. What would you like to know?",
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

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(inputValue);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: response,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="space-y-12 relative z-20 px-4 sm:px-6 lg:px-8">
      <VantaNetBackground />
      {/* Header */}
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Portfolio
        </Link>
        <div className="flex items-center space-x-4">
          <img 
            src="/chatbot.png" 
            alt="Sarvesh Tiku" 
            className="w-16 h-16 rounded-full border-4 border-blue-300 shadow-lg"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Chat with Sarvesh</h1>
            <p className="text-gray-600">Ask me anything about my background, skills, projects, and experience!</p>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <Card className="shadow-2xl border-0 bg-white">
        <CardHeader className="bg-primary text-white rounded-t-lg">
          <div className="flex items-center space-x-3">
            <Bot className="h-6 w-6" />
            <CardTitle className="text-xl">AI Assistant</CardTitle>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 flex flex-col h-[600px]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    message.isUser
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {!message.isUser && <Bot className="h-5 w-5 mt-1 flex-shrink-0" />}
                    {message.isUser && <User className="h-5 w-5 mt-1 flex-shrink-0" />}
                    <div>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isUser ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <Bot className="h-5 w-5" />
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

          {/* Input */}
          <div className="p-6 border-t bg-gray-50">
            <div className="flex space-x-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Sarvesh's background, skills, projects, or experience..."
                className="flex-1 h-12 text-base"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                size="lg"
                className="h-12 px-6"
              >
                <Send className="h-5 w-5 mr-2" />
                Send
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Questions */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Questions</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Who are you?",
            "What do you do?",
            "What are your skills?",
            "What projects have you worked on?",
            "What research do you do?",
            "How can I contact you?"
          ].map((question) => (
            <Button
              key={question}
              variant="outline"
              size="sm"
              onClick={() => setInputValue(question)}
              className="text-sm"
            >
              {question}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
