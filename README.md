# Luxury Chantes — Catálogo de Apartamentos de Lujo
Proyecto desarrollado para el curso **Desarrollo de Software IV** (II Ciclo 2026). Consiste en una aplicación web interactiva en React y TypeScript para la exploración de un catálogo de propiedades exclusivas en Costa Rica.

# Autores
SEBASTIAN VILLEGAS ARAYA
ARWY ANTONIO ZAMORA SEGURA

# Características Principales
- **Catálogo y Fetch:** Carga de al menos 20 propiedades desde una fuente externa con manejo de estados (carga, error y lista vacía) y paginación.
- **Filtros Avanzados y Búsqueda:** Filtrado dinámico por nombre, ubicación, precio máximo y cantidad de habitaciones mediante Hooks personalizados.
- **Sistema de Favoritos:** Gestión de propiedades favoritas utilizando `Context API` y persistencia con `localStorage`.
- **Rutas y Navegación:** Navegación robusta con `React Router`, menú responsivo, vistas de detalle y manejo de ruta 404.
- **Formulario de Contacto:** Formulario controlado con validaciones y campos prellenados desde el detalle de la propiedad.
- **Diseño Responsivo:** Estilos CSS propios adaptados para dispositivos móviles, tabletas y computadoras, asegurando una correcta jerarquía visual y accesibilidad.
- **Versión Móvil (Capacitor):** Configuración e integración nativa para Android (`app-debug.apk`).

# Tecnologías Utilizadas
- **React** con **TypeScript**
- **Vite** (Build tool)
- **React Router DOM**
- **Capacitor** (para despliegue en Android)
- **CSS Modules / Estilos personalizados**

# Instalación y Ejecución Local
Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina:

  1. **Clonar el repositorio:**
      git clone https://github.com/Mirwar8/Proyecto1_Desarrollo_Software_4.git

  2. **Instalar las dependencias:**
      npm install

  3. **Ejecutar en modo desarrollador**
      npm run dev

  4. **Compilar para producción**
      npm run build

# Despligue y Android
  **URL en Producción (Vercel):** https://luxurychantes.vercel.app/

  **Aplicación Móvil:** El proyecto incluye la plataforma de Capacitor configurada para Android, con su respectivo archivo ejecutable de prueba (app-debug.apk).