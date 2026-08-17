# TV Explorer

TV Explorer es una aplicación front-end desarrollada con React que permite buscar series de televisión y consultar información como título, imagen, géneros, idioma, calificación, estado y descripción.

Los datos se obtienen desde la API pública de TVmaze.

## Funcionalidades planificadas

- Página principal con una descripción del proyecto.
- Página para buscar y mostrar series obtenidas desde la API.
- Navegación mediante React Router.
- Resultados presentados en tarjetas reutilizables.
- Visualización inicial de tres resultados.
- Botón para mostrar tres resultados adicionales.
- Ventana modal con información detallada.
- Preloader durante las solicitudes.
- Mensajes para búsquedas sin resultados y errores de conexión.
- Diseño responsivo para escritorio, tableta y dispositivos móviles.
- Clases CSS nombradas según la metodología BEM.

## API

El proyecto utiliza la [API pública de TVmaze](https://www.tvmaze.com/api).

Endpoint principal:

```text
https://api.tvmaze.com/search/shows?q=:query
```

Características relevantes:

- Devuelve datos en formato JSON.
- Los endpoints públicos utilizados no requieren una clave API.
- Admite CORS y puede utilizarse directamente desde el navegador.
- Permite al menos 20 solicitudes cada 10 segundos por dirección IP.
- Los datos se distribuyen bajo licencia CC BY-SA, por lo que TVmaze será acreditado dentro de la aplicación.

## Rutas

| Ruta | Descripción |
| --- | --- |
| `/` | Página principal con la presentación del proyecto |
| `/series` | Buscador y resultados obtenidos desde TVmaze |
| `*` | Página para rutas no encontradas |

## Tecnologías

- React
- Vite
- React Router
- JavaScript
- HTML semántico
- CSS
- Metodología BEM
- API REST de TVmaze
- Oxlint
- Git y GitHub

## Estructura planificada

```text
src/
├── components/
│   ├── About/
│   ├── App/
│   │   ├── App.css
│   │   └── App.jsx
│   ├── ErrorMessage/
│   ├── Footer/
│   ├── Header/
│   ├── Main/
│   ├── Navigation/
│   ├── NotFoundPage/
│   ├── NothingFound/
│   ├── Preloader/
│   ├── SearchForm/
│   ├── SearchResults/
│   ├── SeriesCard/
│   ├── SeriesModal/
│   ├── SeriesPage/
│   └── ShowMoreButton/
├── images/
├── utils/
├── vendor/
│   └── fonts/
├── index.css
└── main.jsx
```

Cada componente tendrá su propio directorio con sus archivos JSX y CSS. Los estilos de cada archivo CSS pertenecerán únicamente a su componente.

## Instalación y ejecución

Clona el repositorio:

```bash
git clone https://github.com/luisolea1/tv-explorer-frontend.git
```

Entra al proyecto:

```bash
cd tv-explorer-frontend
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

## Scripts disponibles

```bash
npm run dev
```

Inicia el servidor local de Vite.

```bash
npm run lint
```

Analiza los archivos del proyecto en busca de problemas.

```bash
npm run build
```

Genera la versión optimizada para producción.

```bash
npm run preview
```

Permite revisar localmente la versión de producción.



## Estado del proyecto

Proyecto en desarrollo en la rama [`stage-react-api`](https://github.com/luisolea1/tv-explorer-frontend/tree/stage-react-api).

## Autor

[Luis Olea](https://github.com/luisolea1)