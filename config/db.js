const mysql = require("mysql2"); 
//2- Configuracion de conexion
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "user",
    port:3306
});
connection.connect((err) => {
    // Si existe un error en la conexion manejamos el error con un ifç
    if (err) {
        console.error("Error de conexion "+err);
        return;
    };
    // Si todo va bien
    console.log('Estado de la conexion: CONECTADA');
    
    // Creamos una consulta verificando la base de datos y si no existe la creamos 
    const sqlCreatedb = 'CREATE DATABASE IF NOT EXISTS suscripciones_db';
    
    // Pasamos la consulta a la bbdd
    connection.query(sqlCreatedb,(err,result) => {
        // Manejo de errores
        if (err) {
            console.error("Error de conexion "+err);
            return;
        };
        
        // exito
        console.log('Base de datos: CREADA/EXISTENTE/GARANTIZADA');
        
        // Creamos la tabla si no existe
        connection.changeUser({database:"suscripciones_db"},(err) => {
            if (err) {
                console.error("Error de conexion "+err);
                return;
            };
            // exito
            // Consulta SQL para crear una tabla
            const createTableQuery = `
            CREATE TABLE IF NOT EXISTS suscripciones_db.Usuarios (
                id_usuario INT AUTO_INCREMENT PRIMARY KEY,
                nombre VARCHAR(30) NOT NULL,
                apellido VARCHAR(40) NOT NULL,
                email VARCHAR(45) NOT NULL,
                password VARCHAR(32) NOT NULL,
                num_tarjeta INT(16));
                `;
                // pasamos la consulta 
                connection.query(createTableQuery,(err,result) => {
                    // Manejo de errores
                    if (err) {
                        console.error("Error de conexion1 "+err);
                        return;
                    };
                    // exito
                    console.log("tabla_1: CREADA/EXISTENTE/GARANTIZADA");
                });
            const createTable2Query=`CREATE TABLE IF NOT EXISTS Categoria (
                id_categoria INT NOT NULL AUTO_INCREMENT,
                nombre VARCHAR(10) NOT NULL,
                PRIMARY KEY (id_categoria));
                `;
                connection.query(createTable2Query,(err,result) => {
                    // Manejo de errores
                    if (err) {
                        console.error("Error de conexion "+err);
                        return;
                    };
                    // exito
                    console.log("tabla_2: CREADA/EXISTENTE/GARANTIZADA");
                });
            const createTable3Query= `CREATE TABLE IF NOT EXISTS Pago (
                idPago INT NOT NULL AUTO_INCREMENT,
                fecha_inicio DATE NOT NULL,
                fecha_final DATE NOT NULL,
                PRIMARY KEY (idPago, Usuarios_id_usuario));
                `;
                connection.query(createTable3Query,(err,result) => {
                    // Manejo de errores
                    if (err) {
                        console.error("Error de conexion "+err);
                        return;
                    };
                    // exito
                    console.log("tabla_3: CREADA/EXISTENTE/GARANTIZADA");
                });
            const createTable4Query=`CREATE TABLE IF NOT EXISTS suscripciones_db.Pago (
                id_categoria INT NOT NULL AUTO_INCREMENT,
                nombre VARCHAR(10) NOT NULL,
                PRIMARY KEY (id_categoria));
                `;
                connection.query(createTable4Query,(err,result) => {
                    // Manejo de errores
                    if (err) {
                        console.error("Error de conexion "+err);
                        return;
                    };
                    // exito
                    console.log("tabla_4: CREADA/EXISTENTE/GARANTIZADA");
                });
            });
        });
    });
    
    
    module.exports = connection;