import { BarChart3, Box, TrendingUp, Zap, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";


interface GridData {
  title: string;
  Icon: LucideIcon;
  IconColor: string;
  description: ReactNode;
}

export const GRID_DATA: GridData[] = [
  {
    title: 'Tiempo Real & WebSockets', 
    Icon: Zap,
    IconColor: 'text-amber-500',
    description: (
      <>
        Implementación de <span className="font-semibold text-slate-900 italic">useEffect</span> con Polling/WebSockets para capturar fluctuaciones de precios cada segundo sin recargar la página.
      </>
    ),
  },
  {
    title: 'Visualización de Datos',
    Icon: BarChart3,
    IconColor: 'text-indigo-500',
    description: (
      <>
        Integración de <span className="font-semibold text-slate-900">Recharts</span> para renderizar gráficos interactivos y reactivos que responden instantáneamente a los cambios del mercado
      </>
    ),
  },
  {
    title: 'Optimización de Listas',
    Icon: Box,
    IconColor: 'text-emerald-500',
    description: (
      <>
        Uso de <span className="font-semibold text-slate-900 italic">useMemo</span> y memorización para filtrar y ordenar tablas de mas de 500 activos sin lag en la interefaz de usuario.
      </>
    ),
  },
  {
    title: 'Arquitectura Escalable',
    Icon: TrendingUp,
    IconColor: 'text-rose-500',
    description: (
      <>
        Separación de capas: <span className="font-semibold text-slate-900">Services</span> para APIs, <span className="font-semibold text-slate-900">Custom Hooks</span> para la lógica y componentes puros para la UI.
      </>
    ),
  },
];