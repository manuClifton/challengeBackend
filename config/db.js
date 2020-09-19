const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('yIqnDOgEHZ', 'yIqnDOgEHZ', 'ZYdogI8vaX', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

//Conectarse a la base de datos
const conectarDB = async () =>{
    try {
       await sequelize.sync({ force:false })
        console.log("DB Conectada");
    }
     catch (error) {
        console.log("ERROR al conectarse a DB",error );
    }
}

module.exports = {sequelize, conectarDB };