'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Expertise', href: '/expertise' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
   <header className="bg-white shadow-2xl sticky pl-2 pr-2 top-0 z-50 border-b border-amber-100 backdrop-blur-sm">
  <nav className="container-custom">
    <div className="flex justify-between items-center py-2">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-4 group">
        <div className="w-14 h-14 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-black font-extrabold text-2xl shadow-lg shadow-amber-500/25 group-hover:scale-110 group-hover:shadow-amber-500/40 transition-all duration-300 relative overflow-hidden">
  <div className="absolute inset-0 bg-white/10 blur-sm opacity-40"></div>
  <span className="relative">W</span>
</div>

        <div className="flex flex-col">
          <span className="text-2xl font-black text-black group-hover:text-amber-600 transition-colors duration-300 leading-tight">Wizdin Solutions</span>
          <span className="text-sm text-gray-600 font-medium">Salesforce Excellence</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-12">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-700 hover:text-amber-600 font-bold transition-all duration-300 relative group/nav py-2"
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover/nav:w-full rounded-full"></span>
          </Link>
        ))}
        <Link
          href="/contact"
          className="bg-linear-to-r from-black to-gray-900 text-white px-8 py-4 rounded-2xl font-black hover:from-amber-500 hover:to-amber-600 hover:text-black transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 hover:scale-105 border-2 border-transparent hover:border-amber-500"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        className="lg:hidden p-4 rounded-2xl hover:bg-amber-50 transition-all duration-300 group"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-7 h-7 flex flex-col justify-between relative">
          <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-3' : 'group-hover:bg-amber-600'}`}></span>
          <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'group-hover:bg-amber-600'}`}></span>
          <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-3' : 'group-hover:bg-amber-600'}`}></span>
        </div>
      </button>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="lg:hidden py-8 border-t border-amber-100 bg-white/95 backdrop-blur-md shadow-inner">
        <div className="flex flex-col space-y-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-amber-600 hover:bg-linear-to-r hover:from-amber-50 hover:to-amber-25 font-bold py-5 px-6 rounded-2xl transition-all duration-300 border-l-4 border-transparent hover:border-amber-500 hover:shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-linear-to-r from-black to-gray-900 text-white text-center font-black py-5 px-6 rounded-2xl hover:from-amber-500 hover:to-amber-600 hover:text-black transition-all duration-300 mt-6 shadow-2xl border-2 border-transparent hover:border-amber-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Contact Info */}
        <div className="mt-8 pt-8 border-t border-amber-100">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center">
              <div className="w-10 h-10 bg-linear-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-gray-600 font-medium">Call Us</span>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-linear-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-600 font-medium">Email Us</span>
            </div>
          </div>
        </div>
      </div>
    )}
  </nav>
</header>
  );
}