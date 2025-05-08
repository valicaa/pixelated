import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

interface NavigationProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  navItems: NavItem[];
  isScrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  toggleMenu,
  activeSection,
  scrollToSection,
  navItems,
  isScrolled
}) => {
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-indigo-600">Pixel</span>
          <span className="text-2xl font-bold">ated</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium hover:text-indigo-600 transition-colors ${activeSection === item.id ? 'text-indigo-600' : 'text-gray-700'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full">
          <div className="px-6 py-4 space-y-3">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 px-3 rounded-md font-medium ${activeSection === item.id ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
