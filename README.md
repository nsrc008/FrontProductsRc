# React App - Proyecto Frontend

Este proyecto es una aplicación frontend desarrollada con React y Vite, que utiliza TypeScript. Se incluye un Dockerfile para facilitar el despliegue de la aplicación en contenedores Docker.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- Node.js (v14 o superior)
- npm o Yarn (según tu preferencia)
- Docker
- Docker Compose

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

`npm install`

O si prefieres Yarn:

`yarn install`

### 3. Configuración del entorno

Si es necesario, crea un archivo .env en la raíz del proyecto y configura las variables de entorno que necesite la aplicación (por ejemplo, URLs de APIs, claves secretas, etc.).

### 4. Ejecutar en modo de desarrollo

Para iniciar la aplicación en modo de desarrollo, utiliza el siguiente comando:

`npm run dev`

Esto levantará la aplicación en `http://localhost:3000/`.

### 5. Generar la versión de producción

Para generar los archivos estáticos de producción, ejecuta:

`npm run build`

Los archivos generados se almacenarán en la carpeta dist/, listos para ser desplegados en un servidor.

## Uso de Docker Compose

Si prefieres usar Docker Compose para ejecutar la aplicación, sigue estos pasos:

### 1. Crear el archivo docker-compose.yml

Asegúrate de que el archivo docker-compose.yml está presente en el proyecto.

### 2. Levantar los contenedores

Para construir la imagen y levantar los contenedores, simplemente usa el siguiente comando:
`docker-compose up --build`

Esto descargará las dependencias, construirá la aplicación y expondrá el servicio en `http://localhost:3000/`

### 3. Detener los contenedores

Para detener los contenedores, utiliza:
`docker-compose down`

### 4. Volver a ejecutar sin reconstruir

Si ya construiste los contenedores previamente, puedes levantarlos de nuevo sin reconstruir la imagen:
`docker-compose up`

## Scripts de NPM

Puedes utilizar los siguientes comandos para desarrollar o construir la aplicación fuera de Docker:

`npm run dev`: Ejecuta la aplicación en modo desarrollo.
`npm run build`: Construye la aplicación optimizada para producción.
`npm run start`: Sirve la aplicación construida.

## Dependencias

El proyecto utiliza las siguientes dependencias clave:

- React 18.2.0
- TypeScript 5.2.2
- Vite 5.2.0
- Axios 1.7.7
- Bootstrap 5.3.3

Las dependencias de desarrollo incluyen ESLint y Vite para facilitar el desarrollo y la construcción.

## Dockerfile

El proyecto incluye un Dockerfile que define el proceso de construcción para un entorno Dockerizado. A continuación, se muestra un resumen del proceso:

1. Se utiliza una imagen base de Node.js.
2. Se copian los archivos del proyecto al contenedor.
3. Se instalan las dependencias.
4. Se ejecuta el comando de build para producción.
5. Se expone el puerto 3000 para servir la aplicación.

## Estilo y Linting

El proyecto está configurado con ESLint para garantizar la calidad del código. Puedes ejecutar el siguiente comando para comprobar si hay errores de linting:
`npm run lint`

## Despliegue

Para desplegar la aplicación en un entorno de producción, sigue estos pasos:

1. Genera la versión de producción ejecutando npm run build.
2. Sube el contenido de la carpeta dist/ a tu servidor web o plataforma de hosting de tu elección.
