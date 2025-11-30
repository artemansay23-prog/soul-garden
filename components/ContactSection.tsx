import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FAQS } from '../constants';
import { ChevronDown, Send } from 'lucide-react';

const ContactSection = () => {
  const { colors } = useTheme();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
            
            {/* FAQ */}
            <div>
                <h2 className={`font-serif text-3xl mb-8 ${colors.text}`}>Вопросы и Ответы</h2>
                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`rounded-xl overflow-hidden transition-all ${colors.secondary}`}
                        >
                            <button 
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full px-6 py-4 flex justify-between items-center text-left"
                            >
                                <span className={`font-medium ${colors.text}`}>{faq.question}</span>
                                <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''} ${colors.text}`} />
                            </button>
                            <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                                <p className={`text-sm opacity-80 ${colors.text}`}>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact & Map */}
            <div>
                <h2 className={`font-serif text-3xl mb-8 ${colors.text}`}>Найти нас</h2>
                <div className="bg-gray-200 rounded-2xl h-64 w-full mb-8 relative overflow-hidden group">
                     {/* Fake Map */}
                     <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                        alt="Map Location" 
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-500"
                     />
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className={`px-4 py-2 bg-white rounded shadow-lg text-black text-sm font-bold`}>
                            Soul Garden
                        </div>
                     </div>
                </div>

                <form onSubmit={handleSubscribe} className="space-y-4">
                    <h3 className={`font-bold ${colors.text}`}>Подписаться на новости</h3>
                    <div className="flex gap-2">
                        <input 
                            type="email" 
                            placeholder="ваш@email.com" 
                            required
                            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-current/20 focus:outline-none focus:border-current transition-colors"
                        />
                        <button 
                            type="submit"
                            className={`px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 ${colors.buttonBg} ${colors.buttonText}`}
                        >
                            {subscribed ? 'Готово!' : <><Send className="w-4 h-4" /> Вступить</>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  );
};

export default ContactSection;