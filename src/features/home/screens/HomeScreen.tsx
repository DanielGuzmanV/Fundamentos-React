import { useNavigate } from "react-router-dom";
import { ConceptCard } from "../components/ConceptCard";
import { HeroSection } from "../components/HeroSection";
import { CONCEPT_LEVELS_DATA } from "../data/concepts.data";

export function HomeScreen () {
  const navigate = useNavigate();

  const handleSelectLevel = (levelId: string) => {
    navigate(`/learning/${levelId}`)
    console.log("Nivel seleccionado (próximamente navegará):", levelId);
  };

  // Cálculo rápido del total de temas
  const totalConcepts = CONCEPT_LEVELS_DATA.reduce(
    (acc, level) => acc + level.items.length, 0
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* HERO SECTION */}
        <HeroSection totalConcepts={totalConcepts}/>

        {/* GRID DE NIVELES (CARDS) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONCEPT_LEVELS_DATA.map((level) => (
            <ConceptCard
              key={level.id}
              levelData={level}
              onSelect={handleSelectLevel}
            />
          ))}
        </section>

      </div>
    </div>
  );
};