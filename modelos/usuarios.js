var  Sequelize = require("sequelize");

module.exports=(conexion)=>{
    const UsuarioSchema=conexion.define("usuario",{  //todos se ponen en singular el usuario por ejemplo
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre:{
            type:Sequelize.STRING
        },
        usuario:{
            type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        },
        status:{
            type:Sequelize.BOOLEAN,
            default:true
        }
    });
    return UsuarioSchema;
}