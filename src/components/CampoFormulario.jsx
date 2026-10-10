// CampoFormulario: etiqueta + campo (texto, contraseña, fecha o lista) + error · HU-01, HU-03
// Props: etiqueta, tipo, valor, alCambiar(evento), error, opciones (solo para listas)
function CampoFormulario({ etiqueta, tipo = "text", valor, alCambiar, error, opciones = [] }) {
  return (
    <div className="campo-formulario">
      <label>{etiqueta}</label>
      {tipo === "select" ? (
        <select value={valor} onChange={alCambiar}>
          <option value="">Seleccione...</option>
          {opciones.map((opcion) => (
            <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
          ))}
        </select>
      ) : (
        <input type={tipo} value={valor} onChange={alCambiar} />
      )}
      {/* el mensaje de error lo decide el formulario padre */}
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default CampoFormulario;