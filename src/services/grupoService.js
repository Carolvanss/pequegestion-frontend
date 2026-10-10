// services/grupoService.js: comunicación con la API REST de AA3
// HU-03: datos simulados mientras la API no esté estable.
// Para conectarla: fetch("http://localhost:8080/api/grupos").then((respuesta) => respuesta.json())
export const listarGrupos = () =>
  Promise.resolve([
    { id: 1, nombre: "Sala Cuna" },
    { id: 2, nombre: "Párvulos A" },
    { id: 3, nombre: "Párvulos B" },
  ]);