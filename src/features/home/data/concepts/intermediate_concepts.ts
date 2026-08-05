import {  
  Layers, 
  Globe, 
  Sparkles, 
  FileText, 
  Palette, 
  RefreshCw, 
  Compass, 
  Gauge, 
  CloudDownload,
  Layers3,
  LucideArrowUpRightFromSquare
} from "lucide-react";
import type { ConceptLevel } from "../../types/concept.types";

export const INTERMEDIATE_CONCEPTS: ConceptLevel = {
  id: "intermediate",
  title: "Conceptos Intermedios",
  icon: Layers3,
  description: "Eleva la calidad de tu código. Aprende a gestionar estados compartidos, optimizar renderizados, manejar formularios y abstraer lógica reutilizable.",
  items: [
    {
      id: "lifting-state-up",
      title: "1. Elevación del Estado (Lifting State Up)",
      description: "Patrón clave para compartir información entre componentes hermanos moviendo el estado al ancestro común más cercano.",
      icon: LucideArrowUpRightFromSquare,
      level: "intermediate",
    },
    {
      id: "hooks-adicionales",
      title: "2. Hooks de Control (useRef, useContext, useReducer)",
      description: "Acceso al DOM y valores persistentes sin re-renderizado (useRef), inyección de dependencias (useContext) y estados complejos (useReducer).",
      icon: Layers,
      level: "intermediate",
    },
    {
      id: "context-api",
      title: "3. Context API",
      description: "Mecanismo nativo para evitar el Prop Drilling extremo y proveer datos globales simples como temas visuales o la sesión de usuario.",
      icon: Globe,
      level: "intermediate",
    },
    {
      id: "custom-hooks",
      title: "4. Custom Hooks",
      description: "El estándar para abstraer, aislar y reutilizar lógica de negocio con estado propio a lo largo de toda la aplicación.",
      icon: Sparkles,
      level: "intermediate",
    },
    {
      id: "manejo-formularios",
      title: "5. Gestión de Formularios",
      description: "Comparativa entre control manual tradicional (onChange/useState) y el uso de React Hook Form para validaciones y alto rendimiento.",
      icon: FileText,
      level: "intermediate",
    },
    {
      id: "estilos-react",
      title: "6. Ecosistema de Estilos",
      description: "Estrategias para dar estilo: CSS Modules (aislamiento), Tailwind CSS (utility-first), Librerías UI (Shadcn/MUI) y Grid Systems.",
      icon: Palette,
      level: "intermediate",
    },
    {
      id: "ciclo-de-vida",
      title: "7. Ciclo de Vida: Legado vs Moderno",
      description: "Equivalencias entre métodos de clase (componentDidMount, etc.) y la sincronización declarativa moderna con useEffect.",
      icon: RefreshCw,
      level: "intermediate",
    },
    {
      id: "routing",
      title: "8. Enrutamiento (React Router v6+ & TanStack Router)",
      description: "Navegación en Single Page Applications (SPA), rutas dinámicas, layouts anidados, loaders y la tendencia hacia TanStack Router.",
      icon: Compass,
      level: "intermediate",
    },
    {
      id: "optimizacion-rendimiento",
      title: "9. Optimización Manual (memo, useMemo, useCallback)",
      description: "Evitar renders innecesarios y memorizar cálculos o funciones. Comportamiento actual y cómo cambiará con React Compiler.",
      icon: Gauge,
      level: "intermediate",
    },
    {
      id: "data-fetching-tanstack",
      title: "10. Data Fetching Moderno (TanStack Query)",
      description: "Gestión avanzada del estado del servidor: almacenamiento en caché, re-intentos automáticos, deduplicación y estados de carga.",
      icon: CloudDownload,
      level: "intermediate",
    },
  ],
};