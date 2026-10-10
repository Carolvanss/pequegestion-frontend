import { useNavigate } from "react-router-dom";

// Encabezado: nombre del sistema y menú de navegación fijo · HU-02
// Props: opcionActiva (texto de la opción resaltada)
const OPCIONES_MENU = [
  { texto: "Inicio", ruta: "/inicio" },
  { texto: "Niños", ruta: "/registrar-nino" },
  { texto: "Grupos", ruta: "/grupos" },
  { texto: "Asistencia", ruta: "/asistencia" },
  { texto: "Pagos", ruta: "/pagos" },
  { texto: "Informes", ruta: "/informes" },
];

function Encabezado({ opcionActiva }) {
  const irA = useNavigate();

  return (
    <header className="encabezado">
      <h1>PequeGestión</h1>
      <nav className="menu-navegacion">
        {OPCIONES_MENU.map((opcion) => (
          <button
            key={opcion.texto}
            className={opcion.texto === opcionActiva ? "activa" : ""}
            onClick={() => irA(opcion.ruta)}
          >
            {opcion.texto}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Encabezado;