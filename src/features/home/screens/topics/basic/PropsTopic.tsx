import { AlertTriangle, ArrowRightLeft, CornerDownRight, ShieldCheck } from "lucide-react";
import { CommunicationFlows } from "../../../components/basics/item_3/CommunicationFlows";

export function PropsTopic() {
  return (
    <div className="space-y-6">
      {/* 1. RESUMEN / CONCEPTO CLAVE */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
        <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <ArrowRightLeft className="h-5 w-5 text-indigo-400" />
          ¿Qué son las Props?
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Las <strong>props (propiedades)</strong> son la vía de comunicación de React. El flujo de datos es estrictamente <strong>unidireccional (Padre → Hijo)</strong> e inmutable (el hijo no puede modificarlas directamente). Para enviar información de <strong>Hijo → Padre</strong>, el padre le pasa una función callback al hijo como prop.
        </p>
      </div>

      {/* 2. FLUJOS DE COMUNICACIÓN LADO A LADO */}
      <CommunicationFlows/>

      {/* 3. TYPESCRIPT Y VALORES POR DEFECTO */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
        <h3 className="font-semibold text-slate-200 text-sm mb-3 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-indigo-400" />
          Typings Estrictos e Inmunización con TypeScript
        </h3>
        <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono leading-relaxed overflow-x-auto">
{`interface BadgeProps {
  label: string;
  variant?: "success" | "error" | "info"; // Prop opcional
  isActive?: boolean;
}

// Valores por defecto al destructurar
export function Badge({ label, variant = "info", isActive = false }: BadgeProps) {
  return (
    <span className={\`badge-\${variant}\`}>
      {label} {isActive && "•"}
    </span>
  );
}`}
        </pre>
      </div>

      {/* 4. PROP DRILLING */}
      <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
        <h3 className="font-semibold text-amber-300 text-sm mb-2 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-400" />
          ¿Qué es el Prop Drilling?
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          Ocurre cuando pasas props a través de múltiples niveles de componentes intermedios que no necesitan esa información, solo para hacérsela llegar a un componente hijo profundo. Para solucionarlo en árboles grandes de UI, se utilizan estrategias como <strong>Composition (children)</strong>, <strong>Context API</strong> o gestores de estado como <strong>Zustand/Redux</strong>.
        </p>
      </div>
    </div>
  );
}