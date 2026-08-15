import { useLocation } from "react-router-dom"
import { MENU_ITEMS } from "../routes/navigation";
import { CONCEPT_LEVELS_DATA } from "../features/home/data/concepts.data";

export interface HeaderState {
  title: string;
  isSubscreen: boolean;
  breadcrumbs: { label: string; href?: string} [];
}

export const useHeaderNavigation = (): HeaderState => {
  const {pathname} = useLocation();

  // Coincidencia directa con el menu principal (Inicio, proyectos, demos, ajustes, etc)
  const mainMatch = MENU_ITEMS.find(item => item.href === location.pathname);
  if(mainMatch) {
    return {
      title: mainMatch?.name,
      isSubscreen: false,
      breadcrumbs: [{label: mainMatch?.name}]
    }
  };

  // Coincidencias dentro de los submenus demos
  for(const item of MENU_ITEMS) {
    if(item.isSubmenu && item.children) {
      const childMatch = item.children.find((child) => child.href === pathname)
      if(childMatch) {
        return {
          title: "Demos de Prueba",
          isSubscreen: false,
          breadcrumbs: [
            { label: item.name },
            { label: childMatch.name },
          ],
        };
      }
    }
  }

  // Deteccion de la ruta de aprendizaje
  if(pathname.startsWith("/learning")) {
    const segments = pathname.split("/").filter(Boolean);
    const categoryId = segments[1];
    const topicId = segments[2];

    const category = CONCEPT_LEVELS_DATA.find((level) => level.id === categoryId);
    const categoryTitle = category ? category.title : "Categoria";

    // Si estamos en la vista de categoria (/learning/basic, intermediate, etc)
    if(!topicId) {
      return {
        title: categoryTitle,
        isSubscreen: true, // <-- MÓVIL usará flecha ← Volver
        breadcrumbs: [     // <-- DESKTOP usará este camino
          { label: "Inicio", href: "/" },
          { label: categoryTitle },
        ],
      };
    }

    // Si estamos en la vista de Tema (/learning/basic/componentes)
    const topic = category?.items.find((item) => item.id === topicId);
    const topicTitle = topic ? topic.title : "Detalle";

    return {
      title: topicTitle,
      isSubscreen: true,
      breadcrumbs: [
        { label: "Inicio", href: "/" },
        { label: categoryTitle, href: `/learning/${categoryId}` },
        { label: topicTitle },
      ],
    };
  }

  // Fallback para rutas desconocidas
  return {
    title: "Dashboard",
    isSubscreen: false,
    breadcrumbs: [{ label: "Dashboard" }],
  }
}