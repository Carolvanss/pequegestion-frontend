// services/grupoService.js: comunicación con la API REST de AA3
const API_URL = "http://localhost:8080/api/grupos";

// HU-03: consultar los grupos para llenar la lista del formulario
export const listarGrupos = () =>
  fetch(API_URL).then((respuesta) => respuesta.json());