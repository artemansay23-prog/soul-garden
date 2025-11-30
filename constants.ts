
import { Product, EventItem, FaqItem, TimePhase, ThemeColors } from './types';

export const THEMES: Record<TimePhase, ThemeColors> = {
  morning: {
    background: 'bg-stone-50',
    text: 'text-stone-800',
    accent: 'text-amber-600',
    secondary: 'bg-stone-100',
    cardBg: 'bg-white',
    buttonBg: 'bg-amber-200 hover:bg-amber-300',
    buttonText: 'text-amber-900',
    navBg: 'bg-white/80 backdrop-blur-md',
  },
  day: {
    background: 'bg-orange-50',
    text: 'text-orange-950',
    accent: 'text-orange-600',
    secondary: 'bg-orange-100',
    cardBg: 'bg-white',
    buttonBg: 'bg-orange-500 hover:bg-orange-600',
    buttonText: 'text-white',
    navBg: 'bg-orange-50/80 backdrop-blur-md',
  },
  evening: {
    background: 'bg-rose-950',
    text: 'text-rose-100',
    accent: 'text-rose-400',
    secondary: 'bg-rose-900/50',
    cardBg: 'bg-rose-900/30',
    buttonBg: 'bg-rose-500 hover:bg-rose-600',
    buttonText: 'text-white',
    navBg: 'bg-rose-950/80 backdrop-blur-md',
  },
  night: {
    background: 'bg-slate-950',
    text: 'text-cyan-50',
    accent: 'text-cyan-400',
    secondary: 'bg-slate-900/50',
    cardBg: 'bg-slate-900/40',
    buttonBg: 'bg-cyan-500 hover:bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
    buttonText: 'text-slate-950',
    navBg: 'bg-slate-950/80 backdrop-blur-md',
  }
};

export const INITIAL_PRODUCTS: Product[] = [
  // Morning
  { 
    id: '1', 
    name: 'Латте "Рассвет"', 
    description: 'Мягкий кофе с медом и нотками ванили.', 
    price: 5.50, 
    category: 'coffee', 
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800', 
    availablePhases: ['morning', 'day'] 
  },
  { 
    id: '2', 
    name: 'Круассан с миндалем', 
    description: 'Свежая выпечка с миндальным кремом и лепестками.', 
    price: 4.50, 
    category: 'food', 
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800', 
    availablePhases: ['morning', 'day'] 
  },
  { 
    id: '3', 
    name: 'Улитка с корицей', 
    description: 'Горячая булочка с глазурью и корицей.', 
    price: 3.50, 
    category: 'dessert', 
    image: 'https://static.insales-cdn.com/images/products/1/3454/902909310/2654415008.jpg',
    availablePhases: ['morning'] 
  },
  // Day
  { 
    id: '4', 
    name: 'Айс-Латте', 
    description: 'Холодный кофе с молоком и льдом для бодрости.', 
    price: 6.00, 
    category: 'coffee', 
    image: 'https://tse1.explicit.bing.net/th/id/OIP.rjyZq6w3LkHgQcFZqyMfUQHaLH?w=720&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3', 
    availablePhases: ['day', 'evening'] 
  },
  { 
    id: '5', 
    name: 'Киш с шпинатом', 
    description: 'Сытный открытый пирог с сыром и шпинатом.', 
    price: 7.00, 
    category: 'food', 
    image: 'https://th.bing.com/th/id/R.4fae097950a7a8d420800c4bf72ed689?rik=gW7b7vJdoZRVmw&pid=ImgRaw&r=0', 
    availablePhases: ['day'] 
  },
  { 
    id: '5b', 
    name: 'Лимонный Тарт', 
    description: 'Песочное тесто с нежным лимонным курдом.', 
    price: 5.50, 
    category: 'dessert', 
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800', 
    availablePhases: ['day'] 
  },
  // Evening
  { 
    id: '6', 
    name: 'Раф "Соленая Карамель"', 
    description: 'Сливочный кофе с домашней карамелью.', 
    price: 6.50, 
    category: 'coffee', 
    image: 'https://fancifuleats.com/wp-content/uploads/2023/11/salted-maple-cinnamon-cold-brew-3-768x1152.jpg', 
    availablePhases: ['evening'] 
  },
  { 
    id: '7', 
    name: 'Эклер Ванильный', 
    description: 'Классический заварной крем и шоколадная глазурь.', 
    price: 4.00, 
    category: 'dessert', 
    image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&q=80&w=800', 
    availablePhases: ['evening', 'night'] 
  },
  // Night
  { 
    id: '8', 
    name: 'Мокко "Вишня в Шоколаде"', 
    description: 'Горячий шоколад с эспрессо и вишневым сиропом.', 
    price: 6.50, 
    category: 'coffee', 
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800', 
    availablePhases: ['night'] 
  },
  { 
    id: '9', 
    name: 'Эспрессо-Тоник', 
    description: 'Освежающий микс эспрессо, тоника и лайма.', 
    price: 7.00, 
    category: 'cocktail', 
    image: 'https://s1.eda.ru/StaticContent/Photos/130619134157/190711151559/p_O.jpg', 
    availablePhases: ['night', 'evening'] 
  },
  { 
    id: '10', 
    name: 'Шоколадный Фондан', 
    description: 'Кекс с жидким центром и шариком мороженого.', 
    price: 8.50, 
    category: 'dessert', 
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=800', 
    availablePhases: ['night', 'evening'] 
  },
  { 
    id: '12', 
    name: 'Ночное Какао', 
description: 'Густой горячий шоколад с печеньем.',    price: 5.00, 
    category: 'dessert', 
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800', 
    availablePhases: ['night', 'evening'] 
  },
  // Merch
  { 
    id: '11', 
    name: 'Термокружка Garden', 
    description: 'Сохраняет тепло вашего кофе до 6 часов.', 
    price: 25.00, 
    category: 'merch', 
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=800', 
    availablePhases: ['morning', 'day', 'evening', 'night'] 
  },
];

export const EVENTS: EventItem[] = [
  { id: 'e1', title: 'Утренний Каппинг', time: '08:00', description: 'Дегустация новых сортов кофе с бариста.', phase: 'morning', image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&q=80&w=800' },
  { id: 'e2', title: 'Коворкинг Ланч', time: '13:00', description: 'Скидка на кофе для фрилансеров.', phase: 'day', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800' },
  { id: 'e3', title: 'Джаз и Эспрессо', time: '19:00', description: 'Живая музыка и авторские напитки.', phase: 'evening', image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=800' },
  { id: 'e4', title: 'Ночное Кино', time: '22:00', description: 'Просмотр фильмов с горячим какао.', phase: 'night', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800' },
];

export const FAQS: FaqItem[] = [
  { question: "Есть ли у вас растительное молоко?", answer: "Да, мы готовим на овсяном, кокосовом, миндальном и банановом молоке без доплаты." },
  { question: "Выпечка свежая?", answer: "Абсолютно. Мы выпекаем круассаны и булочки каждое утро и обновляем витрину в течение дня." },
  { question: "Как работает программа лояльности?", answer: "Вы копите 'Минуты' за каждый потраченный доллар. 60 Минут дают вам бесплатный напиток." },
];
