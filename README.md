# coxti.test-app

Aplicación para la prueba de coxti.

## Acerca del proyecto

Para el desarrollo de la aplicación elegí el framework `express.js` de `node.js` para el backend ya que es el que manejo. Para las bases de datos elegí mysql y para el frotend, Angular 12.

### Dependencias

- express.js
- bcrypt
- cors
- mysql2
- sequelize

## Comenzando

Siga las siguientes insrucciones para correr la aplicación.

### Requisitos previos

- git
- node.js v12.18.2
- npm v7.16.0
- ng v12.0.3

### Instalación

**1) Clone este repositorio:** Desde su terminal de comandos, ejecute el siguiente código.

	git clone https://github.com/alexsc6955/coxti-test-app

**2) Ingrese al directorio de la aplicación:**

	cd coxti-test-app

**3) Instale las dependencias:**

	npm install

### Uso

Desde el directorio base de la aplicación, ejecute el siguiente código:

	npm run dev

En otra pestaña/ventana del terminal de comandos, ingrese al directorio `coxti-test-frontend` y utilice el CLI de Angular para servir la aplicación

	cd coxti-test-app/coxti-test-frontend
	ng serve --port 8081

***Nota:** Es importante servir la aplicación del frontend en el puerto 8081 ya que es el que está permitido por `cors` en el backend*
