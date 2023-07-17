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


var conexion = new Sequelize(db, usuario, password, {
    host:host,
    port:port,
    dialect: 'mysql',
    dialectOptions:{
        ssl:{
            sslmode: "require",
            rejectUnauthorized:false
        }
    }
});

conexion.sync({force:false})
.then(() => {
    console.log("Exito conectado a la base de datos :)");
  })
  .catch((err) => {
    console.log("Error al conectar a la base de datos :(  " + err);
    });
    conexion.sync({ force: false }) 
    .then(()=>{
      console.log("Existo estas en localhost");
    })
    .catch((err)=>{
      console.log("Error en localhost: " + err);
    });
var Usuario = UsuarioModelo(conexion); 

module.exports={
    Usuario:Usuario
}
