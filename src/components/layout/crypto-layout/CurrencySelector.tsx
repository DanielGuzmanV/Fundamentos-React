import { DollarSign } from 'lucide-react';
import type { ChangeEvent } from 'react';

export const CurrencySelector = () => {
  // Por ahora lo manejamos local, luego lo llevaremos a un estado Global (Zustand/Context)
  const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("Cambiando moneda a:", e.target.value);
  };

  return (
    <div className="flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-xl border border-transparent focus-within:border-blue-200 transition-all">
      <DollarSign size={14} className="text-slate-500" />
      <select 
        onChange={handleCurrencyChange}
        className="bg-transparent text-sm font-bold text-slate-700 outline-none cursor-pointer pr-1"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="BTC">BTC</option>
      </select>
    </div>
  );
};