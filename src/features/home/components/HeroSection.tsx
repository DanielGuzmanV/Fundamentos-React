import { Layers, Rocket, Sparkles } from "lucide-react"

export const HeroSection = ({totalConcepts}: {totalConcepts: number}) => {
  return (
    <header className="text-center space-y-4 max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium">
        <Sparkles className="w-4 h-4" />
        <span>Ruta de Aprendizaje Interactiva</span>
      </div>
      
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
        Mastering <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-sky-400 to-emerald-400">React + TypeScript</span>
      </h2>

      <p className="text-slate-400 text-base sm:text-xl leading-relaxed">
        Una guía completa interactiva de 0 a 100. Explora cada concepto fundamental, intermedio y avanzado con ejemplos y pruebas en tiempo real.
      </p>

      {/* METRICAS RAPIDAS */}
      <div className="pt-4 flex items-center justify-center gap-6 sm:gap-10 text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span><strong>3</strong> Niveles</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-slate-700" />
        <div className="flex items-center gap-2">
          <Rocket className="w-4 h-4 text-emerald-400" />
          <span><strong>{totalConcepts}</strong> Conceptos Totales</span>
        </div>
      </div>
    </header>
  )
}