import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATHS } from "./paths";

const Home = () => <div>Home page - Bienvenido al repaso</div>;
const RepasoBasico = () => <div>Seccion: Conceptos Basicos</div>;
const Login = () => <div>Inciar sesion</div>;

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<Home/>}/>
        <Route path={PATHS.REPASO_BASICO} element={<RepasoBasico/>}/>
        <Route path={PATHS.LOGIN} element={<Login/>}/>
        
        <Route path="*" element={<div>404 - Pagina no encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  )
}



