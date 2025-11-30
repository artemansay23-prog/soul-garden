export type TimePhase = 'morning' | 'day' | 'evening' | 'night';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'food' | 'dessert' | 'cocktail' | 'merch';
  image: string;
  availablePhases: TimePhase[]; // Some items only available at night/morning
}

export interface CartItem extends Product {
  quantity: number;
}

export interface EventItem {
  id: string;
  title: string;
  time: string;
  description: string;
  phase: TimePhase;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ThemeColors {
  background: string;
  text: string;
  accent: string;
  secondary: string;
  cardBg: string;
  buttonBg: string;
  buttonText: string;
  navBg: string;
}
