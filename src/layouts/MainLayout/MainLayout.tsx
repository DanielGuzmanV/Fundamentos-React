import {useState} from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarCustom } from '../../components/layout/main-layout/SidebarCustom';
import { useHeaderNavigation } from '../../hooks/useActiveTitle';
import { HeaderMobile } from '../../components/layout/main-layout/HeaderMobile';
import { HeaderDesktopWeb } from '../../components/layout/main-layout/HeaderDesktopWeb';

export const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Hook para mostrar el titulo en el header de movil
  const {title, isSubscreen, breadcrumbs} = useHeaderNavigation();

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
        <HeaderMobile
          isSubscreen={isSubscreen}
          setIsSidebarOpen={() => setIsSidebarOpen(true)}
          title={title}
        />

        {/* Header para la versio pc */}
        <div className='hidden sm:block sticky top-0 z-10 bg-gray-50 px-3 lg:px-6'>
          <HeaderDesktopWeb
            title={title}
            breadcrumbs={breadcrumbs}
            isSubscreen={isSubscreen}
          />
        </div>
        
        {/* Contenido principal */}

        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="max-w-full">
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