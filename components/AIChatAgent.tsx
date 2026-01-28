
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIChatAgent: React.FC<{ whatsappLink: string }> = ({ whatsappLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Hi! I'm the PulseChat assistant. 🚀\n\nI can show you how to automate your sales groups on autopilot. What would you like to know?" 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are the concise Sales Bot for "PulseChat" (WhatsApp Automation). 
          
          RULES:
          1. Be extremely short and punchy. No fluff.
          2. Use bullet points for features. 
          3. MAX 60 words per response.
          
          VALUE POINTS:
          - 24/7 Autopilot Scheduling for groups.
          - AI Content Generation (No manual writing).
          - Pricing: $7 (Starter), $25 (Pro), $40 (Agency).
          
          CALL TO ACTION:
          Always suggest messaging on WhatsApp (+254702944890) for the onboarding link.`,
          temperature: 0.7,
        },
      });

      const botResponse = response.text || "I'm having a little trouble. Message us on WhatsApp for instant help! 📲";
      setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
    } catch (error) {
      console.error('Gemini error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "My AI circuits are busy! 🔋 Click the WhatsApp link below to chat with us directly!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Chat Bubble */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen ? 'bg-slate-900 rotate-90' : 'whatsapp-green hover:scale-110 active:scale-95 shadow-green-500/20'}`}
      >
        {isOpen ? <X className="text-white w-8 h-8" /> : <MessageCircle className="text-white w-8 h-8" />}
        {!isOpen && (
          <div className="absolute -top-14 right-0 bg-white px-5 py-3 rounded-2xl shadow-2xl text-xs font-black text-slate-800 border border-slate-100 whitespace-nowrap animate-bounce">
            Need help scaling? 🚀
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white rotate-45 border-b border-r border-slate-100"></div>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[360px] sm:w-[400px] max-h-[550px] h-[70vh] bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-6 duration-500">
          {/* Header */}
          <div className="whatsapp-green p-5 flex items-center justify-between">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-base">PulseChat AI</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                  <span className="text-green-50 text-[10px] font-black uppercase tracking-widest">Always Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-grow p-5 space-y-4 overflow-y-auto bg-slate-50/50"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm font-semibold whitespace-pre-wrap ${m.role === 'user' ? 'bg-green-600 text-white rounded-tr-none' : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none flex items-center gap-3">
                  <Loader2 className="w-4 h-4 text-green-500 animate-spin" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-5 bg-white border-t border-slate-100">
            <div className="relative flex items-center gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="How do I get started?"
                className="w-full bg-slate-100 border-none rounded-xl py-3 px-4 text-sm font-bold focus:ring-2 focus:ring-green-500 transition-all outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-3 bg-green-500 text-white rounded-xl hover:bg-green-600 disabled:bg-slate-200 transition-all"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-black text-green-600 hover:underline uppercase tracking-widest"
              >
                <MessageCircle size={12} />
                WhatsApp DM
              </a>
              <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
              <a 
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-[10px] font-black text-slate-400 hover:underline uppercase tracking-widest"
              >
                <Sparkles size={12} />
                View Plans
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatAgent;
