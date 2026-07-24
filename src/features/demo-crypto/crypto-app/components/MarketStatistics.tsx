import { useGlobalMarketStats } from "../hooks/useGlobalMarketStats"
import { buildMarketStatsDisplay } from "../utils/marketStatsDisplay";

export const MarketStatistics = () => {
  const { stats, isLoading, error } = useGlobalMarketStats();

  if(isLoading) {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow border border-slate-200 h-32 flex items-center justify-center text-slate-400 animate-pulse">
            Cargando...
          </div>
        ))}
      </section>
    );
  }

  if (error) {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span-full bg-red-50 p-6 rounded-xl shadow border border-red-200 text-red-700 text-center">
          Error al cargar las estadísticas del mercado: {error}
        </div>
      </section>
    );
  }

  // Si no hay stats (ej. aún no cargó o hubo un error no detectado arriba), mostrar un fallback
  if (!stats) {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span-full bg-white p-6 rounded-xl shadow border border-slate-200 text-slate-500 text-center">
          No hay estadísticas del mercado disponibles.
        </div>
      </section>
    );
  }

  // Creamos la lista de estadísticas para el renderizado
  const marketStatsDisplay = buildMarketStatsDisplay(stats);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {marketStatsDisplay.map((stat) => (
        <div key={stat.label} className="bg-white p-6 rounded-xl shadow border border-slate-200 flex flex-col justify-center items-start">
          <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
          <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
        </div>
      ))}
    </section>
  )
}