import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hammer, Search, UserCircle, Briefcase } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Startseite', path: '/' },
    { name: 'Für Bewerber', path: '#bewerber' },
    { name: 'Für Arbeitgeber', path: '#arbeitgeber' },
    { name: 'Magazin', path: '#magazin' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-800">
      {/* Top Bar - Trust Indicators */}
      <div className="bg-brand-900 text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-2">
            <span className="opacity-80">Deutschlands großes Handwerker-Netzwerk</span>
          </span>
          <span className="flex gap-4">
            <Link to="/impressum" className="hover:text-brand-100 transition">Impressum</Link>
            <span className="opacity-50">|</span>
            <span className="opacity-80">Über 10.000 offene Stellen</span>
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-brand-600 p-2 rounded-lg group-hover:bg-brand-700 transition-colors">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-none tracking-tight">
                  handwerk<span className="text-brand-600">-stellen</span>.de
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                  Das Jobportal
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                    isActive(link.path) ? 'text-brand-600' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
               <button className="flex items-center gap-2 text-gray-600 hover:text-brand-600 font-medium text-sm px-3 py-2">
                <UserCircle className="w-5 h-5" />
                Login
              </button>
              <button className="flex items-center gap-2 bg-safety-600 hover:bg-safety-500 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg">
                <Briefcase className="w-4 h-4" />
                Stelle ausschreiben
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 shadow-lg absolute w-full left-0 top-20">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <button className="w-full text-center text-gray-700 font-medium py-2 border border-gray-300 rounded-md">
                Login
              </button>
              <button className="w-full text-center bg-safety-600 text-white font-bold py-3 rounded-md shadow-sm">
                Für Arbeitgeber
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Hammer className="h-6 w-6 text-brand-500" />
              <span className="text-xl font-bold text-white">handwerk-stellen.de</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Wir bringen Handwerk und Industrie zusammen. Die modernste Plattform für Fachkräfte, Meister und Betriebe in Deutschland, Österreich und der Schweiz.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Für Bewerber</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-brand-400 transition">Jobsuche</Link></li>
              <li><Link to="#" className="hover:text-brand-400 transition">Lebenslauf erstellen</Link></li>
              <li><Link to="#" className="hover:text-brand-400 transition">Karrieretipps</Link></li>
              <li><Link to="#" className="hover:text-brand-400 transition">Gehaltsvergleich</Link></li>
            </ul>
          </div>

           {/* Links 2 */}
           <div>
            <h3 className="text-white font-semibold mb-4">Für Arbeitgeber</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-brand-400 transition">Stelle schalten</Link></li>
              <li><Link to="#" className="hover:text-brand-400 transition">Preise & Pakete</Link></li>
              <li><Link to="#" className="hover:text-brand-400 transition">Bewerberdatenbank</Link></li>
              <li><Link to="#" className="hover:text-brand-400 transition">Erfolgsgeschichten</Link></li>
            </ul>
          </div>

           {/* Legal */}
           <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/impressum" className="hover:text-brand-400 transition">Impressum</Link></li>
              <li><Link to="#" className="hover:text-brand-400 transition">Datenschutz</Link></li>
              <li><Link to="#" className="hover:text-brand-400 transition">AGB</Link></li>
              <li><Link to="#" className="hover:text-brand-400 transition">Kontakt</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} handwerk-stellen.de. Alle Rechte vorbehalten. Made with React & Tailwind.
        </div>
      </footer>
    </div>
  );
};

export default Layout;