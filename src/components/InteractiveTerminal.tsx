import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Copy, Check, Trash2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

interface InteractiveTerminalProps {
  onNotify?: (title: string, desc?: string, type?: 'success' | 'info' | 'error') => void;
  onNavigateSection?: (sectionId: string) => void;
  onToggleTheme?: () => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  onNotify,
  onNavigateSection,
  onToggleTheme,
}) => {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      command: 'curl aaditya.dev/api/profile',
      timestamp: '200 OK',
      output: (
        <div className="text-[11px] sm:text-xs font-mono space-y-1 text-[#C8D0DC]">
          <p className="text-[#8891A0] text-[10px] sm:text-xs">HTTP/1.1 200 OK | application/json</p>
          <pre className="text-[#EBCB91] overflow-x-auto p-2.5 bg-[#141414] rounded border border-[#333333] leading-relaxed">
{`{
  "name": "${portfolioData.name}",
  "role": "${portfolioData.heroRole}",
  "experience": "${portfolioData.yearsOfExp} years",
  "stack": ["Java 17", "Spring Boot", "AWS", "React", "SQL"],
  "location": "${portfolioData.location}",
  "status": "open_to_work"
}`}
          </pre>
          <p className="text-[#8891A0] text-[10px] sm:text-xs mt-2">
            💡 Type <span className="text-[#D9B56C] font-bold">help</span> or click suggestions below.
          </p>
        </div>
      ),
    },
  ]);

  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>(['curl aaditya.dev/api/profile']);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const lowerCmd = cmd.toLowerCase();
    let response: React.ReactNode = null;

    if (lowerCmd === 'help') {
      response = (
        <div className="space-y-1.5 text-[11px] sm:text-xs text-[#C8D0DC] font-mono">
          <p className="text-[#B6CBD0] font-bold">Available Commands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-1">
            <div><span className="text-[#6BBF8F] font-bold">skills</span> - Technical skill matrix</div>
            <div><span className="text-[#6BBF8F] font-bold">projects</span> - Flagship projects</div>
            <div><span className="text-[#6BBF8F] font-bold">exp</span> - Enterprise work history</div>
            <div><span className="text-[#6BBF8F] font-bold">curl profile</span> - Query JSON profile</div>
            <div><span className="text-[#6BBF8F] font-bold">contact</span> - Direct email & phone</div>
            <div><span className="text-[#6BBF8F] font-bold">theme</span> - Toggle light/dark mode</div>
            <div><span className="text-[#6BBF8F] font-bold">resume</span> - Open resume PDF</div>
            <div><span className="text-[#6BBF8F] font-bold">sudo hire</span> - 🚀 Make an offer!</div>
            <div><span className="text-[#6BBF8F] font-bold">clear</span> - Clear terminal</div>
          </div>
        </div>
      );
    } else if (lowerCmd === 'skills' || lowerCmd === 'skill') {
      response = (
        <div className="space-y-1 text-[11px] sm:text-xs font-mono text-[#C8D0DC]">
          <p className="text-[#B6CBD0] font-bold">⚡ Technical Skills:</p>
          <p><span className="text-[#D9B56C] font-medium">Backend:</span> Spring Boot, Microservices, Spring Security, Hibernate/JPA, REST APIs</p>
          <p><span className="text-[#D9B56C] font-medium">Languages:</span> Java (17/11/8), TypeScript, JavaScript, SQL, Python</p>
          <p><span className="text-[#D9B56C] font-medium">Cloud/DB:</span> AWS (EC2, S3, RDS), Docker, MySQL, PostgreSQL, Git</p>
          <p><span className="text-[#D9B56C] font-medium">Frontend:</span> ReactJS, Next.js, Tailwind CSS, Vite</p>
        </div>
      );
    } else if (lowerCmd === 'projects' || lowerCmd === 'proj') {
      onNavigateSection?.('projects');
      response = (
        <div className="space-y-1.5 text-[11px] sm:text-xs font-mono text-[#C8D0DC]">
          <p className="text-[#B6CBD0] font-bold">📁 Featured Projects:</p>
          {portfolioData.projects.map((p, idx) => (
            <div key={p.id} className="p-2 rounded bg-[#141414] border border-[#333333]">
              <p className="text-[#EBCB91] font-bold">0{idx + 1}. {p.title} <span className="text-[10px] text-[#8891A0] font-normal">({p.stack.slice(0, 3).join(', ')})</span></p>
              <p className="text-[#C8D0DC] text-[11px] mt-0.5">{p.description}</p>
            </div>
          ))}
        </div>
      );
    } else if (lowerCmd === 'exp' || lowerCmd === 'experience') {
      onNavigateSection?.('experience');
      response = (
        <div className="space-y-2 text-[11px] sm:text-xs font-mono text-[#C8D0DC]">
          <p className="text-[#B6CBD0] font-bold">💼 Professional Experience:</p>
          {portfolioData.experiences.map((exp) => (
            <div key={exp.id} className="border-l-2 border-[#6BBF8F] pl-2.5 py-0.5">
              <p className="font-bold text-[#FAFAF9]">{exp.role} @ <span className="text-[#EBCB91]">{exp.company}</span></p>
              <p className="text-[10px] text-[#8891A0]">{exp.period} · {exp.location}</p>
              <p className="text-[11px] text-[#C8D0DC] mt-0.5">{exp.highlights[0]}</p>
            </div>
          ))}
        </div>
      );
    } else if (lowerCmd.includes('curl') || lowerCmd.includes('profile')) {
      response = (
        <pre className="text-[10px] sm:text-xs font-mono text-[#EBCB91] overflow-x-auto p-2 bg-[#141414] rounded border border-[#333333]">
{JSON.stringify({
  status: "200 OK",
  developer: portfolioData.name,
  role: portfolioData.title,
  experience: "3+ Years",
  email: portfolioData.email,
  phone: portfolioData.phone,
  topSkills: ["Java", "Spring Boot", "AWS", "React", "PostgreSQL"],
  metrics: {
    latencyReduction: "30%",
    testCoverage: "85%+",
    migration: "Java 1.5 -> Java 17"
  }
}, null, 2)}
        </pre>
      );
    } else if (lowerCmd === 'contact') {
      onNavigateSection?.('contact');
      response = (
        <div className="text-[11px] sm:text-xs font-mono space-y-1 text-[#C8D0DC]">
          <p className="text-[#B6CBD0] font-bold">📫 Contact Endpoints:</p>
          <p>Email: <a href={`mailto:${portfolioData.email}`} className="text-[#EBCB91] underline">{portfolioData.email}</a></p>
          <p>Phone: <a href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`} className="text-[#EBCB91] underline">{portfolioData.phone}</a></p>
        </div>
      );
    } else if (lowerCmd === 'resume') {
      window.open(portfolioData.resumeUrl, '_blank');
      onNotify?.('Resume Opened', 'Opening resume PDF in a new tab', 'info');
      response = <p className="text-[#6BBF8F] text-xs font-mono">Opening {portfolioData.resumeUrl}...</p>;
    } else if (lowerCmd === 'theme') {
      onToggleTheme?.();
      response = <p className="text-[#B6CBD0] text-xs font-mono">Theme toggled!</p>;
    } else if (lowerCmd.includes('sudo hire') || lowerCmd === 'hire') {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
      onNotify?.('🎉 Offer Initiated!', 'Redirecting to contact section. Looking forward to connecting!', 'success');
      onNavigateSection?.('contact');
      response = (
        <div className="p-3 bg-[#1B2920] border border-[#2D5A3C] rounded text-xs font-mono text-[#A7F3D0] space-y-1">
          <p className="font-bold text-[#E5F6EA]">Offer Initiated!</p>
          <p>Status: 201 CREATED - Let's build remarkable software together.</p>
          <p>Email: <span className="underline font-bold text-white">{portfolioData.email}</span></p>
        </div>
      );
    } else if (lowerCmd === 'clear' || lowerCmd === 'cls') {
      setHistory([]);
      setInput('');
      return;
    } else {
      response = (
        <div className="text-[11px] sm:text-xs font-mono text-[#E5716B] space-y-0.5">
          <p>command not found: <span className="font-bold text-white">{cmd}</span></p>
          <p className="text-[#8891A0] text-[10px] sm:text-xs">Type <span className="text-[#D9B56C] font-bold cursor-pointer" onClick={() => handleCommand('help')}>help</span> for commands.</p>
        </div>
      );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: cmd,
        output: response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      },
    ]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
      setHistoryIndex(nextIdx);
      setInput(commandHistory[commandHistory.length - 1 - nextIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const copyTerminalOutput = () => {
    const text = history.map(h => `$ ${h.command}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    onNotify?.('Copied to clipboard', 'Terminal log copied', 'info');
  };

  const clearTerminal = () => {
    setHistory([]);
    setInput('');
  };

  const quickCommands = [
    { label: 'skills', cmd: 'skills' },
    { label: 'projects', cmd: 'projects' },
    { label: 'exp', cmd: 'exp' },
    { label: 'curl profile', cmd: 'curl aaditya.dev/api/profile' },
    { label: 'sudo hire', cmd: 'sudo hire-aaditya' },
  ];

  return (
    <div className="w-full rounded-[4px] overflow-hidden shadow-lg border border-[#333333] bg-[#171717] text-[#C8D0DC] font-mono transition-all">
      
      {/* Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#222222] border-b border-[#363636]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E5716B]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E5B96B]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#6BBF8F]" />
          <span className="text-[11px] text-[#8891A0] font-medium ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3 h-3 text-[#8891A0]" />
            zsh — aaditya.dev/api
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={clearTerminal}
            title="Clear output"
            className="p-1 rounded text-[#8891A0] hover:text-white hover:bg-[#333333] transition"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={copyTerminalOutput}
            title="Copy output"
            className="p-1 rounded text-[#8891A0] hover:text-white hover:bg-[#333333] transition"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#6BBF8F]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        className="p-4 sm:p-5 text-xs space-y-3 max-h-[300px] sm:max-h-[360px] overflow-y-auto bg-[#171717]"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item) => (
          <div key={item.id} className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-[#8891A0] text-[11px] sm:text-xs flex-wrap">
              <span className="text-[#D9B56C] font-bold">$</span>
              <span className="text-[#FAFAF9]">{item.command}</span>
            </div>
            <div className="pl-3 border-l border-[#333333]">{item.output}</div>
          </div>
        ))}

        {/* Input */}
        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs pt-1 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-1 text-[#D9B56C] shrink-0 font-bold">
            <span>$</span>
          </div>
          <div className="flex-1 flex items-center gap-1 min-w-[120px]">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent border-none outline-none text-[#FAFAF9] font-mono text-[11px] sm:text-xs p-0 m-0 focus:ring-0"
              placeholder="Type command ('help')..."
              aria-label="Terminal command input"
              autoComplete="off"
              spellCheck={false}
            />
            <button
              onClick={() => handleCommand(input)}
              className="text-[#8891A0] hover:text-white p-1 rounded hover:bg-[#333333] transition"
              title="Execute"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Action Chips */}
      <div className="px-4 py-2 bg-[#202020] border-t border-[#333333] flex flex-wrap items-center gap-1.5 text-xs">
        <span className="text-[10px] text-[#8891A0] mr-1 hidden sm:inline">Try:</span>
        {quickCommands.map((qc) => (
          <button
            key={qc.cmd}
            onClick={() => handleCommand(qc.cmd)}
            className="px-2 py-0.5 rounded-[2px] bg-[#2A2A2A] hover:bg-[#383838] text-[#C8D0DC] hover:text-white transition text-[10.5px] font-mono border border-[#3D3D3D] active:scale-95 touch-manipulation"
          >
            ${qc.label}
          </button>
        ))}
      </div>
    </div>
  );
};
