import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { X, Calendar, User, Clock } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const { colors } = useTheme();
    const [step, setStep] = useState(1);
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
            
            <div className={`relative w-full max-w-lg rounded-3xl p-8 shadow-2xl transition-all ${colors.background} ${colors.text}`}>
                <button onClick={onClose} className="absolute top-4 right-4 opacity-50 hover:opacity-100">
                    <X className="w-6 h-6" />
                </button>

                <h2 className="font-serif text-3xl mb-2 text-center">Забронировать стол</h2>
                <p className="text-center opacity-70 mb-8 text-sm">Насладитесь садом в удобное для вас время.</p>

                {step === 1 ? (
                    <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-4">
                        <div>
                            <label className="block text-xs uppercase tracking-wider opacity-60 mb-1">Имя</label>
                            <div className={`flex items-center px-4 py-3 rounded-xl ${colors.secondary}`}>
                                <User className="w-5 h-5 opacity-50 mr-3" />
                                <input required type="text" placeholder="Иван Иванов" className="bg-transparent w-full focus:outline-none" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                             <div>
                                <label className="block text-xs uppercase tracking-wider opacity-60 mb-1">Дата</label>
                                <div className={`flex items-center px-4 py-3 rounded-xl ${colors.secondary}`}>
                                    <Calendar className="w-5 h-5 opacity-50 mr-3" />
                                    <input required type="date" className="bg-transparent w-full focus:outline-none" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider opacity-60 mb-1">Время</label>
                                <div className={`flex items-center px-4 py-3 rounded-xl ${colors.secondary}`}>
                                    <Clock className="w-5 h-5 opacity-50 mr-3" />
                                    <input required type="time" className="bg-transparent w-full focus:outline-none" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-wider opacity-60 mb-1">Гости</label>
                            <select className={`w-full px-4 py-3 rounded-xl bg-transparent appearance-none ${colors.secondary} focus:outline-none`}>
                                {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n} className="text-black">{n} чел.</option>)}
                            </select>
                        </div>
                        
                        <button type="submit" className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest mt-4 ${colors.buttonBg} ${colors.buttonText}`}>
                            Подтвердить Бронь
                        </button>
                    </form>
                ) : (
                    <div className="text-center py-10">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Подтверждено!</h3>
                        <p className="opacity-70 mb-6">Мы забронировали для вас место в саду.</p>
                        <button onClick={onClose} className="underline opacity-60 hover:opacity-100">Закрыть</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingModal;