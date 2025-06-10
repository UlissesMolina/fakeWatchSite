import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

function Header() {
  const { darkMode, setDarkMode } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            )}
          </button>

          {/* Navigation Links */}
          <nav className="flex space-x-8">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Features
            </a>
            <a href="#specs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Specs
            </a>
            <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Pricing
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header