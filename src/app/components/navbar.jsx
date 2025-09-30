'use client';
import { useState } from "react";
import { usePathname } from 'next/navigation';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="relative flex w-full justify-between px-14 pt-12 sm:py-5 lg:pt-12 lg:pt-12 sm:pt-12">
      <div className="nav-left">
        <a href="/" className="logo">
          <img src="/DanielBriggsSig_black_no_bg.png" alt="Daniel Briggs" className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto" />
        </a>
      </div>

      {/* Hamburger Menu for small screens */}
      <div className="hamburger lg:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          type="button"
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // X icon (close)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Desktop Menu */}
      <div className="nav-right hidden lg:flex space-x-6 pt-6" style={{ fontFamily: "'Inter', sans-serif" }}>
        <a href="/" className={`hover:text-gray-500 ${pathname === '/' ? 'text-gray-400' : ''}`}>Drawings</a>
        <a href="/comics" className={`hover:text-gray-500 ${pathname === '/comics' ? 'text-gray-400' : ''}`}>Comics</a>
        <a href="https://dbriggs.bandcamp.com/" className={`hover:text-gray-500 ${pathname === '/music' ? 'text-gray-400' : ''}`} target="_blank" rel="noopener noreferrer">Music</a>
        <a href="https://danbriggscomics.bigcartel.com/" className={`hover:text-gray-500 ${pathname === '/store' ? 'text-gray-400' : ''}`} target="_blank" rel="noopener noreferrer">Store</a>
        <a href="/contact" className={`hover:text-gray-500 ${pathname === '/contact' ? 'text-gray-400' : ''}`}>Contact</a>
      </div>
      {/* Mobile Menu - shows when hamburger is clicked */}
      {isOpen && (
      <div className="fixed top-0 left-0 w-full h-full bg-white z-50 lg:hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
        {/* Close button */}
        <div className="absolute right-14 pt-12">
          <button 
            onClick={() => setIsOpen(false)} 
            type="button"
            className="focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col pt-20 items-center h-full space-y-8 text-lg">
          <a href="/" className={`hover:text-gray-500 ${pathname === '/' ? 'text-gray-400' : ''}`} onClick={() => setIsOpen(false)}>Drawings</a>
          <a href="/comics" className={`hover:text-gray-500 ${pathname === '/comics' ? 'text-gray-400' : ''}`} onClick={() => setIsOpen(false)}>Comics</a>
          <a href="https://dbriggs.bandcamp.com/" className={`hover:text-gray-500 ${pathname === '/music' ? 'text-gray-400' : ''}`} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Music</a>
          <a href="https://danbriggscomics.bigcartel.com/" className={`hover:text-gray-500`} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Store</a>
          <a href="/contact" className={`hover:text-gray-500 ${pathname === '/contact' ? 'text-gray-400' : ''}`} onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
      )}
    </nav>
  );
}

export default Navbar;