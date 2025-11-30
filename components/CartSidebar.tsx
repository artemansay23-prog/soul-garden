import React from 'react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartSidebar = () => {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const { colors } = useTheme();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
        {/* Backdrop */}
        <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsCartOpen(false)}
        />
        
        {/* Drawer */}
        <div className={`relative w-full max-w-md h-full shadow-2xl flex flex-col transition-transform transform duration-300 ${colors.background} ${colors.text}`}>
            
            {/* Header */}
            <div className={`p-6 flex justify-between items-center border-b border-current/10 ${colors.navBg}`}>
                <h2 className="font-serif text-2xl">Ваш Заказ</h2>
                <button onClick={() => setIsCartOpen(false)} className="hover:opacity-50">
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {items.length === 0 ? (
                    <div className="text-center opacity-50 mt-20">
                        <p>Корзина пуста.</p>
                        <button 
                            onClick={() => setIsCartOpen(false)} 
                            className="mt-4 underline"
                        >
                            Перейти к меню
                        </button>
                    </div>
                ) : (
                    items.map(item => (
                        <div key={item.id} className={`flex gap-4 p-4 rounded-xl ${colors.secondary}`}>
                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                            <div className="flex-1">
                                <h3 className="font-bold">{item.name}</h3>
                                <p className="text-sm opacity-70 mb-2">${item.price.toFixed(2)}</p>
                                <div className="flex items-center gap-3">
                                    <button 
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className="p-1 rounded-full bg-white/10 hover:bg-white/20"
                                    >
                                        <Minus className="w-3 h-3" />
                                    </button>
                                    <span className="font-mono text-sm">{item.quantity}</span>
                                    <button 
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className="p-1 rounded-full bg-white/10 hover:bg-white/20"
                                    >
                                        <Plus className="w-3 h-3" />
                                    </button>
                                    <div className="flex-1 text-right">
                                        <button 
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-400"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
                <div className={`p-6 border-t border-current/10 ${colors.navBg}`}>
                    <div className="flex justify-between items-center mb-6 text-xl font-bold font-serif">
                        <span>Итого</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <button 
                        onClick={() => {
                            setIsCartOpen(false);
                            navigate('/checkout');
                        }}
                        className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest ${colors.buttonBg} ${colors.buttonText}`}
                    >
                        Оформить
                    </button>
                </div>
            )}
        </div>
    </div>
  );
};

export default CartSidebar;