import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Target, 
  MessageSquare, 
  Settings, 
  PenTool, 
  Share2, 
  Bot,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

import Introduction from './components/Introduction';
import Framework from './components/Framework';
import Audiences from './components/Audiences';
import Messaging from './components/Messaging';
import Processes from './components/Processes';
import ToneOfVoice from './components/ToneOfVoice';
import Channels from './components/Channels';
import AITools from './components/AITools';

const SECTIONS = [
  { id: 'intro', title: 'Introduksjon', icon: BookOpen, component: Introduction },
  { id: 'framework', title: 'Rammeverk & Strategi', icon: Target, component: Framework },
  { id: 'audiences', title: 'Målgrupper', icon: Target, component: Audiences },
  { id: 'messaging', title: 'Budskap & Verdi', icon: MessageSquare, component: Messaging },
  { id: 'processes', title: 'Arbeidsprosesser (SOP)', icon: Settings, component: Processes },
  { id: 'tone', title: 'Tone of Voice', icon: PenTool, component: ToneOfVoice },
  { id: 'channels', title: 'Kanaler', icon: Share2, component: Channels },
  { id: 'ai', title: 'AI & Verktøy', icon: Bot, component: AITools },
];

export default function App() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const ActiveComponent = SECTIONS.find(s => s.id === activeSection)?.component || Introduction;

  return (
    <div className="flex h-screen overflow-hidden bg-nordic-bg font-sans">
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-nordic-surface border-r border-nordic-border transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-8 flex items-center justify-between border-b border-nordic-border/50">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-nordic-blue font-serif italic text-xl border-b-2 border-nordic-accent">GS1</span>
              <span className="font-sans not-italic text-[10px] tracking-widest uppercase text-nordic-text">Norway</span>
            </div>
            <span className="text-[11px] font-medium text-nordic-text-muted mt-1 uppercase tracking-wider">Henriks Playbook</span>
          </div>
          <button className="md:hidden text-nordic-text-muted" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>
        
        <nav className="mt-8 px-4 space-y-1">
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-2.5 rounded-md transition-all text-left text-sm
                  ${isActive 
                    ? 'bg-nordic-blue-light text-nordic-blue font-medium' 
                    : 'text-nordic-text-muted hover:bg-nordic-bg hover:text-nordic-text'}
                `}
              >
                <Icon size={18} strokeWidth={isActive ? 2 : 1.5} className={isActive ? 'text-nordic-blue' : 'text-nordic-text-muted'} />
                <span>{section.title}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Header */}
        <header className="md:hidden bg-nordic-surface border-b border-nordic-border p-4 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-nordic-blue font-serif italic">
              <span className="border-b-2 border-nordic-accent">GS1</span>
              <span className="font-sans not-italic text-[10px] tracking-widest uppercase ml-1 text-nordic-text">Norway</span>
            </div>
            <span className="text-[10px] font-medium text-nordic-text-muted uppercase tracking-wider">Henriks Playbook</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-nordic-text-muted">
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-16 lg:p-24">
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ActiveComponent />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
