import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import type { GoogleGenAI } from '@google/genai';

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
      content: "Hi! I'm the PulseChat assistant. 🚀\n\nI can help you automate your WhatsApp sales. Ask me anything about pricing, features, or how to get started!" 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [rateLimitReset, setRateLimitReset] = useState<number | null>(null);
  const [dailyLimitReset, setDailyLimitReset] = useState<number | null>(null);
  const [countdown, setCountdown] = useState<string>('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const genAIRef = useRef<InstanceType<typeof GoogleGenAI> | null>(null);

  // Initialize Gemini AI - Client-side
  useEffect(() => {
    const initializeAI = async () => {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (apiKey && apiKey !== 'your_api_key_here' && apiKey.trim()) {
        try {
          // Import the correct module - use GoogleGenAI (not GoogleGenerativeAI)
          const { GoogleGenAI } = await import('@google/genai');
          genAIRef.current = new GoogleGenAI({ apiKey });
          console.log('✅ Gemini AI initialized successfully');
        } catch (error: any) {
          console.error('❌ Failed to initialize Gemini AI:', error?.message);
          console.warn('Tip: Ensure VITE_GEMINI_API_KEY is valid in .env file');
        }
      } else {
        console.warn('⚠️ VITE_GEMINI_API_KEY not configured. AI responses will use fallback mode.');
      }
    };
    
    initializeAI();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Rate limit countdown timer (minute limit)
  useEffect(() => {
    if (!rateLimitReset) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const timeLeft = rateLimitReset - now;

      if (timeLeft <= 0) {
        setRateLimitReset(null);
        setCountdown('');
        clearInterval(interval);
        // Show message that limit has reset
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: '✅ Rate limit has refreshed! You can now send more messages.' 
        }]);
      } else {
        const seconds = Math.ceil(timeLeft / 1000);
        setCountdown(`${seconds}s`);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [rateLimitReset]);

  // Daily limit countdown timer (24-hour limit)
  useEffect(() => {
    if (!dailyLimitReset) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const timeLeft = dailyLimitReset - now;

      if (timeLeft <= 0) {
        setDailyLimitReset(null);
        setCountdown('');
        clearInterval(interval);
        // Show message that daily limit has reset
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: '✅ Daily limit has refreshed! I\'m back online now.' 
        }]);
      } else {
        const hours = Math.floor(timeLeft / 3600000);
        const minutes = Math.floor((timeLeft % 3600000) / 60000);
        setCountdown(`${hours}h ${minutes}m`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dailyLimitReset]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || rateLimitReset || dailyLimitReset) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      let botResponse = '';

      // Try to use Gemini API if initialized
      if (genAIRef.current) {
        try {
          const model = genAIRef.current.models.generateContent({
            model: 'models/gemini-2.0-flash',
            contents: [
              {
                role: 'user',
                parts: [{ text: userMsg }],
              }
            ],
            systemInstruction: {
              parts: [{
                text: `You are a concise and helpful Sales Assistant for PulseChat - a WhatsApp marketing automation tool.

Your role: Answer questions about PulseChat and guide users toward trying it.

Key Points:
- Automates WhatsApp marketing to groups 24/7
- AI generates perfect product pitches
- Schedule at optimal times (8 AM, 6 PM, midnight)
- Smart targeting & A/B testing
- Real-time analytics
- Pricing: $7 (Starter), $25 (Pro), $40 (Agency)

Guidelines:
1. Keep responses SHORT (max 100 words)
2. Be friendly and conversational
3. Use emojis sparingly
4. Always suggest WhatsApp messaging for demos
5. Never mention this is AI-powered`
              }]
            }
          });

          const result = await model;
          const textContent = result.candidates?.[0]?.content?.parts?.[0];
          botResponse = typeof textContent === 'object' && 'text' in textContent 
            ? textContent.text 
            : 'I\'m having trouble. Try messaging us on WhatsApp!';
        } catch (apiError: any) {
          const errorMessage = apiError?.message || '';
          const errorStatus = apiError?.status;

          // Check if it's a daily limit (quota exhausted - persists 24h)
          if (errorMessage.includes('RESOURCE_EXHAUSTED') || 
              errorMessage.includes('quota exceeded') ||
              errorMessage.includes('daily quota') ||
              (errorMessage.includes('quota') && !errorMessage.includes('429'))) {
            console.warn('⚠️ Daily quota limit hit! Resetting in 24 hours...');
            
            // Set daily limit reset time to 24 hours from now
            const resetTime = Date.now() + (24 * 60 * 60 * 1000);
            setDailyLimitReset(resetTime);
            
            botResponse = `😅 We've hit our daily AI quota!\n\n📅 I'll be back tomorrow at this time.\n\nIn the meantime, message us on WhatsApp and our human team will help you out! 📲`;
          } 
          // Check for rate limit error (429 Too Many Requests - 60 second reset)
          else if (errorStatus === 429 || errorMessage.includes('429') || errorMessage.includes('rate limit')) {
            console.warn('⚠️ Rate limit hit! Resetting in 60 seconds...');
            
            // Set rate limit reset time to 60 seconds from now
            const resetTime = Date.now() + 60000;
            setRateLimitReset(resetTime);
            
            botResponse = `🤖 Our AI agent is temporarily busy handling lots of requests!\n\n⏳ I'll be back online in 60s.\n\nFeel free to reach out on WhatsApp for immediate help! 📲`;
          } 
          else {
            console.error('Gemini API error:', errorMessage);
            botResponse = `Great question! For a detailed answer, let's chat on WhatsApp. Our team responds in minutes! 📲`;
          }
        }
      } else {
        // Fallback response when API not configured
        botResponse = `Thanks for asking about "${userMsg}"! 🎯\n\nFor personalized help, message us on WhatsApp and our team will show you everything in real-time!\n\nReady to automate? 🚀`;
      }

      // Simulate thinking time
      await new Promise(r => setTimeout(r, 600));
      setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Oops! Let's chat on WhatsApp instead—our team responds instantly! 💬" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Chat Bubble Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen 
            ? 'bg-slate-900 rotate-90' 
            : 'whatsapp-green hover:scale-110 active:scale-95 shadow-green-500/20'
        }`}
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="text-white w-8 h-8" />
        ) : (
          <>
            <MessageCircle className="text-white w-8 h-8" />
            <div className="absolute -top-14 right-0 bg-white px-5 py-3 rounded-2xl shadow-2xl text-xs font-black text-slate-800 border border-slate-100 whitespace-nowrap animate-bounce">
              Need help? 🚀
              <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white rotate-45 border-b border-r border-slate-100"></div>
            </div>
          </>
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
            <button 
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="p-2 hover:bg-white/20 rounded-lg transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-grow p-5 space-y-4 overflow-y-auto bg-slate-50/50"
          >
            {messages.map((m, i) => (
              <div 
                key={i} 
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
              >
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm font-semibold whitespace-pre-wrap ${
                    m.role === 'user' 
                      ? 'bg-green-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none flex items-center gap-3">
                  <Loader2 className="w-4 h-4 text-green-500 animate-spin" />
                  <span className="text-xs text-slate-500">Typing...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-5 bg-white border-t border-slate-100">
            {dailyLimitReset && (
              <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded-lg text-center">
                <p className="text-xs font-bold text-red-800">
                  📅 Daily quota reached • Back in <span className="text-red-600 font-black">{countdown}</span>
                </p>
              </div>
            )}
            {rateLimitReset && !dailyLimitReset && (
              <div className="mb-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-center">
                <p className="text-xs font-bold text-amber-800">
                  ⏳ Agent busy • Back in <span className="text-amber-600 font-black">{countdown}</span>
                </p>
              </div>
            )}
            <div className="relative flex items-center gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={dailyLimitReset ? "Back tomorrow..." : rateLimitReset ? "Please wait..." : "How do I get started?"}
                disabled={rateLimitReset !== null || dailyLimitReset !== null}
                className="w-full bg-slate-100 border-none rounded-xl py-3 px-4 text-sm font-bold focus:ring-2 focus:ring-green-500 transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading || rateLimitReset !== null || dailyLimitReset !== null}
                className="p-3 bg-green-500 text-white rounded-xl hover:bg-green-600 disabled:bg-slate-200 transition-all disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
            
            {/* WhatsApp Link */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs font-black text-green-600 hover:text-green-700 hover:underline uppercase tracking-widest p-2 bg-green-50 rounded-lg transition-all mt-4"
            >
              <MessageCircle size={14} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatAgent;
