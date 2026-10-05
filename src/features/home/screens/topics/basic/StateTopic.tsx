import { useState } from "react";
import { Database, AlertTriangle } from "lucide-react";
import { LaboratoryInteractive } from "../../../components/basics/item_4/LaboratoryInteractive";
import { InternalFunction } from "../../../components/basics/item_4/InternalFunction";

export function StateTopic() {
  // Estados para el experimento interactivo
  const [stateCount, setStateCount] = useState<number>(0);
  const [renderCount, setRenderCount] = useState<number>(1);
  
  // Variable común (No reactiva)
  let localCount = 0;

  const handleLocalIncrement = () => {
    localCount += 1;
    console.log("localCount cambió a:", localCount); // Cambia en consola, pero la UI no se enterará
  };

  const handleStateIncrement = () => {
    setStateCount((prev) => prev + 1);
    setRenderCount((prev) => prev + 1);
  };

  return (
    <div className="space-y-6">
      {/* 1. RESUMEN / CONCEPTO CLAVE */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <Database className="h-5 w-5 text-indigo-400 shrink-0" />
          ¿Qué es el Estado Local?
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          El <strong>Estado (State)</strong> es la memoria interna de un componente. A diferencia de una variable tradicional de JavaScript, cuando el estado cambia mediante su función actualizadora, React <strong>detecta la modificación y programa un re-renderizado</strong> para refrescar la interfaz con los nuevos datos.
        </p>
      </div>

      {/* 2. DEMOSTRACIÓN INTERACTIVA */}
      <LaboratoryInteractive
        renderCount={renderCount}
        localCount={localCount}
        stateCount={stateCount}
        handleLocalIncrement={handleLocalIncrement}
        handleStateIncrement={handleStateIncrement}
      />

      {/* 3. FUNCIONAMIENTO INTERNO */}
      <InternalFunction/>

      {/* 4. INMUTABILIDAD Y ERRORES COMUNES */}
      <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
        <h3 className="font-semibold text-amber-300 text-sm mb-2 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0" />
          Regla de Oro: Inmutabilidad
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed mb-3">
          Nunca debes mutar objetos o arrays directamente en el estado (ej: <code className="text-amber-400">items.push(newItem)</code>). React compara referencias de memoria; si la referencia del objeto es la misma, omitirá el re-renderizado.
        </p>
        <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono overflow-x-auto leading-relaxed">
{`// Incorrecto (Mutación directa - La UI no se enterará)
items.push("Nuevo");
setItems(items);

// Correcto (Creando una nueva referencia)
setItems([...items, "Nuevo"]);`}
        </pre>
      </div>
    </div>
  );
}