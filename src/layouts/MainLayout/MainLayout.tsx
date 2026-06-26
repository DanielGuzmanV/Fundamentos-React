import {useState} from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { SidebarCustom } from '../../components/layout/main-layout/SidebarCustom';
import { useActiveTitle } from '../../hooks/useActiveTitle';
import { PageHeader } from '../../components/layout/main-layout/PageHeader';

export const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Hook para mostrar el titulo en el header de movil
  const activeTitle = useActiveTitle();

  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden text-slate-900">
      {/* SIDEBAR */}
      <SidebarCustom 
        isSiberbarOpen={isSidebarOpen} 
        setIsSiberbarOpen={() => setIsSidebarOpen(false)}
      />

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Header móvil superior */}
        <header className="sm:hidden flex items-center gap-2 p-2 bg-white border-b border-gray-200">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-gray-600">
            <Menu size={24} />
          </button>
          <span className='font-bold text-lg'>{activeTitle}</span>
        </header>

        {/* Header para la versio pc */}
        <div className='hidden sm:block sticky top-0 z-10 bg-gray-50 px-3 lg:px-6'>
          <PageHeader title={activeTitle}/>
        </div>
        
        {/* Contenido principal */}

        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-8">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
      
      {/* OVERLAY PARA MÓVIL */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

    </div>
  )
}