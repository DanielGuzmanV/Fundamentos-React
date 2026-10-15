import { useState } from "react";

export const StateCounter = () => {
  // Declaración del estado local con tipado estricto
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    // Incrementa usando el valor previo asegurando la sincronización
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-2">
      <h3 className="text-sm font-semibold text-white text-center pb-0 lg:pb-2">Contador Reactivo (useState)</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 space-y-4">
        <p className="text-lx text-slate-400 text-center">
          Valor actual en memoria: <span className="text-indigo-400 font-bold text-2xl">{count}</span>
        </p>
        <div className="flex gap-2 justify-center">
          <button 
            onClick={handleDecrement}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Disminuir
          </button>
          <button 
            onClick={handleIncrement}
            className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-xs text-white rounded-lg transition-colors cursor-pointer"
          >
            Incrementar
          </button>
          <button 
            onClick={handleReset}
            className="px-3 py-1.5 bg-rose-500 hover:bg-rose-400 text-xs text-white rounded-lg transition-colors cursor-pointer"
          >
            Reinciar
          </button>
        </div>
      </div>
    </div>
  );
}