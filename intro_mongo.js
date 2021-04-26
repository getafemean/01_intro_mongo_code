// Comandos básicos de la Shell de mongo

// show dbs mostrar las bases de datos del servidor

// use <nombre-base-datos> los nombres deben cumplir las restricción de JS

// db tenemos un objeto instancia de la base de datos

// db.createCollection("<nombre-colección>") Nombres de colección también cumplirán las restricciones de JS

// db.<nombre-colección>.insert(<objeto-JS-ó-JSON-registo>) Creación de documento (registros)

// Se puede crear una colección que no exista implícitamente con el método insert

// db para ver en que base de datos estamos trabajando

// show collections ver las colecciones de la base de datos

// Cada documento (registro) exige tener el campo único _id:

    // - Se lo podemos facilitar nosotros pero el valor debe ser único
    // - Si no se lo facilitamos Mongo lo crea automáticamente con un valor en formato ObjectID

// db.<coleccion>.update()

// db.<coleccion>.remove()

