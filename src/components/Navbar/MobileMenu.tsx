import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-600 hover:text-[#B5CDA3] transition-colors duration-300"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-[#B5CDA3]/20 py-4">
          <div className="space-y-4 px-4">
            <NavLink href="#about" className="block">Rreth Nesh</NavLink>
            <NavLink href="#services" className="block">Sherbime</NavLink>
            <NavLink href="#booking" className="block">Pronoto</NavLink>
            <NavLink href="#contact" className="block">Kontakt</NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
