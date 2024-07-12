// 1- Importamos el módulo
const express = require("express");

// 2- Instanciamos Router de express
const router = express.Router();

// 3- Importamos el módulo propio userController (a realizarlo a futuro)
const userController = require('../controllers/userController');

// 4- En userController programaremos el módulo junto a métodos GET, POST, PUT, DELETE
// Dejaremos sólo la declaración de las rutas, con sus métodos 
// y el llamado al userController con el método específico para cada opción 

// Ruta de listado en general
router.get('/', userController.getAllUser);
//Ruta para la consulta de peliculas por id
router.get('/:id_usuario', userController.getUserById);
// //Ruta para crear una pelicula
router.post('/guardar', userController.createUser);
// //Ruta para actualizar una pelicula
router.put('/:id_usuario', userController.updateUser);
// //Ruta para borrar una pelicula
router.delete('/:id_usuario', userController.deleteUser);

//5- Exportamos el módulo
module.exports = router;