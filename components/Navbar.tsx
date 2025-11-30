import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Sun, Moon, Sunrise, Sunset, Menu, X, Coffee } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { TimePhase } from '../types';

const Navbar = () => {
  const { phase, setManualPhase, colors, isManual } = useTheme();
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
        return;
    }
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const ThemeIcon = () => {
    switch(phase) {
      case 'morning': return <Sunrise className="w-5 h-5" />;
      case 'day': return <Sun className="w-5 h-5" />;
      case 'evening': return <Sunset className="w-5 h-5" />;
      case 'night': return <Moon className="w-5 h-5" />;
    }
  };

  const phases: TimePhase[] = ['morning', 'day', 'evening', 'night'];

  const phaseNames: Record<TimePhase, string> = {
    morning: 'Утро',
    day: 'День',
    evening: 'Вечер',
    night: 'Ночь'
  };

  const menuItems = [
    { id: 'about', label: 'О нас' },
    { id: 'menu', label: 'Меню' },
    { id: 'events', label: 'События' },
    { id: 'contact', label: 'Контакты' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${colors.navBg} border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className={`w-8 h-8 ${colors.accent}`} />
            <span className={`text-2xl font-serif font-bold ${colors.text}`}>Soul Garden</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
               <button 
                 key={item.id}
                 onClick={() => handleScroll(item.id)}
                 className={`text-sm font-medium uppercase tracking-wider hover:opacity-70 transition-opacity ${colors.text}`}
               >
                 {item.label}
               </button>
            ))}
            <Link to="/admin" className={`text-sm font-medium uppercase tracking-wider hover:opacity-70 ${colors.text}`}>Админ</Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <div className="relative group">
               <button className={`p-2 rounded-full ${colors.secondary} hover:opacity-80 transition-all`}>
                 <ThemeIcon />
               </button>
               {/* Dropdown for manual override */}
               <div className="absolute right-0 mt-2 w-32 py-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right text-stone-800">
                 <div className="text-xs px-4 py-1 text-stone-400 font-bold uppercase">Настроение</div>
                 {phases.map((p) => (
                   <button 
                    key={p}
                    onClick={() => setManualPhase(p)}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-stone-100 capitalize"
                   >
                     {phaseNames[p]}
                   </button>
                 ))}
                 <button 
                    onClick={() => setManualPhase(null)}
                    className="block w-full text-left px-4 py-2 text-sm text-stone-400 hover:bg-stone-100 border-t"
                   >
                     Авто
                   </button>
               </div>
            </div>

            {/* Cart */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2 rounded-full ${colors.secondary} hover:opacity-80 transition-all`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2 ${colors.text}`}
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
              )}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${colors.text}`}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-20 left-0 w-full ${colors.background} shadow-lg border-b border-white/10`}>
          <div className="flex flex-col px-4 py-6 space-y-4">
             {menuItems.map((item) => (
               <button 
                 key={item.id}
                 onClick={() => handleScroll(item.id)}
                 className={`text-lg font-medium text-left ${colors.text}`}
               >
                 {item.label}
               </button>
            ))}
            <Link to="/admin" className={`text-lg font-medium text-left ${colors.text}`}>Админ</Link>

             <div className="border-t border-gray-200/20 pt-4">
                <p className={`text-xs uppercase mb-2 ${colors.text} opacity-50`}>Выберите настроение</p>
                <div className="flex space-x-2">
                  {phases.map((p) => (
                    <button 
                      key={p}
                      onClick={() => { setManualPhase(p); setIsMobileMenuOpen(false); }}
                      className={`px-3 py-1 rounded text-xs capitalize ${colors.secondary} ${colors.text}`}
                    >
                      {phaseNames[p]}
                    </button>
                  ))}
                </div>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;