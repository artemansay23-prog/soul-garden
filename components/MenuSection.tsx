import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { Product, TimePhase } from '../types';
import { Plus } from 'lucide-react';

const MenuSection = () => {
  const { colors, phase } = useTheme();
  const { products, addToCart } = useCart();
  const [filter, setFilter] = useState<'all' | 'coffee' | 'food' | 'dessert' | 'cocktail'>('all');

  // Filter products by availability (phase) and category
  const filteredProducts = products.filter(p => {
    const isAvailableNow = p.availablePhases.includes(phase);
    const isCategoryMatch = filter === 'all' || p.category === filter;
    return isAvailableNow && isCategoryMatch;
  });

  const categories = ['all', 'coffee', 'food', 'dessert', 'cocktail'];
  
  const categoryNames: Record<string, string> = {
    all: 'Все',
    coffee: 'Кофе',
    food: 'Еда',
    dessert: 'Десерты',
    cocktail: 'Коктейли'
  };

  const phaseNamesRu: Record<TimePhase, string> = {
    morning: 'утро',
    day: 'день',
    evening: 'вечер',
    night: 'ночь'
  };

  return (
    <section id="menu" className={`py-20 px-4 md:px-8 max-w-7xl mx-auto`}>
      <div className="text-center mb-16">
        <h2 className={`font-serif text-4xl md:text-5xl mb-4 ${colors.text}`}>Наше Меню</h2>
        <p className={`text-lg opacity-80 ${colors.text}`}>Вкусы, подобранные под {phaseNamesRu[phase]}.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat as any)}
            className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all
              ${filter === cat ? colors.buttonBg + ' ' + colors.buttonText : 'border border-current opacity-60 hover:opacity-100'}
            `}
          >
            {categoryNames[cat]}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div 
            key={product.id}
            className={`group relative rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2 ${colors.cardBg}`}
          >
            <div className="relative h-64 overflow-hidden">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>
            
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className={`font-serif text-xl font-bold ${colors.text}`}>{product.name}</h3>
                    <span className={`font-mono text-lg font-bold ${colors.accent}`}>${product.price.toFixed(2)}</span>
                </div>
                <p className={`text-sm opacity-80 mb-6 ${colors.text}`}>{product.description}</p>
                
                <button
                    onClick={() => addToCart(product)}
                    className={`w-full py-3 rounded-xl flex items-center justify-center space-x-2 font-medium transition-colors ${colors.buttonBg} ${colors.buttonText}`}
                >
                    <Plus className="w-4 h-4" />
                    <span>В корзину</span>
                </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
          <div className="text-center py-20 opacity-50">
              <p>В это время суток в этой категории нет товаров.</p>
          </div>
      )}
    </section>
  );
};

export default MenuSection;