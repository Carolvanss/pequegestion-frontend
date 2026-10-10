import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormularioNino from "../components/FormularioNino";
import { listarGrupos } from "../services/grupoService";
import { registrarNino } from "../services/ninoService";

// PaginaRegistrarNino: pantalla de registro, carga los grupos y guarda el niño · HU-03
function PaginaRegistrarNino() {
  const irA = useNavigate();
  const [grupos, setGrupos] = useState([]);
  const [mensaje, setMensaje] = useState("");

  // al montar la página, carga los grupos; si la API no responde, deja la lista vacía
  useEffect(() => {
    listarGrupos().then(setGrupos).catch(() => setGrupos([]));
  }, []);

  const manejarGuardar = async (nino) => {
    try {
      await registrarNino(nino);
      setMensaje("Niño registrado correctamente");
      irA("/inicio");
    } catch {
      setMensaje("No se pudo registrar el niño. Intente de nuevo.");
    }
  };

  return (
    <main>
      <FormularioNino
        grupos={grupos}
        alGuardar={manejarGuardar}
        alCancelar={() => irA("/inicio")}
      />
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </main>
  );
}

export default PaginaRegistrarNino;