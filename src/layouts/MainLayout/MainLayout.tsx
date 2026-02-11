import {useState} from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { SidebarCustom } from './components/SidebarCustom';

export const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden text-slate-900">
      {/* SIDEBAR */}
      <SidebarCustom isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Header móvil superior */}
        <header className="lg:hidden flex items-center justify-between p-2 bg-white border-b border-gray-200">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-gray-600">
            <Menu size={24} />
          </button>
        </header>

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