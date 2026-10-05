import { CheckCircle2, RefreshCw } from "lucide-react"

export const InternalFunction = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h3 className="font-semibold text-slate-200 text-sm mb-3 flex items-center gap-2">
            <RefreshCw className="h-4 w-4 text-indigo-400 shrink-0" />
            El Ciclo de Renderizado
          </h3>
          <ol className="space-y-2 text-xs text-slate-300 list-decimal list-inside leading-relaxed">
            <li><strong>Trigger:</strong> Se llama a la función <code className="text-indigo-300">setState()</code>.</li>
            <li><strong>Schedule:</strong> React coloca la actualización en cola (Batching).</li>
            <li><strong>Render:</strong> Se ejecuta la función del componente evaluando el nuevo estado.</li>
            <li><strong>Commit:</strong> React actualiza solo los nodos del DOM que sufrieron cambios.</li>
          </ol>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3 sm:p-5">
          <h3 className="font-semibold text-slate-200 text-sm mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            Sintaxis Correcta con TypeScript
          </h3>
          <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono overflow-x-auto leading-relaxed">
{`import { useState } from 'react';

// Inferencia automática o genérico explícito
const [user, setUser] = useState<string | null>(null);

// Actualización basada en el valor previo
const increment = () => {
  setCount((prevCount) => prevCount + 1);
};`}
          </pre>
        </div>
      </div>
  )
}