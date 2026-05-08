import type { Coin } from "../types/crypto"

interface Props {
  filteredCoins: Coin[];
  searchQuery: string;
  setSelectedCoinId: (id: string) => void;
}

export const FeaturedCoins = ({filteredCoins, searchQuery, setSelectedCoinId}: Props) => {
  return (
    <section className="bg-white p-6 rounded-xl shadow border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Top Monedas</h2>
      {filteredCoins.length === 0 ? (
        <div className="text-center text-slate-500 py-8">
          No se encontraron monedas que coincidan con "{searchQuery}".
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Nombre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Precio (USD)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Cambio 24h</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {filteredCoins.map(coin => (
                <tr key={coin.id} className="hover:bg-slate-50 cursor-pointer" onClick={() => setSelectedCoinId(coin.id)}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{coin.rank}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">{coin.name} ({coin.symbol})</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">${Number(coin.priceUsd).toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                    <span className={Number(coin.changePercent24Hr) >= 0 ? 'text-emerald-600' : 'text-rose-600'}>
                      {Number(coin.changePercent24Hr).toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline truncate">Ver Gráfico</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Aquí iría el componente <CoinTable coins={filteredCoins} /> */}
    </section>
  )
}