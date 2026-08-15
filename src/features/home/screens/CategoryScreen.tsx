import { useParams, useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { CONCEPT_LEVELS_DATA } from "../data/concepts.data";
import { NotFoundBase } from "../../../pages/NotFoundBase";

export const CategoryScreen = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  // Buscamos la categoría según la URL (basic, intermediate, advanced)
  const categoryData = CONCEPT_LEVELS_DATA.find(
    (level) => level.id === categoryId
  );

  // Fallback si la ruta no existe
  if (!categoryData) {
    return (
      <NotFoundBase
        title="Categoría no encontrada"
        message="La categoría especificada no existe."
      />
    );
  }

  const Icon = categoryData.icon || BookOpen;

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* HERO DE LA CATEGORÍA */}
        <section className="mb-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
                {categoryData.title}
              </h1>
              <p className="mt-1 text-sm text-slate-400 sm:text-base leading-relaxed">
                {categoryData.description}
              </p>
            </div>
          </div>
        </section>

        {/* LISTA DINÁMICA DE ITEMS / PUNTOS */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-200">
            Temas incluidos ({categoryData.items.length})
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {categoryData.items.map((item) => {
              const ItemIcon = item.icon || BookOpen;

              return (
                <div
                  key={item.id}
                  onClick={() => navigate(`/learning/${categoryId}/${item.id}`)}
                  className="group flex cursor-pointer items-start justify-between rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-slate-900/80 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-lg bg-slate-800 p-2 text-indigo-400 transition-colors group-hover:bg-indigo-500/10 group-hover:text-indigo-300">
                      <ItemIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-200 group-hover:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="h-5 w-5 shrink-0 text-slate-600 transition-all group-hover:translate-x-1 group-hover:text-indigo-400" />
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};