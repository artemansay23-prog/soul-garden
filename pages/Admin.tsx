import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import { Product, TimePhase } from '../types';

const Admin = () => {
  const { colors } = useTheme();
  const { addProduct } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'coffee',
    image: '',
    phases: [] as TimePhase[]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhaseChange = (phase: TimePhase) => {
    setFormData(prev => ({
        ...prev,
        phases: prev.phases.includes(phase) 
            ? prev.phases.filter(p => p !== phase)
            : [...prev.phases, phase]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;
    
    const newProduct: Product = {
        id: Date.now().toString(),
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category as any,
        image: formData.image || 'https://picsum.photos/400',
        availablePhases: formData.phases.length > 0 ? formData.phases : ['day']
    };

    addProduct(newProduct);
    alert('Product added successfully!');
    setFormData({ name: '', description: '', price: '', category: 'coffee', image: '', phases: [] });
  };

  const phases: TimePhase[] = ['morning', 'day', 'evening', 'night'];

  const phaseNamesRu: Record<TimePhase, string> = {
    morning: 'Утро',
    day: 'День',
    evening: 'Вечер',
    night: 'Ночь'
  };

  return (
    <div className={`min-h-screen p-4 md:p-12 ${colors.background} ${colors.text}`}>
        <div className="max-w-2xl mx-auto">
             <Link to="/" className="inline-flex items-center gap-2 mb-8 opacity-60 hover:opacity-100">
                <ArrowLeft className="w-4 h-4" /> Назад в Сад
            </Link>

            <h1 className="font-serif text-4xl mb-8">Администратор Сада</h1>

            <form onSubmit={handleSubmit} className={`p-8 rounded-3xl shadow-xl ${colors.secondary} space-y-6`}>
                <h2 className="text-xl font-bold">Добавить Товар</h2>

                <div>
                    <label className="block text-xs uppercase mb-1 opacity-70">Название</label>
                    <input name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 rounded-lg bg-white/10 border border-current/20 focus:outline-none" />
                </div>

                <div>
                    <label className="block text-xs uppercase mb-1 opacity-70">Цена ($)</label>
                    <input name="price" type="number" step="0.01" value={formData.price} onChange={handleChange} required className="w-full p-3 rounded-lg bg-white/10 border border-current/20 focus:outline-none" />
                </div>

                <div>
                    <label className="block text-xs uppercase mb-1 opacity-70">Категория</label>
                    <select name="category" value={formData.category} onChange={handleChange} className="w-full p-3 rounded-lg bg-white/10 border border-current/20 focus:outline-none text-black">
                        <option value="coffee">Кофе</option>
                        <option value="food">Еда</option>
                        <option value="dessert">Десерт</option>
                        <option value="cocktail">Коктейль</option>
                        <option value="merch">Мерч</option>
                    </select>
                </div>

                 <div>
                    <label className="block text-xs uppercase mb-1 opacity-70">Описание</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-3 rounded-lg bg-white/10 border border-current/20 focus:outline-none" />
                </div>

                 <div>
                    <label className="block text-xs uppercase mb-1 opacity-70">Ссылка на фото</label>
                    <input name="image" value={formData.image} onChange={handleChange} placeholder="https://..." className="w-full p-3 rounded-lg bg-white/10 border border-current/20 focus:outline-none" />
                </div>

                <div>
                    <label className="block text-xs uppercase mb-2 opacity-70">Доступное время</label>
                    <div className="flex gap-2 flex-wrap">
                        {phases.map(p => (
                            <button
                                key={p}
                                type="button"
                                onClick={() => handlePhaseChange(p)}
                                className={`px-4 py-2 rounded-full text-sm capitalize transition-colors ${formData.phases.includes(p) ? colors.buttonBg + ' ' + colors.buttonText : 'bg-black/10 hover:bg-black/20'}`}
                            >
                                {phaseNamesRu[p]}
                            </button>
                        ))}
                    </div>
                </div>

                <button type="submit" className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 ${colors.buttonBg} ${colors.buttonText}`}>
                    <Save className="w-5 h-5" /> Сохранить
                </button>
            </form>
        </div>
    </div>
  );
};

export default Admin;