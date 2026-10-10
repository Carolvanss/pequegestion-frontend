// services/resumenService.js: comunicación con la API REST de AA3
const API_URL = "http://localhost:8080/api";

// HU-02: consultar el resumen general del jardín.
// Por ahora devuelve datos simulados; cuando el endpoint exista se cambia por:
// fetch(`${API_URL}/resumen`).then((respuesta) => respuesta.json())
export const consultarResumen = () =>
  Promise.resolve({
    ninosRegistrados: 0,
    asistenciaHoy: 0,
    pagosPendientes: 0,
    informesGenerados: 0,
  });