import { useParams } from "react-router-dom";
import { CONCEPT_LEVELS_DATA } from "../data/concepts.data";
import { TOPIC_COMPONENTS } from "../topicMapper";
import { BookOpen } from "lucide-react";
import { NotFoundBase } from "../../../pages/NotFoundBase";
import { Suspense } from "react";
import { TopicLoader } from "../../../components/common/TopicLoader";

export function TopicDetailScreen() {
  const { categoryId, topicId } = useParams<{categoryId: string; topicId: string}>();

  // Buscamos el nivel y tema correspondiente
  const levelData = CONCEPT_LEVELS_DATA.find((level) => level.id === categoryId);
  const topicData = levelData?.items.find((item) => item.id === topicId);

  if(!topicData) {
    return (
      <NotFoundBase
        title="Tema no encontrado"
        message="El concepto especificado no existe o la ruta es inválida."
      />
    )
  }

  // Componente mapeado
  const ComponentToRender = topicId ? TOPIC_COMPONENTS[topicId] :  null;

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        
        {/* Cabecera del Tema */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
                {topicData.title}
              </h1>
              <p className="mt-2 text-sm text-slate-400 sm:text-base leading-relaxed">
                {topicData.description}
              </p>
            </div>
          </div>
        </section>

        {/* Renderizado Dinámico del Componente */}
        <section>
          {ComponentToRender ? (
            <Suspense fallback={<TopicLoader/>}>
              <ComponentToRender />
            </Suspense>
          ) : (
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-8 text-center text-slate-400">
              <p className="font-medium text-slate-300 mb-1">Contenido en construcción 🚧</p>
              <p className="text-sm">Próximamente se agregará la explicación detallada para este tema.</p>
            </div>
          )}
        </section>

      </div>
    </div>
  );




}