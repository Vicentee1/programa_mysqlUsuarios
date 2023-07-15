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
var db =  process.env.DB_MYSQL;
var usuario =  process.env.USUARIO_MYSQL;
var password =  process.env.PASSWORD_MYSQL;
var host = process.env.HOST_MYSQL;
var port =  process.env.PORT_MYSQL;

var conexion = new Sequelize(db, "cggz118nql8kmueuz1y0", password, {
    host:host,
    port:port,
    dialect: 'mysql',
    dialectOptions:{
        ssl:{
            rejectUnauthorized:false
        }
    }
});


var Usuario = UsuarioModelo(conexion);

conexion.sync({force:false})
.then(()=>{
    console.log("Conectado a MYSQL planetScale");
})
.catch((err)=>{
    console.log("error ............................................. ");
    console.log(err);
    console.log("error ............................................. ");
})

module.exports={
    Usuario:Usuario
}