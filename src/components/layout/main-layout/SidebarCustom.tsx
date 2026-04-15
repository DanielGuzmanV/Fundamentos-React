import { Link, useLocation } from "react-router-dom";
import { LogIn, X } from 'lucide-react';
import { PATHS } from '../../../routes/paths';
import { MENU_ITEMS } from "../../../routes/navigation";
import { NavItem } from "./NavItem";
import { SubMenuItem } from "./SubMemuItem";

interface Props {
  isOpen: boolean;
  onClose: ()=> void;
}

export const SidebarCustom = ({isOpen, onClose}: Props) => {
  const location = useLocation();

  const getActiveClass = (path: string) => 
    location.pathname === path ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100';

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-60 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:relative lg:translate-x-0
    `}>
      <div className='flex flex-col h-full'>
        {/* Header Sidebar */}
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-xl">
            <div className="bg-indigo-600 text-white px-3 py-2 rounded-lg">R</div>
            <span>React Master</span>
          </div>
          {/* Botón cerrar móvil */}
          <button className="lg:hidden p-2 text-gray-500" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Navegacion de links*/}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          <p className="px-3 mt-4 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Menú</p>
          
          {MENU_ITEMS.map((items) => {
            if(items.isSubmenu) {
              return (
                <SubMenuItem
                  key={items.name}
                  item={items}
                  onClose={onClose}
                  getActiveClass={getActiveClass}
                />
              );
            }

            return (
              <NavItem
                key={items.href}
                item={items}
                isActive={location.pathname === items.href}
                onClick={onClose}
              />
            )
          })}
        </nav>

        {/* Footer SideBar */}
        <div className="p-4 border-t border-gray-100">
          <Link to={PATHS.LOGIN} className="flex items-center gap-3 p-3 text-gray-600 hover:text-indigo-600 font-medium transition-colors">
            <LogIn size={20} />
            <span>Cerrar Sesión</span>
          </Link>
        </div>

      </div>
    </aside>
  )
}