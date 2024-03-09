# Movies App

Este proyecto es una demo de una plataforma de streaming, construida usando React, TypeScript, Vite y Zustand. Su objetivo es replicar una experiencia de usuario similar a la de servicios de streaming populares, mostrando técnicas modernas de desarrollo web.

## ¿Por qué este proyecto?

El objetivo era retarme a mi mismos creando una aplicación compleja, integrando una solución de gestión de estados que fuera eficiente y fácil de usar. Elegí Zustand en lugar de Context API o Redux por su sencillez, rendimiento y configuración mínima, lo que hizo que mi gestión de estados fuera más directa y mi código más limpio.

## Características principales

- **Autenticación de usuarios**: Utiliza una API simulada para la demostración de autenticación de usuarios.
- **Contenido dinámico**: Las películas y categorías se cargan y muestran dinámicamente.
- **Gestión de estados**: Zustand se utiliza para la gestión global del estado a través de la aplicación.
- **Diseño responsivo**: Adaptado para proporcionar una experiencia fluida en cualquier dispositivo.
- **Enrutamiento**: Utiliza React Router para componentes de navegación y comportamiento SPA.

## Tecnologías

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Router](https://reactrouter.com/)

## Empecemos!!!!

Clona el proyecto, instala las dependencias e inicia el servidor Vite:

```bash
git clone https://github.com/VidBarbosa/moviesApp.git
cd moviesapp
npm install
npm run dev
```

## Cuentas Demo
No dudes en utilizar estas cuentas para explorar la aplicación:

**Admin Account:**

Email: admin@mail.com <br />
Password: admin123

**User Accounts:**

Email: mariane.mourasouza@gmail.com <br />
Password: mariane123

Email: john@mail.com <br />
Password: changeme


## Despliegue
Este proyecto está en contenedores utilizando Docker y desplegado en Google Cloud Platform (GCP) para una infraestructura en la nube robusta y escalable.

## Disclaimer
Este proyecto es sólo para fines de demostración y no está destinado a uso comercial. Todos los derechos de autor pertenecen a Disney, y se hace puramente para mostrar las técnicas de desarrollo web como una pieza de cartera.
