
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'bot'}>>([
    { text: "👋 Hi there! I'm your Mehandi Expert AI. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    
    // Clear input
    setInput('');
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help you with your mehandi design questions!",
        "For bridal mehandi, our prices start at $150. Would you like to book an appointment?",
        "We're available for bookings next weekend. Shall I check the exact times for you?",
        "Our nail art designs start at $45, and we have a wide range of options available.",
        "I can help you book an appointment right away. What date works best for you?"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }]);
    }, 1000);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat button */}
      <button
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-rosegold text-white flex items-center justify-center shadow-lg z-30 animate-glow-pulse hover:scale-110 transition-transform duration-300"
        onClick={() => setIsOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-full max-w-md bg-charcoal border border-rosegold/20 rounded-lg shadow-2xl z-40 overflow-hidden">
          {/* Chat header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-rosegold/90 to-rosegold/70 px-4 py-3">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-white">Mehandi Expert AI</h3>
                <p className="text-xs text-white/70">Online | Replies instantly</p>
              </div>
            </div>
            <button 
              className="text-white/80 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] px-4 py-3 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-rosegold/80 text-white' 
                      : 'bg-white/10 text-white/90'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          {/* Chat input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center bg-white/5 rounded-full overflow-hidden pr-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleInputKeyPress}
                className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-white placeholder-white/50"
                placeholder="Type your message..."
              />
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-rosegold"
                onClick={handleSendMessage}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-center mt-2 text-white/50">
              This is a demo AI assistant. In the full version, it would connect to OpenAI or Gemini.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotButton;
