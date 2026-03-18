import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { PATHS } from "./paths";

// Importaciones de las paginas
import { HomePage } from "../pages/Home/HomePage";
import { BasicConceptsPage } from "../pages/BasicConcepts/BasicConceptsPage";
import { IntermediateConceptsPage } from "../pages/IntermediateConcepts/IntermediateConceptsPage";
import { AdvancedConceptsPage } from "../pages/AdvancedConcepts/AdvancedConceptsPage";
import { ExamplesPage } from "../pages/Examples/ExamplesPage";
import { PruebasPage } from "../pages/Pruebas/PruebasPage";
import { LoginPage } from "../pages/Login/LoginPage";

export const router = createBrowserRouter([
  {
    // Grupo con el layout principal
    path: '/',
    element: <MainLayout/>,
    errorElement: <div>404 - Pagina no encontrada</div>,
    children: [
      {index: true, element: <HomePage/>},
      {path: PATHS.BASICOS, element: <BasicConceptsPage/>},
      {path: PATHS.INTERMEDIOS, element: <IntermediateConceptsPage/>},
      {path: PATHS.AVANZADOS, element: <AdvancedConceptsPage/>},
      {path: PATHS.EJEMPLOS, element: <ExamplesPage/>},
      {path: PATHS.PRUEBAS, element: <PruebasPage/>},

    ]
  },

  {
    // Rutas fuera del layout
    path: PATHS.LOGIN,
    element: <LoginPage/>
  },

  {
    // Comodin para rutas no encontradas que estan fuera del layout
    path: "*",
    element: <Navigate to="/" replace/>
  }
])
