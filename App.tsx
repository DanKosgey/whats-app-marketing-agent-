
import React, { useState } from 'react';
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
  Play
} from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import AIChatAgent from './components/AIChatAgent';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "+254702944890";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=Hello!%20I'm%20interested%20in%20PulseChat.%20Can%20we%20set%20up%20a%20call?`;

  return (
    <div className="min-h-screen flex flex-col selection:bg-green-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 whatsapp-green rounded-lg shadow-sm">
                <Bot className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-black text-slate-900 tracking-tight">PulseChat</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 text-sm">
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

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 p-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-slate-700 font-bold hover:text-green-600">Why Us?</a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-slate-700 font-bold hover:text-green-600">How it Works</a>
            <a href="#generator" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-slate-700 font-bold hover:text-green-600">AI Generator</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-slate-700 font-bold hover:text-green-600">Pricing</a>
            <a 
              href={whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full whatsapp-green text-white px-5 py-4 rounded-2xl font-black flex items-center justify-center gap-2"
            >
              Get Started Now
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-green-50 text-green-700 rounded-full text-sm font-extrabold uppercase tracking-widest border border-green-100 mb-10 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-700">
            <Sparkles size={16} className="animate-pulse text-green-500" />
            <span>Your 24/7 AI Sales Rep That Never Sleeps</span>
          </div>
          
          <h1 className="text-6xl lg:text-[100px] font-black text-slate-900 leading-[1] mb-10 tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Automate WhatsApp <br className="hidden lg:block" />
            Marketing <span className="text-green-600">on Autopilot</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium mb-14 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Scale your business without the manual grind. Schedule AI-powered product ads to WhatsApp groups 
            automatically—<span className="text-slate-900 font-bold underline decoration-green-500/30 underline-offset-4">morning coffee promos at 8 AM</span>, 
            <span className="text-slate-900 font-bold underline decoration-green-500/30 underline-offset-4"> evening deals at 6 PM</span>, all hands-free.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <a 
              href={whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-12 py-6 whatsapp-green text-white rounded-[2rem] text-2xl font-black hover:whatsapp-green-hover shadow-[0_25px_60px_-15px_rgba(37,211,102,0.6)] hover:-translate-y-1.5 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <MessageCircle size={28} />
              Contact on WhatsApp
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto px-12 py-6 bg-slate-50 text-slate-900 border-2 border-slate-100 rounded-[2rem] text-2xl font-black hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group">
              See How It Works
              <Play size={20} className="fill-slate-900 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-50 flex flex-wrap justify-center gap-12 opacity-50 grayscale animate-in fade-in duration-1000 delay-500">
             <div className="font-black text-2xl tracking-tighter text-slate-400">1.2M MESSAGES SENT</div>
             <div className="font-black text-2xl tracking-tighter text-slate-400">500+ ACTIVE AGENTS</div>
             <div className="font-black text-2xl tracking-tighter text-slate-400">99.9% UPTIME</div>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-green-200/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100/20 blur-[120px] rounded-full pointer-events-none"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 overflow-hidden relative shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl lg:text-7xl font-black tracking-tighter">Why Choose PulseChat?</h2>
            <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">Everything you need to turn your WhatsApp groups into automated sales channels.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<Clock size={28} className="text-green-400" />}
              title="Set & Forget Automation"
              desc="Schedule daily/weekly campaigns. No manual posting—the agent handles everything while you focus on your business."
            />
            <FeatureCard 
              icon={<Bot size={28} className="text-green-400" />}
              title="AI-Powered Content"
              desc="Generates fresh, engaging product descriptions automatically, adapting its tone based on the time of day or group type."
            />
            <FeatureCard 
              icon={<Target size={28} className="text-green-400" />}
              title="Smart Targeting"
              desc="Send different products to different groups. Track which groups buy more and A/B test messages to find what converts best."
            />
            <FeatureCard 
              icon={<BarChart3 size={28} className="text-green-400" />}
              title="Built-In Analytics"
              desc="See which products get the most engagement. Track message delivery and response rates to optimize with real data."
            />
            <FeatureCard 
              icon={<TrendingUp size={28} className="text-green-400" />}
              title="ROI Focused"
              desc="Turn WhatsApp groups into revenue streams and reach customers where they already are—no extra ad budget needed."
            />
            <FeatureCard 
              icon={<Zap size={28} className="text-green-400" />}
              title="Scale Effortlessly"
              desc="Expand your reach to an unlimited number of groups without any extra manual effort from your side."
            />
          </div>
          
          <div className="mt-20 text-center">
            <a 
              href={whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 font-black text-xl hover:text-green-300 transition-all border-b-2 border-green-500/30 pb-1"
            >
              Start Your Free Onboarding <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter">See It In Action</h2>
            <p className="text-2xl text-slate-500 font-medium max-w-2xl mx-auto">In just a few clicks, your 24/7 sales rep is ready to go. Here's a quick look.</p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-10">
            <StepCard 
              step="1" 
              title="Add Products" 
              desc="Quickly add products to your agent via our sleek dashboard."
              icon={<ShoppingBag size={24} />}
            />
            <StepCard 
              step="2" 
              title="Set Schedule" 
              desc="Set your schedule, e.g., 8 AM & 6 PM daily on autopilot."
              icon={<Calendar size={24} />}
            />
            <StepCard 
              step="3" 
              title="Select Groups" 
              desc="Choose exactly which WhatsApp groups to target."
              icon={<MessageCircle size={24} />}
            />
            <StepCard 
              step="4" 
              title="Run on Autopilot" 
              desc="Your agent sends personalized messages automatically."
              icon={<Bot size={24} />}
            />
            <StepCard 
              step="5" 
              title="See Sales Grow" 
              desc="Get instant sales notifications while you're away."
              icon={<TrendingUp size={24} />}
            />
          </div>
        </div>
      </section>

      {/* AI Tool Section */}
      <section id="generator" className="py-32 bg-slate-50 border-y border-slate-100 rounded-[4rem] mx-4 shadow-inner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] overflow-hidden border border-slate-100 p-10 lg:p-16">
            <div className="flex flex-col items-center text-center mb-12 space-y-5">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-[2rem] flex items-center justify-center mb-2 shadow-sm">
                <Sparkles size={40} className="fill-green-100" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter">AI Marketing Asset Generator</h2>
              <p className="text-xl text-slate-500 font-medium">Generate a complete marketing kit for your product in seconds.</p>
            </div>
            
            {/* Fix: Pass whatsappLink prop to AssetGenerator */}
            <AssetGenerator whatsappLink={whatsappLink} />
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tighter">Perfect For...</h2>
            <p className="text-2xl text-slate-500 font-medium">Any business or individual looking to leverage WhatsApp for growth.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <AudienceCard icon={<ShoppingBag size={32} />} title="E-commerce Sellers" desc="Dropshippers & online stores" />
            <AudienceCard icon={<Store size={32} />} title="Local Businesses" desc="Restaurants, salons, retail shops" />
            <AudienceCard icon={<Box size={32} />} title="Product Distributors" desc="Wholesalers & resellers" />
            <AudienceCard icon={<Briefcase size={32} />} title="Service Providers" desc="Coaches & consultants" />
            <AudienceCard icon={<Palette size={32} />} title="Creators" desc="Artists & course sellers" />
            <AudienceCard icon={<Zap size={32} />} title="Digital Products" desc="Ebooks & software" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-slate-50 rounded-[4rem] mx-4 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter">Find the Perfect Plan</h2>
            <p className="text-2xl text-slate-500 font-medium max-w-2xl mx-auto">Start automating your sales today with our transparent pricing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 items-stretch">
            <PricingCard 
              name="Starter"
              price="$7"
              desc="For individuals just getting started."
              features={["5 groups automation", "2 campaigns/day", "Basic Analytics"]}
              whatsappLink={whatsappLink}
            />
            <PricingCard 
              name="Pro"
              price="$25"
              desc="For growing businesses needing power."
              highlight={true}
              features={["20 groups automation", "Unlimited campaigns", "AI Content Generation", "Smart Targeting"]}
              whatsappLink={whatsappLink}
            />
            <PricingCard 
              name="Agency"
              price="$40"
              desc="For agencies and large-scale operators."
              features={["Unlimited groups", "White-label options", "Full Analytics Dashboard", "Priority Support"]}
              whatsappLink={whatsappLink}
            />
          </div>
          
          <div className="mt-32 text-center max-w-5xl mx-auto">
            <div className="bg-white p-16 rounded-[3.5rem] shadow-xl border border-slate-100">
              <p className="text-3xl lg:text-4xl font-bold text-slate-700 leading-tight italic mb-8">
                "Imagine waking up to sales notifications because your AI agent sent the perfect product pitch to 20 groups while you slept."
              </p>
              <p className="text-2xl font-black text-green-600 mb-12">That's not the future — that's today.</p>
              <a 
                href={whatsappLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-14 py-7 whatsapp-green text-white rounded-[2.5rem] text-3xl font-black hover:shadow-[0_30px_70px_-15px_rgba(37,211,102,0.6)] transition-all hover:-translate-y-2 active:scale-95"
              >
                Start Your Autopilot Sales
                <ArrowRight size={36} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-10">
            <div className="p-2 whatsapp-green rounded-xl shadow-md">
              <Bot className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">PulseChat</span>
          </div>
          <div className="flex justify-center gap-12 mb-10 text-slate-500 font-bold text-lg">
            <a href="#features" className="hover:text-green-600 transition-colors">Why PulseChat?</a>
            <a href="#pricing" className="hover:text-green-600 transition-colors">Pricing</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">Support</a>
          </div>
          <p className="text-base text-slate-400 font-medium">&copy; {new Date().getFullYear()} PulseChat. Turning groups into revenue streams.</p>
        </div>
      </footer>

      {/* Support Agent */}
      <AIChatAgent whatsappLink={whatsappLink} />

      {/* Persistent Contact Us Button */}
      <div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-left duration-500">
        <a 
          href={whatsappLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-4 whatsapp-green text-white rounded-full font-black text-sm lg:text-base shadow-2xl hover:scale-105 active:scale-95 transition-all group"
        >
          <div className="bg-white/20 p-2 rounded-full group-hover:rotate-12 transition-transform">
            <MessageCircle size={20} />
          </div>
          <span className="tracking-tight">Chat with us</span>
        </a>
      </div>
    </div>
  );
};

// Sub-components
const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group hover:border-green-500/50">
    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-green-500 transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-green-400 transition-colors">{title}</h3>
    <p className="text-slate-400 text-base leading-relaxed font-medium">{desc}</p>
  </div>
);

const StepCard: React.FC<{ step: string, title: string, desc: string, icon: React.ReactNode }> = ({ step, title, desc, icon }) => (
  <div className="relative group p-8 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 border border-transparent hover:border-green-100">
    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm mb-6 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <div className="absolute top-6 right-8 text-slate-200 text-6xl font-black select-none transition-colors group-hover:text-green-50">0{step}</div>
    <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{title}</h4>
    <p className="text-base text-slate-500 leading-relaxed font-medium">{desc}</p>
  </div>
);

const AudienceCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all group">
    <div className="w-20 h-20 bg-white rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 text-green-600 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
      {icon}
    </div>
    <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{title}</h4>
    <p className="text-base text-slate-500 font-medium">{desc}</p>
  </div>
);

const PricingCard: React.FC<{ name: string, price: string, desc: string, features: string[], highlight?: boolean, whatsappLink: string }> = ({ name, price, desc, features, highlight, whatsappLink }) => (
  <div className={`p-12 rounded-[3.5rem] border ${highlight ? 'bg-white border-green-500 shadow-2xl scale-105 z-10' : 'bg-white border-slate-100 shadow-lg'} flex flex-col h-full transition-all duration-500`}>
    {highlight && (
      <div className="bg-green-500 text-white text-xs font-black px-5 py-2 rounded-full self-start mb-8 border border-green-400 uppercase tracking-[0.2em] shadow-lg shadow-green-200">
        Most Popular
      </div>
    )}
    <h4 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{name}</h4>
    <p className="text-slate-500 font-bold mb-8">{desc}</p>
    <p className="text-7xl font-black text-slate-900 mb-10 flex items-baseline gap-1 tracking-tighter">
      {price}<span className="text-xl text-slate-400 font-bold tracking-normal">/mo</span>
    </p>
    <ul className="space-y-6 mb-12 flex-grow">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-4 text-slate-600 font-bold text-base">
          <CheckCircle2 size={24} className="text-green-500 flex-shrink-0" />
          {f}
        </li>
      ))}
    </ul>
    <a 
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full py-6 rounded-[2rem] font-black text-xl text-center transition-all ${highlight ? 'whatsapp-green text-white hover:whatsapp-green-hover shadow-xl hover:scale-[1.02]' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
    >
      Choose {name}
    </a>
  </div>
);

