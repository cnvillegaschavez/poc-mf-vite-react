# Micro-Frontends Project

Este proyecto implementa una arquitectura de micro-frontends utilizando Vite, React, y TypeScript.

## Estructura del Proyecto

El proyecto consta de tres partes principales:

1. `auth-remote`: Micro-frontend para autenticación
2. `products-remote`: Micro-frontend para productos
3. `online-shopping-host`: Aplicación host que integra los micro-frontends

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm (normalmente viene con Node.js)

## Configuración

Antes de ejecutar el proyecto, asegúrate de instalar las dependencias en cada uno de los directorios del proyecto:

```bash
cd auth-remote && npm install
cd ../products-remote && npm install
cd ../online-shopping-host && npm install
```

## Ejecución del Proyecto

Para ejecutar el proyecto completo, necesitas iniciar cada parte en una terminal separada:

### Terminal 1: Auth Remote

```bash
cd auth-remote
npm run build && npm run preview
```

### Terminal 2: Products Remote

```bash
cd products-remote
npm run build && npm run preview
```

### Terminal 3: Online Shopping Host

```bash
cd online-shopping-host
npm run dev
```

## Acceso a la Aplicación

Una vez que todos los servicios estén en ejecución, puedes acceder a la aplicación principal en tu navegador:

```
http://localhost:5000
```

## Notas Adicionales

- Asegúrate de que los puertos 5000, 5001, y 5002 estén disponibles en tu sistema.
- Si encuentras algún problema, verifica que todas las dependencias estén instaladas correctamente y que no haya conflictos de versiones.

## Solución de Problemas

Si encuentras algún problema al ejecutar el proyecto, aquí hay algunos pasos que puedes seguir:

1. Asegúrate de que todos los servicios estén corriendo en los puertos correctos.
2. Verifica que no haya errores en la consola del navegador o en las terminales donde están corriendo los servicios.
3. Intenta limpiar la caché del navegador o usar una ventana de incógnito.

Si los problemas persisten, por favor abre un issue en este repositorio con una descripción detallada del problema.