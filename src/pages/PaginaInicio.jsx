import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TarjetaResumen from "../components/TarjetaResumen";
import Boton from "../components/Boton";
import { consultarResumen } from "../services/resumenService";

// PaginaInicio: carga el resumen general y lo muestra en tarjetas · HU-02
function PaginaInicio() {
  const irA = useNavigate();
  const [resumen, setResumen] = useState(null);

  // al montar la página, carga los datos del resumen
  useEffect(() => {
    consultarResumen().then(setResumen);
  }, []);

  if (!resumen) return <p>Cargando...</p>;

  return (
    <main>
      <div className="tarjetas-resumen">
        <TarjetaResumen icono="👶" valor={resumen.ninosRegistrados} etiqueta="Niños registrados" />
        <TarjetaResumen icono="✅" valor={resumen.asistenciaHoy} etiqueta="Asistencia de hoy" />
        <TarjetaResumen icono="💰" valor={resumen.pagosPendientes} etiqueta="Pagos pendientes" />
        <TarjetaResumen icono="📄" valor={resumen.informesGenerados} etiqueta="Informes generados" />
      </div>
      <Boton texto="+ Registrar niño" alHacerClic={() => irA("/registrar-nino")} />
    </main>
  );
}

export default PaginaInicio;