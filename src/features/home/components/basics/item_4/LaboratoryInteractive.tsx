import { Zap } from "lucide-react"

interface Props {
  renderCount: number;
  localCount: number;
  stateCount: number;
  handleLocalIncrement: () => void;
  handleStateIncrement: () => void;
}

export const LaboratoryInteractive = ({
  renderCount, 
  localCount,
  stateCount,
  handleLocalIncrement,
  handleStateIncrement
}: Props) => {
  return (
    <div className="rounded-xl border border-indigo-500/30 bg-slate-900/60 p-3 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-white text-sm flex items-center gap-2">
            <Zap className="h-4 w-4 text-amber-400 shrink-0" />
            Laboratorio: Variable Local vs. Estado Reactivo
          </h3>
          <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono">
            Renders del componente: {renderCount}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* EXPERIMENTO CON VARIABLE LOCAL */}
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-400 mb-1">1. Variable JS (<code className="text-amber-400">let count = 0</code>)</p>
              <p className="text-2xl font-bold text-slate-500 my-2">{localCount}</p>
              <p className="text-[11px] text-slate-400 mb-3">
                Si presionas, la variable cambia en memoria (mira la consola), pero no fuerza un re-render de la UI.
              </p>
            </div>
            <button
              onClick={handleLocalIncrement}
              className="w-full py-2 px-3 cursor-pointer text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              Incrementar Variable Local
            </button>
          </div>

          {/* EXPERIMENTO CON ESTADO (useState) */}
          <div className="p-4 rounded-lg bg-slate-950 border border-indigo-500/40 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold text-indigo-300 mb-1">2. Estado Reactivo (<code className="text-indigo-400">useState</code>)</p>
              <p className="text-2xl font-bold text-indigo-400 my-2">{stateCount}</p>
              <p className="text-[11px] text-slate-400 mb-3">
                Notifica a React del cambio, programa el renderizado y sincroniza el DOM.
              </p>
            </div>
            <button
              onClick={handleStateIncrement}
              className="w-full py-2 px-3 cursor-pointer text-xs font-medium rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
            >
              Incrementar State
            </button>
          </div>
        </div>
      </div>
  )
}