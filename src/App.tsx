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
  FileText,
  Library,
  Upload,
  Menu,
  X,
  Info
} from 'lucide-react';

import Introduction from './components/Introduction';
import Framework from './components/Framework';
import Audiences from './components/Audiences';
import Messaging from './components/Messaging';
import Processes from './components/Processes';
import ToneOfVoice from './components/ToneOfVoice';
import Channels from './components/Channels';
import Templates from './components/Templates';
import Topics from './components/Topics';
import AITools from './components/AITools';
import SourceImport from './components/SourceImport';
import { SidebarContextBadge } from './components/ui/SidebarContextBadge';
import { AboutModal } from './components/ui/AboutModal';

const SECTIONS = [
  { id: 'intro', title: 'Introduksjon', icon: BookOpen, component: Introduction },
  { id: 'framework', title: 'Rammeverk & Strategi', icon: Target, component: Framework },
  { id: 'audiences', title: 'Målgrupper', icon: Target, component: Audiences },
  { id: 'messaging', title: 'Budskap & Verdi', icon: MessageSquare, component: Messaging },
  { id: 'processes', title: 'Arbeidsprosesser (SOP)', icon: Settings, component: Processes },
  { id: 'tone', title: 'Tone of Voice', icon: PenTool, component: ToneOfVoice },
  { id: 'channels', title: 'Kanaler', icon: Share2, component: Channels },
  { id: 'templates', title: 'Maler & Sjekklister', icon: FileText, component: Templates },
  { id: 'topics', title: 'Temabibliotek', icon: Library, component: Topics },
  { id: 'ai', title: 'AI & Verktøy', icon: Bot, component: AITools },
  { id: 'import', title: 'Legg til innhold', icon: Upload, component: SourceImport },
];

export default function App() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const ActiveComponent = SECTIONS.find(s => s.id === activeSection)?.component || Introduction;

  return (
    <div className="flex h-screen overflow-hidden bg-gs1-bg font-sans">
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-gs1-surface border-r border-gs1-border transform transition-transform duration-300 ease-out flex flex-col
        md:relative md:translate-x-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Logo lockup */}
        <div className="p-8 flex items-center justify-between border-b border-gs1-border">
          <div className="flex flex-col gap-0.5">
            <div className="flex flex-col">
              <span
                className="font-display font-bold text-gs1-blue leading-none"
                style={{ fontSize: '22px', letterSpacing: '-0.01em' }}
              >
                GS1
              </span>
              <div className="h-[3px] bg-gs1-orange mt-1 mb-1.5" style={{ width: '28px' }} />
              <span
                className="font-display font-normal text-gs1-blue tracking-widest uppercase"
                style={{ fontSize: '10px', letterSpacing: '0.18em' }}
              >
                Norway
              </span>
            </div>
            <span
              className="font-sans text-gs1-muted uppercase tracking-widest"
              style={{ fontSize: '9px', letterSpacing: '0.14em', marginTop: '8px' }}
            >
              Henriks Eksempel-Playbook
            </span>
          </div>
          <button className="md:hidden text-gs1-muted" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="mt-6 px-4 space-y-0.5 flex-1">
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
                  w-full flex items-center gap-3 px-4 py-2.5 rounded transition-all text-left text-sm
                  ${isActive
                    ? 'bg-gs1-blue-light text-gs1-blue font-medium'
                    : 'text-gs1-muted hover:bg-gs1-bg hover:text-gs1-text'}
                `}
              >
                <Icon size={16} strokeWidth={isActive ? 2 : 1.5} className={isActive ? 'text-gs1-blue' : 'text-gs1-muted'} />
                <span>{section.title}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto pt-4">
          <button
            onClick={() => setIsAboutOpen(true)}
            className="w-full flex items-center gap-2 px-8 py-2 text-[11px] text-gs1-muted hover:text-gs1-blue transition-colors"
          >
            <Info size={13} strokeWidth={1.5} />
            Om dette eksempelet
          </button>
          <div className="mt-2">
            <SidebarContextBadge />
          </div>
        </div>
      </aside>

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Header */}
        <header className="md:hidden bg-gs1-surface border-b border-gs1-border p-4 flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <div className="flex flex-col">
              <span className="font-display font-bold text-gs1-blue leading-none" style={{ fontSize: '18px' }}>GS1</span>
              <div className="h-[2px] bg-gs1-orange mt-0.5 mb-1" style={{ width: '22px' }} />
              <span className="font-display font-normal text-gs1-blue tracking-widest uppercase" style={{ fontSize: '9px', letterSpacing: '0.18em' }}>Norway</span>
            </div>
            <span className="font-sans text-gs1-muted uppercase" style={{ fontSize: '8px', letterSpacing: '0.14em' }}>Henriks Eksempel-Playbook</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-gs1-muted">
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
