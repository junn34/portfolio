import { useState } from 'react';
import MobileMenuButton from './MobileMenuButton';

export default function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <MobileMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Menu Items */}
      {isMenuOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-orange-500'
                  : 'text-gray-300 hover:text-orange-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
