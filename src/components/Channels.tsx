import { SectionHeader } from './ui/SectionHeader';
import { Linkedin, Globe, Mail, Video, Users } from 'lucide-react';

const CHANNELS = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    role: 'Tankelederskap og reach blant beslutningstakere',
    color: 'bg-[#0A66C2]'
  },
  {
    name: 'Web',
    icon: Globe,
    role: '"Source of truth" / kilde og dybdeinnhold',
    color: 'bg-nordic-blue'
  },
  {
    name: 'Nyhetsbrev',
    icon: Mail,
    role: 'Målrettet nurturing / bearbeiding mot segmenter',
    color: 'bg-nordic-accent'
  },
  {
    name: 'Webinar',
    icon: Video,
    role: 'Faglig fordypning og lead-generering',
    color: 'bg-nordic-blue'
  },
  {
    name: 'Events (Nordic Summit, Arendalsuka)',
    icon: Users,
    role: 'Flaggskip-arenaer for posisjon og relasjoner',
    color: 'bg-nordic-green'
  }
];

export default function Channels() {
  return (
    <div className="space-y-12">
      <SectionHeader 
        title="Kanaler og Formater" 
        description="Hvor vi kommuniserer, og hva hver kanal skal oppnå."
      />

      <div className="grid gap-4">
        {CHANNELS.map((channel, i) => {
          const Icon = channel.icon;
          return (
            <div key={i} className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-sm border border-nordic-border transition-transform hover:-translate-y-1">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0 ${channel.color}`}>
                <Icon size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-nordic-text mb-1">{channel.name}</h3>
                <p className="text-nordic-text-muted">{channel.role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
