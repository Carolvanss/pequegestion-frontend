// TarjetaResumen: muestra un dato del resumen con ícono, número y etiqueta · HU-02
// Props: icono, valor, etiqueta
function TarjetaResumen({ icono, valor, etiqueta }) {
  return (
    <div className="tarjeta-resumen">
      <span className="icono">{icono}</span>
      <strong>{valor}</strong>
      <p>{etiqueta}</p>
    </div>
  );
}

export default TarjetaResumen;