import { Layers } from "lucide-react";
import { ComparisonTable } from "../../../components/basics/item_2/ComparisonTable";
import { ComparisonCode } from "../../../components/basics/item_2/ComparisonCode";

export function ComponentsTopic() {
  return (
    <div className="space-y-6">
      {/* 1. RESUMEN / CONCEPTO CLAVE */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <Layers className="h-5 w-5 text-indigo-400" />
          ¿Qué es un Componente?
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Un <strong>componente</strong> es una pieza de interfaz independiente, reutilizable y aislada. En React existen dos formas de crearlos: los <strong>Componentes de Clase</strong> (forma legada basada en clases de ES6) y los <strong>Componentes Funcionales</strong> (estándar moderno basado en funciones puras y Hooks).
        </p>
      </div>

      {/* 2. TABLA COMPARATIVA DIRECTA */}
      <ComparisonTable/>

      {/* 3. COMPARATIVA DE CÓDIGO LADO A LADO */}
      <ComparisonCode/>
    </div>
  );
}