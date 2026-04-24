import { Menu, X, LogOut } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { CurrencySelector } from './CurrencySelector';
import { PATHS } from '../../../routes/paths';
import { Link } from 'react-router-dom';

interface Props {
  setIsMenuOpen: () => void;
  isMenuOpen: boolean;
}

export const RightSide = ({setIsMenuOpen, isMenuOpen}: Props) => {
  return (
    <>
      <div className="hidden sm:flex items-center gap-4">
        <SearchBar/>
        <CurrencySelector/>
        <div className="hidden lg:flex shrink-0">
          <Link
            to={PATHS.DEMO_1} 
            className="flex items-center gap-2 text-slate-500 hover:text-rose-600 font-medium transition-colors border-l pl-4 ml-2"
          >
            <LogOut size={18}/>
            <span>Salir</span>
          </Link>
        </div>
      </div>

      {/* BOTÓN MENÚ MÓVIL */}
      <div className="flex lg:hidden items-center">
        <button
          onClick={setIsMenuOpen}
          className="p-3 rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Abrir menú"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </>
  )
}