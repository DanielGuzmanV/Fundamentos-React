import { useState } from "react";
import { AlertTriangle, CheckCircle2, Minus, XCircle } from "lucide-react";

export function ImmutabilityExample() {
  const [items, setItems] = useState<string[]>(["Item 1", "Item 2"]);

  const saveItemReset = items[0];

  // FORMA INCORRECTA (Mutación Directa)
  const handleIncorrectAdd = () => {
    // Agregamos al arreglo existente (misma dirección de memoria)
    items.push(`Item ${items.length + 1}`);
    alert(`Arreglo mutado en memoria: ${items}`);
    
    // Le pasamos la misma referencia a React -> NO RE-RENDERIZA
    setItems(items);
  };

  // FORMA CORRECTA (Nueva Referencia con Spread Operator)
  const handleCorrectAdd = () => {
    // Creamos un nuevo arreglo Copiando el anterior + Nuevo Elemento
    const newArray = [...items, `Item ${items.length + 1}`];
    
    // Le pasamos una referencia de memoria NUEVA a React -> RE-RENDERIZA
    setItems(newArray);
  };

  const handleResetList = () => {
    const newArray = [saveItemReset];
    setItems(newArray)
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
      <h3 className="text-sm font-semibold text-white flex items-center gap-2">
        <AlertTriangle className="h-4 w-4 text-amber-400" />
        Laboratorio de Inmutabilidad (Arrays en useState)
      </h3>

      <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg">
        <p className="text-xs text-slate-400 mb-2">Lista actual en estado:</p>
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs rounded-md font-mono"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* BOTÓN INCORRECTO */}
        <button
          onClick={handleIncorrectAdd}
          className="px-3 py-2 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <XCircle className="h-4 w-4" />
          Mutar Directamente (items.push)
        </button>

        {/* BOTÓN CORRECTO */}
        <button
          onClick={handleCorrectAdd}
          className="px-3 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <CheckCircle2 className="h-4 w-4" />
          Nueva Referencia ([...items, item])
        </button>
        
        {/* BOTÓN REINICIO */}
        <button
          onClick={handleResetList}
          className="px-3 py-2 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <Minus className="h-4 w-4" />
          Reinciar valores: {saveItemReset}
        </button>
      </div>

      <p className="text-base text-slate-400">
        Si presionas el botón rojo, verás en el 'alert' del navegador que el arreglo sí crece, pero la interfaz no se actualiza porque la referencia de memoria nunca cambió.
      </p>
    </div>
  );
}