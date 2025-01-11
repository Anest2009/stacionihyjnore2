import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'al' : 'en')}
      className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
    >
      <span className={`font-medium ${language === 'en' ? 'text-[#B5CDA3]' : 'text-gray-400'}`}>EN</span>
      <span className="text-gray-400">/</span>
      <span className={`font-medium ${language === 'al' ? 'text-[#B5CDA3]' : 'text-gray-400'}`}>AL</span>
    </button>
  );
} 