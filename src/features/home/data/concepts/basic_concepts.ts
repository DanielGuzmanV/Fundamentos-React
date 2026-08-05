import { ArrowRightLeft, BookOpen, Boxes, Code2, Cpu, Database, GitFork, ListOrdered, MousePointerClick, Webhook, Zap } from "lucide-react";
import type { ConceptLevel } from "../../types/concept.types";

export const BASIC_CONCEPTS: ConceptLevel = {
  id: "basic",
  title: "Conceptos Básicos",
  icon: BookOpen,
  description: "Los cimientos indispensables de React. Aprende a crear componentes, manejar estados y controlar el flujo de la aplicación.",
  items: [
    {
      id: "jsx",
      title: "1. JSX (JavaScript XML)",
      description: "Sintaxis fundamental que permite escribir HTML dentro de JavaScript con llaves {}, expresiones e inmutabilidad.",
      icon: Code2,
      level: "basic",
    },
    {
      id: "componentes",
      title: "2. Componentes (Funcionales vs Clase)",
      description: "Creación de bloques reusables. Comparativa entre funciones modernas y componentes de clase basados en ciclo de vida legado.",
      icon: Boxes,
      level: "basic",
    },
    {
      id: "props",
      title: "3. Props (Propiedades)",
      description: "Paso de parámetros unidireccional de padre a hijo, prop drilling, valores por defecto y typings estrictos.",
      icon: ArrowRightLeft,
      level: "basic",
    },
    {
      id: "estado",
      title: "4. Estado Local (State)",
      description: "Concepto de reactividad. Cómo React detecta cambios en la memoria del componente y programa re-renderizados.",
      icon: Database,
      level: "basic",
    },
    {
      id: "eventos",
      title: "5. Manejo de Eventos",
      description: "Captura de interacciones del usuario (onClick, onChange, onSubmit), sintaxis camelCase y SyntheticEvents.",
      icon: MousePointerClick,
      level: "basic",
    },
    {
      id: "renderizado-condicional",
      title: "6. Renderizado Condicional",
      description: "Control de visibilidad e interfaz usando operadores ternarios, operador lógico && y sentencias de guardias.",
      icon: GitFork,
      level: "basic",
    },
    {
      id: "listas-y-keys",
      title: "7. Listas y Keys",
      description: "Renderizado dinámico de arreglos mediante .map() y el uso correcto de keys únicas para el algoritmo de reconciliación.",
      icon: ListOrdered,
      level: "basic",
    },
    {
      id: "hooks-basicos",
      title: "8. Hooks Esenciales (useState, useEffect & React 19)",
      description: "Manejo del estado reactivo, efectos secundarios de conexión externa y la introducción a useActionState y useOptimistic.",
      icon: Webhook,
      level: "basic",
    },
    {
      id: "herramientas-build",
      title: "9. Entorno de Desarrollo (Vite vs CRA)",
      description: "Por qué Vite sustituyó a CRA: bundling rápido mediante ES Modules, HMR instantáneo y estructura del proyecto moderno.",
      icon: Zap,
      level: "basic",
    },
    {
      id: "virtual-dom",
      title: "10. React DOM & Virtual DOM",
      description: "Cómo funciona el proceso de reconciliación entre la memoria y la pantalla real, y el futuro con el React Compiler.",
      icon: Cpu,
      level: "basic",
    },
  ]
}