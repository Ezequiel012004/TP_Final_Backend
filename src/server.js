const express = require('express');

//2- Instanciamos express
const app = express();

//3- Importamos el módulo userRoutes (se lo diseñará a futuro)
const userRoutes = require('../routes/userRouter');

//4- Declaramos el puerto
const PORT = 3000; 

//5- Uso del middleware .json que convierte el cuerpo de solicitud
// en algo accesible por js
app.use(express.json());

//6- Prefijo principal de las rutas y delegación de las sub-rutas
app.use('/user', userRoutes);

//7- Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
