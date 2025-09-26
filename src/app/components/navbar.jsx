'use client';
import { useState } from "react";
import { usePathname } from 'next/navigation';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex w-full justify-between px-14 pt-12 sm:py-5 lg:pt-12 lg:pt-12 sm:pt-12">
      <div className="nav-left">
        <a href="/" className="logo">
          <img src="/DanielBriggsSig_black_no_bg.png" alt="Daniel Briggs" className="h-20 w-auto" />
        </a>
      </div>

      {/* Hamburger Menu for small screens */}
      <div className="hamburger sm:hidden">
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
      <div className="nav-right hidden sm:flex space-x-6 pt-6" style={{ fontFamily: "'Inter', sans-serif" }}>
        <a href="/" className={`text-sm hover:text-gray-500 ${pathname === '/' ? 'text-gray-400' : ''}`}>Drawings</a>
        <a href="/comics" className={`text-sm hover:text-gray-500 ${pathname === '/comics' ? 'text-gray-400' : ''}`}>Comics</a>
        <a href="https://danbriggscomics.bigcartel.com/" className={`text-sm hover:text-gray-500`} target="_blank" rel="noopener noreferrer">Store</a>
        <a href="/contact" className={`text-sm hover:text-gray-500 ${pathname === '/contact' ? 'text-gray-400' : ''}`}>Contact</a>
      </div>



      
    </nav>
  );
}


export default Navbar;
