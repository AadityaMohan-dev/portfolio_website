import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactProps {
  onNotify?: (title: string, desc?: string, type?: 'success' | 'info' | 'error') => void;
}

export const Contact: React.FC<ContactProps> = ({ onNotify }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Interactive POST /contact simulator form state
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [intent, setIntent] = useState<'hire' | 'contract' | 'collaboration' | 'general'>('hire');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedResponse, setSimulatedResponse] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      onNotify?.('Email Copied!', portfolioData.email, 'success');
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
      onNotify?.('Phone Copied!', portfolioData.phone, 'success');
    }
  };

  const handleSimulatedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !message) {
      onNotify?.('Missing Fields', 'Please provide an email and message', 'error');
      return;
    }

    setIsSimulating(true);

    setTimeout(() => {
      setIsSimulating(false);
      setSimulatedResponse(JSON.stringify({
        status: "201 Created",
        timestamp: new Date().toISOString(),
        recipient: portfolioData.email,
        payload: {
          from: senderName || "Anonymous Visitor",
          email: senderEmail,
          intent,
          messageLength: message.length
        },
        message: "Simulated dispatch acknowledged! Opening your email client to send direct dispatch..."
      }, null, 2));

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.85 }
      });

      onNotify?.('🚀 HTTP 201 Created', 'Dispatch prepared. Opening your mail client...', 'success');

      // Create mailto link
      const subject = encodeURIComponent(`[${intent.toUpperCase()}] Inquiry from ${senderName || 'Portfolio Visitor'}`);
      const body = encodeURIComponent(`Hi Aaditya,\n\n${message}\n\nBest regards,\n${senderName}\n${senderEmail}`);
      window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#171717] text-[#FAFAF9] border-t border-blue-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#9CA3AF] mb-2.5">
            <span className="px-2 py-0.5 rounded-[2px] font-extrabold text-[9.5px] bg-orange-500/20 text-orange-400 border border-orange-500/30">
              POST
            </span>
            <span>/contact</span>
            <span className="text-[#666666]">→</span>
            <span className="text-emerald-400 font-bold">200 Ready</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FAFAF9] tracking-tight">
            Let's build something
          </h2>

          <p className="text-[#C7CBD1] text-sm sm:text-base mt-2.5 leading-relaxed">
            Open to full-time engineering roles, freelance microservice contracts, and technical consulting. Send a dispatch — I respond fast.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Direct Action Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-[2px] bg-[#202020] border border-[#383838] hover:border-blue-500 hover:bg-[#242424] transition group flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-[2px] bg-[#2A2A2A] text-blue-400 border border-[#404040] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10.5px] font-mono uppercase tracking-wider text-[#9CA3AF] font-bold">
                    Direct Email
                  </p>
                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="font-mono text-xs sm:text-sm font-bold text-[#F3F3EE] group-hover:text-blue-400 transition truncate block"
                  >
                    {portfolioData.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(portfolioData.email, 'email')}
                className="p-2 rounded-[2px] bg-[#2C2C2C] hover:bg-[#383838] text-[#9CA3AF] hover:text-white transition shrink-0"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-[2px] bg-[#202020] border border-[#383838] hover:border-blue-500 hover:bg-[#242424] transition group flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-[2px] bg-[#2A2A2A] text-emerald-400 border border-[#404040] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10.5px] font-mono uppercase tracking-wider text-[#9CA3AF] font-bold">
                    Phone / WhatsApp
                  </p>
                  <a
                    href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`}
                    className="font-mono text-xs sm:text-sm font-bold text-[#F3F3EE] group-hover:text-emerald-400 transition truncate block"
                  >
                    {portfolioData.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(portfolioData.phone, 'phone')}
                className="p-2 rounded-[2px] bg-[#2C2C2C] hover:bg-[#383838] text-[#9CA3AF] hover:text-white transition shrink-0"
                title="Copy Phone"
                aria-label="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Social Hub */}
            <div className="p-5 rounded-[2px] bg-[#202020]/60 border border-[#333333] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#9CA3AF]">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Greater Noida, Uttar Pradesh, India (IST UTC+5:30)</span>
              </div>

              <div className="pt-2 border-t border-[#333333] flex flex-wrap gap-2">
                <a
                  href={portfolioData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-[#282828] hover:bg-[#333333] text-xs font-mono text-[#E0E0E0] hover:text-white transition"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>linkedin.com/in/aaditya-mohan</span>
                </a>

                <a
                  href={portfolioData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-[#282828] hover:bg-[#333333] text-xs font-mono text-[#E0E0E0] hover:text-white transition"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#CCCCCC]" />
                  <span>github.com/AadityaMohan-dev</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive API Dispatch Simulator */}
          <div className="lg:col-span-7">
            <div className="rounded-[4px] p-5 sm:p-7 bg-[#202020] border border-[#383838] shadow-xl">
              
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#333333]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#FAFAF9]">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="font-bold">Interactive API Dispatch Playground</span>
                </div>
                <span className="font-mono text-[10px] text-[#888888] uppercase">
                  application/json
                </span>
              </div>

              <form onSubmit={handleSimulatedSubmit} className="space-y-3.5 font-mono text-xs">
                
                {/* Intent Selector */}
                <div>
                  <label className="block text-[#9CA3AF] text-[10px] sm:text-[11px] mb-1.5 uppercase font-bold">
                    Request Intent (Payload Type)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                    {[
                      { id: 'hire', label: 'Full-time Role' },
                      { id: 'contract', label: 'Contract / Dev' },
                      { id: 'collaboration', label: 'Collaboration' },
                      { id: 'general', label: 'Say Hello' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setIntent(item.id as any)}
                        className={`p-2 rounded-[2px] border text-center transition ${
                          intent === item.id
                            ? 'bg-blue-600/20 border-blue-500 text-blue-300 font-bold'
                            : 'bg-[#2A2A2A] border-[#383838] text-[#9CA3AF] hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#9CA3AF] text-[10px] sm:text-[11px] mb-1 uppercase font-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Alex Vance"
                      className="w-full px-3 py-2 rounded-[2px] bg-[#161616] border border-[#383838] text-[#FAFAF9] placeholder:text-[#555555] focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[#9CA3AF] text-[10px] sm:text-[11px] mb-1 uppercase font-bold">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3 py-2 rounded-[2px] bg-[#161616] border border-[#383838] text-[#FAFAF9] placeholder:text-[#555555] focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#9CA3AF] text-[10px] sm:text-[11px] mb-1 uppercase font-bold">
                    Message Payload *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, role, or requirements..."
                    className="w-full px-3 py-2 rounded-[2px] bg-[#161616] border border-[#383838] text-[#FAFAF9] placeholder:text-[#555555] focus:outline-none focus:border-blue-500 resize-none text-xs"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSimulating}
                  className="w-full py-3 rounded-[2px] bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition disabled:opacity-50 active:scale-[0.99]"
                >
                  {isSimulating ? (
                    <span>Executing POST /contact...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Request (POST /contact)</span>
                    </>
                  )}
                </button>
              </form>

              {/* Response preview */}
              {simulatedResponse && (
                <div className="mt-3 p-3 rounded-[2px] bg-[#141414] border border-[#333333] text-[10px] sm:text-[11px] font-mono text-[#6BBF8F] overflow-x-auto">
                  <pre>{simulatedResponse}</pre>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Foot Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-10 pt-6 border-t border-[#383838] font-mono text-xs text-[#9CA3AF]">
          <span>📍 Greater Noida, India</span>
          <span>
            <a 
              href={portfolioData.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FAFAF9] hover:text-blue-400 hover:underline"
            >
              linkedin.com/in/aaditya-mohan
            </a>
            {' · '}
            <a 
              href={portfolioData.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FAFAF9] hover:text-blue-400 hover:underline"
            >
              github.com/AadityaMohan-dev
            </a>
          </span>
        </div>

      </div>
    </section>
  );
};
