import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { PATHS } from "./paths";
import { PageLoader } from "../components/common/PageLoader";

// Importaciones de las paginas
const HomePage = lazy(() => import("../pages/Home/HomePage").then(m => ({default: m.HomePage})));
const CategoryPage = lazy(() => import("../pages/Home/CategoryPage").then(m => ({default: m.CategoryPage})));
const TopicDetailPage = lazy(() => import("../pages/Home/TopicDetailPage").then(m => ({default: m.TopicDetailPage})));

const ProjectOnePage = lazy(() => import("../pages/ProjectOne/ProjectOnePage").then(m => ({default: m.ProjectOnePage})))
const CryptoHero = lazy(() => import("../pages/Demo-Crypto/Presentation/CryptoHero").then(m => ({ default: m.CryptoHero })));
const PresentationJob = lazy(() => import("../pages/Demo-JobMatch/Presentation/PresentationJob").then(m => ({ default: m.PresentationJob })));
const SettingsPage = lazy(() => import("../pages/Settings/OptionsPage").then(m => ({ default: m.SettingsPage })));
const LoginPage = lazy(() => import("../pages/Login/LoginPage").then(m => ({ default: m.LoginPage })));

const CryptoLayout = lazy(() => import("../layouts/CryptoLayout/CryptoLayout").then(m => ({ default: m.CryptoLayout })));
const CryptoApp = lazy(() => import("../pages/Demo-Crypto/Main/CryptoApp").then(m => ({ default: m.CryptoApp })));
const CryptoMarketsPage = lazy(() => import("../pages/Demo-Crypto/Main/CryptoMarketsPage").then(m => ({ default: m.CryptoMarketsPage })));
const CryptoPortfolioPage = lazy(() => import("../pages/Demo-Crypto/Main/CryptoPortfolioPage").then(m => ({ default: m.CryptoPortfolioPage })));
const JobApp = lazy(() => import("../pages/Demo-JobMatch/Main/JobApp").then(m => ({ default: m.JobApp })));

const NotFoundBase = lazy(() => import("../pages/NotFoundBase").then(m => ({ default: m.NotFoundBase })));

export const router = createBrowserRouter([
  {
    // Grupo con el layout principal
    path: '/',
    element: (
      <Suspense fallback={<PageLoader/>}>
        <MainLayout/>
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<PageLoader/>}>
        <NotFoundBase/>,
      </Suspense>
    ),
    
    children: [
      {index: true, element: <HomePage/>},
      {path: PATHS.HOME_CATEGORY, element: <CategoryPage/>},
      {path: PATHS.HOME_TOPIC, element: <TopicDetailPage/>},
      
      {path: PATHS.PROJECT_ONE, element: <ProjectOnePage/>},
      {path: PATHS.DEMO_1, element: <CryptoHero/>},
      {path: PATHS.DEMO_2, element: <PresentationJob/>},
      {path: PATHS.SETTINGS, element: <SettingsPage/>},
    ]
  },

  // --- Pantallas completas para las demos ---
  {
    path: PATHS.CRYPTO_APP,
    element:(
      <Suspense fallback={<PageLoader/>}>
        <CryptoLayout/>
      </Suspense>
    ), 
    children: [
      {index: true, element: <CryptoApp/>},
      {path: PATHS.CRYPTO_MARKETS, element: <CryptoMarketsPage/>},
      {path: PATHS.CRYPTO_PORTFOLIO, element: <CryptoPortfolioPage/>}
    ]
  },
  {
    path: PATHS.JOB_MATCH_APP,
    element: (
      <Suspense fallback={<PageLoader/>}>
        <JobApp/>
      </Suspense>
    )
  },

  {
    // Rutas fuera del layout
    path: PATHS.LOGIN,
    element: (
      <Suspense fallback={<PageLoader />}>
        <LoginPage />
      </Suspense>
    )
  },

  // ----------------------
  {
    // Comodin para rutas no encontradas que estan fuera del layout
    path: "*",
    element: (
      <Suspense fallback={<PageLoader />}>
        <NotFoundBase />
      </Suspense>
    ),
  }
])
