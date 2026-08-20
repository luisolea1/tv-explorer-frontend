# TV Explorer

TV Explorer es una aplicación front-end desarrollada con React que permite buscar series de televisión y consultar información como título, imagen, géneros, idioma, calificación, estado y descripción.

Los datos se obtienen desde la API pública de TVmaze.

La aplicación está disponible en:

[TV Explorer en Vercel](https://tv-explorer-frontend.vercel.app/)



## Funcionalidades

- Página principal con una descripción del proyecto.
- Buscador de series conectado con la API de TVmaze.
- Navegación entre páginas mediante React Router.
- Resultados presentados en tarjetas reutilizables.
- Visualización inicial de tres resultados.
- Carga progresiva de tres resultados adicionales.
- Ventana modal con información detallada.
- Cierre del modal mediante el botón, la superposición o la tecla Escape.
- Preloader durante las solicitudes a la API.
- Mensajes para búsquedas sin resultados y errores de conexión.
- Página personalizada para rutas no encontradas.
- Diseño responsivo para escritorio, tableta y dispositivos móviles.
- Fuentes locales conectadas mediante @font-face.
- Iconos SVG reutilizables.
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

## Estructura

```text
├── public/
│   └── favicon.svg
└── src/
    ├── components/
    │   ├── About/
    │   ├── App/
    │   │   ├── App.css
    │   │   └── App.jsx
    │   ├── ErrorMessage/
    │   ├── Footer/
    │   ├── Header/
    │   ├── Icon/
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
    │   ├── config.js
    │   └── tvMazeApi.js
    ├── vendor/
    │   ├── fonts/
    │   └── fonts.css
    ├── index.css
    └── main.jsx
```

Cada componente tiene su propio directorio con sus archivos JSX y CSS. Los estilos de cada archivo CSS pertenecerán únicamente a su componente.

## Instalación y ejecución

Clona la rama del proyecto:

```bash
git clone --branch stage-react-api https://github.com/luisolea1/tv-explorer-frontend.git
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

## Créditos

Los datos de las series son proporcionados por la API de TVmaze.
