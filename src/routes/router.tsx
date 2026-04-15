import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { PATHS } from "./paths";

// Importaciones de las paginas
import { HomePage } from "../pages/Home/HomePage";
import { CryptoHero } from "../pages/Demo-Crypto/Presentation/CryptoHero";
import { PresentationJob } from "../pages/Demo-JobMatch/Presentation/PresentationJob";
import { SettingsPage } from "../pages/Settings/OptionsPage";
import { LoginPage } from "../pages/Login/LoginPage";
import { ProjectOnePage } from "../pages/ProjectOne/ProjectOnePage";
import { CryptoApp } from "../pages/Demo-Crypto/Main/CryptoApp";
import { JobApp } from "../pages/Demo-JobMatch/Main/JobApp";
import { CryptoLayout } from "../layouts/CryptoLayout/CryptoLayout";
import { CryptoMarketsPage } from "../pages/Demo-Crypto/Main/CryptoMarketsPage";
import { CryptoPortfolioPage } from "../pages/Demo-Crypto/Main/CryptoPortfolioPage";

export const router = createBrowserRouter([
  {
    // Grupo con el layout principal
    path: '/',
    element: <MainLayout/>,
    errorElement: <div>404 - Pagina no encontrada</div>,
    children: [
      {index: true, element: <HomePage/>},
      {path: PATHS.PROJECT_ONE, element: <ProjectOnePage/>},
      {path: PATHS.DEMO_1, element: <CryptoHero/>},
      {path: PATHS.DEMO_2, element: <PresentationJob/>},
      {path: PATHS.SETTINGS, element: <SettingsPage/>},

    ]
  },

  // --- Pantallas completas para las demos ---
  {
    path: PATHS.CRYPTO_APP,
    element: <CryptoLayout/>,
    children: [
      {index: true, element: <CryptoApp/>},
      {path: PATHS.CRYPTO_MARKETS, element: <CryptoMarketsPage/>},
      {path: PATHS.CRYPTO_PORTFOLIO, element: <CryptoPortfolioPage/>}
    ]
  },
  {
    path: PATHS.JOB_MATCH_APP,
    element: <JobApp/>
  },

  {
    // Rutas fuera del layout
    path: PATHS.LOGIN,
    element: <LoginPage/>,
  },

  // ----------------------
  {
    // Comodin para rutas no encontradas que estan fuera del layout
    path: "*",
    element: <Navigate to="/" replace/>
  }
])
