// Boton: botón reutilizable con estilo según su función · HU-01, HU-02, HU-03
// Props: texto, variante ("principal" | "secundaria"), tipo ("button" | "submit"), alHacerClic()
function Boton({ texto, variante = "principal", tipo = "button", alHacerClic }) {
  const clase = variante === "principal" ? "btn-primario" : "btn-secundario";
  return (
    <button type={tipo} className={clase} onClick={alHacerClic}>
      {texto}
    </button>
  );
}

export default Boton;