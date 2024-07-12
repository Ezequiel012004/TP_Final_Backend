const db = require('../config/db');

//2- Método para obtener todos los usuarios
const getAllUser = (req, res) => {
    // Creamos una consulta
    const sql = 'SELECT * FROM suscripciones_db.usuarios';

    // Utilizamos .query para enviar la consulra a la bbdd
    // Primer parametro la consulta, segundo una función callback
    db.query(sql, (err, results) => {
        //si sucede algun error
        if (err) {console.log(err); return;} 
        //enviamos el resultado en formato json
        res.json(results);
    });
};
const getUserById = (req, res) => {

    const { id_usuario } = req.params;

    // Creamos la consulta con marcador de posición
    const sql = 'SELECT * FROM suscripciones_db.usuarios WHERE id_usuario = ?';

    db.query(sql, [id_usuario], (err, result) => {
    
        if (err) {console.log(err); return;} 
     
        res.json(result);
    });
};

//4- Método para crear un usuario
const createUser = (req, res) => {

    const { nombre,apellido,email,password,num_tarjeta } = req.body;

    const sql = 'INSERT INTO suscripciones_db.usuarios (nombre,apellido,email,password,num_tarjeta) VALUES (?, ?, ?, ?, ?)';
    
    db.query(sql, [nombre,apellido,email,password,num_tarjeta], (err, result) => {
       
        if (err)  {console.log(err); return;} 
       
        res.json({ message: 'Usuario creado', userId: result.insertId });
    });
};


//5- Método para modificar usuario
const updateUser = (req,res) => {
    // Desestruturamos la peticion
    // const id = req.params.id Lo mismo que abajo
    const {id_usuario} = req.params;    // Con las llaves a la izquierda puedo manipular el cuerpo del objeto
    const { nombre,apellido,email,password,num_tarjeta } = req.body;

    // Consulta SQL con marcadores de posicion
    const sql = 'UPDATE suscripciones_db.usuarios SET nombre = ?,apellido = ?,email = ?,password = ?, num_tarjeta = ? WHERE id_usuario = ?';

    // Pasamos la consulta
    db.query(sql, [nombre,apellido,email,password,num_tarjeta,id_usuario], (err, result) => {
        //en caso de error
        if (err)  {console.log(err); return;} 
        //enviamos mensaje de exito con info de la peli
        res.json({ message: 'Usuario actualizado'});
    });
};

//6- Método para borrar una película(COMPLETAR)
const deleteUser = (req,res) => {
    const {id_usuario} = req.params;    // Con las llaves a la izquierda puedo manipular el cuerpo del objeto

    // Consulta SQL con marcadores de posicion
    const sql = 'DELETE FROM suscripciones_db.usuarios WHERE id_usuario = ?';

    // Pasamos la consulta
    db.query(sql, [id_usuario], (err, result) => {
        //en caso de error
        if (err)  {console.log(err); return;} 
        //enviamos mensaje de exito con info de la peli
        res.json({ message: 'Usuario borrado con exito'});
    });
};

//7- Exportamos los módulos que serán utilizados en usuariosRouter.js
module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};