// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">HardwareHub</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</Link>
              <Link href="/projects" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Projects</Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">About</Link>
              <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Contact</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</Link>
            <Link href="/projects" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Projects</Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;