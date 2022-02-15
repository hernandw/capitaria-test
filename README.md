# capitaria-test

### Modelo de Datos:

El proyecto se realizó en Node con una base de Datos en Postgres alojada en Heroku.

Se utilizaron las siguientes dependencias de NPM

- Para iniciar el proyecto e instalar todas las dependencias se debe ejecutar

```
npm install
```

Se utilizaron

- Sequelize: ORM para manejar las bases de datos

- Dotenv: en una libreria que nos permite guardar las contraseñas y configuracion del servidor para evitar conpartirlas en el proyecto.

- pg y pg-hstore: para manejar el motor de postgress con node

- Express: para montar un servidor

- Nodemon: para ejecutar los cambios en vivo del servidor


Se trabajó bajo el modelo MVC, creando un carpeta para los modelos o tablas.

Carpeta Controller: Para manejar las peticiones y actuar de intermediario entre la vista y el modelo

Vistas: se utilizó el motor de plantilla EJS para visaulizar el calendario

```
npm i ejs
```
y la ruta para ver el caldendar

```
http://localhost:3000/calendar
```

Carpeta Routes: Se trabajó con una ruta para cada modelo.


Carpeta Consultas SQL:

Alli se guardaron las consultas solicitadas de la base de datos.

Todo los archivos se subieron a git:
https://github.com/hernandw/capitaria-test

y a heroku, pero falta completar las vistas.

### agenda semanal: 

Entiendo que hay que realizar una function que cargue las horas en el dia y hora correspondiente. Se cargó la agenda semanal. Investigo como generar la función en los dias correspondientes.

### POSTMAN:

se agregó un archivo de texto con las rutas de test en postman

### Base de Datos

Se agregó el sql de la base de datos a la carpeta basededatos

