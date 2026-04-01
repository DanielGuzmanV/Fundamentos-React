import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { PATHS } from "./paths";

// Importaciones de las paginas
import { HomePage } from "../pages/Home/HomePage";
import { BasicConceptsPage } from "../pages/BasicConcepts/BasicConceptsPage";
import { IntermediateConceptsPage } from "../pages/IntermediateConcepts/IntermediateConceptsPage";
import { SettingsPage } from "../pages/Settings/OptionsPage";
import { LoginPage } from "../pages/Login/LoginPage";
import { ProjectOnePage } from "../pages/ProjectOne/ProjectOnePage";

export const router = createBrowserRouter([
  {
    // Grupo con el layout principal
    path: '/',
    element: <MainLayout/>,
    errorElement: <div>404 - Pagina no encontrada</div>,
    children: [
      {index: true, element: <HomePage/>},
      {path: PATHS.PROJECT_ONE, element: <ProjectOnePage/>},
      {path: PATHS.DEMO_1, element: <BasicConceptsPage/>},
      {path: PATHS.DEMO_2, element: <IntermediateConceptsPage/>},
      {path: PATHS.SETTINGS, element: <SettingsPage/>},

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
