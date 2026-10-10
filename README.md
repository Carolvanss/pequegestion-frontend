## Trazabilidad: historia de usuario → código

| Historia de usuario | Componente(s) | Archivo | Endpoint de la API (AA3) |
|---|---|---|---|
| HU-01 Ingresar al sistema | FormularioLogin · PaginaLogin | components/FormularioLogin.jsx | (validación local) |
| HU-02 Ver resumen y menú | PaginaInicio · TarjetaResumen · Encabezado | pages/PaginaInicio.jsx | GET /api/ninos |
| HU-03 Registrar niño | FormularioNino · PaginaRegistrarNino | components/FormularioNino.jsx | POST /api/ninos · GET /api/grupos |

Nota: por ahora los servicios de `src/services/` devuelven datos simulados mientras la API se estabiliza; los endpoints indicados son los que se conectarán.