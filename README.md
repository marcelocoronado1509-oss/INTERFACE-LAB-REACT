# Interface Lab

Landing page educativa sobre tipos de interfaces, prototipado y diseño responsive. Proyecto creado con React, TypeScript, Vite y Tailwind CSS a partir del starter facilitado.

## Requisitos

- Node.js 20 LTS o superior
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

Vite muestra la URL local en la terminal (por defecto, `http://localhost:5173`).

## Verificación y compilación

```bash
npm run build
npm run preview
```

La compilación de producción se genera en `dist/`.

## Diseño responsive

- Escritorio: navegación horizontal y tarjetas en tres columnas.
- Tablet: contenido reorganizado con rejilla de dos/una columna.
- Móvil: menú desplegable, bloques en una columna y controles táctiles.
- La portada usa `min-height: calc(100svh - 73px)` para ocupar el alto visible sin desbordarse en navegadores móviles.
- El selector de la sección Responsive permite comparar maquetas de escritorio, tablet y móvil.

## Despliegue en Vercel

1. Publica este proyecto en un repositorio Git (GitHub, GitLab o Bitbucket).
2. En [Vercel](https://vercel.com/new), importa el repositorio y selecciona `interface-lab-react-tailwind` como **Root Directory** si el repositorio contiene más carpetas.
3. Usa **Framework Preset: Vite**, **Build Command: `npm run build`** y **Output Directory: `dist`**. La instalación predeterminada es `npm install`.
4. Selecciona **Deploy**. Vercel ejecutará la compilación y mostrará la URL pública cuando termine.
5. Para publicar cambios posteriores, haz push a la rama conectada; Vercel crea una nueva versión automáticamente.

No se ha publicado una URL desde este entorno: el despliegue necesita una cuenta Vercel y acceso al repositorio de destino.
