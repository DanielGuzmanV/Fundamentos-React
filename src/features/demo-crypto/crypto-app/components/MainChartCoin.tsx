import { formatPrice, formatXAxis } from "../../../../utils/format_mainChart";
import type { HistoryData } from "../types/crypto";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

interface Props {
  selectedCoinId: string;
  isLoadingHistory: boolean;
  errorHistory: string | null;
  history: HistoryData[];
  // Añadimos las funciones para cambiar el intervalo si MainChartCoin las va a controlar
  setGraphInterval?: (interval: string) => void; 
}

export const MainChartCoin = ({
  selectedCoinId,
  isLoadingHistory,
  errorHistory,
  history,
  setGraphInterval // Recibimos la función
}: Props) => {
  // Aseguramos que los datos del historial sean números para Recharts
  const formattedHistory = history.map(item => ({
    ...item,
    priceUsd: Number(item.priceUsd), // Convertimos a número
    time: Number(item.time) // Convertimos a número
  })).sort((a, b) => a.time - b.time); // Ordenamos por tiempo para el gráfico

  const coinName = selectedCoinId.charAt(0).toUpperCase() + selectedCoinId.slice(1);

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center justify-between">
        Gráfico de {coinName}
        {/* Controles de Intervalo */}
        {setGraphInterval && (
          <div className="flex gap-2 text-sm font-normal">
            <button 
              onClick={() => setGraphInterval('h1')} 
              className="px-3 py-1 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
            >1H</button>
            <button 
              onClick={() => setGraphInterval('d1')} 
              className="px-3 py-1 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
            >1D</button>
            <button 
              onClick={() => setGraphInterval('m1')} 
              className="px-3 py-1 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
            >1M</button>
            {/* Puedes añadir más intervalos como 'm1', 'y1' */}
          </div>
        )}
      </h2>
      
      {isLoadingHistory ? (
        <div className="h-96 flex items-center justify-center text-slate-500">
          Cargando historial...
        </div>
      ) : errorHistory ? (
        <div className="h-96 flex items-center justify-center text-red-500">
          Error al cargar historial: {errorHistory}
        </div>
      ) : formattedHistory.length === 0 ? (
        <div className="h-96 flex items-center justify-center text-slate-500">
          No hay datos históricos disponibles para este período.
        </div>
      ) : (
        <div style={{ width: '100%', height: 400 }}> {/* Contenedor para ResponsiveContainer */}
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={formattedHistory}
              margin={{
                top: 10,
                right: 10,
                left: 10, // Ajuste para que el YAxis no se corte
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0"/> {/* Líneas de la cuadrícula */}
              <XAxis 
                dataKey="time" 
                tickFormatter={formatXAxis} 
                minTickGap={30} // Evita que las etiquetas se superpongan
                fontSize={12}
                tickLine={false} // Quitamos la línea del tick
                axisLine={false} // Quitamos la línea del eje
              />
              <YAxis 
                type="number" 
                domain={['dataMin', 'auto']} // Deja que Recharts calcule el dominio automáticamente
                tickFormatter={formatPrice} 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                orientation="left"
              />
              <Tooltip 
                formatter={(value: unknown) => formatPrice(Number(value))}
                labelFormatter={(label: unknown) => new Date(Number(label)).toLocaleString('es-ES')}
                contentStyle={{ backgroundColor: '#2d3748', border: 'none', borderRadius: '8px', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
                cursor={{ stroke: '#cbd5e1', strokeWidth: 1 }}
              />
              <Area 
                type="monotone" 
                dataKey="priceUsd" 
                stroke="#8884d8" 
                fillOpacity={1} 
                fill="url(#colorPrice)" 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};