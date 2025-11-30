import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Hourglass } from 'lucide-react';

const LoyaltySection = () => {
  const { colors, phase } = useTheme();

  return (
    <section className="py-16 px-4">
        <div className={`max-w-4xl mx-auto rounded-3xl p-8 md:p-12 text-center relative overflow-hidden ${colors.secondary}`}>
            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-${colors.accent.split('-')[1]}-500 to-transparent opacity-50`}></div>
            
            <Hourglass className={`w-12 h-12 mx-auto mb-6 ${colors.accent} animate-spin-slow`} />
            
            <h2 className={`font-serif text-3xl md:text-4xl mb-4 ${colors.text}`}>Круг Времени: Лояльность</h2>
            <p className={`mb-8 max-w-lg mx-auto opacity-80 ${colors.text}`}>
                Каждая минута здесь приносит вам время. Копите "Минуты" с каждой покупкой. 
                Соберите 60 Минут, чтобы получить бесплатный "Час" наслаждения (любой напиток).
            </p>

            {/* Simulated Progress */}
            <div className="max-w-md mx-auto bg-white/50 rounded-full h-6 mb-4 relative overflow-hidden backdrop-blur-sm">
                <div className={`absolute left-0 top-0 h-full w-[45%] ${colors.buttonBg} transition-all duration-1000`}></div>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold tracking-widest uppercase opacity-70">
                    27 / 60 Минут Накоплено
                </div>
            </div>

            <button className={`mt-4 px-6 py-2 rounded-full border border-current text-sm uppercase tracking-wider hover:opacity-70 transition-opacity ${colors.text}`}>
                Вступить в Круг
            </button>
        </div>
    </section>
  );
};

export default LoyaltySection;