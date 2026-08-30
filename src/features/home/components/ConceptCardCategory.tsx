import { ArrowRight, BookOpen, type LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  categoryId: string | undefined;
  id: string;
  title: string;
  description: string;
  itemIcon?: LucideIcon;
}

export const ConceptCardCategory = ({categoryId, id, title, description, itemIcon}: Props) => {
  const navigate = useNavigate();

  const ItemIcon = itemIcon || BookOpen;

  return (
   <div
      onClick={() => navigate(`/learning/${categoryId}/${id}`)}
      className="group flex cursor-pointer items-start justify-between rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-slate-900/80 hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 rounded-lg bg-slate-800 p-2 text-indigo-400 transition-colors group-hover:bg-indigo-500/10 group-hover:text-indigo-300">
          <ItemIcon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-200 group-hover:text-white">
            {title}
          </h3>
          <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <ArrowRight className="h-5 w-5 shrink-0 text-slate-600 transition-all group-hover:translate-x-1 group-hover:text-indigo-400" />
    </div>
  )
}