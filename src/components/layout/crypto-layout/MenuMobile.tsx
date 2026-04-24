import { SearchBar } from './SearchBar';
import { CurrencySelector } from './CurrencySelector';
import { NavbarLinks } from './NavbarLinks';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../routes/paths';
import { LogOut } from 'lucide-react';

interface Props {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

export const MenuMobile = ({isMenuOpen, closeMenu}: Props) => {
  return (
    <>
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4 shadow-xl">
          <div className="flex flex-col gap-4">
            <div className="flex sm:hidden gap-2">
              <div className="flex-1">
                <SearchBar/>
              </div>
              <CurrencySelector/>
            </div>

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
    </>
  )
}