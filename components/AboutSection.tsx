
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Clock, Heart, Coffee } from 'lucide-react';

const AboutSection = () => {
  const { colors } = useTheme();

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <div className={`absolute -inset-4 rounded-3xl opacity-20 rotate-3 ${colors.buttonBg}`}></div>
                <img 
                    src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=1000" 
                    alt="Coffee Shop Interior" 
                    className="relative rounded-2xl shadow-2xl"
                />
            </div>
            
            <div>
                <h2 className={`font-serif text-4xl md:text-5xl mb-6 ${colors.text}`}>Жизнь во времени</h2>
                <div className={`w-20 h-1 mb-8 ${colors.buttonBg}`}></div>
                <p className={`text-lg leading-relaxed mb-6 opacity-80 ${colors.text}`}>
                    Soul Garden — это не просто кофейня, это живой организм, который дышит в унисон с днем. 
                    Мы верим, что ваши желания меняются по мере движения солнца по небу.
                </p>
                <p className={`text-lg leading-relaxed mb-8 opacity-80 ${colors.text}`}>
                    От спокойной сосредоточенности утра до электрического гула неоновой ночи мы подбираем меню, музыку и свет под ритм вашей жизни.
                </p>

                <div className="grid grid-cols-3 gap-4">
                    <div className={`p-4 rounded-xl ${colors.secondary} text-center`}>
                        <Clock className={`w-6 h-6 mx-auto mb-2 ${colors.accent}`} />
                        <span className="text-sm font-bold opacity-80">Ритм 24ч</span>
                    </div>
                    <div className={`p-4 rounded-xl ${colors.secondary} text-center`}>
                        <Coffee className={`w-6 h-6 mx-auto mb-2 ${colors.accent}`} />
                        <span className="text-sm font-bold opacity-80">Отборные Зерна</span>
                    </div>
                    <div className={`p-4 rounded-xl ${colors.secondary} text-center`}>
                        <Heart className={`w-6 h-6 mx-auto mb-2 ${colors.accent}`} />
                        <span className="text-sm font-bold opacity-80">Сообщество</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;
