import { useState } from "react";
import CampoFormulario from "./CampoFormulario";
import Boton from "./Boton";

// FormularioNino: captura nombre, fecha de nacimiento, acudiente y grupo · HU-03
// Props: grupos (lista para el campo de grupo), alGuardar(nino), alCancelar()
function FormularioNino({ grupos, alGuardar, alCancelar }) {
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [acudiente, setAcudiente] = useState("");
  const [grupo, setGrupo] = useState("");
  const [errores, setErrores] = useState({});

  const manejarEnvio = (evento) => {
    // evita que el navegador recargue la página al enviar
    evento.preventDefault();

    const nuevosErrores = {};
    if (!nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio";
    if (!fechaNacimiento) nuevosErrores.fechaNacimiento = "La fecha es obligatoria";
    if (!acudiente.trim()) nuevosErrores.acudiente = "El acudiente es obligatorio";
    if (!grupo) nuevosErrores.grupo = "Seleccione un grupo";

    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

   alGuardar({ nombre, fechaNacimiento, nombreAcudiente: acudiente, grupo: { id: grupo } });

  return (
    <form className="formulario-nino" onSubmit={manejarEnvio}>
      <h2>Registrar niño</h2>
      <CampoFormulario
        etiqueta="Nombre completo"
        valor={nombre}
        alCambiar={(evento) => setNombre(evento.target.value)}
        error={errores.nombre}
      />
      <CampoFormulario
        etiqueta="Fecha de nacimiento"
        tipo="date"
        valor={fechaNacimiento}
        alCambiar={(evento) => setFechaNacimiento(evento.target.value)}
        error={errores.fechaNacimiento}
      />
      <CampoFormulario
        etiqueta="Acudiente"
        valor={acudiente}
        alCambiar={(evento) => setAcudiente(evento.target.value)}
        error={errores.acudiente}
      />
      <CampoFormulario
        etiqueta="Grupo"
        tipo="select"
        valor={grupo}
        alCambiar={(evento) => setGrupo(evento.target.value)}
        error={errores.grupo}
        opciones={grupos}
      />
      <div className="botones-formulario">
        <Boton texto="Cancelar" variante="secundaria" alHacerClic={alCancelar} />
        <Boton texto="Guardar" tipo="submit" />
      </div>
    </form>
  );
}

export default FormularioNino;