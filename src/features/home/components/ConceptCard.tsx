import { LEVEL_STYLES } from "../constants/level_styles";
import type { ConceptLevel } from "../types/concept.types";
import { ArrowRight, BookOpen } from "lucide-react";

interface ConceptCardProps {
  levelData: ConceptLevel;
  onSelect?: (levelId: string) => void;
}

export const ConceptCard = ({ levelData, onSelect }: ConceptCardProps) => {
  const Icon = levelData.icon || BookOpen;
  const styles = LEVEL_STYLES[levelData.id] || LEVEL_STYLES.basic;

  return (
    <div
      onClick={() => onSelect?.(levelData.id)}
      className={`group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer ${styles.borderHover}`}
    >
      <div>
        {/* Header de la Card: Icono + Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className={`p-3 rounded-xl ${styles.iconBg}`}>
            <Icon className="w-7 h-7" />
          </div>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border uppercase tracking-wider ${styles.badge}`}>
            {levelData.id}
          </span>
        </div>

        {/* Título y Descripción */}
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-white mb-2 transition-colors">
          {levelData.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {levelData.description}
        </p>
      </div>

      {/* Footer de la Card: Contador + Botón */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span className="font-medium text-slate-300">
          {levelData.items.length} Conceptos clave
        </span>
        <div className="flex items-center gap-1 font-semibold text-slate-300 group-hover:text-white transition-colors">
          Explorar
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};