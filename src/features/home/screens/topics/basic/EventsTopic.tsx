import { MousePointerClick, ShieldCheck, AlertCircle } from "lucide-react";
import { SectionFormEvent } from "../../../components/basics/item_5/SectionFormEvent";

export function EventsTopic() {

  return (
    <div className="space-y-6">
      {/* 1. RESUMEN / CONCEPTO CLAVE */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
        <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <MousePointerClick className="h-5 w-5 text-indigo-400" />
          Los Eventos en React
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          React captura los eventos del usuario usando sintaxis <strong>camelCase</strong> (ej. <code>onClick</code>, <code>onChange</code>). Para garantizar consistencia entre todos los navegadores, React envuelve el evento nativo del navegador en un objeto wrapper llamado <strong>SyntheticEvent</strong>.
        </p>
      </div>

      {/* 2. DEMOSTRACIÓN INTERACTIVA DE EVENTOS */}
      <SectionFormEvent/>

      {/* 3. SYNTHETICEVENT Y TIPADO CON TYPESCRIPT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h3 className="font-semibold text-slate-200 text-sm mb-2 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-indigo-400" />
            ¿Qué es SyntheticEvent?
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed mb-2">
            Es una capa sobre el evento nativo del DOM. Mantiene exactamente la misma API que el navegador (métodos como <code>e.preventDefault()</code> o <code>e.stopPropagation()</code>), asegurando el mismo comportamiento sin importar el navegador.
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h3 className="font-semibold text-slate-200 text-sm mb-2 flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-amber-400" />
            Tipos de Eventos en TypeScript
          </h3>
          <ul className="text-xs text-slate-300 space-y-1 font-mono">
            <li>• Clicks: <span className="text-indigo-300">MouseEvent&lt;HTMLButtonElement&gt;</span></li>
            <li>• Inputs: <span className="text-indigo-300">ChangeEvent&lt;HTMLInputElement&gt;</span></li>
            <li>• Form: <span className="text-indigo-300">FormEvent&lt;HTMLFormElement&gt;</span></li>
          </ul>
        </div>
      </div>

      {/* 4. EJEMPLO EN CÓDIGO */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
        <h3 className="font-semibold text-slate-200 text-sm mb-3">Sintaxis de Manejo de Eventos</h3>
        <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono overflow-x-auto leading-relaxed">
{`import { ChangeEvent, FormEvent } from 'react';

export function Formulario() {
  // 1. Manejo de inputs con ChangeEvent
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Nuevo valor:", e.target.value);
  };

  // 2. Manejo de envíos evitando la recarga del navegador
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Impide el comportamiento HTTP por defecto
    console.log("Formulario enviado");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
}`}
        </pre>
      </div>
    </div>
  );
}