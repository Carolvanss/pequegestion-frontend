import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Encabezado from "./components/Encabezado";
import PaginaLogin from "./pages/PaginaLogin";
import PaginaInicio from "./pages/PaginaInicio";
import PaginaRegistrarNino from "./pages/PaginaRegistrarNino";
import "./App.css";

// Contenido: define las rutas y muestra el Encabezado en las pantallas internas
function Contenido() {
  const ubicacion = useLocation();
  const esLogin = ubicacion.pathname === "/";
  const opcionActiva = ubicacion.pathname === "/registrar-nino" ? "Niños" : "Inicio";

  return (
    <>
      {!esLogin && <Encabezado opcionActiva={opcionActiva} />}
      <Routes>
        <Route path="/" element={<PaginaLogin />} />
        <Route path="/inicio" element={<PaginaInicio />} />
        <Route path="/registrar-nino" element={<PaginaRegistrarNino />} />
        <Route path="*" element={<Navigate to="/inicio" />} />
      </Routes>
    </>
  );
}

// App: raíz de la aplicación con el enrutador
function App() {
  return (
    <BrowserRouter>
      <Contenido />
    </BrowserRouter>
  );
}

export default App;