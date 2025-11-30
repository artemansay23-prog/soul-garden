import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = ({ onBook }: { onBook: () => void }) => {
  const { phase, colors } = useTheme();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const getHeroText = () => {
    switch(phase) {
      case 'morning': return { title: "Пробуди свои чувства", sub: "Свежий кофе и утренний свет." };
      case 'day': return { title: "Яркая Энергия", sub: "Топливо для твоего творчества." };
      case 'evening': return { title: "Золотые Моменты", sub: "Отдохни на закате." };
      case 'night': return { title: "Неоновые Сны", sub: "Ночные вайбы и коктейли." };
    }
  };

  const { title, sub } = getHeroText();

  // Dynamic Background Images based on Phase
  const getBgImage = () => {
    switch(phase) {
      case 'morning': return 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000")';
      case 'day': return 'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000")';
      case 'evening': return 'url("https://images.unsplash.com/photo-1542125387-c71274d94f0a?auto=format&fit=crop&q=80&w=2000")';
      case 'night': return 'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000")';
    }
  };

  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: y1, backgroundImage: getBgImage() }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
      >
        <div className={`absolute inset-0 bg-black/30 ${phase === 'night' ? 'bg-black/60' : ''}`} />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: y2 }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <h1 className="font-serif text-5xl md:text-8xl text-white mb-6 drop-shadow-lg tracking-tight">
            {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 font-light tracking-wide">
            {sub}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth'})}
                className={`px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold transition-all transform hover:scale-105 ${colors.buttonBg} ${colors.buttonText}`}
            >
                Меню
            </button>
            <button 
                onClick={onBook}
                className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all"
            >
                Бронь стола
            </button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;