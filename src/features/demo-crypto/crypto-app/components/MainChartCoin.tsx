import type { HistoryData } from "../types/crypto";

interface Props {
  selectedCoinId: string;
  isLoadingHistory: boolean;
  errorHistory: string | null;
  history: HistoryData[]
}

export const MainChartCoin = ({selectedCoinId, isLoadingHistory, errorHistory, history}: Props) => {
  return (
    <section className="bg-white p-6 rounded-xl shadow border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Gráfico de {selectedCoinId.charAt(0).toUpperCase() + selectedCoinId.slice(1)}</h2>
      {isLoadingHistory ? (
        <div className="h-96 flex items-center justify-center text-slate-500">
          Cargando historial...
        </div>
      ) : errorHistory ? (
        <div className="h-96 flex items-center justify-center text-red-500">
          Error al cargar historial: {errorHistory}
        </div>
      ) : (
        <div className="h-96 flex items-center justify-center text-slate-400">
          {/* Aquí iría el componente <CoinChart history={history} /> */}
          Gráfico de Recharts (Datos: {history.length} puntos)
        </div>
      )}
    </section>
  )
}