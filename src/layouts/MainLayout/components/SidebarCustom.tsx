import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BookOpen, Layers, TestTube, LogIn, ChevronDown, X } from 'lucide-react';
import { PATHS } from '../../../routes/paths';

interface Props {
  isOpen: boolean;
  onClose: ()=> void;
}

export const SidebarCustom = ({isOpen, onClose}: Props) => {
  const [isConceptOpen, setIsConceptOpen] = useState(true);
  const location = useLocation();

  const isActive = (path: string) => 
    location.pathname === path ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100';

  const pathsConcept = [
    {title: 'Básicos', path: PATHS.BASICOS},
    {title: 'Intermedios', path: PATHS.INTERMEDIOS},
    {title: 'Avanzados', path: PATHS.AVANZADOS},
  ]

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
          <p className="px-3 mt-4 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Principal</p>
          <Link 
            to={PATHS.HOME} 
            onClick={onClose}
            className={`flex items-center gap-3 p-3 rounded-lg font-medium transition-colors ${isActive(PATHS.HOME)}`}
          >
            <LayoutDashboard size={20} />
            <span>Inicio</span>
          </Link>

          {/* Despliegue de conceptos */}
          <div>
            <button 
              onClick={() => setIsConceptOpen(!isConceptOpen)}
              className="w-full flex items-center justify-between p-3 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
            >
              <div className="flex items-center gap-3">
                <BookOpen size={20} />
                <span>Conceptos</span>
              </div>
              <ChevronDown size={16} className={`transition-transform ${isConceptOpen ? 'rotate-180': ''}`} />
            </button>

            {isConceptOpen && (
              <div className="ml-9 mt-1 flex flex-col border-l border-gray-100">
                {pathsConcept.map((ruta, idx) => (
                  <Link
                    key={idx}
                    to={ruta.path} onClick={onClose} 
                    className={`p-2 mb-2 pl-4 text-sm rounded-lg ${isActive(ruta.path)}`}
                  >
                    {ruta.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        
          <p className="px-3 mt-6 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Recursos</p>
          <Link 
            to={PATHS.EJEMPLOS} onClick={onClose} 
            className={`flex items-center gap-3 p-3 rounded-lg font-medium transition-colors ${isActive(PATHS.EJEMPLOS)}`}
          >
            <Layers size={20} />
            <span>Ejemplos</span>
          </Link>
          <Link 
            to={PATHS.PRUEBAS} onClick={onClose} 
            className={`flex items-center gap-3 p-3 rounded-lg font-medium transition-colors ${isActive(PATHS.PRUEBAS)}`}
          >
            <TestTube size={20} />
            <span>Pruebas</span>
          </Link>
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