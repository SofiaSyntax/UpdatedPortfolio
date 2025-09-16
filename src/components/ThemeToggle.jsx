import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="flex items-center space-x-3 p-2 ">
      <theme
        className={`text-yellow-400 transition-transform duration-500 ${
          isDarkMode ? 'scale-90 opacity-50' : 'scale-110 opacity-100'
        }`}
        size={24}
        aria-hidden="true"
      />
      <label
        className="relative inline-flex items-center cursor-pointer"
        aria-label="Toggle Dark Mode"
      >
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
          className="sr-only"
          aria-checked={isDarkMode}
        />
        <div
          className={`w-14 h-7 rounded-full transition-colors duration-500 ease-in-out ${
            isDarkMode ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-gray-300 dark:bg-gray-500'
          }`}
        >
          <div
            className={`w-7 h-7 bg-white rounded-full shadow-lg transform transition-transform duration-500 ease-in-out flex items-center justify-center`}
            style={{
              transform: isDarkMode ? 'translateX(28px)' : 'translateX(0)',
              background: isDarkMode
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                : 'white',
              boxShadow: isDarkMode
                ? '0 0 8px 2px rgba(102, 126, 234, 0.7)'
                : '0 2px 5px rgba(0,0,0,0.2)',
            }}
          >
            {isDarkMode ? (
              <FaMoon className="text-white" size={14} />
            ) : (
              <FaSun className="text-yellow-400" size={14} />
            )}
          </div>
        </div>
      </label>
      <theme
        className={`text-gray-700 dark:text-gray-300 transition-transform duration-500 ${
          isDarkMode ? 'scale-110 opacity-100' : 'scale-90 opacity-50'
        }`}
        size={24}
        aria-hidden="true"
      />
    </div>
  );
};

export default ThemeToggle;




