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

Vistas: No se realizaron, pero pensaba hacerlas en HBS (Express-Handlebars)


Carpeta Routes: Se trabajó con una ruta para cada modelo.


Carpeta Consultas SQL:

Alli se guardaron las consultas solicitadas de la base de datos.

Todo los archivos se subieron a git:
https://github.com/hernandw/capitaria-test

y a heroku, pero falta completar las vistas.

### agenda semanal: no la completé aunque tengo idea de como ñlamar al json y ppr el dom enviarlo al html con sin tablas. No pude completar lo de las horas. Entiendo que una solución es transformar las horas a valores numéricos. Y con ccs grid poder asignar ese valor numérico como start.

### se agregó un archivo de texto con las rutas de test en postman

