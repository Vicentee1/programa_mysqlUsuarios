var Sequelize = require("sequelize");
var UsuarioModelo= require("./modelos/usuarios");
require("dotenv").config();

/*
var db = process.env.DB_MYSQL || process.env.DB_LOCAL;
var usuario = process.env.USER_MYSQL || process.env.USER_LOCAL;
var password = process.env.PASSWORD_MYSQL || process.env.PASSWORD_LOCAL;
var host = process.env.HOST_MYSQL || process.env.HOST_LOCAL;
var port = process.env.PORT_MYSQL || process.env.PORT_LOCAL;
*/
var db =  process.env.DB_MYSQL_LOCAL;
var usuario =  process.env.USUARIO_MYSQL_LOCAL;
var password =  process.env.PASSWORD_MYSQL_LOCAL;
var host = process.env.HOST_MYSQL_LOCAL;
var port =  process.env.PORT_MYSQL_LOCAL;

var conexion = new Sequelize(db, usuario, password, {
    host:host,
    port:port,
    dialect: 'mysql' //si se usara xampp, se pondra 'mariadb'
});


var Usuario = UsuarioModelo(conexion);

conexion.sync({force:false})
.then(()=>{
    console.log("Conectado a MYSQL");
})
.catch((err)=>{
    console.log("Error al conectarse con MYSQL de planetScale"+err);
    console.log("Intentar una conexión local");
    db = process.env.DB_MYSQL || process.env.DB_LOCAL;
    usuario = process.env.USER_MYSQL || process.env.USER_LOCAL;
    host = process.env.HOST_MYSQL || process.env.HOST_LOCAL;
    port = process.env.PORT_MYSQL || process.env.PORT_LOCAL;
    conexion = new Sequelize(db, usuario, passoword),{
        host: host,
        port: port,
        dialect: 'mysql'
    }
});
conexion.sync({force: false})
.then(()=>{
     console.log("Error al conectarse a mysql local");

})
.catch((err)=>{
    console.log("error al conectarse a mysql local");
})
module.exports={
    Usuario:Usuario
}