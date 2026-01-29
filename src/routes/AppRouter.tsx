import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { PATHS } from "./paths";

import { HomePage } from "../pages/Home/HomePage";
import { BasicConceptsPage } from "../pages/BasicConcepts/BasicConceptsPage";
import { IntermediateConceptsPage } from "../pages/IntermediateConcepts/IntermediateConceptsPage";
import { AdvancedConceptsPage } from "../pages/AdvancedConcepts/AdvancedConceptsPage";
import { ExamplesPage } from "../pages/Examples/ExamplesPage";
import { PruebasPage } from "../pages/Pruebas/PruebasPage";
import { LoginPage } from "../pages/Login/LoginPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout/>}>
          <Route path={PATHS.HOME} element={<HomePage/>}/>
          <Route path={PATHS.BASICOS} element={<BasicConceptsPage/>}/>
          <Route path={PATHS.INTERMEDIOS} element={<IntermediateConceptsPage/>}/>
          <Route path={PATHS.AVANZADOS} element={<AdvancedConceptsPage/>}/>
          <Route path={PATHS.EJEMPLOS} element={<ExamplesPage/>}/>
          <Route path={PATHS.PRUEBAS} element={<PruebasPage/>}/>
        </Route>

        <Route path={PATHS.LOGIN} element={<LoginPage/>}/>
        
        <Route path="*" element={<div>404 - Pagina no encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  )
}