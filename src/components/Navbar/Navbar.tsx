import React, { useState } from 'react';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-serif text-[#B5CDA3]">
            Stacioni Hyjnore
          </a>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#booking">Book Now</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <MobileMenu 
            isOpen={isMobileMenuOpen} 
            setIsOpen={setIsMobileMenuOpen} 
          />
        </div>
      </div>
    </nav>
  );
}
