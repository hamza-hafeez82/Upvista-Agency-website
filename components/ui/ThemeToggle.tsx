"use client";

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative px-3 py-2 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl ${
        isDark 
          ? 'bg-gradient-to-br from-white/15 to-white/5 hover:from-white/25 hover:to-white/10 border border-white/20' 
          : 'bg-gradient-to-br from-blue-100/90 to-purple-100/80 hover:from-blue-200/90 hover:to-purple-200/80 border border-blue-200/60 shadow-blue-200/20'
      }`}
      style={{
        borderRadius: '0.5rem 0 0 0.5rem'
      }}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isDark 
              ? 'text-yellow-400 rotate-90 scale-0 opacity-0' 
              : 'text-orange-500 rotate-0 scale-100 opacity-100'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isDark 
              ? 'text-blue-300 rotate-0 scale-100 opacity-100' 
              : 'text-indigo-600 -rotate-90 scale-0 opacity-0'
          }`} 
        />
      </div>
      
      {/* Tooltip */}
      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ${
        isDark 
          ? 'bg-gray-800 text-white' 
          : 'bg-gray-900 text-white'
      }`}>
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </div>
    </button>
  );
}
