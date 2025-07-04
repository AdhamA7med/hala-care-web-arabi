
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z" fill="white"/>
                <path d="M20.2 20.2a16 16 0 0 1-16.41 0C3 20 3 14 9 9a2 2 0 0 1 6 0c6 5 6 11 5.2 11.2Z" fill="white"/>
              </svg>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-primary">ترو كير</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary font-semibold transition-colors duration-300"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary font-semibold transition-colors duration-300"
            >
              خدماتنا
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary font-semibold transition-colors duration-300"
            >
              من نحن
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-primary font-semibold transition-colors duration-300"
            >
              آراء العملاء
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary font-semibold transition-colors duration-300"
            >
              اتصل بنا
            </button>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/201155915415"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-medical"
            >
              احجز الآن
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="py-4 px-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-right text-gray-700 hover:text-primary font-semibold py-2"
              >
                الرئيسية
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-right text-gray-700 hover:text-primary font-semibold py-2"
              >
                خدماتنا
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-right text-gray-700 hover:text-primary font-semibold py-2"
              >
                من نحن
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-right text-gray-700 hover:text-primary font-semibold py-2"
              >
                آراء العملاء
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-right text-gray-700 hover:text-primary font-semibold py-2"
              >
                اتصل بنا
              </button>
              <a
                href="https://wa.me/201018485283"
                target="_blank"
                rel="noopener noreferrer"
                className="block btn-medical text-center"
              >
                احجز الآن
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
