# React App - Proyecto Frontend
Este proyecto es una aplicación frontend desarrollada con React, utilizando Vite como herramienta de compilación y TypeScript como lenguaje. Además, se han integrado dependencias como Axios para la gestión de peticiones HTTP y Bootstrap para el estilo visual.

## Requisitos previos
Antes de comenzar, asegúrate de tener instalados los siguientes programas:

Node.js (v14 o superior)
npm o Yarn (según tu preferencia)

## Instalación
Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio
Clona este repositorio en tu máquina local usando git:

```
git clone https://github.com/nsrc008/FrontProductsRc.git
cd nombre-del-proyecto
```

### 2. Instalar dependencias
Una vez en la carpeta del proyecto, instala las dependencias del proyecto ejecutando:
```npm install```
O si prefieres Yarn:
```yarn install```

### 3. Configuración del entorno
Si es necesario, crea un archivo .env en la raíz del proyecto y configura las variables de entorno que necesite la aplicación (por ejemplo, URLs de APIs, claves secretas, etc.).

### 4. Ejecutar en modo de desarrollo
Para iniciar la aplicación en modo de desarrollo, utiliza el siguiente comando:
```npm run dev```
Esto levantará la aplicación en http://localhost:3000/.

### 5. Generar la versión de producción
Para generar los archivos estáticos de producción, ejecuta:
```npm run build```
Los archivos generados se almacenarán en la carpeta dist/, listos para ser desplegados en un servidor.

### 6. Previsualizar la versión de producción
Si quieres ver cómo se verá la aplicación en producción, puedes ejecutar:
```npm run preview```
## Scripts Disponibles
En el archivo package.json, puedes encontrar los siguientes scripts:

```
npm run dev: Inicia el servidor de desarrollo.
npm run start: Inicia el servidor en el puerto 3000.
npm run build: Genera la versión de producción.
npm run preview: Previsualiza la versión de producción.
npm run lint: Ejecuta el linter para comprobar errores de código.
```
## Dependencias
Este proyecto utiliza las siguientes dependencias principales:

* React: Biblioteca de JavaScript para construir interfaces de usuario.
* React DOM: Maneja el DOM para aplicaciones React.
* Axios: Cliente HTTP para realizar peticiones a APIs.
* Bootstrap: Framework CSS para estilos y componentes visuales.

## Dependencias de desarrollo
* Vite: Herramienta de desarrollo rápida para React.
* TypeScript: Superconjunto de JavaScript que añade tipos estáticos.
* ESLint: Herramienta de análisis estático para mantener la calidad del código.
* @vitejs/plugin-react: Plugin oficial de Vite para React.

## Estilo y Linting
El proyecto está configurado con ESLint para garantizar la calidad del código. Puedes ejecutar el siguiente comando para comprobar si hay errores de linting:
```npm run lint```

## Despliegue
Para desplegar la aplicación en un entorno de producción, sigue estos pasos:

1. Genera la versión de producción ejecutando npm run build.
2. Sube el contenido de la carpeta dist/ a tu servidor web o plataforma de hosting de tu elección.

## Contribución
Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y realiza un commit (git commit -am 'Agrega nueva funcionalidad').
4. Empuja tu rama (git push origin feature/nueva-funcionalidad).
5. Abre un Pull Request.