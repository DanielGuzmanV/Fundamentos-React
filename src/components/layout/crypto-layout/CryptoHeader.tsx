import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, TrendingUp, LogOut } from 'lucide-react';
import { PATHS } from '../../../routes/paths';
import { NavbarLinks } from './NavbarLinks';
import { SearchBar } from './SearchBar';

export const CryptoHeader = () => {
  // Estado para controlar el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para cerrar el menú al hacer click en un enlace
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO Y NOMBRE */}
          <Link 
            to={PATHS.CRYPTO_APP} 
            className="flex items-center gap-2 text-blue-600 hover:opacity-80 transition-opacity"
          >
            <TrendingUp size={28} strokeWidth={2.5} />
            <span className="font-bold text-xl tracking-tight text-slate-900">
              CryptoPulse
            </span>
          </Link>

          {/* NAVEGACIÓN DESKTOP (Oculta en móvil) */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavbarLinks/> 
          </nav>

          {/* BUSCADOR Y ACCIONES DESKTOP */}
          <div className="hidden lg:flex items-center gap-4">
            <SearchBar/>
            <Link 
              to={PATHS.DEMO_1} 
              className="flex items-center gap-2 text-slate-500 hover:text-rose-600 font-medium transition-colors border-l pl-4 ml-2"
            >
              <LogOut size={18} />
              <span>Salir</span>
            </Link>
          </div>

          {/* BOTÓN MENÚ MÓVIL (FUNDAMENTO: Evento onClick) */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL (FUNDAMENTO: Renderizado Condicional) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4 shadow-xl">
          <div className="flex flex-col gap-4">
            {/* Aquí irá <SearchBar /> para móvil */}
            <SearchBar/>

            {/* Aquí irá <NavbarLinks /> para móvil */}
            <nav className="flex flex-col gap-2">
              <NavbarLinks isMobile onLinkClick={closeMenu}/>
            </nav>

            <Link 
              to={PATHS.DEMO_1} 
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 p-3 bg-rose-50 text-rose-600 rounded-xl font-bold"
            >
              <LogOut size={20} />
              <span>Salir de la Demo</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};