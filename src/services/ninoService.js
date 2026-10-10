// services/ninoService.js: comunicación con la API REST de AA3
// HU-03: registro simulado mientras la API no esté estable.
// Para conectarla: fetch("http://localhost:8080/api/ninos", { method: "POST", ... })
export const registrarNino = (nino) => Promise.resolve(nino);