import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Loader2 } from 'lucide-react';

const Checkout = () => {
  const { items, cartTotal, clearCart } = useCart();
  const { colors } = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        clearCart();
        setTimeout(() => {
             navigate('/');
        }, 3000);
    }, 2000);
  };

  if (success) {
      return (
          <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${colors.background} ${colors.text}`}>
              <div className="text-center">
                  <h1 className="text-4xl font-serif mb-4">Оплата прошла успешно!</h1>
                  <p className="opacity-70 mb-8">Ваш заказ принят. Возвращаемся на главную...</p>
                  <div className="w-full h-1 bg-current/20 rounded-full overflow-hidden">
                      <div className={`h-full ${colors.buttonBg} w-full animate-[float_3s_ease-out]`}></div>
                  </div>
              </div>
          </div>
      );
  }

  return (
    <div className={`min-h-screen p-4 md:p-12 ${colors.background} ${colors.text}`}>
        <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 mb-8 opacity-60 hover:opacity-100">
                <ArrowLeft className="w-4 h-4" /> Назад в Сад
            </Link>

            <h1 className="font-serif text-4xl mb-8">Оформление</h1>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Order Summary */}
                <div className={`p-6 rounded-2xl h-fit ${colors.secondary}`}>
                    <h2 className="text-xl font-bold mb-4">Сводка</h2>
                    <div className="space-y-4 mb-6">
                        {items.map(item => (
                            <div key={item.id} className="flex justify-between text-sm">
                                <span className="opacity-80">{item.quantity}x {item.name}</span>
                                <span className="font-mono">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-current/20 pt-4 flex justify-between font-bold text-lg">
                        <span>Итого</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                </div>

                {/* Payment Form */}
                <div>
                    <h2 className="text-xl font-bold mb-6">Оплата</h2>
                    <div className="flex gap-4 mb-6">
                        <button className={`flex-1 py-3 border rounded-xl flex items-center justify-center gap-2 border-current/20 ${colors.cardBg}`}>
                            <CreditCard className="w-4 h-4" /> Stripe
                        </button>
                        <button className={`flex-1 py-3 border rounded-xl flex items-center justify-center gap-2 border-current/20 ${colors.cardBg}`}>
                             Kaspi Pay
                        </button>
                    </div>

                    <form onSubmit={handlePayment} className="space-y-4">
                        <div>
                            <label className="block text-xs uppercase mb-1 opacity-70">Номер карты</label>
                            <input required type="text" placeholder="0000 0000 0000 0000" className={`w-full p-3 rounded-xl bg-white/10 border border-current/20 focus:outline-none focus:border-current`} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs uppercase mb-1 opacity-70">Срок</label>
                                <input required type="text" placeholder="MM/YY" className={`w-full p-3 rounded-xl bg-white/10 border border-current/20 focus:outline-none focus:border-current`} />
                            </div>
                            <div>
                                <label className="block text-xs uppercase mb-1 opacity-70">CVC</label>
                                <input required type="text" placeholder="123" className={`w-full p-3 rounded-xl bg-white/10 border border-current/20 focus:outline-none focus:border-current`} />
                            </div>
                        </div>

                        <button 
                            disabled={loading}
                            type="submit" 
                            className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest mt-4 flex items-center justify-center gap-2 ${colors.buttonBg} ${colors.buttonText} disabled:opacity-50`}
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : `Оплатить $${cartTotal.toFixed(2)}`}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Checkout;