// Fix: AssetGenerator now accepts whatsappLink as a prop to fix the missing name error
const AssetGenerator: React.FC<{ whatsappLink: string }> = ({ whatsappLink }) => {
  const [formData, setFormData] = useState({
    name: '',
    audience: '',
    features: '',
    tone: 'Friendly',
    emoji: true
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const generateKit = async () => {
    if (!formData.name) return;
    setLoading(true);
    setResult(null);
    try {
      // Fix: Follow @google/genai initialization and generation guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Generate a high-conversion WhatsApp marketing pitch for a product named "${formData.name}". 
      Target Audience: ${formData.audience || 'General'}. 
      Key Features: ${formData.features || 'Standard Features'}. 
      Tone of Voice: ${formData.tone}. 
      Include Emojis: ${formData.emoji ? 'Yes' : 'No'}. 
      Make the pitch short, engaging, and suitable for WhatsApp group marketing. 
      Include a clear Call to Action.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });
      // Fix: Access .text property directly
      setResult(response.text || "Failed to generate kit. Please try again.");
    } catch (err) {
      console.error(err);
      setResult("Error generating kit. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-2 text-left">
          <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Product Name</label>
          <input 
            type="text" 
            placeholder="e.g., Artisan Coffee Beans"
            className="w-full bg-slate-50 border-2 border-transparent rounded-3xl py-5 px-7 text-lg font-bold focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-50/50 transition-all outline-none shadow-sm"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="space-y-2 text-left">
          <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Target Audience</label>
          <input 
            type="text" 
            placeholder="e.g., Professionals, Students"
            className="w-full bg-slate-50 border-2 border-transparent rounded-3xl py-5 px-7 text-lg font-bold focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-50/50 transition-all outline-none shadow-sm"
            value={formData.audience}
            onChange={e => setFormData({...formData, audience: e.target.value})}
          />
        </div>
        <div className="md:col-span-2 space-y-2 text-left">
          <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Key Promotion / Features</label>
          <input 
            type="text" 
            placeholder="e.g., 20% off for first-time buyers, ethically sourced"
            className="w-full bg-slate-50 border-2 border-transparent rounded-3xl py-5 px-7 text-lg font-bold focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-50/50 transition-all outline-none shadow-sm"
            value={formData.features}
            onChange={e => setFormData({...formData, features: e.target.value})}
          />
        </div>
        <div className="space-y-2 text-left">
          <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Brand Tone</label>
          <select 
            className="w-full bg-slate-50 border-2 border-transparent rounded-3xl py-5 px-7 text-lg font-bold focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-50/50 transition-all outline-none shadow-sm appearance-none"
            value={formData.tone}
            onChange={e => setFormData({...formData, tone: e.target.value})}
          >
            <option>Friendly</option>
            <option>Professional</option>
            <option>Excited</option>
            <option>Urgent</option>
          </select>
        </div>
        <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border-2 border-transparent shadow-sm">
          <label className="text-base font-bold text-slate-700">Include Emojis?</label>
          <button 
            onClick={() => setFormData({...formData, emoji: !formData.emoji})}
            className={`w-14 h-7 rounded-full transition-all duration-300 relative ${formData.emoji ? 'bg-green-500' : 'bg-slate-300'}`}
          >
            <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all shadow-md ${formData.emoji ? 'right-1' : 'left-1'}`}></div>
          </button>
        </div>
      </div>
      
      <button 
        onClick={generateKit}
        disabled={loading || !formData.name}
        className="w-full py-6 whatsapp-green text-white rounded-[2rem] text-2xl font-black hover:whatsapp-green-hover transition-all flex items-center justify-center gap-4 shadow-xl shadow-green-200 disabled:bg-slate-200 disabled:shadow-none hover:-translate-y-1 active:scale-[0.98]"
      >
        {loading ? <Loader2 className="animate-spin" size={28} /> : <Sparkles size={28} />}
        Generate Marketing Kit
      </button>

      {result && (
        <div className="animate-in fade-in slide-in-from-top-6 duration-700 text-left">
          <div className="bg-green-50 p-10 rounded-[3rem] border-4 border-green-100 relative group shadow-inner">
            <h4 className="text-xs font-black text-green-700 uppercase tracking-[0.3em] mb-6">Your High-Conversion Pitch:</h4>
            <p className="text-slate-800 font-bold text-xl leading-relaxed whitespace-pre-wrap">{result}</p>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(result);
                alert('Copied to clipboard! Redirecting to WhatsApp...');
                // Fix: Line 537 - whatsappLink is now available via props
                window.open(whatsappLink, '_blank');
              }}
              className="mt-10 px-8 py-4 bg-white text-green-600 rounded-2xl text-sm font-black flex items-center gap-3 transition-all hover:bg-green-600 hover:text-white shadow-sm hover:shadow-lg active:scale-95"
            >
              <Send size={18} /> COPY & GO TO WHATSAPP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
