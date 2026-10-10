import { useState } from "react";
import CampoFormulario from "./CampoFormulario";
import Boton from "./Boton";

// FormularioLogin: captura usuario y contraseña y valida que no estén vacíos · HU-01
// Props: alIngresar(usuario, contrasena) avisa al padre cuando los datos son válidos
function FormularioLogin({ alIngresar }) {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const manejarEnvio = (evento) => {
    // evita que el navegador recargue la página al enviar el formulario
    evento.preventDefault();
    if (!usuario.trim() || !contrasena.trim()) {
      setError("Ingrese usuario y contraseña");
      return;
    }
    setError("");
    alIngresar(usuario, contrasena);
  };

  return (
    <form className="tarjeta-login" onSubmit={manejarEnvio}>
      <h2>Ingresar</h2>
      <CampoFormulario
        etiqueta="Usuario"
        valor={usuario}
        alCambiar={(evento) => setUsuario(evento.target.value)}
      />
      <CampoFormulario
        etiqueta="Contraseña"
        tipo="password"
        valor={contrasena}
        alCambiar={(evento) => setContrasena(evento.target.value)}
        error={error}
      />
      <Boton texto="Ingresar" tipo="submit" />
    </form>
  );
}

export default FormularioLogin;