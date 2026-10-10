// services/ninoService.js: comunicación con la API REST de AA3
const API_URL = "http://localhost:8080/api/ninos";

// HU-03: registrar un niño nuevo
export const registrarNino = (nino) =>
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nino),
  }).then((respuesta) => {
    if (!respuesta.ok) throw new Error("No se pudo registrar el niño");
    return respuesta.json();
  });