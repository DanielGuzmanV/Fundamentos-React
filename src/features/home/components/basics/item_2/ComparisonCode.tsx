import { CheckCircle2, XCircle } from "lucide-react"

export const ComparisonCode = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* COMPONENTE FUNCIONAL */}
        <div className="rounded-xl border border-indigo-500/30 bg-slate-900/60 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-slate-900/80 hover:shadow-lg">
          <h3 className="font-semibold text-indigo-300 text-sm mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            Componente Funcional (Recomendado)
          </h3>
          <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono overflow-x-auto leading-relaxed">
{`import { useState } from 'react';

export function Contador() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicks: {count}
    </button>
  );
}`}
          </pre>
        </div>

        {/* COMPONENTE DE CLASE */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-5 opacity-80 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-slate-900/80 hover:shadow-lg">
          <h3 className="font-semibold text-slate-400 text-sm mb-3 flex items-center gap-2">
            <XCircle className="h-4 w-4 text-slate-500" />
            Componente de Clase (Legacy)
          </h3>
          <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 font-mono overflow-x-auto leading-relaxed">
{`import React, { Component } from 'react';

export class Contador extends Component {
  state = { count: 0 };

  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Clicks: {this.state.count}
      </button>
    );
  }
}`}
          </pre>
        </div>
      </div>
  )
}