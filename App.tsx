
import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  Bot, 
  Zap, 
  BarChart3, 
  CheckCircle2, 
  TrendingUp, 
  Target,
  ArrowRight,
  Menu,
  X,
  Clock,
  Sparkles,
  ShoppingBag,
  Store,
  Box,
  Briefcase,
  Palette,
  Send,
  Loader2,
  Calendar,
  Play,
  Home,
  Lightbulb,
  DollarSign
} from 'lucide-react';
// Note: @google/genai is server-side only. Avoid importing it in client bundle.
import AIChatAgent from './components/AIChatAgent';

const App: React.FC = () => {
  console.log("App component rendering");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "+254702944890";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=Hello!%20I'm%20interested%20in%20PulseChat`;
  const telegramLink = "https://t.me/pulsechat_bot"; // Update with your actual Telegram username/bot

  return (
    <div className="min-h-screen flex flex-col selection:bg-green-100 bg-white">
      <a href="#main-content" className="sr-only">Skip to main content</a>
      {/* Navigation */}
      <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-100 backdrop-blur-xl bg-white/80">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2 flex-1">
              <div className="p-1.5 whatsapp-green rounded-lg shadow-sm">
                <Bot className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">PulseChat</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm">
              <a href="#features" className="text-slate-600 hover:text-green-600 font-bold transition-colors">Why Us?</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-green-600 font-bold transition-colors">How it Works</a>
              <a href="#generator" className="text-slate-600 hover:text-green-600 font-bold transition-colors">AI Tools</a>
              <a href="#pricing" className="text-slate-600 hover:text-green-600 font-bold transition-colors">Pricing</a>
              <a 
                href={whatsappLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-green text-white px-6 py-2 rounded-full font-black hover:shadow-lg hover:whatsapp-green-hover transition-all flex items-center gap-2 transform active:scale-95"
              >
                Get Started
              </a>
            </div>

            <div className="md:hidden flex-1 flex justify-end">
              <button type="button" aria-expanded={isMenuOpen} aria-controls="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 hover:text-green-600 transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div id="mobile-menu" role="menu" aria-hidden={!isMenuOpen} className="md:hidden bg-white border-b border-slate-100 p-4 sm:p-6 space-y-3 sm:space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-slate-700 font-bold hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
              <Lightbulb size={20} className="text-green-600" />
              Why Us?
            </a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-slate-700 font-bold hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
              <Play size={20} className="text-green-600" />
              How it Works
            </a>
            <a href="#generator" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-slate-700 font-bold hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
              <Sparkles size={20} className="text-green-600" />
              AI Generator
            </a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-slate-700 font-bold hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
              <DollarSign size={20} className="text-green-600" />
              Pricing
            </a>
            <div className="pt-2 border-t border-slate-100">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get started on WhatsApp"
                className="w-full whatsapp-green text-white px-5 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <MessageCircle size={20} />
                Get Started Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main id="main-content" role="main">
      <section className="relative pt-20 sm:pt-28 pb-12 sm:pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-green-50 text-green-700 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-widest border border-green-100 mb-6 sm:mb-10 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-700">
            <Sparkles size={14} className="animate-pulse text-green-500 hidden sm:block" />
            <Sparkles size={12} className="animate-pulse text-green-500 sm:hidden" />
            <span>Your 24/7 AI Sales Rep That Never Sleeps</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[100px] font-black text-slate-900 leading-tight sm:leading-[1.1] lg:leading-[1] mb-6 sm:mb-10 tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Automate <span className="block sm:inline">WhatsApp & Telegram</span> <br className="hidden sm:block" />
            Marketing <span className="text-green-600">on Autopilot</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium mb-8 sm:mb-14 px-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Stop wasting time on manual posts. Your AI agent sells 24/7 on WhatsApp & Telegram, sending <span className="text-slate-900 font-bold underline decoration-green-500/30 underline-offset-4">perfect pitches at perfect times</span> to manage ads and customers. <span className="text-slate-900 font-bold">You sleep. It sells.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 px-2">
            <a 
              href={whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 whatsapp-green text-white rounded-[2rem] text-lg sm:text-2xl font-black hover:whatsapp-green-hover shadow-[0_25px_60px_-15px_rgba(37,211,102,0.6)] hover:-translate-y-1.5 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} className="hidden sm:block" />
              <MessageCircle size={20} className="sm:hidden" />
              Start Your AI Agent
            </a>
          </div>

          <div className="mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-50 flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-12 opacity-50 grayscale animate-in fade-in duration-1000 delay-500 px-2">
             <div className="font-black text-lg sm:text-2xl tracking-tighter text-slate-400 text-center">1.2M MESSAGES SENT</div>
             <div className="hidden sm:block font-black text-2xl tracking-tighter text-slate-400">•</div>
             <div className="font-black text-lg sm:text-2xl tracking-tighter text-slate-400 text-center">500+ ACTIVE AGENTS</div>
             <div className="hidden sm:block font-black text-2xl tracking-tighter text-slate-400">•</div>
             <div className="font-black text-lg sm:text-2xl tracking-tighter text-slate-400 text-center">99.9% UPTIME</div>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-green-200/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100/20 blur-[120px] rounded-full pointer-events-none"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 bg-slate-900 text-white rounded-3xl sm:rounded-[4rem] mx-3 sm:mx-4 overflow-hidden relative shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-24 space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter">Why Choose PulseChat?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-400 font-medium max-w-2xl mx-auto">Everything you need to turn your WhatsApp groups and Telegram channels into automated sales channels.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <FeatureCard 
              icon={<Clock size={24} className="text-green-400 sm:w-7 sm:h-7" />}
              title="Multi-Channel Automation"
              desc="Schedule campaigns on WhatsApp groups & Telegram channels simultaneously. Manage all your customer conversations and ad campaigns in one place."
            />
            <FeatureCard 
              icon={<Bot size={24} className="text-green-400 sm:w-7 sm:h-7" />}
              title="AI-Powered Content"
              desc="Generates fresh, engaging product descriptions automatically, adapting its tone based on the time of day or group type."
            />
            <FeatureCard 
              icon={<Target size={24} className="text-green-400 sm:w-7 sm:h-7" />}
              title="Smart Targeting"
              desc="Send different products to different groups. Track which groups buy more and A/B test messages to find what converts best."
            />
            <FeatureCard 
              icon={<BarChart3 size={24} className="text-green-400 sm:w-7 sm:h-7" />}
              title="Built-In Analytics"
              desc="See which products get the most engagement. Track message delivery and response rates to optimize with real data."
            />
            <FeatureCard 
              icon={<TrendingUp size={24} className="text-green-400 sm:w-7 sm:h-7" />}
              title="ROI Focused"
              desc="Turn WhatsApp groups and Telegram channels into revenue streams. Reach customers where they already are—no extra ad budget needed."
            />
            <FeatureCard 
              icon={<Zap size={24} className="text-green-400 sm:w-7 sm:h-7" />}
              title="Scale Effortlessly"
              desc="Expand your reach to an unlimited number of groups without any extra manual effort from your side."
            />
            <FeatureCard 
              icon={<MessageCircle size={24} className="text-green-400 sm:w-7 sm:h-7" />}
              title="Telegram Agents Available"
              desc="AI agents for managing Telegram channels and customer conversations. Handle ads, lead follow-ups, and customer support automatically 24/7."
            />
          </div>
          
          <div className="mt-12 sm:mt-20 text-center">
            <a 
              href={whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 font-black text-base sm:text-lg lg:text-xl hover:text-green-300 transition-all border-b-2 border-green-500/30 pb-1"
            >
              Start Your Free Onboarding <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20 space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter">See It In Action</h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-500 font-medium max-w-2xl mx-auto">5 minutes to go live. 24/7 sales on autopilot. No headaches.</p>
          </div>
          
          <div className="relative">
            {/* Desktop Step Connectors */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-green-400 to-green-200 pointer-events-none" style={{
              width: 'calc(100% - 60px)',
              marginLeft: '30px',
              marginRight: '30px'
            }}></div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4">
              <StepCard 
                step="1" 
                title="Add Products" 
                desc="Quickly add products to your agent via our sleek dashboard."
                icon={<ShoppingBag size={24} />}
              />
              <StepCard 
                step="2" 
                title="Set Schedule" 
                desc="Choose when to send. 8 AM, 6 PM, midnight—or whenever."
                icon={<Calendar size={24} />}
              />
              <StepCard 
                step="3" 
                title="Pick Groups/Channels" 
                desc="Select WhatsApp groups or Telegram channels to target."
                icon={<MessageCircle size={24} />}
              />
              <StepCard 
                step="4" 
                title="Go Live" 
                desc="Your agent starts selling 24/7 automatically."
                icon={<Bot size={24} />}
              />
              <StepCard 
                step="5" 
                title="Watch Sales" 
                desc="Get real-time notifications. Watch revenue grow."
                icon={<TrendingUp size={24} />}
              />
            </div>
          </div>

          <div className="mt-12 sm:mt-20 text-center">
            <a 
              href={whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 whatsapp-green text-white rounded-full font-black text-sm sm:text-base lg:text-lg hover:shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-1 active:scale-95"
            >
              <Sparkles size={18} className="sm:w-5 sm:h-5" />
              Start 5-Min Setup
            </a>
          </div>
        </div>
      </section>

      {/* AI Tool Section */}
      <section id="generator" className="py-16 sm:py-24 lg:py-32 bg-slate-50 border-y border-slate-100 rounded-3xl sm:rounded-[4rem] mx-3 sm:mx-4 shadow-inner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] overflow-hidden border border-slate-100 p-6 sm:p-10 lg:p-16">
            <div className="flex flex-col items-center text-center mb-8 sm:mb-12 space-y-3 sm:space-y-5">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-green-50 text-green-600 rounded-2xl sm:rounded-[2rem] flex items-center justify-center mb-2 shadow-sm">
                <Sparkles size={32} className="sm:w-10 sm:h-10 fill-green-100" />
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter">AI Marketing Asset Generator</h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-500 font-medium">Generate a complete marketing kit for your product in seconds.</p>
            </div>
            
            {/* Fix: Pass whatsappLink prop to AssetGenerator */}
            <AssetGenerator whatsappLink={whatsappLink} />
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tighter">Perfect For...</h2>
            <p className="text-lg sm:text-2xl text-slate-500 font-medium">Any business or individual looking to leverage WhatsApp for growth.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <AudienceCard icon={<ShoppingBag size={28} className="sm:w-8 sm:h-8" />} title="E-commerce Sellers" desc="Dropshippers & online stores" />
            <AudienceCard icon={<Store size={28} className="sm:w-8 sm:h-8" />} title="Local Businesses" desc="Restaurants, salons, retail shops" />
            <AudienceCard icon={<Box size={28} className="sm:w-8 sm:h-8" />} title="Product Distributors" desc="Wholesalers & resellers" />
            <AudienceCard icon={<Briefcase size={28} className="sm:w-8 sm:h-8" />} title="Service Providers" desc="Coaches & consultants" />
            <AudienceCard icon={<Palette size={28} className="sm:w-8 sm:h-8" />} title="Creators" desc="Artists & course sellers" />
            <AudienceCard icon={<Zap size={28} className="sm:w-8 sm:h-8" />} title="Digital Products" desc="Ebooks & software" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 lg:py-32 bg-slate-50 rounded-3xl sm:rounded-[4rem] mx-3 sm:mx-4 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-24 space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter">Find the Perfect Plan</h2>
            <p className="text-base sm:text-lg lg:text-2xl text-slate-500 font-medium max-w-2xl mx-auto">Automate WhatsApp & Telegram for your business. Start today with transparent pricing.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch mb-12 sm:mb-16 lg:mb-32">
            <PricingCard 
              name="Starter"
              price="$7"
              desc="For individuals just getting started."
              features={["5 WhatsApp/Telegram groups", "2 campaigns/day", "Basic Analytics", "Single channel support"]}
              whatsappLink={whatsappLink}
            />
            <PricingCard 
              name="Pro"
              price="$25"
              desc="For growing businesses needing power."
              highlight={true}
              features={["20 WhatsApp/Telegram groups", "Unlimited campaigns", "AI Content Generation", "Multi-channel management", "Smart Targeting"]}
              whatsappLink={whatsappLink}
            />
            <PricingCard 
              name="Agency"
              price="$40"
              desc="For agencies and large-scale operators."
              features={["Unlimited groups & channels", "WhatsApp + Telegram agents", "White-label options", "Full Analytics Dashboard", "Priority Support", "Customer management tools"]}
              whatsappLink={whatsappLink}
            />
          </div>
          
          <div className="text-center max-w-5xl mx-auto px-2">
            <div className="bg-white p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-[3.5rem] shadow-xl border border-slate-100">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 leading-tight italic mb-6 sm:mb-8">
                "Imagine waking up to sales notifications because your AI agent sent the perfect product pitch to 20 groups while you slept."
              </p>
              <p className="text-xl sm:text-2xl font-black text-green-600 mb-8 sm:mb-12">That's not the future — that's today.</p>
              <a 
                href={whatsappLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-14 py-5 sm:py-7 whatsapp-green text-white rounded-2xl sm:rounded-[2.5rem] text-lg sm:text-2xl lg:text-3xl font-black hover:shadow-[0_30px_70px_-15px_rgba(37,211,102,0.6)] transition-all hover:-translate-y-2 active:scale-95"
              >
                Start Your Autopilot Sales
                <ArrowRight size={24} className="sm:w-9 sm:h-9" />
              </a>
            </div>
          </div>
        </div>
      </section>

      </main>
      {/* Footer */}
      <footer role="contentinfo" className="bg-white py-12 sm:py-16 lg:py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-8 sm:mb-10">
            <div className="p-2 whatsapp-green rounded-xl shadow-md">
              <Bot className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">PulseChat</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 mb-8 sm:mb-10 text-slate-500 font-bold text-sm sm:text-lg">
            <a href="#features" className="hover:text-green-600 transition-colors">Why PulseChat?</a>
            <a href="#pricing" className="hover:text-green-600 transition-colors">Pricing</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">Support</a>
          </div>
          <p className="text-xs sm:text-base text-slate-400 font-medium">&copy; {new Date().getFullYear()} PulseChat. Turning groups into revenue streams.</p>
        </div>
      </footer>

      {/* Support Agent */}
      <AIChatAgent whatsappLink={whatsappLink} telegramLink={telegramLink} />

      {/* Persistent Contact Us Button - Mobile optimized */}
      <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 animate-in slide-in-from-left duration-500">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 whatsapp-green text-white rounded-full font-black text-xs sm:text-sm lg:text-base shadow-2xl hover:scale-105 active:scale-95 transition-all group"
        >
          <div className="bg-white/20 p-1.5 sm:p-2 rounded-full group-hover:rotate-12 transition-transform">
            <MessageCircle size={18} className="sm:w-5 sm:h-5" />
          </div>
          <span className="tracking-tight hidden sm:inline">Chat with us</span>
          <span className="tracking-tight sm:hidden">Chat</span>
        </a>
      </div>
    </div>
  );
};

// Sub-components
const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group hover:border-green-500/50">
    <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 group-hover:scale-110 group-hover:bg-green-500 transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-2 sm:mb-3 lg:mb-4 tracking-tight group-hover:text-green-400 transition-colors">{title}</h3>
    <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">{desc}</p>
  </div>
);

const StepCard: React.FC<{ step: string, title: string, desc: string, icon: React.ReactNode }> = ({ step, title, desc, icon }) => (
  <div className="relative group">
    <div className="p-6 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] bg-white hover:bg-slate-50 shadow-md hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] transition-all duration-500 border-2 border-slate-100 hover:border-green-300">
      {/* Step Badge */}
      <div className="absolute -top-4 sm:-top-5 left-6 sm:left-7 lg:left-8 w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-black text-sm sm:text-base lg:text-lg shadow-lg">
        {step}
      </div>

      {/* Icon */}
      <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-green-600 mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 group-hover:from-green-100 group-hover:to-green-200 transition-all duration-500 shadow-sm text-slate-700">
        {icon}
      </div>

      {/* Title */}
      <h4 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 mb-2 sm:mb-3 tracking-tight">{title}</h4>

      {/* Description */}
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">{desc}</p>

      {/* Hover Arrow */}
      <div className="mt-4 sm:mt-5 lg:mt-6 flex items-center text-green-600 font-black text-xs sm:text-sm group-hover:translate-x-2 transition-transform duration-300">
        Next <ArrowRight size={14} className="sm:w-4 sm:h-4 ml-2" />
      </div>
    </div>
  </div>
);

const AudienceCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all group">
    <div className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 bg-white rounded-lg sm:rounded-2xl lg:rounded-[1.5rem] flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 text-green-600 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
      {icon}
    </div>
    <h4 className="text-base sm:text-lg lg:text-xl font-black text-slate-900 mb-2 sm:mb-3 tracking-tight">{title}</h4>
    <p className="text-sm sm:text-base text-slate-500 font-medium">{desc}</p>
  </div>
);

const PricingCard: React.FC<{ name: string, price: string, desc: string, features: string[], highlight?: boolean, whatsappLink: string }> = ({ name, price, desc, features, highlight, whatsappLink }) => (
  <div className={`p-8 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl lg:rounded-[3.5rem] border ${highlight ? 'bg-white border-green-500 shadow-2xl sm:scale-105 z-10' : 'bg-white border-slate-100 shadow-lg'} flex flex-col h-full transition-all duration-500`}>
    {highlight && (
      <div className="bg-green-500 text-white text-xs font-black px-4 sm:px-5 py-2 rounded-full self-start mb-6 sm:mb-8 border border-green-400 uppercase tracking-[0.2em] shadow-lg shadow-green-200">
        Most Popular
      </div>
    )}
    <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-2 tracking-tight">{name}</h4>
    <p className="text-sm sm:text-base text-slate-500 font-bold mb-6 sm:mb-8">{desc}</p>
    <p className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-8 sm:mb-10 flex items-baseline gap-1 tracking-tighter">
      {price}<span className="text-base sm:text-lg lg:text-xl text-slate-400 font-bold tracking-normal">/mo</span>
    </p>
    <ul className="space-y-4 sm:space-y-5 lg:space-y-6 mb-10 sm:mb-12 flex-grow">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-3 sm:gap-4 text-slate-600 font-bold text-sm sm:text-base">
          <CheckCircle2 size={20} className="sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <a 
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full py-5 sm:py-6 rounded-xl sm:rounded-2xl lg:rounded-[2rem] font-black text-base sm:text-lg lg:text-xl text-center transition-all ${highlight ? 'whatsapp-green text-white hover:whatsapp-green-hover shadow-xl hover:scale-[1.02]' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
    >
      Choose {name}
    </a>
  </div>
);

// Enhanced AI-Powered Marketing Asset Generator with AI Integration
const AssetGenerator: React.FC<{ whatsappLink: string }> = ({ whatsappLink }) => {
  const [formData, setFormData] = useState({
    name: '',
    audience: '',
    features: '',
    tone: 'Friendly',
    emoji: true
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ pitch: string; seoTitle: string; hashtags: string; callout: string } | null>(null);
  const genAIRef = useRef<any>(null);

  // Initialize AI on mount
  useEffect(() => {
    const initAI = async () => {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (apiKey && apiKey !== 'your_api_key_here' && apiKey.trim()) {
        try {
          const { GoogleGenAI } = await import('@google/genai');
          genAIRef.current = new GoogleGenAI({ apiKey });
        } catch (error) {
          console.warn('AI not available for asset generator');
        }
      }
    };
    initAI();
  }, []);

  const generateKit = async () => {
    if (!formData.name) return;
    setLoading(true);
    setResult(null);

    try {
      let generatedKit = {
        pitch: '',
        seoTitle: '',
        hashtags: '',
        callout: ''
      };

      if (genAIRef.current) {
        // Generate WhatsApp Pitch (Short & Punchy)
        const pitchResult = await genAIRef.current.models.generateContent({
          model: 'models/gemini-2.5-flash',
          contents: [{
            role: 'user',
            parts: [{
              text: `Generate a WhatsApp marketing pitch for ${formData.name}. Target: ${formData.audience}. Features: ${formData.features}. Tone: ${formData.tone}. ${formData.emoji ? 'Use emojis.' : 'No emojis.'} Keep it under 100 words, punchy, and include a CTA. Format: Just the pitch, ready to copy-paste to WhatsApp.`
            }]
          }]
        });
        generatedKit.pitch = pitchResult.candidates?.[0]?.content?.parts?.[0]?.text || '';

        // Generate SEO Title
        const titleResult = await genAIRef.current.models.generateContent({
          model: 'models/gemini-2.5-flash',
          contents: [{
            role: 'user',
            parts: [{
              text: `Create a catchy, SEO-friendly product title for "${formData.name}" for ${formData.audience}. Max 60 chars. Include key benefit. Just the title, no explanation.`
            }]
          }]
        });
        generatedKit.seoTitle = titleResult.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || formData.name;

        // Generate Hashtags
        const hashtagResult = await genAIRef.current.models.generateContent({
          model: 'models/gemini-2.5-flash',
          contents: [{
            role: 'user',
            parts: [{
              text: `Generate 5 viral hashtags for promoting "${formData.name}" to ${formData.audience} on WhatsApp/Telegram. Format: #hashtag #hashtag2 etc. Separated by spaces. Just the hashtags, nothing else.`
            }]
          }]
        });
        generatedKit.hashtags = hashtagResult.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '#marketing #sales #automation';

        // Generate Value Callout
        const calloutResult = await genAIRef.current.models.generateContent({
          model: 'models/gemini-2.5-flash',
          contents: [{
            role: 'user',
            parts: [{
              text: `Create a bold, one-liner value proposition for "${formData.name}". Highlight the main benefit for ${formData.audience}. Format: "Problem → Solution" style. Max 50 words. Just the callout.`
            }]
          }]
        });
        generatedKit.callout = calloutResult.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || `${formData.name}: Your solution to better ${formData.audience} engagement`;

      } else {
        // Smart Fallback Generation (when AI not available)
        const emojiPrefix = formData.emoji ? ['🎯', '✨', '🚀', '💎', '⭐', '🔥'][Math.floor(Math.random() * 6)] : '';
        
        generatedKit.pitch = `${emojiPrefix} Introducing ${formData.name}!\n\n${formData.features}\n\nPerfect for: ${formData.audience}\n\nReady to transform your business? Tap the link below to get started!\n\n${formData.emoji ? '✅ Limited time offer - Act now!' : 'Get started today!'}`;
        
        generatedKit.seoTitle = `${formData.name} - Premium Solution for ${formData.audience}`;
        generatedKit.hashtags = '#marketing #sales #automation #whatsapp #telegram';
        generatedKit.callout = `${formData.name}: Designed specifically for ${formData.audience}. ${formData.features}`;
      }

      // Simulate network delay for better UX
      await new Promise(r => setTimeout(r, 800));
      setResult(generatedKit);
    } catch (err) {
      console.error(err);
      setResult({
        pitch: `Error generating content. Please try again.`,
        seoTitle: 'Error',
        hashtags: '#error',
        callout: 'Please refresh and try again'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Input Form */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div className="space-y-2 text-left">
          <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Product Name</label>
          <input 
            type="text" 
            placeholder="e.g., Artisan Coffee Beans"
            className="w-full bg-slate-50 border-2 border-transparent rounded-2xl sm:rounded-3xl py-4 sm:py-5 px-5 sm:px-7 text-base sm:text-lg font-bold focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-50/50 transition-all outline-none shadow-sm"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="space-y-2 text-left">
          <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Target Audience</label>
          <input 
            type="text" 
            placeholder="e.g., Busy Professionals, Coffee Enthusiasts"
            className="w-full bg-slate-50 border-2 border-transparent rounded-2xl sm:rounded-3xl py-4 sm:py-5 px-5 sm:px-7 text-base sm:text-lg font-bold focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-50/50 transition-all outline-none shadow-sm"
            value={formData.audience}
            onChange={e => setFormData({...formData, audience: e.target.value})}
          />
        </div>
        <div className="sm:col-span-2 space-y-2 text-left">
          <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Key Promotion / Features</label>
          <textarea 
            placeholder="e.g., 20% off for first-time buyers, ethically sourced, free shipping on orders over $50"
            className="w-full bg-slate-50 border-2 border-transparent rounded-2xl sm:rounded-3xl py-4 sm:py-5 px-5 sm:px-7 text-base sm:text-lg font-bold focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-50/50 transition-all outline-none shadow-sm resize-none h-24"
            value={formData.features}
            onChange={e => setFormData({...formData, features: e.target.value})}
          />
        </div>
        <div className="space-y-2 text-left">
          <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Brand Tone</label>
          <select 
            className="w-full bg-slate-50 border-2 border-transparent rounded-2xl sm:rounded-3xl py-4 sm:py-5 px-5 sm:px-7 text-base sm:text-lg font-bold focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-50/50 transition-all outline-none shadow-sm appearance-none cursor-pointer"
            value={formData.tone}
            onChange={e => setFormData({...formData, tone: e.target.value})}
          >
            <option>Friendly</option>
            <option>Professional</option>
            <option>Excited</option>
            <option>Urgent</option>
            <option>Luxury</option>
            <option>Casual</option>
          </select>
        </div>
        <div className="flex items-center justify-between p-5 sm:p-6 bg-slate-50 rounded-2xl sm:rounded-3xl border-2 border-transparent shadow-sm hover:bg-slate-100 transition-all cursor-pointer">
          <label className="text-sm sm:text-base font-bold text-slate-700 cursor-pointer">Include Emojis?</label>
          <button 
            onClick={() => setFormData({...formData, emoji: !formData.emoji})}
            className={`w-14 h-7 rounded-full transition-all duration-300 relative flex-shrink-0 ${formData.emoji ? 'bg-green-500' : 'bg-slate-300'}`}
          >
            <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all shadow-md ${formData.emoji ? 'right-1' : 'left-1'}`}></div>
          </button>
        </div>
      </div>
      
      {/* Generate Button */}
      <button 
        onClick={generateKit}
        disabled={loading || !formData.name || !formData.audience}
        className="w-full py-5 sm:py-6 whatsapp-green text-white rounded-xl sm:rounded-2xl lg:rounded-[2rem] text-lg sm:text-2xl font-black hover:whatsapp-green-hover disabled:bg-slate-200 disabled:shadow-none transition-all flex items-center justify-center gap-3 sm:gap-4 shadow-xl shadow-green-200 hover:-translate-y-1 active:scale-[0.98]"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" size={24} />
            Generating Your Kit...
          </>
        ) : (
          <>
            <Sparkles size={24} className="sm:w-7 sm:h-7" />
            Generate Marketing Kit
          </>
        )}
      </button>

      {/* Results Display */}
      {result && (
        <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-top-6 duration-700">
          {/* WhatsApp Pitch */}
          <div className="bg-green-50 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] border-4 border-green-100 shadow-inner">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0" />
              <h4 className="text-sm sm:text-base font-black text-green-700 uppercase tracking-[0.2em]">WhatsApp Pitch</h4>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-slate-800 font-bold leading-relaxed whitespace-pre-wrap mb-6 sm:mb-8">{result.pitch}</p>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(result.pitch);
                alert('✅ Pitch copied! Now ready to paste on WhatsApp.');
              }}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-green-600 rounded-lg sm:rounded-2xl text-xs sm:text-sm font-black flex items-center gap-2 sm:gap-3 transition-all hover:bg-green-600 hover:text-white shadow-sm hover:shadow-lg active:scale-95"
            >
              <Send size={16} className="sm:w-4 sm:h-4" /> COPY PITCH
            </button>
          </div>

          {/* SEO Title */}
          <div className="bg-blue-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-4 border-blue-100 shadow-sm">
            <h4 className="text-xs sm:text-sm font-black text-blue-700 uppercase tracking-[0.2em] mb-3 sm:mb-4">SEO Product Title</h4>
            <p className="text-lg sm:text-2xl text-slate-800 font-black mb-4 sm:mb-6">{result.seoTitle}</p>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(result.seoTitle);
                alert('✅ Title copied!');
              }}
              className="px-5 sm:px-6 py-2 sm:py-2.5 bg-white text-blue-600 rounded-lg text-xs sm:text-sm font-black flex items-center gap-2 transition-all hover:bg-blue-600 hover:text-white active:scale-95"
            >
              <Send size={14} className="sm:w-4 sm:h-4" /> COPY
            </button>
          </div>

          {/* Value Callout */}
          <div className="bg-purple-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-4 border-purple-100 shadow-sm">
            <h4 className="text-xs sm:text-sm font-black text-purple-700 uppercase tracking-[0.2em] mb-3 sm:mb-4">💡 Value Proposition</h4>
            <p className="text-base sm:text-lg text-slate-800 font-bold leading-relaxed mb-4 sm:mb-6">{result.callout}</p>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(result.callout);
                alert('✅ Callout copied!');
              }}
              className="px-5 sm:px-6 py-2 sm:py-2.5 bg-white text-purple-600 rounded-lg text-xs sm:text-sm font-black flex items-center gap-2 transition-all hover:bg-purple-600 hover:text-white active:scale-95"
            >
              <Send size={14} className="sm:w-4 sm:h-4" /> COPY
            </button>
          </div>

          {/* Hashtags */}
          <div className="bg-amber-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-4 border-amber-100 shadow-sm">
            <h4 className="text-xs sm:text-sm font-black text-amber-700 uppercase tracking-[0.2em] mb-3 sm:mb-4">#️⃣ Trending Hashtags</h4>
            <p className="text-base sm:text-lg text-slate-800 font-bold mb-4 sm:mb-6 break-words">{result.hashtags}</p>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(result.hashtags);
                alert('✅ Hashtags copied!');
              }}
              className="px-5 sm:px-6 py-2 sm:py-2.5 bg-white text-amber-600 rounded-lg text-xs sm:text-sm font-black flex items-center gap-2 transition-all hover:bg-amber-600 hover:text-white active:scale-95"
            >
              <Send size={14} className="sm:w-4 sm:h-4" /> COPY
            </button>
          </div>

          {/* Full Kit Download */}
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] border-2 border-green-200 shadow-lg">
            <h4 className="text-lg sm:text-2xl font-black text-green-900 mb-4 sm:mb-6">Ready to Launch?</h4>
            <p className="text-sm sm:text-base text-green-800 font-bold mb-6 sm:mb-8">Take your complete marketing kit to WhatsApp and start selling 24/7 with PulseChat AI!</p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-12 py-4 sm:py-6 whatsapp-green text-white rounded-xl sm:rounded-2xl lg:rounded-[2rem] text-base sm:text-lg lg:text-xl font-black hover:shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-1 active:scale-95"
            >
              <MessageCircle size={22} className="sm:w-6 sm:h-6" />
              Use This Kit on WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
