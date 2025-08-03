'use client';
import MobileMenuButton from '../mobile/MobileMenuButton';

export default function Header({ navItems, activeSection, scrollToSection }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-orange-500">JunHyuck Bae</div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-300 hover:text-orange-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <MobileMenuButton />
        </div>
      </div>
    </nav>
  );
}
