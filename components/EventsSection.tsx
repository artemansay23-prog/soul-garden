import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { EVENTS } from '../constants';
import { TimePhase } from '../types';

const EventsSection = () => {
  const { colors, phase } = useTheme();

  // Sort events to show current phase first, or just show all with highlight
  const activeEvent = EVENTS.find(e => e.phase === phase);
  
  const phaseNamesRu: Record<TimePhase, string> = {
    morning: 'УТРО',
    day: 'ДЕНЬ',
    evening: 'ВЕЧЕР',
    night: 'НОЧЬ'
  };

  return (
    <section id="events" className={`py-20 relative overflow-hidden ${phase === 'night' ? 'bg-black/20' : 'bg-current/5'}`}>
       <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-current/20 pb-8">
                <div>
                    <h2 className={`font-serif text-4xl md:text-5xl mb-2 ${colors.text}`}>События</h2>
                    <p className={`opacity-70 ${colors.text}`}>Ритм нашего сада.</p>
                </div>
                <div className={`text-right ${colors.accent} font-mono mt-4 md:mt-0`}>
                    Сейчас: {phaseNamesRu[phase]}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Active Event Highlight */}
                {activeEvent && (
                    <div className={`relative rounded-3xl overflow-hidden aspect-video shadow-2xl group`}>
                        <img src={activeEvent.image} alt={activeEvent.title} className="w-full h-full object-cover" />
                        <div className={`absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent text-white`}>
                            <div className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-bold rounded mb-2 w-max animate-pulse">ПРЯМО СЕЙЧАС</div>
                            <h3 className="text-3xl font-serif mb-2">{activeEvent.title}</h3>
                            <p className="opacity-90 mb-4">{activeEvent.description}</p>
                            <div className="font-mono text-sm border-t border-white/20 pt-4 flex justify-between">
                                <span>{activeEvent.time}</span>
                                <span className="uppercase tracking-widest">Вход: Свободный</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Upcoming Schedule */}
                <div className="space-y-4">
                    <h3 className={`text-xl font-bold uppercase tracking-wider mb-6 opacity-60 ${colors.text}`}>Расписание</h3>
                    {EVENTS.map((event) => (
                        <div 
                            key={event.id}
                            className={`p-6 rounded-2xl flex items-center gap-6 transition-all hover:scale-[1.02] ${event.phase === phase ? colors.secondary : 'bg-transparent border border-current/10'}`}
                        >
                            <div className={`font-mono font-bold text-lg w-24 ${event.phase === phase ? colors.accent : 'opacity-50'}`}>
                                {event.time}
                            </div>
                            <div>
                                <h4 className={`font-serif text-xl font-bold ${colors.text}`}>{event.title}</h4>
                                <p className={`text-sm opacity-70 ${colors.text}`}>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
       </div>
    </section>
  );
};

export default EventsSection;