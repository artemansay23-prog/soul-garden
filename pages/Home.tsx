import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import MenuSection from '../components/MenuSection';
import EventsSection from '../components/EventsSection';
import LoyaltySection from '../components/LoyaltySection';
import ContactSection from '../components/ContactSection';
import CartSidebar from '../components/CartSidebar';
import BookingModal from '../components/BookingModal';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { colors } = useTheme();

  return (
    <>
      <Navbar />
      <Hero onBook={() => setIsBookingOpen(true)} />
      <AboutSection />
      <MenuSection />
      <EventsSection />
      <LoyaltySection />
      <ContactSection />
      
      {/* Footer */}
      <footer className={`py-8 text-center border-t border-current/10 ${colors.background} ${colors.text}`}>
        <p className="opacity-60 text-sm">© 2025 Soul Garden. Адаптируемся под ваш ритм.</p>
      </footer>

      <CartSidebar />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

export default Home;