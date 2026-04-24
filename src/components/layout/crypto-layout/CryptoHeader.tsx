import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import { PATHS } from '../../../routes/paths';
import { NavbarLinks } from './NavbarLinks';

import { RightSide } from './RightSide';
import { MenuMobile } from './MenuMobile';

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

          {/* Buscador y acciones (desktop + movil) en el lado derecho */}
          <RightSide setIsMenuOpen={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen}/>
        </div>
      </div>

      {/* MENÚ MÓVIL (FUNDAMENTO: Renderizado Condicional) */}
      <MenuMobile closeMenu={closeMenu} isMenuOpen={isMenuOpen}/>
    </header>
  );
};