import { useNavigate } from "react-router-dom";
import FormularioLogin from "../components/FormularioLogin";

// PaginaLogin: pantalla de acceso, solo muestra el formulario · HU-01
function PaginaLogin() {
  const irA = useNavigate();

  // por ahora solo valida los campos y pasa al inicio; luego se conecta con la API
  const manejarIngreso = () => irA("/inicio");

  return <FormularioLogin alIngresar={manejarIngreso} />;
}

export default PaginaLogin;