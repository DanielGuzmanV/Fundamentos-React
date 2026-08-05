import { 
  Server, 
  Cpu, 
  Split, 
  ExternalLink, 
  ShieldAlert, 
  Workflow, 
  TestTube2, 
  Binary, 
  Hourglass, 
  Paintbrush,
  Rocket
} from "lucide-react";
import type { ConceptLevel } from "../../types/concept.types";

export const ADVANCED_CONCEPTS: ConceptLevel = {
  id: "advanced",
  title: "Conceptos Avanzados",
  icon: Rocket,
  description: "Arquitectura, ecosistema moderno y rendimiento extremo. Domina Server Components, estado global robusto, optimización interna y testing.",
  items: [
    {
      id: "ssr-ssg-nextjs",
      title: "1. SSR / SSG (Next.js)",
      description: "Renderizado en servidor (SSR) y generación estática (SSG) para optimizar el rendimiento inicial, SEO y la entrega de contenido.",
      icon: Server,
      level: "advanced",
    },
    {
      id: "server-components",
      title: "2. React Server Components (RSC)",
      description: "Ejecución exclusiva en servidor para reducir drásticamente el bundle enviado al cliente y acceder a recursos del backend de forma directa.",
      icon: Cpu,
      level: "advanced",
    },
    {
      id: "code-splitting-lazy",
      title: "3. Code Splitting & Lazy Loading",
      description: "División del código con React.lazy() y Suspense para cargar módulos bajo demanda y mejorar los tiempos de carga iniciales.",
      icon: Split,
      level: "advanced",
    },
    {
      id: "portals",
      title: "4. Portals (ReactDOM.createPortal)",
      description: "Renderizado de elementos hijos en un nodo del DOM completamente diferente fuera de la jerarquía del componente padre (Modales, Tooltips).",
      icon: ExternalLink,
      level: "advanced",
    },
    {
      id: "error-boundaries",
      title: "5. Límites de Error (Error Boundaries)",
      description: "Captura de errores no controlados en el árbol de componentes mediante clases para evitar el colapso total de la interfaz de usuario.",
      icon: ShieldAlert,
      level: "advanced",
    },
    {
      id: "estado-global",
      title: "6. Estado Global (Zustand vs Redux Toolkit)",
      description: "Gestión de estado a gran escala. Comparativa entre la simplicidad moderna de Zustand y el enfoque estandarizado de Redux.",
      icon: Workflow,
      level: "advanced",
    },
    {
      id: "testing",
      title: "7. Testing (Vitest & React Testing Library)",
      description: "Estrategias de pruebas unitarias y de integración enfocadas en el comportamiento del usuario mediante Vitest y RTL.",
      icon: TestTube2,
      level: "advanced",
    },
    {
      id: "internals-fiber",
      title: "8. Arquitectura Interna (React Fiber)",
      description: "Comprensión del motor de reconciliación de React: trabajo asíncrono por bloques, priorización de tareas y árbol de trabajo.",
      icon: Binary,
      level: "advanced",
    },
    {
      id: "suspense-avanzado",
      title: "9. Suspense para Streaming & Data Fetching",
      description: "Manejo declarativo de estados de carga asíncronos y streaming de HTML progresivo directamente desde el servidor.",
      icon: Hourglass,
      level: "advanced",
    },
    {
      id: "estilos-avanzados",
      title: "10. Arquitectura de Estilos en Producción",
      description: "Organización de estilos a escala usando Tailwind CSS con clases dinámicas avanzadas y aislamiento mediante CSS Modules.",
      icon: Paintbrush,
      level: "advanced",
    },
  ],
};